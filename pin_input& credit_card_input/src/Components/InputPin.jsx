import React, { forwardRef } from "react"; // forwardref is used to pass pros

const InputPin = forwardRef(
  ({ maxLength, onChangeFunc, backSpaceFunc }, ref) => {
    const onKeyUpFun = (e) => {
      if (e.keyCode === 8 && !e.target.value) {
        backSpaceFunc(e);
      } else {
        onChangeFunc(e);
      }
    };

    return (
      <input
        className="pinInput"
        onKeyUp={onKeyUpFun}
        ref={ref}
        maxLength={maxLength}
      />
    );
  }
);

export default InputPin;
