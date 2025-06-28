import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';


export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi there! I’m MathSciLAB Bot. Ask me anything about Math, Science, or study-related topics!' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      const botReply = { sender: 'bot', text: data.reply || 'Hmm... I didn’t quite catch that. Can you try again?' };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: '⚠️ Server error. Please try again later.' }]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        <div className="chatbot-header">📚 MathSciLAB</div>

        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-message ${msg.sender}`}>
              <span>{msg.text}</span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about algebra, physics, or any subject..."
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
          <button onClick={() => setMessages([
            { sender: 'bot', text: '👋 Hi there! I’m MathSciLAB. Ask me anything about Math, Science, or study-related topics!' }
          ])}>Clear</button>
        </div>
      </div>
     
    </div>
  );
}
