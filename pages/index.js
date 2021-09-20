// import Head from "next/head";
// import Link from "next/link";
// import { Editor } from '@tinymce/tinymce-react';
// import React,{useState,useRef} from "react";
// function Speak(){
//   // const state = useRef(null);


//   const [state, setState] = useState("The light falling on the centre of curvature is reflected back along the same path because the incident ray falls on the mirror along the normal to the reflecting surface.");
  
//   // // onClick function which converts text to speech.
//   const handleClick = (e) =>  {
//     let text=state;
//     let working = new SpeechSynthesisUtterance(text); 
//     window.speechSynthesis.speak(working); 
//     console.log(text);
//   }
//   const handleChange = (e) =>  {
//     let text=e.target.value;
//     setState(text)
//   }

//   return(
//   <div>
    
//     <p className='text'>{state}</p>
//     <textarea className='text2' onChange={handleChange}></textarea>
//     <br></br>
//     <button onClick={handleClick}>Play</button>
//   </div>
//   )
// }

// export default Speak;



import Head from "next/head";
import Link from "next/link";
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function Speak(){
  const editorRef = useRef(null);
   const play = () => {
     if (editorRef.current) {
      var text=editorRef.current.getContent();
      text=text.substring(3, text.length-4);
      var voices = speechSynthesis.getVoices();

      let working = new SpeechSynthesisUtterance(text); 
      working.voice = voices[0]; //Change value of int to get different voices
      working.rate=0.8;
      window.speechSynthesis.speak(working);
      console.log(text);
     }
   };
   return (
     <>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="This is the initial content of the editor."
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
       <button onClick={play}>Play</button>
     </>
   );

}

export default Speak;
