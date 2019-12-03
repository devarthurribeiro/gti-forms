import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import db from "./firebase"

import form1 from "./forms/form1";
import form2 from "./forms/form2";
import form3 from "./forms/form3";
import form4 from "./forms/form4";

import "./App.css";

const forms = [
  {
    ref: "pc",
    title: "Cadastro Computadores",
    schema: form1
  },
  { 
    ref: "monitor",
    title: "Cadastro Monitor",
    schema: form2
  },
  {
    ref: "printer",
    title: "Cadastro Impressora",
    schema: form3
  },
  {
    ref: "power",
    title: "Cadastro estabilizador/nobreak",
    schema: form4
  }
];

function App() {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true)
    try {
      await db.forms.collection(form.ref).add(data);
      alert("Registro salvo!");
      setLoading(false)
    } catch (err) {
      alert(err);
      setLoading(false)
    }
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
          <DynamicForm form={form.schema} onSubmit={handleSubmit} isLoading={loading} />
        </div>
      )}
    </div>
  );
}

export default App;
