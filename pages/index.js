import Head from "next/head";
import Link from "next/link";
import { Editor } from '@tinymce/tinymce-react';
import React,{useState,useRef} from "react";
function Speak(){
  const [state, setState] = useState("The light falling on the centre of curvature is reflected back along the same path because the incident ray falls on the mirror along the normal to the reflecting surface.");
  
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
  
  <div style={{backgroundColor:"red"}}>
    <p>Add the text in the below textbox to convert it into speech.</p>
    <textarea className='text2' onChange={handleChange}></textarea>
    <br></br>
    <button onClick={handleClick}>Play</button>
  </div>
  )
}

export default Speak;



