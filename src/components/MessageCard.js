import React from 'react'

const MessageCard = (props) => {
  return (
    <>
    {!(props.sender===localStorage.getItem('userID'))? (
      <div className='d-flex col-12' style={{flexDirection:"column"}}>
    <span className='text-danger p-2 pb-0 h8'>Stranger</span>
    <section className='text-dark h7 p-2 mx-3 my-2 mt-1 rounded' style={{backgroundColor:"#9CF4FF",maxWidth:"max-content"}}>
    {props.message=='love-face-emoji'? <img src='https://i.pinimg.com/originals/bc/84/4a/bc844aeed5335011035935a18a1f8b47.gif' height="60px"/> : (
      <>{props.message=='laugh-face-emoji'? <img src='https://thumbs.gfycat.com/EquatorialSentimentalBarracuda-size_restricted.gif' height="60px"/> : (
      <>{props.message=='angry-face-emoji'? <img src='https://i.pinimg.com/originals/c4/07/04/c4070448ce8174b2b3e121081ddbbee5.gif' height="60px"/> : ( <>{props.message=='happy-face-emoji'? <img src='https://i.pinimg.com/originals/c1/e9/51/c1e95172d8c115d66148cb9ad68c1c74.gif' height="60px"/> : (<div  style={{maxWidth:'300px',overflowX:'hidden'}}>{props.message}</div>)}</>
    )}</>
    )}</>
    )}
    <span className='text-secondary' style={{fontSize: "9px"}}>{props.time}</span>
    </section>
    
    </div>
    ) : (
      <div className='container' style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <div></div>
      <div className='d-flex' style={{flexDirection:"column",justifyContent:'flex-end'}}>
    <span className='text-success p-2 pb-0 h8'>You</span>
    <section className='text-dark h7 p-2 mx-3 my-2 mt-1 rounded' style={{backgroundColor:"#AEFFE9",maxWidth: 'max-content',overflow:'hidden'}} >
    {props.message=='love-face-emoji'? <img src='https://i.pinimg.com/originals/bc/84/4a/bc844aeed5335011035935a18a1f8b47.gif' height="60px"/> : (
      <>{props.message=='laugh-face-emoji'? <img src='https://thumbs.gfycat.com/EquatorialSentimentalBarracuda-size_restricted.gif' height="60px"/> : (
      <>{props.message=='angry-face-emoji'? <img src='https://i.pinimg.com/originals/c4/07/04/c4070448ce8174b2b3e121081ddbbee5.gif' height="60px"/> : ( <>{props.message=='happy-face-emoji'? <img src='https://i.pinimg.com/originals/c1/e9/51/c1e95172d8c115d66148cb9ad68c1c74.gif' height="60px"/> : (<div style={{maxWidth: 'max-content',overflowX:'-moz-hidden-unscrollable'}}>{props.message}</div>)}</>
    )}</>
    )}</>
    )}
    <span className='text-secondary' style={{fontSize: "9px"}}>{props.time}</span>
    </section>
    </div>
      </div>
      
    )}
    
    
    </>
    
  )
}

export default MessageCard