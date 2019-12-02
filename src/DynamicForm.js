import React, { Component } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';



function DynamicForm(props) {
    return (
        <Form onSubmit={(props.onSubmit)}>
        { props.form.map( input => {
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
    )
}

export default DynamicForm