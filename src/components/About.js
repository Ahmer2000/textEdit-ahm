import React /*{useState}*/ from "react";

const About = (props) => {
   
  let myStyle = {
    color:props.mode==='light'?'rgb(33,37,41)':'#fcf4f4c9',
    backgroundColor:props.mode==='light'?'white':'#212529'
  }
    
  return (
    <div className="container py-3 "  >
      <h2 className="my-3 formH" style={{color:props.mode==='light'?'rgb(33,37,41)':'#fcf4f4c9'}}>About TextEdit 1.0</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item " style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              TextEdit 1.0 gives you a way to analyze your text quickly and efficiently. Be it word-count, character-count, time required to read your text and many more features are at your service in this text analyzing app. 
            </div>
          </div>
        </div>
        <div className="accordion-item " style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              TextEdit 1.0 is a free character counter tool that provides instant character count and word count statistics for a given text. TextEdit 1.0 reports the number of words and characters. Thus it is suitable for writing text with word/character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item " style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It can be used to count characters in facebook, blogs, books, excel documents, pdf documents, essays, etc.     
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
