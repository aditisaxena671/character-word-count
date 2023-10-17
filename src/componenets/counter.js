import React, {useState} from 'react'

export default function Counter(props) {
    const handleOnChnage=(event)=>{
        console.log("On change event");
        setText(event.target.value);
    }

    const textToUpperCase =()=>{
        const newtext=text.toUpperCase();
        setText(newtext);
    }
    const textToLowerCase=()=>{
        const newtext=text.toLowerCase();
        setText(newtext)
    }
    const [text,setText] = useState("");
  return (
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control border" id="exampleFormControlTextarea1" value={text} onChange={handleOnChnage} rows="8" ols="40"></textarea>
    </div>
    <button className="btn btn-danger float-end m-1" onClick={textToUpperCase}>Convert to UpperCase</button>
    <button className="btn btn-danger float-end m-1" onClick={textToLowerCase}>Convert to LowerCase</button>
    <div className="container">
        <h6>Words : {text.split(" ").length}</h6>
        <h6>Characters : {text.length}</h6>
    </div>
</div>
  )
}
