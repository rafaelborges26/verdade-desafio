import './App.css'
import { Router, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'
import { router } from './routes'
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
