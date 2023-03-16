import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../components/TopBar'
import MessageBox from '../components/MessageBox';
import TypeBox from '../components/TypeBox';

const ComChat = () => {
  const [connected,setConnected] = useState(false);
  // const history = useNavigate();
  useEffect(() => {
    
  }, []);
  return (
    <section>
    <TopBar community={localStorage.getItem('user')} />
    <div className='container'> 
    <MessageBox />
    </div>
    <TypeBox />
</section>
  )
}
export default ComChat