import React from "react";

const TodoItem = ({ title, status, id, handleDelete, handleToggle }) => {
  console.log("todo Itme rendering...");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        border: "1px solid blue",
        width: "50%",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <h3>{title}</h3>
      <h4>{status ? "Done" : "Not Done "}</h4>
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

/*
const checkEquality = (prevProps, currentProps) => {
  return (
    prevProps.status === currentProps.status &&
    prevProps.title === currentProps.title
  );
};
*/
// if none of the props has changes i wont rerender the component.
//export default React.memo(TodoItem, checkEquality);
export default React.memo(TodoItem);
