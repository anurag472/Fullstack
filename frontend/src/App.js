import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login setLoggedIn={setLoggedIn} setRole={setRole} />} />
          <Route path="/home" element={<Home loggedIn={loggedIn} role={role}/>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
