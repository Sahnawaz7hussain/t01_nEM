import React, { forwardRef } from "react";

const CardPin = forwardRef(
  ({ maxLength, backSpaceFunction, onChangeFunction }, ref) => {
    const onKeyUpHandler = (e) => {
      if (e.keyCode == 8 && !e.target.value) {
        backSpaceFunction(e);
        //console.log("backsepce");
      } else {
        onChangeFunction(e);
        // console.log("onchange", e.target.value);
      }
      //console.log(e);
    };

    return (
      <input
        onKeyUp={onKeyUpHandler}
        ref={ref}
        className="cardInput"
        maxLength={maxLength}
      />
    );
  }
);

export default CardPin;
