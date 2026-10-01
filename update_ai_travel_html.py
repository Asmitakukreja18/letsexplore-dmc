import json

with open('master_knowledge_prompt.txt', 'r', encoding='utf-8') as f:
    master_vouchers = f.read()

with open('ai-travel.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update the chat header to add "New Chat" button
old_header = """    <div class="flex items-center gap-3 pb-4 border-b border-navy/10 mb-6">
      <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-sunset to-ocean text-white font-bold flex items-center justify-center text-xl shadow">🤖</div>
      <div>
        <h4 class="font-display font-bold text-navy-deep text-lg">Gemini AI Travel Concierge</h4>
        <p class="text-fog text-xs">Real-time answers for Georgia $300, Turkey, Bali, customized itineraries &amp; visa guidance.</p>
      </div>
    </div>"""

new_header = """    <div class="flex items-center justify-between pb-4 border-b border-navy/10 mb-6">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-sunset to-ocean text-white font-bold flex items-center justify-center text-xl shadow">🤖</div>
        <div>
          <h4 class="font-display font-bold text-navy-deep text-lg">Gemini AI Travel Concierge</h4>
          <p class="text-fog text-xs">Real-time answers for Thailand, Bali, Dubai, Singapore, Vietnam, Georgia $300, Turkey &amp; 22 official vouchers.</p>
        </div>
      </div>
      <button onclick="clearChatHistory()" title="Reset Conversation Memory" class="text-xs text-navy-deep/70 hover:text-red-600 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 hover:bg-white border border-navy/10 shadow-sm transition cursor-pointer font-semibold">
        <span class="material-symbols-outlined text-sm">restart_alt</span>
        <span class="hidden sm:inline">New Chat</span>
      </button>
    </div>"""

if old_header in html:
    html = html.replace(old_header, new_header)
    print("Updated chat header with New Chat button.")
else:
    print("Warning: old_header not found, skipping header replace.")

# 2. Update JavaScript chat logic
start_js_marker = "// Chat Functionality with Multi-Turn Memory"
end_js_marker = "</script>"

idx_start = html.find(start_js_marker)
idx_end = html.rfind(end_js_marker)

if idx_start != -1 and idx_end != -1:
    escaped_vouchers = master_vouchers.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')
    
    new_script = f"""// Chat Functionality with Persistent Multi-Turn Memory
let chatConversationHistory = [];
let activeAiDestination = null;

try {{
  const savedHist = localStorage.getItem('letsexplore_ai_history');
  if (savedHist) {{
    chatConversationHistory = JSON.parse(savedHist);
  }}
  activeAiDestination = localStorage.getItem('letsexplore_active_dest') || null;
}} catch(e) {{}}

function formatChatMarkdown(text) {{
  return (text || '')
    .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\[([^\\]]+)\\]\\((https?:\\/\\/[^\\s\\)]+)\\)/g, '<a href="$2" target="_blank" style="display:inline-block; margin-top:6px; padding:6px 14px; background:#25D366; color:#ffffff; border-radius:10px; font-weight:700; font-size:12px; text-decoration:none;">$1</a>')
    .replace(/\\n\\n+/g, '<div style="height:6px;"></div>')
    .replace(/\\n/g, '<br/>');
}}

function renderSavedChat() {{
  const box = document.getElementById('chat-box');
  if (!box || chatConversationHistory.length === 0) return;

  let html = `
    <div class="flex items-start gap-3 mb-4">
      <div class="w-8 h-8 rounded-full bg-ocean text-white font-bold text-xs flex items-center justify-center shrink-0">🤖</div>
      <div class="bg-mist text-navy-deep rounded-2xl rounded-tl-none p-4 max-w-md leading-relaxed border border-navy/5 shadow-sm text-sm">
        Hey there! 👋 I am your Gemini AI Travel Concierge. Tell me where you wish to explore or your budget, and I'll craft a bespoke travel proposal for you instantly!
      </div>
    </div>
  `;

  chatConversationHistory.forEach(item => {{
    const text = item.text || (item.parts && item.parts[0]?.text) || '';
    if (!text) return;
    if (item.role === 'user') {{
      html += `
        <div class="flex items-start justify-end gap-3 mb-4">
          <div class="bg-ocean text-white rounded-2xl rounded-tr-none p-3.5 max-w-md shadow font-medium text-sm">
            ${{text}}
          </div>
          <div class="w-8 h-8 rounded-full bg-ocean text-white font-bold text-xs flex items-center justify-center shrink-0">👤</div>
        </div>
      `;
    }} else {{
      const formatted = formatChatMarkdown(text);
      html += `
        <div class="flex items-start gap-3 mb-3.5">
          <div class="w-8 h-8 rounded-full bg-ocean text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">🤖</div>
          <div class="bg-mist text-navy-deep rounded-2xl rounded-tl-none p-3.5 max-w-2xl leading-relaxed text-sm border border-navy/5 shadow-sm">
            ${{formatted}}
          </div>
        </div>
      `;
    }}
  }});

  box.innerHTML = html;
  box.scrollTop = box.scrollHeight;
}}

function clearChatHistory() {{
  chatConversationHistory = [];
  activeAiDestination = null;
  localStorage.removeItem('letsexplore_ai_history');
  localStorage.removeItem('letsexplore_active_dest');
  const box = document.getElementById('chat-box');
  if (box) {{
    box.innerHTML = `
      <div class="flex items-start gap-3 mb-4">
        <div class="w-8 h-8 rounded-full bg-ocean text-white font-bold text-xs flex items-center justify-center shrink-0">🤖</div>
        <div class="bg-mist text-navy-deep rounded-2xl rounded-tl-none p-4 max-w-md leading-relaxed border border-navy/5 shadow-sm text-sm">
          Hey there! 👋 I am your Gemini AI Travel Concierge. Tell me where you wish to explore or your budget, and I'll craft a bespoke travel proposal for you instantly!
        </div>
      </div>
    `;
  }}
}}

// Call renderSavedChat once DOM is ready or when tab switched
document.addEventListener('DOMContentLoaded', () => {{
  renderSavedChat();
}});

async function submitChat(e) {{
  e.preventDefault();
  const input = document.getElementById('chat-input-text');
  const val = input.value.trim();
  if(!val) return;

  const box = document.getElementById('chat-box');
  box.innerHTML += `
    <div class="flex items-start justify-end gap-3 mb-4">
      <div class="bg-ocean text-white rounded-2xl rounded-tr-none p-3.5 max-w-md shadow font-medium text-sm">
        ${{val}}
      </div>
      <div class="w-8 h-8 rounded-full bg-ocean text-white font-bold text-xs flex items-center justify-center shrink-0">👤</div>
    </div>
  `;
  input.value = '';
  box.scrollTop = box.scrollHeight;

  const typingId = 'typing-' + Date.now();
  box.innerHTML += `
    <div id="${{typingId}}" class="flex items-start gap-3 mb-4">
      <div class="w-8 h-8 rounded-full bg-ocean text-white font-bold text-xs flex items-center justify-center shrink-0">🤖</div>
      <div class="bg-mist text-navy-deep/60 italic rounded-2xl rounded-tl-none p-3 max-w-xs text-xs flex items-center gap-2">
        <span class="material-symbols-outlined text-sm animate-spin">progress_activity</span> Gemini AI is thinking…
      </div>
    </div>
  `;
  box.scrollTop = box.scrollHeight;

  // Append new user message to conversation history
  chatConversationHistory.push({{ role: 'user', parts: [{{ text: val }}] }});
  if (chatConversationHistory.length > 60) {{
    chatConversationHistory = chatConversationHistory.slice(-60);
  }}
  localStorage.setItem('letsexplore_ai_history', JSON.stringify(chatConversationHistory));

  let reply = '';
  const directKey = atob("QVEuQWI4Uk42SXQ5aGtQWlFuZTU4Q2V6RlFyRnlTZlZDbE5TODYzLThQUHRpYTlBRmlhR1E=");
  const systemPrompt = `You are Atlas, the elite Luxury Travel Concierge & Architect at Let's Explore DMC (Amravati, Maharashtra).

CRITICAL TARGETED ANSWER & COMPACT SPACING RULE:
1. JITNA PUCHA UTNA HI EXACT ANSWER DO (ANSWER ONLY WHAT IS SPECIFICALLY ASKED):
   - If the user asks for "price", "amount", "cost": Answer ONLY the exact price breakdown (INR primary, USD equivalent, total group amount, land package option). DO NOT dump the full itinerary, flights, or policies unless requested!
   - If the user asks for "inclusions and exclusions": Provide ONLY the clear itemized Inclusions and Exclusions.
   - If the user asks for "hotels": Provide ONLY the hotels, room categories, meal plans, and nights.
   - If the user asks for "itinerary": Provide ONLY the day-wise schedule.
   - If the user asks for "flights": Provide ONLY the flight schedule.
   - ONLY when the user asks for "full package", "poora details", "complete voucher", or "overview" should you present the multi-section breakdown.
2. COMPACT FORMATTING & ZERO EXTRA SPACING:
   - Keep answers compact, clean, and elegant.
   - DO NOT leave excessive blank lines, large vertical gaps, or repetitive filler text.
   - Use clean, tight bullet points.

CRITICAL PERSISTENT MEMORY & MULTI-TURN CONTINUITY:
- You MUST maintain strict continuity across the ENTIRE conversation history (up to 30 turns).
- If a destination was discussed in any previous message (e.g. Malaysia with Bali, Thailand, Bali, Singapore, Vietnam, Dubai, Georgia, Turkey, Kashmir, Kerala, Sri Lanka, Hong Kong, Canton Fair, Ujjain) and the user asks follow-up questions:
  * "place we will visit?" / "places to see" / "sightseeing" / "kya dekhenge"
  * "pricing?" / "price btao" / "kitna hoga" / "cost"
  * "itenrary" / "itinerary" / "schedule"
  * "hotels?" / "hotel kon sa hai" / "resort"
  * "inclusions exclusions" / "kya include hai"
  YOU ALREADY KNOW THE DESTINATION! NEVER ask "Please specify which package you are interested in". ALWAYS answer immediately for the active destination from the conversation context!

CRITICAL CURRENCY & RATES DISPLAY:
- Always show INR prominently as the primary rate, along with USD equivalent alongside:
  e.g. "INR 62,362 (~$745 USD) per adult".
- For foreign promotional deals (like Georgia $300): show "$300 USD (~₹28,999 INR)".

CRITICAL LANGUAGE RULE (STRICT):
- If user writes in English, reply 100% in English only. Never use Devanagari Hindi.
- If user writes in Hinglish (Roman script Hindi), reply in clear, friendly Hinglish / Latin script. NEVER use Devanagari Hindi.

============================================================
{escaped_vouchers}
============================================================`;

  // 1. Direct Google Gemini 2.5 Flash Call with full multi-turn history
  try {{
    const gRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${{directKey}}`, {{
      method: 'POST',
      headers: {{ 'Content-Type': 'application/json' }},
      body: JSON.stringify({{
        systemInstruction: {{ parts: [{{ text: systemPrompt }}] }},
        contents: chatConversationHistory
      }})
    }});
    if (gRes.ok) {{
      const gData = await gRes.json();
      const genText = gData?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (genText) {{
        reply = genText;
        chatConversationHistory.push({{ role: 'model', parts: [{{ text: reply }}] }});
        localStorage.setItem('letsexplore_ai_history', JSON.stringify(chatConversationHistory));
      }}
    }}
  }} catch(gErr) {{
    console.warn('Direct Gemini API call error:', gErr);
  }}

  // 2. Serverless /api/chat fallback with persistent memory
  if (!reply) {{
    try {{
      const res = await fetch('/api/chat', {{
        method: 'POST',
        headers: {{ 'Content-Type': 'application/json' }},
        body: JSON.stringify({{
          message: val,
          history: chatConversationHistory,
          activeDestination: activeAiDestination
        }})
      }});
      if (res.ok) {{
        const data = await res.json();
        if (data && data.reply) {{
          reply = data.reply;
          if (data.activeDestination) {{
            activeAiDestination = data.activeDestination;
            localStorage.setItem('letsexplore_active_dest', activeAiDestination);
          }}
          chatConversationHistory.push({{ role: 'model', parts: [{{ text: reply }}] }});
          localStorage.setItem('letsexplore_ai_history', JSON.stringify(chatConversationHistory));
        }}
      }}
    }} catch(err) {{
      console.log('Serverless fallback unreachable');
    }}
  }}

  // 3. Client-Side Offline Fallback
  if (!reply) {{
    reply = "🤖 **Atlas AI Concierge**: I'm here to assist you with your vacation! We offer direct DMC packages to Thailand (₹62,362 / ~$745 USD), Bali (₹39,014 / ~$464 USD), Georgia ($300 USD), Dubai (₹42,598), Singapore, Vietnam, Sri Lanka, Kerala, and Kashmir.\\n\\nTell me your preferred destination or budget!";
    chatConversationHistory.push({{ role: 'model', parts: [{{ text: reply }}] }});
    localStorage.setItem('letsexplore_ai_history', JSON.stringify(chatConversationHistory));
  }}

  setTimeout(() => {{
    document.getElementById(typingId)?.remove();
    const formatted = formatChatMarkdown(reply);

    box.innerHTML += `
      <div class="flex items-start gap-3 mb-3.5">
        <div class="w-8 h-8 rounded-full bg-ocean text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">🤖</div>
        <div class="bg-mist text-navy-deep rounded-2xl rounded-tl-none p-3.5 max-w-2xl leading-relaxed text-sm border border-navy/5 shadow-sm">
          ${{formatted}}
        </div>
      </div>
    `;
    box.scrollTop = box.scrollHeight;
  }}, 200);
}}
"""

    html = html[:idx_start] + new_script + "\n" + html[idx_end:]
    with open('ai-travel.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Updated ai-travel.html with persistent memory chat logic successfully!")
else:
    print(f"Error finding JS markers in ai-travel.html: {idx_start}, {idx_end}")
