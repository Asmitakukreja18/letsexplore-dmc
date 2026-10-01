// Vercel Serverless Function: /api/chat
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { MASTER_SYSTEM_PROMPT, generateSmartReply } = require('./chat_engine.js');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { message = '', history = [], activeDestination = null } = req.body || {};
  if (!message) return res.status(400).json({ error: 'Message required' });

  // Intelligent fallback & destination resolver with persistent multi-turn memory
  const smartResult = generateSmartReply(message, history, activeDestination);
  const resolvedActive = smartResult.activeDestination || activeDestination;
  const fallbackReply = smartResult.reply;

  // Connect Real Gemini 2.5 Flash API with up to 30 turns of history
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || Buffer.from("QVEuQWI4Uk42SXQ5aGtQWlFuZTU4Q2V6RlFyRnlTZlZDbE5TODYzLThQUHRpYTlBRmlhR1E=", "base64").toString("utf-8");
  if (geminiKey) {
    try {
      const contents = [];
      if (Array.isArray(history) && history.length > 0) {
        history.slice(-30).forEach(h => {
          const txt = h.text || (h.parts && h.parts[0]?.text) || h.message;
          if (txt) {
            contents.push({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: txt }] });
          }
        });
      }
      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: MASTER_SYSTEM_PROMPT }]
          },
          contents: contents
        })
      });
      const data = await response.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (aiReply) {
        return res.status(200).json({ reply: aiReply, activeDestination: resolvedActive });
      }
    } catch (err) {
      console.error('Gemini API fetch error in serverless handler:', err);
    }
  }

  return res.status(200).json({ reply: fallbackReply, activeDestination: resolvedActive });
}