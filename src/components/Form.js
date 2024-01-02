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
    document.getSelection().removeAllRanges()
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
      <h1 className="formH mb-1" style={{color:props.mode==='light' ? 'black':'#fcf4f4c9'}}>{props.heading}</h1>
      <div className=" mb-1 ">
        <textarea className="form-control" style={{backgroundColor:props.mode==='light' ? 'white':'rgb(33,37,41)',
         borderRadius: '5px' , border:props.mode , color:props.mode==='light' ? 'black':'#fcf4f4c9'}} value={text}  placeholder={props.place} onChange={handleChange} id="myBox" rows={5} ></textarea>
      </div>
      <button disabled={text.length===0} type="button" className={`btn btn-${props.btnC} my-1  mx-1`} onClick={changeToUp}>Convert to Uppercase</button>
      <button disabled={text.length===0} type="button" className={`btn btn-${props.btnC} my-1  mx-1`} onClick={changeToLow}>Convert to Lowercase</button>
      <button disabled={text.length===0} type="button" className={`btn btn-${props.btnC} my-1  mx-1`} onClick={cutExtraSpace}>Remove Extra Space</button>
      <button disabled={text.length===0} type="button" className={`btn btn-${props.btnC} my-1  mx-1 `} onClick={copyT}>Copy Text</button>
      <button disabled={text.length===0} type="button" className="btn btn-danger  my-1  mx-1" onClick={clearT}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light' ? 'black':'#fcf4f4c9'}}>
      <h1 className="textS mb-0">Your text summary</h1>
      <p className="mb-0"><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> word(s) and <b>{text.length} </b>character(s)</p>
      <p className="mb-2 "><b>{0.008 * (text.split(" ").length-1)}</b> minute(s) required for reading the above text</p>
      <h2 className="formH mb-0">Preview of your text below</h2>
      <p className="mb-2">{text.length>0?text:"Nothing to preview!"}</p>
    </div>  
    </>
  
    
  );
};


Form.defaultProps = {
  place:"",
}
export default Form;
