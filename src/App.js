import './styles.css';
import { useEffect } from 'react';
import axios from 'axios';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Chat from './views/Chat';
import Home from './views/Home';
function App() {
  const Cleanup = () =>{
    axios.post('https://smalltalk-backend.onrender.com/cleanup',{userid: localStorage.getItem('userID')}).catch((e)=>{
      console.log(e);
    })
  }
  const detectClose=()=>{
    window.addEventListener('beforeunload',Cleanup)
    return () => {
        window.removeEventListener('beforeunload', Cleanup)
    }
  }
  useEffect(() => {
   setInterval(detectClose,1000);
})
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
