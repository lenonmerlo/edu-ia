import { useState } from 'react';

function ChatBot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, from: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simula uma resposta do bot após 1 segundo
    setTimeout(() => {
      const botMessage = {
        text: gerarRespostaSimulada(input),
        from: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  }

  function gerarRespostaSimulada(pergunta) {
    // Aqui você pode melhorar a resposta conforme a pergunta
    if (pergunta.toLowerCase().includes('matemática')) {
      return 'Matemática é essencial! Qual conteúdo você quer ajuda? 📘';
    } else if (pergunta.toLowerCase().includes('oi') || pergunta.toLowerCase().includes('olá')) {
      return 'Olá! Como posso te ajudar hoje? 🤖';
    }
    return 'Entendi! Vou analisar isso pra você...';
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="border rounded p-4 h-64 overflow-y-auto bg-white shadow">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-1 rounded-lg ${msg.from === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </span>
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
