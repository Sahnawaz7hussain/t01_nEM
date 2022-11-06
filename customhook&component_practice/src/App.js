import "./App.css";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { countValue, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });

  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {countValue}</h3>
      <button onClick={() => incCount()}>Increment</button>
      <button onClick={() => incCount(3)}>Increment 3</button>
      <button onClick={() => decCount(2)}>Decrement 2</button>
      <button onClick={() => decCount(4)}>Decrement 4</button>
      <button onClick={() => decCount()}>Decrement 2</button>

      <br />
      <br />
      <Button colorScheme="orange" size="xl" variant="solid">
        Button1
      </Button>
      <Button colorScheme="green" size="lg" variant="solid">
        Button2
      </Button>
      <Button colorScheme="red" size="md" variant="solid">
        Button3
      </Button>
      <Button colorScheme="yellow" size="sm" variant="solid">
        Button4
      </Button>
      {/* <Button colorScheme="orange" size="xl" variant="solid" />
      <Button colorScheme="green" size="md" variant="ghost" />
      <Button colorScheme="red" size="sm" variant="solid" /> */}
      <br />
      <Input size="xl" variant={"outline"} />
    </div>
  );
}

export default App;
