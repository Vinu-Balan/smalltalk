import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'

const TopBar = (props) => {
  const history = useNavigate();

  const connectNext =() =>{
  //   console.log("next")
  //   axios.post('https://smalltalk-backend.onrender.com/connectNext',{userid: localStorage.getItem('userID'),strangerID: localStorage.getItem('strangerID')}).catch((e)=>{
  //     console.log(e);
  //   })
  //   localStorage.setItem('connected',false);
  //   deleteUser();
  //   // history('/');
  // }
  // const deleteUser = () =>{
  //   axios.post('https://smalltalk-backend.onrender.com/deletecurUser',{userid: localStorage.getItem('userID'),strangerID: localStorage.getItem('strangerID')}).catch((e)=>{
  //     console.log(e);
  //   })
    history('/');
  }
    const delete_Community=()=>{
      if(window.confirm("Are sure you want to delete this community?")===true){
        axios.post('https://smalltalk-backend.onrender.com/deleteCom',{userid: localStorage.getItem('userID'),community: localStorage.getItem('com')}).
        then(()=>{
        })
        .catch((e)=>{
      console.log(e);
    })
    history('/');
      }
    }
  return (
    <div className='flex space-around w-full bg-primary' style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
    <h1 className='text-light p-3 h3 col-7 col-md-8' style={{textDecoration:'none',fontWeight:'500'}}>SmallTalk</h1>
    <div className='col-5 col-md-2'>
    {localStorage.getItem('user')=='admin'? (<><img src='https://cdn.dribbble.com/users/2124240/screenshots/6118828/delete_icon_intraction.gif' height='45px' style={{borderRadius:'20px',cursor: 'pointer'}} onClick={delete_Community} />
    <button onClick={connectNext} className='bg-warning text-light mx-3 m-4 mr-5 h6 rounded' style={{height:"30px",border:"none"}}>Back</button>
   </> 
    )
    : <button onClick={connectNext} className='bg-warning text-light mx-3 m-4 mr-5 h6 rounded col-9' style={{height:"30px",border:"none"}}>Back</button>}
 
    </div>
   
    </div>
    
  )
}

export default TopBar