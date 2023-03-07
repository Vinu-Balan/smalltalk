import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'

const TopBar = () => {
  const history = useNavigate();

  const connectNext =() =>{
    console.log("next")
    axios.post('https://smalltalk-backend.onrender.com/connectNext',{userid: localStorage.getItem('userID'),strangerID: localStorage.getItem('strangerID')}).catch((e)=>{
      console.log(e);
    })
    localStorage.setItem('connected',false);
    deleteUser();
    // history('/');
  }
  const deleteUser = () =>{
    axios.post('https://smalltalk-backend.onrender.com/deletecurUser',{userid: localStorage.getItem('userID'),strangerID: localStorage.getItem('strangerID')}).catch((e)=>{
      console.log(e);
    })
    history('/');
  }
  return (
    <div className='flex space-around w-full bg-primary ' style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
    <h1 className='text-light p-3 h3' style={{textDecoration:'none',fontWeight:'500'}}>SmallTalk</h1>
    <button onClick={connectNext} className='bg-warning text-light mx-3 m-4 mr-5 h6 rounded' style={{height:"30px",border:"none"}}>Next</button>
    </div>
    
  )
}

export default TopBar