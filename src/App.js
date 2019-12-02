import React, { useState } from "react";
import DynamicForm from "./DynamicForm";

import form1 from "./forms/form1";
import form2 from "./forms/form2";
import form3 from "./forms/form3";

import "./App.css";

const forms = [
  {
    title: "Cadastro Computadores",
    schema: form1
  },
  {
    title: "Cadastro Monitor",
    schema: form2
  },
  {
    title: "Cadastro Impressora",
    schema: form3
  }
];

function App() {
  const [form, setForm] = useState(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div className="section">
      <h1 className="title">GTI forms</h1>
      {!form ? (
        <div className="buttons center">
          {forms.map(form => (
            <button
              className="button is-link is-rounded is-fullwidth"
              onClick={() => setForm(form)}
            >
              {form.title}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li onClick={() => setForm(null)}>
                <a href="#">Forms</a>
              </li>
              <li>
                <a href="#">{form.title}</a>
              </li>
            </ul>
          </nav>
          <DynamicForm form={form.schema} onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
}

export default App;
