import { useState } from "react";
import "./App.css";
import Buttons from "./Components/Button";

function App() {
  const [theme, setTheme] = useState("Light");
  return (
    <div className="App">
      <h3>Current Theme is {theme} </h3>
      <Buttons
        colorScheme={"tomato"}
        variant={"bordered"}
        onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
      >
        click me
      </Buttons>
    </div>
  );
}

export default App;
