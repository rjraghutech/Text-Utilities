import React,{useState} from 'react';

let Textform = (props) => {
    const [text, setText] = useState();

    return (
        <>
        <div className='container'>
            <div class="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" class="form-label">Enter Your Text To Analyze:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" value={text}/>
            </div>
            <button className='btn btn-primary'>Uppercase</button>
            <button className='btn btn-primary'>Lowercase</button>
        </div>
        </>
    )
}

export default Textform