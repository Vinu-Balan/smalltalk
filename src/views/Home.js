import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom';
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
      setInterval(detectClose,0);
      setTimeout(Cleanup,0);
      setTimeout(Cleanup,5000);
    })
    const getOnlineUsers=()=>{
      axios.get('https://smalltalk-backend.onrender.com/getComUsers').
      then((data)=>{
        // console.log(data.data.data.length)
        setc(data.data.data.length);
      }).catch((e)=>{
        console.log(e);
      })
    }
  return (
    <div className='home-container' style={{backgroundColor:'ButtonShadow'}}>
    <div className='flex space-around w-full bg-primary ' style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
    <div className='text-light p-3 h3 bg-none'>Small Talk</div>
    </div>
    <div className='d-flex col align-items-center justify-content-center my-3' style={{display:'flex',flexDirection:"column",margin:'30px',backgroundColor: '#9efff2',borderRadius: '20px'}}>
    <span className='text-dark h1 justify-content-center m-3'>Get Connected with People All over the Globe</span>
    <center><h3>Build your own community</h3></center>
    <Link to='/build' className='text-light bg-warning rounded col-10 col-md-3 p-2 m-3 text-center'>
    <button onClick={()=>console.log("build")} className='text-light bg-warning rounded' style={{border:'none',textDecoration:'none'}}>Start Building</button>
    </Link>
    <center><h1 className='text-danger'>OR</h1></center>
    <center><h3>Join in a community</h3></center>
    <div className='text-light bg-warning rounded col-10 col-md-3 p-2 m-3 text-center'>
    <button onClick={()=>{
      history('/join')
      window.location.reload();
    }} className='text-light bg-warning rounded' style={{border:'none',textDecoration:'none'}}>Join Community</button>
    </div>
    </div>
    <div className='d-flex align-items-center justify-content-center my-5 rounded' >
      <h2>Communities Available: <span style={{fontSize:'40px'}}>{c}</span></h2>
    </div>
    <hr></hr>
    <div className='d-flex col align-items-center justify-content-center my-3 px-4 pt-4 bg-light rounded' style={{flexDirection:'column'}}>
      <h1>Make your move and get connected!</h1>
      <img src='https://media.tenor.com/aKFaZBrZFYcAAAAC/excited-spin.gif' className='bg-home-img' />
    </div>
    </div>
  )
}

export default Home