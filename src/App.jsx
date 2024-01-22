import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import DashboardPage from './pages/Dashboard/DashboardPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
