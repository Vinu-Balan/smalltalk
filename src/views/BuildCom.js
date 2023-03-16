import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const BuildCom = () => {
    const history = useNavigate();
    const [comName,setcomName] = useState('');
    const [adminName,setadminName] = useState('');
    const [adminPass,setadminPass] = useState('');
    const createCom = () =>{
        axios.post('https://smalltalk-backend.onrender.com/createCom',{comName:comName,adminID: adminName,adminPass: adminPass}).then(()=>{
          localStorage.setItem('user','admin');
        }).catch((e)=>{
        console.log(e);
      });
      history('/');
      }
  
  return (
    <div className='home-container' style={{backgroundColor:'ButtonShadow'}}>
    <div className='flex space-around w-full bg-primary ' style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
    <div className='text-light p-3 h3 bg-none'>Small Talk</div>
    <Link to='/'><button className='bg-warning text-light mx-3 m-4 mr-5 h6 rounded' style={{height:"30px",border:"none"}}>Back</button></Link>
    </div>
    <div className='d-flex col align-items-center justify-content-center my-3' style={{display:'flex',flexDirection:"column",margin:'30px',backgroundColor: '#9efff2',borderRadius: '20px'}}>
    <span className='text-dark h1 justify-content-center m-3'>Create your community in seconds</span>
    <hr></hr>
    <div >
    <center><h3>Enter your Community Name</h3></center>
    <center><input onChange={(e)=> setcomName(e.target.value)} placeholder='name goes here' className='m-3 rounded' style={{width:"80%",height:'30px',fontSize:'18px'}} /></center>
    <center><hr></hr></center>
    <center><h3>Mention the admin ID</h3></center>
    <center><input onChange={(e)=> setadminName(e.target.value)} placeholder='admin ID goes here' className='m-3 rounded' style={{width:"80%",height:'30px',fontSize:'18px'}} /></center>
    <center><hr></hr></center>
    <center><h3>Mention the admin password</h3></center>
    <center><input onChange={(e)=> setadminPass(e.target.value)} placeholder='admin password goes here' className='m-3 rounded' style={{width:"80%",height:'30px',fontSize:'18px'}} /></center>
    <center>
    <button onClick={createCom} className='text-light bg-warning rounded col-10 col-md-9 p-2 m-3 text-center' style={{border:'none',textDecoration:'none'}}>Build Community</button>
    </center>
    </div>
    </div>
    <hr></hr>
    <div className='d-flex col align-items-center justify-content-center my-3 px-4 pt-4 bg-light rounded' style={{flexDirection:'column'}}>
      <h1>Make your move and get connected!</h1>
      <img src='https://media.tenor.com/aKFaZBrZFYcAAAAC/excited-spin.gif' className='bg-home-img' />
    </div>
    </div>
  )
}

export default BuildCom