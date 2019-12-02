import React from "react";
import { Form, Input, Select } from "@rocketseat/unform";

function DynamicForm(props) {
  if (props.form === null) {
    return null;
  }
  return (
    <Form onSubmit={props.onSubmit}>
      {props.form.map(input => {
        if (input.type === "select") {
          return (
            <div key={input.name} className="field">
              <div className="control">
                <div className="select is-fullwidth">
                    <Select name={input.name} placeholder={input.placeholder} options={input.options} />
                </div>
              </div>
            </div>
          );
        }
        return (
          <div key={input.name} className="field">
            <div className="control">
            <Input
              placeholder={input.placeholder}
              name={input.name}
              className="input is-fullwidth"
            />
            </div>
          </div>
        );
      })}
      <center>
        <button className="button is-success" type="submit">
          Enviar
        </button>
      </center>
    </Form>
  );
}

export default DynamicForm;
