import React from 'react'

const Alert = (props) => {
    function capitalize(word) {
        let worrd = word;
        return worrd.charAt(0).toUpperCase()+worrd.slice(1)
    }
    return (
     props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg} 
    </div>
  )
}

export default Alert
