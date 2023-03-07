import React,{useState} from 'react'
import axios from 'axios'

const TypeBox = () => {
  const [msg,setMsg] = useState("");
  const [emojstate,setEmojstate] = useState(false);
  const emojiControl =() =>{
    if(!emojstate){
      document.getElementById('emoji-container').style.overflow = 'visible';
    }else{
      document.getElementById('emoji-container').style.overflow = 'hidden';
    }
    setEmojstate(!emojstate);
  }
  const sendMessage =(e) =>{
    e.preventDefault();
    axios.post('http://localhost:3306/sendMessage',{
      sender: localStorage.getItem('userID'),
      reciever: localStorage.getItem('strangerID'),
      message: msg
    })
    setMsg('');
  }
  const sendEmoji=(emoji)=>{
    // console.log(emoji);
    axios.post('http://localhost:3306/sendMessage',{
      sender: localStorage.getItem('userID'),
      reciever: localStorage.getItem('strangerID'),
      message: emoji
    })
    setEmojstate(false);
    document.getElementById('emoji-container').style.overflow = 'hidden';
  }
  return (
    <form className='ml-4 col container' style={{position:"fixed",bottom: "20px",display:"flex",flexDirection:"row"}}>
    <input onChange={(e) => setMsg(e.target.value)} className='rounded col-7 col-md-11 p-1' value={msg} style={{border:"1px solid black"}} placeholder="type something..." type="text" />
    <div id='emoji-container' style={{height:'50px',width: '50px',minWidth:'50px',overflow: 'hidden',display:'flex',flexDirection:'row-reverse'}}>
    <div style={{cursor:'pointer'}} onClick={() => {
      emojiControl();
    }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrIR6kvUmHXTUNELX3maWSmQZIVRbTU5_OA&usqp=CAU' height='50px' style={{backgroundColor: 'black',borderRadius: '5px'}} />
    </div>
    <div style={{cursor:'pointer'}} onClick={() => {
      sendEmoji('love-face-emoji');
    }}>
    <img src='https://i.pinimg.com/originals/bc/84/4a/bc844aeed5335011035935a18a1f8b47.gif' height='50px' style={{backgroundColor: 'black',borderRadius: '5px'}} />
    </div>
    <div style={{cursor:'pointer'}} onClick={() => {
      sendEmoji('laugh-face-emoji');
    }}>
    <img src='https://thumbs.gfycat.com/EquatorialSentimentalBarracuda-size_restricted.gif' height='50px' style={{backgroundColor: 'black',borderRadius: '5px'}} />
    </div>
    <div style={{cursor:'pointer'}} onClick={() => {
      sendEmoji('angry-face-emoji');
    }}> 
    <img src='https://i.pinimg.com/originals/c4/07/04/c4070448ce8174b2b3e121081ddbbee5.gif' height='50px' style={{backgroundColor: 'black',borderRadius: '5px'}} />
    </div>
    <div style={{cursor:'pointer'}} onClick={() => {
      sendEmoji('happy-face-emoji');
    }}> 
    <img src='https://i.pinimg.com/originals/c1/e9/51/c1e95172d8c115d66148cb9ad68c1c74.gif' height='50px' style={{backgroundColor: 'black',borderRadius: '5px'}} />
    </div>
    </div>
    
    <button className='col-3 col-md-1 rounded bg-primary text-light' style={{border:"none"}} type="submit" onClick={sendMessage}>Send</button>
    </form>
  )
}

export default TypeBox