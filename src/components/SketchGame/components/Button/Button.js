// A customised flexible button component
import React from 'react';
import { Link } from 'react-router-dom';

const ButtonElem = (props) => {
  return (
    <button 
      className={ "nes-btn" + (props.className ? " " + props.className : "") }
      onClick={ props.click }
      style={ props.style }
      id={ props.id }
    >
      { props.label }
    </button>
  )
}

export const Button = (props) => {
  if (props.route)
    return (
      <Link 
        to={ props.route } 
        className={ props.className || props.linkClassName } 
        style={ props.style || props.linkStyle }
        onClick={ props.click }
      >
        <ButtonElem 
          label={ props.label }
          className={ props.buttonClassName }
          id={ props.id }
        />
      </Link>
    ) 
  else 
    return (    
      <ButtonElem {...props} />
    );
}