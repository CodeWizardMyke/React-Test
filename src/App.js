import './App.css';

import HomePage from './components/HomePage'
import About from './components/About'
import Contact from './components/Contact'
import Error404 from './components/Error404'

import { Link ,Route, Routes } from 'react-router-dom';

/*
  README.
   Diferenças em desenvolvimento usando react das versões mais antigas,
  o component Switch foi subistituido pelo Routes, 
  e para a definição da rota de error devemos passar um parametro path="*"
  com este valor indicando que * servirá á qualquer rota mão configurada. 
*/

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
          <Route path='*' element={ <Error404/> } />
        </Routes>
    </div>
  );
}

export default App;