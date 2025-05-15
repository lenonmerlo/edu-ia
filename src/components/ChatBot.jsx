import { useState } from 'react';

function ChatBot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, from: 'user' }]);
    setInput('');
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="border rounded p-4 h-64 overflow-y-auto bg-white shadow">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">{msg.text}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-4 py-2"
          placeholder="Digite sua pergunta..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
