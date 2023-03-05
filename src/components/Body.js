import React from 'react'
import "./Body.css"
import headline from ".././images/headline.png"
import tate from ".././images/tate.png"
import finalimg from  ".././images/finalimg.png"
import openai from ".././images/openai.png"




const Body = () => {
  return (
  <main>
  
      <div className="div1"><img src={headline} /></div>
      <div className="div2"><img src={tate} /></div> 
      <div className="div3"><img src={finalimg} /></div>
      <div className="div4"><img src={openai} /></div>
      
   
  </main>

  
   
  )
}

export default Body;
