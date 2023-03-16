import './styles.css';
import { useEffect } from 'react';
import axios from 'axios';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Chat from './views/Chat';
import Home from './views/Home';
import BuildCom from './views/BuildCom';
import JoinCom from './views/Join Com';
import ComChat from './views/ComChat';

function App() {
  
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/build' element={<BuildCom/>} />
      <Route path='/comchat' element={<ComChat/>} />
      <Route path='/join' element={<JoinCom/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
