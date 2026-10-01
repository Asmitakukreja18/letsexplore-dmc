with open('ai-travel.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add script tag in head
head_tag = '<script src="js/nav.js" defer></script>'
if '<script src="chat_engine.js"></script>' not in html:
    html = html.replace(head_tag, head_tag + '\n<script src="chat_engine.js"></script>')
    print('Added chat_engine.js script tag to head.')

# 2. Update step 2 and step 3 in submitChat
old_fallback_block = """  // 2. Serverless /api/chat fallback with persistent memory
  if (!reply) {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: val,
          history: chatConversationHistory,
          activeDestination: activeAiDestination
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.reply) {
          reply = data.reply;
          if (data.activeDestination) {
            activeAiDestination = data.activeDestination;
            localStorage.setItem('letsexplore_active_dest', activeAiDestination);
          }
          chatConversationHistory.push({ role: 'model', parts: [{ text: reply }] });
          localStorage.setItem('letsexplore_ai_history', JSON.stringify(chatConversationHistory));
        }
      }
    } catch(err) {
      console.log('Serverless fallback unreachable');
    }
  }

  // 3. Client-Side Offline Fallback
  if (!reply) {
    reply = "🤖 **Atlas AI Concierge**: I'm here to assist you with your vacation! We offer direct DMC packages to Thailand (₹62,362 / ~$745 USD), Bali (₹39,014 / ~$464 USD), Georgia ($300 USD), Dubai (₹42,598), Singapore, Vietnam, Sri Lanka, Kerala, and Kashmir.\\n\\nTell me your preferred destination or budget!";
    chatConversationHistory.push({ role: 'model', parts: [{ text: reply }] });
    localStorage.setItem('letsexplore_ai_history', JSON.stringify(chatConversationHistory));
  }"""

new_fallback_block = """  // 2. Serverless / Localhost /api/chat fallback with persistent memory
  if (!reply) {
    try {
      let res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: val,
          history: chatConversationHistory,
          activeDestination: activeAiDestination
        })
      });
      if (!res.ok && window.location.origin !== 'http://localhost:3000') {
        res = await fetch('http://localhost:3000/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: val,
            history: chatConversationHistory,
            activeDestination: activeAiDestination
          })
        });
      }
      if (res.ok) {
        const data = await res.json();
        if (data && data.reply) {
          reply = data.reply;
          if (data.activeDestination) {
            activeAiDestination = data.activeDestination;
            localStorage.setItem('letsexplore_active_dest', activeAiDestination);
          }
          chatConversationHistory.push({ role: 'model', parts: [{ text: reply }] });
          localStorage.setItem('letsexplore_ai_history', JSON.stringify(chatConversationHistory));
        }
      }
    } catch(err) {
      console.log('Serverless / localhost unreachable, falling back to local chat engine');
    }
  }

  // 3. Client-Side High-Intelligence Engine Fallback
  if (!reply) {
    if (typeof window.generateSmartReply === 'function') {
      const smart = window.generateSmartReply(val, chatConversationHistory, activeAiDestination);
      reply = smart.reply;
      if (smart.activeDestination) {
        activeAiDestination = smart.activeDestination;
        localStorage.setItem('letsexplore_active_dest', activeAiDestination);
      }
    } else {
      reply = "Hey there! 👋 I can help you plan your dream vacation. We have 22 verified direct DMC packages with locked wholesale rates across Thailand, Bali, Dubai, Georgia $300, Singapore, Vietnam, Sri Lanka, Kashmir, and Kerala.\\n\\nTell me where you want to travel, your dates, or your budget!";
    }
    chatConversationHistory.push({ role: 'model', parts: [{ text: reply }] });
    localStorage.setItem('letsexplore_ai_history', JSON.stringify(chatConversationHistory));
  }

  // Strip any accidental robotic prefix
  if (reply) {
    reply = reply.replace(/^(🤖\\s*)?(\\*{1,2})?Atlas AI Concierge(\\*{1,2})?:?\\s*/i, '');
  }"""

if old_fallback_block in html:
    html = html.replace(old_fallback_block, new_fallback_block)
    print('Replaced fallback block in ai-travel.html successfully!')
else:
    print('Searching without exact whitespace...')
    idx1 = html.find('// 2. Serverless /api/chat fallback with persistent memory')
    idx2 = html.find('setTimeout(() => {', idx1)
    if idx1 != -1 and idx2 != -1:
        html = html[:idx1] + new_fallback_block + '\n\n  ' + html[idx2:]
        print('Replaced via slice markers successfully!')

with open('ai-travel.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('Finished updating ai-travel.html.')
