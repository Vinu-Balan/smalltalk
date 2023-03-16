import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles.css';
import MessageCard from './MessageCard'

const MessageBox = () => {
  const history = useNavigate();
  const [messages,setMessages] = useState([]);
  useEffect(()=>{
    getComMessages();
  })
  const getMessages =() =>{
    axios.post('https://smalltalk-backend.onrender.com/getMessage',{sender: localStorage.getItem('userID'),reciever: localStorage.getItem('strangerID')}).
    then((data) =>{
    if(data.data){
      setMessages(data.data);
      const x = document.getElementById('anchor');
      x.scrollIntoView('anchor');
      }
    }).catch((e) => { console.log(e);
    }) 
  }

  const getComMessages =()=>{
    axios.post('https://smalltalk-backend.onrender.com/getComMessage',{sender: localStorage.getItem('userID'),community : localStorage.getItem('com')}).
    then((data) =>{
    if(data.data){
      setMessages(data.data);
      if(data.data.length>messages.length){
        const x = document.getElementById('anchor');
      x.scrollIntoView('anchor');
      }
      
      }
    }).catch((e) => { console.log(e);
    }) 
  }
  
  // setInterval(getMessages,100);
  return (
    <div className='container center d-flex justify-content-center my-2 text-light rounded' style={{flexDirection:'column' }}>
    <h3 className='text-dark'>Chat with the community <img src='https://cdn.dribbble.com/users/571236/screenshots/2888472/happystate.gif' height='40px' /></h3>
        <div id='anchor-scroll' className='col-md-10 col-12 rounded ascroll' style={{backgroundColor:"white",border:"1px solid black",overflowY:"scroll"}}>
        <div>
        
      {false? (
        <h5 className='text-dark p-3'>Start Conversation</h5> ): 
        (<div>
         
          {messages.map(message => (
            <>
            <MessageCard  sender={message.sender} message={message.message} time={message.time} />
            </>
          ))}
        </div>)}
        <div id='anchor' style={{overflowAnchor:'auto'}}></div>
        </div>
    </div>
    </div>
  )
}

export default MessageBox