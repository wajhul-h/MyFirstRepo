import React from "react";

const ButtonCom = ({ buttonProp }) => {
  let { classes, type, value } = buttonProp;
  return <input className={`btn ${classes}`} type={type} value={value} />;
};

export default ButtonCom;
