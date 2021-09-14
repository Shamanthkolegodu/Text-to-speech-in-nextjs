import Head from "next/head";
import Link from "next/link";
import React,{useState} from "react";
function Speak(){
  const [state, setState] = useState("The light falling on the centre of curvature is reflected back along the same path because the incident ray falls on the mirror along the normal to the reflecting surface.");
  
  // onClick function which converts text to speech.
  const handleClick = (e) =>  {
    let text=state;
    let working = new SpeechSynthesisUtterance(text); 
    window.speechSynthesis.speak(working); 
    console.log(text);
  }
  const handleChange = (e) =>  {
    let text=e.target.value;
    setState(text)
  }

  return(
  <div>
    <p className='text'>{state}</p>
    <textarea className='text2' onChange={handleChange}></textarea>
    <br></br>
    <button onClick={handleClick}>Play</button>
  </div>
  )
}

export default Speak;