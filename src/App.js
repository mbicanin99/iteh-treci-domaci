import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './components/Pocetna'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Pocetna />} />
          <Route />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
