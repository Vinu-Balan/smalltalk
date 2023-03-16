import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const JoinCom = () => {
    const history = useNavigate();
    const [comNamea,setcomNamea] = useState('');
    const [comNamer,setcomNamer] = useState('');
    const [adminName,setadminName] = useState('');
    const [adminPass,setadminPass] = useState('');
    const [userID,setUserID] = useState();
    const Cleanup = () =>{
      if(localStorage.getItem('userID')){
        axios.post('https://smalltalk-backend.onrender.com/cleanup',{userid: localStorage.getItem('userID')}).catch((e)=>{
        console.log(e);
      });
      }
    }
    const joinAdmin = () =>{
      axios.post('https://smalltalk-backend.onrender.com/joinAdmin',{user: adminName,comName: comNamea, adminPass: adminPass}).then((res)=>{
        console.log(res.data);
        if(!res.data.exist){
          document.getElementById('adminID-error').innerHTML = "Above credentials are incorrect";
        }else{
          document.getElementById('adminID-error').innerHTML = "";
          localStorage.setItem('user','admin');
          localStorage.setItem('userID',adminName);
          console.log(adminName);
          axios.post('https://smalltalk-backend.onrender.com/createAdminID',{comName: comNamea,userId: adminName}).then((res)=>{
          }).catch((e)=>{
            console.log(e);
          })
          localStorage.setItem('com',comNamea);
          history('/comchat');
        }
        }).catch((e)=>{
          console.log(e);
        });
        
    }
    const joinStranger = () =>{
      axios.post('https://smalltalk-backend.onrender.com/joinStranger',{comName: comNamer}).then((res)=>{
        if(!res.data.exist){
          document.getElementById('com-error').innerHTML = "Community does not exist";
        }else{
          document.getElementById('com-error').innerHTML = "";
          localStorage.setItem('user','stranger');
          var userId = Math.floor(Math.random() * 10000);
          console.log(userId);
          localStorage.setItem('userID',userId);
          localStorage.setItem('user','stranger');
          axios.post('https://smalltalk-backend.onrender.com/createStrangerID',{comName: comNamer,userId: userId}).then((res)=>{
          }).catch((e)=>{
            console.log(e);
          })
          localStorage.setItem('com',comNamer);
          history('/comchat');
        }
        }).catch((e)=>{
          console.log(e);
        });   
    }
  return (
    <div className='home-container' style={{backgroundColor:'ButtonShadow'}}>
    <div className='flex space-around w-full bg-primary ' style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
    <div className='text-light p-3 h3 bg-none'>Small Talk</div>
    <Link to='/'><button className='bg-warning text-light mx-3 m-4 mr-5 h6 rounded' style={{height:"30px",border:"none"}}>Back</button></Link>
    </div>
    <div className='d-flex col align-items-center justify-content-center my-3' style={{display:'flex',flexDirection:"column",margin:'30px',backgroundColor: '#9efff2',borderRadius: '20px'}}>
    <span className='text-dark h1 justify-content-center m-3 bg-light rounded p-2'>Join as Admin</span>
    <hr></hr>
    <div >
    <center><h3>Enter your Community Name</h3></center>
    <center><input onChange={(e)=> setcomNamea(e.target.value)} placeholder='name goes here' className='m-3 rounded' style={{width:"80%",height:'30px',fontSize:'18px'}} /></center>
    <center><hr></hr></center>
    <center>
    <center><h3>Mention the admin ID</h3></center>
    <center><input onChange={(e)=> setadminName(e.target.value)} placeholder='admin ID goes here' className='m-3 rounded' style={{width:"80%",height:'30px',fontSize:'18px'}} /></center>
    <center><hr></hr></center>
    <center><h3>Mention the admin password</h3></center>
    <center><input type='password' onChange={(e)=> setadminPass(e.target.value)} placeholder='admin password goes here' className='m-3 rounded' style={{width:"80%",height:'30px',fontSize:'18px'}} /></center>
    <center><span className='text-danger' id='adminID-error'></span></center>
    <button onClick={joinAdmin} className='text-light bg-warning rounded col-10 col-md-9 p-2 m-3 text-center' style={{border:'none',textDecoration:'none'}}>Join Community</button>
    </center>
    </div>
    <h3 className='text-danger'>OR</h3>
    <span className='text-dark h1 justify-content-center m-3 bg-light rounded p-2'>Join as Stranger</span>
    <hr></hr>
    <div >
    <center><h3>Enter your Community Name</h3></center>
    <center><input onChange={(e)=> setcomNamer(e.target.value)} placeholder='name goes here' className='m-3 rounded' style={{width:"80%",height:'30px',fontSize:'18px'}} /></center>
    <center><span className='text-danger' id='com-error'></span></center>
    <center><hr></hr></center>
    <center>
    <center>
    <button onClick={joinStranger} className='text-light bg-warning rounded col-10 col-md-9 p-2 m-3 text-center' style={{border:'none',textDecoration:'none'}}>Join Community</button>
    </center>
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

export default JoinCom