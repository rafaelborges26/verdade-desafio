import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route Component={Dashboard} path='/dashboard' />
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
