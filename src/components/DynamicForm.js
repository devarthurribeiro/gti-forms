import React from "react";
import { Form, Input, Select } from "@rocketseat/unform";

function DynamicForm(props) {
  if (props.form === null) {
    return null;
  }

  return (
    <Form onSubmit={props.onSubmit}>
      {props.form.map(input =>
        input.type === "select" ? (
          <div key={input.name} className="field">
            <div className="control">
              <div className="select is-fullwidth">
                <Select {...input} />
              </div>
            </div>
          </div>
        ) : (
          <div key={input.name} className="field">
            <div className="control">
              <Input {...input} className="input" />
            </div>
          </div>
        )
      )}
      <center>
        <button
          disabled={props.isLoading}
          className="button is-success"
          type="submit"
        >
          Enviar
        </button>
      </center>
    </Form>
  );
}

export default DynamicForm;
