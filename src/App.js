import React from "react";
import Todo from "./todo";
import "./App.css";
import Login from "./login";

function App() {
  return (
    <div className="App">
      <u>
        <h1>TODO LIST</h1>
      </u>
      {/* <Todo></Todo> */}
      <Login></Login>
    </div>
  );
}

export default App;
