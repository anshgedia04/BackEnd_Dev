import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CreateEmp from './Pages/CreateEmp';

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-700 to-purple-500 min-h-screen text-white font-sans">
      <header className="p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center uppercase tracking-wide">
          Employee Dashboard
        </h1>
      </header>
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createEmp" element={<CreateEmp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
