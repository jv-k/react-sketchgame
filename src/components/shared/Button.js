import React from 'react';
import { Link } from 'react-router-dom';

export const Button = (props) => {
  return props.route ? (
    <Link to={ props.route }>
      <button>
        { props.label }
      </button>
    </Link>
  ) : (
    <button onClick={ props.click }>
      { props.label }
    </button>
  );
}