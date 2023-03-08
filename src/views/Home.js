import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const Home = () => {
    const history = useNavigate();
    const [c,setc] = useState(0);
    const Cleanup = () =>{
      if(localStorage.getItem('userID')){
        axios.post('https://smalltalk-backend.onrender.com/cleanup',{userid: localStorage.getItem('userID')}).catch((e)=>{
        console.log(e);
      });

      }
    }
    const detectClose=()=>{
      window.addEventListener('beforeunload',Cleanup)
      return () => {
          window.removeEventListener('beforeunload', Cleanup)
      }
    }
    useEffect(()=>{
      getOnlineUsers();
      setInterval(detectClose,1000);
      Cleanup();
    })
    const getOnlineUsers=()=>{
      axios.get('https://smalltalk-backend.onrender.com/getOnlineUsers').
      then((data)=>{
        // console.log(data.data.data.length)
        setc(data.data.data.length);
      }).catch((e)=>{
        console.log(e);
      })
    }
    const createId = () =>{
        var userId = Math.floor(Math.random() * 10000);
        localStorage.setItem('userID',userId);
        axios.post('https://smalltalk-backend.onrender.com/chat',{userid: localStorage.getItem('userID')}).then((res)=>{
          // console.log(res);
        }).catch((e)=>{
          console.log(e);
        });
        history('/chat');
    }
  return (
    <div className='home-container' style={{backgroundColor:'ButtonShadow'}}>
    <div className='flex space-around w-full bg-primary ' style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
    <div className='text-light p-3 h3 bg-none'>Small Talk</div>
    </div>
    <div className='d-flex col align-items-center justify-content-center my-3' style={{display:'flex',flexDirection:"column",margin:'30px',backgroundColor: '#9efff2',borderRadius: '20px'}}>
    <span className='text-dark h1 justify-content-center m-3'>Get Connected with People All over the Globe</span>
    <button onClick={createId} className='text-light bg-warning rounded col-10 col-md-3 p-2 m-3 text-center' style={{border:'none',textDecoration:'none'}}>Start Chatting with Strangers</button>
    </div>
    <div className='d-flex align-items-center justify-content-center my-5 rounded' >
      <h1>Users online: <span style={{fontSize:'40px'}}>{c}</span></h1>
    </div>
    <hr></hr>
    <div className='d-flex col align-items-center justify-content-center my-3 px-4 pt-4 bg-light rounded' style={{flexDirection:'column'}}>
      <h1>Make you move and get connected!</h1>
      <img src='https://media.tenor.com/aKFaZBrZFYcAAAAC/excited-spin.gif' className='bg-home-img' />
    </div>
    </div>
  )
}

export default Home