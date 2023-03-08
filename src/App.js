import './styles.css';
import { useEffect } from 'react';
import axios from 'axios';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Chat from './views/Chat';
import Home from './views/Home';
function App() {
  
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
