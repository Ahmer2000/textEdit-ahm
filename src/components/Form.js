import React,{useState} from "react";

const Form = (props) => {
    const [text, setText] = useState("")
    // text= "xyz" --> wrong way of changing the this.state
    //setText("xyz") //--> right way of changing the state
    const handleChange =(event)=>{
        setText(event.target.value)
    }
    const changeToUp =()=>{
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert('Converted to uppercase!','success')
    }
    const changeToLow =()=>{
      let newText = text.toLowerCase()
      setText(newText);
      props.showAlert('Converted to lowercase!','success')
  }
    const clearT =()=>{
      let newText = ""
      setText(newText);
      props.showAlert('Text cleared!','success')
  }
  const copyT =()=>{
    let textC = document.getElementById('myBox')
    textC.select()
    navigator.clipboard.writeText(textC.value) 
    props.showAlert('Text copied!','success')
}
const cutExtraSpace =()=>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "));
  props.showAlert('No extra spaces!','success')
}
    return (
    <>
    <div className="container">
      <h1 className="formH" style={{color:props.mode==='light' ? 'black':'#fcf4f4c9'}}>{props.heading}</h1>
      <div class=" mb-3 ">
        <textarea class="form-control" style={{backgroundColor:props.mode==='light' ? 'white':'rgb(33,37,41)',
         borderRadius: '5px' , border:props.mode , color:props.mode==='light' ? 'black':'#fcf4f4c9'}} value={text}  placeholder={props.place} onChange={handleChange} id="myBox" rows={7} ></textarea>
      </div>
      <button type="button" class={`btn btn-${props.btnC} mb-3`} onClick={changeToUp}>Convert to Uppercase</button>
      <button type="button" class={`btn btn-${props.btnC} mb-3 mx-3`} onClick={changeToLow}>Convert to Lowercase</button>
      <button type="button" class={`btn btn-${props.btnC} mb-3`} onClick={cutExtraSpace}>Remove Extra Space</button>
      <button type="button" class={`btn btn-${props.btnC} mb-3 mx-3 `} onClick={copyT}>Copy Text</button>
      <button type="button" class="btn btn-danger mb-3 " onClick={clearT}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='light' ? 'black':'#fcf4f4c9'}}>
      <h1 className="textS mb-1">Your text summary</h1>
      <p className="mb-0"><b>{text.split(" ").length-1}</b> word(s) and <b>{((text.trim(text)).length)} </b>character(s)</p>
      <p className="mb-3 p-0"><b>{0.008 * (text.split(" ").length-1)}</b> minute(s) required for reading the above text</p>
      <h2 className="formH mb-1">Preview of your text below</h2>
      <p className="mb-2">{text.length>0?text:"Preview of your text..."}</p>
    </div>  
    </>
  
    
  );
};


Form.defaultProps = {
  place:"Enter Text..."
}
export default Form;
