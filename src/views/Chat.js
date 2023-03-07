import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../components/TopBar'
import MessageBox from '../components/MessageBox';
import TypeBox from '../components/TypeBox';

const Chat = () => {
  const [connected,setConnected] = useState(false);
  // const history = useNavigate();
  const connectStranger = (userid) =>{
    // console.log('connecting')
    localStorage.setItem('connected',connected);
    axios.post('https://smalltalk-backend.onrender.com/connectStranger',{userid: userid}).then((res)=>{
      console.log(res.data);
      if(res.data){
        localStorage.setItem('strangerID',res.data.userid);
        console.log("strangerid: "+localStorage.getItem('strangerID'));
        setConnected(true);
        localStorage.setItem('connected',connected);
      }else if(!localStorage.getItem('connected')){
        setConnected(false);
      }else{
        connectStranger(localStorage.getItem('userID'));
        checkConnection();
      }
    }).catch((e)=>{
      console.log(e);
    })
  }
  const checkConnection=()=>{
    if(!localStorage.getItem('connected')){
      console.log("hiii");
      axios.post('https://smalltalk-backend.onrender.com/checkConnection',{userid: localStorage.getItem('userid')}).then((res)=>{
      console.log(res);
      if(res){
        // console.log("user available");
      }
    }).catch((e)=>{
      console.log(e);
    })
    }   
  }
  useEffect(() => {
    // localStorage.setItem('connected',false)
   setInterval(connectStranger(localStorage.getItem('userID')),0);
  //  setInterval(checkConnection,0);
  }, []);
  return (
    <section>
    <TopBar />
    <div className='container'> 
    {connected? (<MessageBox />): (<div className='justify-content-center mt-5'>
      <h3>Searching for Strangers to connect...</h3>
    </div>)}
    </div>
    
    
    <TypeBox />
</section>
  )
}
export default Chat