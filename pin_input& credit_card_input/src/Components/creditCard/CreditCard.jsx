import React, { useState, useRef } from "react";
import CardPin from "./CardPin";
import propTypes from "prop-types";
const CreditCard = ({ length, maxLength }) => {
  const [inputBoxes] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  const onChangeHandler = (e, index) => {
    let inputs = inputRef.current[index].value;
    //console.log("inpus:::", inputs);
    if (index < length - 1 && inputs.length === 4) {
      inputRef.current[index + 1].focus();
      inputs = 0;
    }
  };

  ///// backspace handler
  const backSpaceHandler = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    // console.log("eee:", e, index);
  };
  // console.log("inputRef... card.jsx", inputRef);
  return (
    <div>
      <h4>Credit Cart</h4>
      <div className="creditCard">
        <h3 style={{ margin: "0px" }}>Sahnawaz Hussain</h3>
        {inputBoxes.map((_, index) => (
          <CardPin
            ref={(inputElement) => {
              return (inputRef.current[index] = inputElement);
            }}
            key={index}
            maxLength={maxLength}
            onChangeFunction={(e) => onChangeHandler(e, index)}
            backSpaceFunction={(e) => backSpaceHandler(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreditCard;
CreditCard.propTypes = {
  length: propTypes.number.isRequired,
  maxLength: propTypes.number.isRequired,
};
