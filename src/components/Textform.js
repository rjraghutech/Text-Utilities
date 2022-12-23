import React,{useState} from 'react';

let Textform = (props) => {
    const [text, setText] = useState("");
    let upcase = () => {
        setText(text.toUpperCase());
    }
    let lowcase = () => {
        setText(text.toLowerCase());
    }
    let clearText = () => {
        setText('');
    }
    let firstCapital = () => {
        let copy = text.split(' ');
        for(let i=0; i < copy.length; i++){
            copy[i] = copy[i].charAt(0).toUpperCase() + copy[i].slice(1);
        }
        let copy2 = copy.join(' ');
        setText(copy2);
    }
    let altCase = () => {
        const isUpperCase = char => char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90;
        const isLowerCase = char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
        
        let newStr = '';
        const margin = 32;
        for(let i = 0; i < text.length; i++){
            const curr = text[i];
            if(isLowerCase(curr)){
                newStr += String.fromCharCode(curr.charCodeAt(0) - margin);
            }else if(isUpperCase(curr)){
                newStr += String.fromCharCode(curr.charCodeAt(0) + margin);
            }else{
                newStr += curr;
            };
        };
        setText(newStr);
        
    }
    let textareaChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={textareaChange} placeholder="Enter Your Text To Analyze:"/>
            </div>
            <button className='btn btn-primary mx-1' onClick={upcase}>Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={lowcase}>Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={firstCapital}>Capital Case</button>
            <button className='btn btn-primary mx-1' onClick={altCase}>rEVERSE cASE</button>
            <button className='btn btn-primary mx-1' onClick={clearText}>Clear Text</button>
        </div>
        <div className='container'>
            <h1>Your Text Summary:</h1>
            <p>There are {text ? text.split(" ").length : 0} words and {text.length} characters.</p>
            <p>You need {0.01 * text.split(" ").length} minutes to read.</p>
            <h2>Preview of your text:</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default Textform;