import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/organisms/Menu';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
