import { useState } from "react";

/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
export const useCounter = (props) => {
  const { initialValue, minValue, maxValue } = props;
  const [countVal, setCountVal] = useState(initialValue);
  const countValue = countVal;
  const incCount = (val = 1) => {
    setCountVal((pre) => {
      return pre + val <= maxValue ? pre + val : pre;
    });
  };
  const decCount = (val = 1) => {
    setCountVal((pre) => {
      return pre - val >= minValue ? pre - val : pre;
    });
  };
  return {
    countValue,
    incCount,
    decCount,
  };
};
