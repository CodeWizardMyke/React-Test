import './App.css';

import HomePage from './components/HomePage'
import About from './components/About'
import Contact from './components/Contact'

import { Link ,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <nav className='menu'>
          <Link to={'/'} >Home</Link>
          <Link to={'/about'} >About</Link>
          <Link to={'/contact'} >Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={< HomePage/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/contact" element={ <Contact/> }/>
        </Routes>
    </div>
  );
}

export default App;