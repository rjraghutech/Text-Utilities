import React from 'react';

let Alert = (props) => {
    let capitalCase = (word) => {
        return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    <div style={{height: '60px'}}>
      {props.alert &&  <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
          <strong>{capitalCase(props.alert.typ)}: </strong>{props.alert.msg}.
      </div>}
    </div>
  )
}

export default Alert;