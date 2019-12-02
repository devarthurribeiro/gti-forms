import React from "react";
import { Form, Input, Select } from '@rocketseat/unform';

import form1 from "./forms/form1";
import "./App.css";
 
 
function handleSubmit(data) {
  console.log(data);
}

function App() {
  return (
    <div className="App">
      <h1 className="title">GTI forms</h1>
      <Form onSubmit={(handleSubmit)}>
      { form1.map( input => {
        if(input.type === 'select') {
          return (
            <div key={input.name}>
              <label>{input.placeholder}</label>
              <Select name={input.name} options={input.options} className="select" />
            </div>
          )
        }
        return (
            <div key={input.name}>
              <Input placeholder={input.placeholder} name={input.name} className="input" /> 
            </div>
          )
      })}
      <center>
        <button className="button is-success" type="submit">Enviar</button>
      </center>
    </Form>
    </div>
  );
}

export default App;
