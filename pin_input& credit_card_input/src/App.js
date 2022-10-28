import { useState } from "react";
import "./App.css";
import CreditCard from "./Components/creditCard/CreditCard";
import Pin from "./Components/Pin";

function App() {
  const [pinInput, setPinInput] = useState("");
  return (
    <div className="App">
      <Pin
        className="inputBox"
        length={5}
        maxLength={1}
        setPinInput={setPinInput}
      />
      <h2>OTP is: {pinInput}</h2>
      <br />
      <CreditCard length={4} maxLength={4} />
    </div>
  );
}

export default App;
