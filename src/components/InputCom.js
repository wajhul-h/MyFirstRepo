import React from "react";

const InputCom = ({ labelName, inputType }) => {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">{labelName}</label>
        <input type={inputType} className="form-control" required />
      </div>
    </div>
  );
};

export default InputCom;
