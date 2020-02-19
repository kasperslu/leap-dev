import React from 'react';

const Button = (props) => {
  return (
    <a className={`button button--${props.type}`}>
      {props.label}
    </a>
  );
};

export default Button;
