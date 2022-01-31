import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './components/Pocetna'
import Kontakt from './components/Konakt'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Pocetna />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
