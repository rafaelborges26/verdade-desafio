import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Dashboard />} />
        {/* Outras páginas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;