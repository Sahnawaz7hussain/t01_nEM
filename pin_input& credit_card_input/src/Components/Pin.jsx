import React, { useRef, useState } from "react";
import propTypes from "prop-types"; // prop-types install with cra.
import InputPin from "./InputPin"; // Child componet if Pin.jsx.

const Pin = ({ length, maxLength, setPinInput }) => {
  const [inputBoxLength] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  const [singlePinValue] = useState(new Array(length).fill(""));

  // function on input text/number changes handler.
  const onChangeHandler = (e, index) => {
    singlePinValue[index] = e.target.value;
    if (e.target.value && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setPinInput(singlePinValue.join(""));
  };

  // function to handle backspace event.
  const backSpaceHandler = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    singlePinValue[index] = e.target.value;
    setPinInput(singlePinValue.join(""));
  };
  console.log(setPinInput);
  return (
    <div>
      <h2>Pin Input</h2>
      {inputBoxLength.map((_, index) => {
        return (
          /*
          // <input
          //   ref={(inputElem) => {
          //     return (inputRef.current[index] = inputElem);
          //   }}
          //   key={index}
          //   maxLength={maxLength}
          //   onChange={(e) => onChangeHandler(e, index)}
          // />
        */
          <InputPin
            ref={(inputElem) => {
              return (inputRef.current[index] = inputElem);
            }}
            key={index}
            maxLength={maxLength}
            onChangeFunc={(e) => onChangeHandler(e, index)}
            backSpaceFunc={(e) => backSpaceHandler(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;
Pin.propTypes = {
  length: propTypes.number.isRequired,
  maxLength: propTypes.number.isRequired,
};
