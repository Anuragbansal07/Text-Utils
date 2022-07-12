import React, { useState } from 'react'

export default function TextForm(props) {

    const handleLoClick =()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted To Lowercase","success");
    }

    const handleClearClick =()=>{
        setText("");
        props.showAlert("Text has been Cleared","success");

    }

    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted To Uppercase","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleRemoveClick = ()=>{
        let newtext = text.split(/[ ]+/); 
        setText(newtext.join(" "));
        props.showAlert("Extra spaces have been removed","success");

    }
   
    const handleCopyClick = (event)=>{
        let newtext = document.getElementById("mybox");
        newtext.select();
        // navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard","success");

    }

    const [text,setText] = useState('');

    return (
        <>
        <div className = "container" style = {{color : props.mode==="dark" ? "white":"b#080338"}}>
            <h3><b>{props.heading}</b></h3>
            <hr></hr>
            <div className="mb-3">
                <textarea className="form-control" value = {text} style={{backgroundColor: props.mode==='dark' ? "#323232":"white" , color : props.mode==='dark' ? "white":"#080338"}} onChange={handleOnChange} id="mybox" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert To Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} >Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveClick} >Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style = {{color : props.mode==="dark" ? "white":"#080338"}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text : "Enter in the above textarea to preview it here."}</p>
        </div>
        </>
    )
}
