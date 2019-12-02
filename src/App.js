import React from "react";
import DynamicForm from "./DynamicForm";

import form1 from "./forms/form1";

import "./App.css";

function handleSubmit(data) {
  console.log(data);
}

function App() {
  return (
    <div className="App">
      <h1 className="title">GTI forms</h1>
      <DynamicForm form={form1} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
