import React from 'react';

let About = (props) => {
  return (
        <div className="accordion container my-2 py-2 rounded-2  border border-dark" id="accordionPanelsStayOpenExample" style={{color: props.darkObject.color === 'white'?'white':'black',backgroundColor: props.darkObject.color === 'white'?'#3e3e3e':'white'}}>
            <h1><strong>About</strong></h1>
            <div className="accordion-item my-1" style={{color: props.darkObject.color === 'white'?'white':'black',backgroundColor: props.darkObject.color === 'white'?'#3e3e3e':'white'}}>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={props.darkObject}>
                    <strong>Analyze Your text </strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or .
                </div>
                </div>
            </div>
            <div className="accordion-item my-1" style={{color: props.darkObject.color === 'white'?'white':'black',backgroundColor: props.darkObject.color === 'white'?'#3e3e3e':'white'}}>
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={props.darkObject}>
                    <strong>Free to use </strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item my-1" style={{color: props.darkObject.color === 'white'?'white':'black',backgroundColor: props.darkObject.color === 'white'?'#3e3e3e':'white'}}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={props.darkObject}>
                    <strong>Browser Compatible </strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                    This Text Utilities software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
  )
}

export default About;