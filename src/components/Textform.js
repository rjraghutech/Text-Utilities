import React,{useState} from 'react';
//import Header from "./Header";

let Textform = (props) => {
    const [text, setText] = useState("");
    const [font, setFont] = useState(18);
    let upcase = () => {
        setText(text.toUpperCase());
        props.showAlert('Coverted to Uppercase....!','success');
    }
    let lowcase = () => {
        setText(text.toLowerCase());
        props.showAlert('Coverted to Lowercase....!','success');
    }
    let clearText = () => {
        setText('');
        setFont(15);
        props.showAlert('Cleared Text....!','success');
    }
    let firstCapital = () => {
        let copy = text.split(' ');
        for(let i=0; i < copy.length; i++){
            copy[i] = copy[i].charAt(0).toUpperCase() + copy[i].slice(1);
        }
        let copy2 = copy.join(' ');
        setText(copy2);
        props.showAlert('Coverted to Capitalcase....!','success');
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
        props.showAlert('Coverted to Reversecase....!','success');
    }
    let textareaChange = (e) => {
        setText(e.target.value)
    }
    let handleCopy = () => {
        navigator.clipboard.writeText(text.valueOf());
        props.showAlert('Text Copied....!','success');
    }
    let handleSpace = () => {
        console.log(text.split(/[ ]+/))
        setText(text.split(/[ ]+/).join(' ')) 
        props.showAlert('Extra Space Removed....!','success');   
    }
    let handleIncreaseFont = () =>{
        setFont(font+2);
    }
    let handleDecreaseFont = () =>{
        setFont(font-2);
    }
    return (
        <>
        <div className='container' style={props.darkObject}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={textareaChange} placeholder="Enter Your Text To Analyze:" style={{fontSize: `${font}px`,color: props.darkObject.color === 'white'?'white':'black',backgroundColor: props.darkObject.color === 'white'?'#3e3e3e':'white'}}/>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={upcase} disabled={text.length === 0}>Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={lowcase} disabled={text.length === 0}>Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={firstCapital} disabled={text.length === 0}>Capital Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={altCase} disabled={text.length === 0}>Reverse Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleSpace} disabled={text.length === 0}>Remove Extra Space</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleIncreaseFont} disabled={text.length === 0}>Increase Font</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleDecreaseFont} disabled={text.length === 0}>Decrease Font</button>
            <button className='btn btn-primary mx-1 my-1' onClick={clearText} disabled={text.length === 0}>Clear Text</button>            
        </div>
        <div className='container' style={props.darkObject}>
            <h1>Your Text Summary:</h1>
            <p>There are {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters.</p>
            <p>You need {0.01 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} minutes to read.</p>
            <h2>Preview of your text:</h2>
            <pre>{text.length === 0?'Enter Your Text To Preview':text}</pre>
        </div>
        </>
    )
}

export default Textform;