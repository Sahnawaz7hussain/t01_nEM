import { render, screen } from "@testing-library/react";
import App from "../App";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("Testing the Custom component", () => {
  it("should be in the DOM tree", () => {
    render(<Button>Testing Button</Button>); // virtually.
    //screen.debug();

    let button = screen.getByText("Testing Button");
    // document.get
    expect(button).toBeInTheDocument();
  });

  it("should have a button with the text 'Click Me' in the App.js", () => {
    render(<App />);
    // screen.debug();
    let button = screen.getByTestId("customButton");
    expect(button).toBeInTheDocument();
  });
  it("should check if the label is present as passed throught the props", () => {
    render(<Button>Testing</Button>);
    let button = screen.getByTestId("customButton");
    expect(button).toHaveTextContent("Testing");
  });
  it("should be an empty DOM element, if the children props is not passed", () => {
    render(<Button></Button>);
    let button = screen.getByTestId("customButton");
    expect(button).toBeEmptyDOMElement();
  });
  it("should the theme when the button button is clicked", () => {
    render(<App />);
    let button = screen.getByTestId("customButton");

    let h3Tag = screen.getByText("Current Theme is Light");
    expect(h3Tag).toHaveTextContent("Light");

    userEvent.click(button);
    expect(h3Tag).toHaveTextContent("Dark");
  });

  it("should create/match the snapshot", () => {
    const tree = renderer
      .create(
        <Button colorScheme={"green"} variant={"bordered"}>
          Custom Button
        </Button>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
