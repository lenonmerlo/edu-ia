import Welcome from './components/Welcome'
import ChatBot from './components/ChatBot'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Welcome />
      <ChatBot />
    </div>
  )
}

export default App