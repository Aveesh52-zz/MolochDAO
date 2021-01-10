import React, { Component } from "react";

import { Button, Form, Input } from "semantic-ui-react";

export default class Funding extends Component {
  render() {
    return (
      <div>
        <h1>New Member Proposal</h1>
        <div style={{ fontSize: "20px" }}>
          <Form.Field control={Input} onChange={this.handleChange} name="Name">
            <label>Applicant</label>
            <input placeholder="Name" />
          </Form.Field>
          <Form.Field
            control={Input}
            onChange={this.handleChange}
            name="orderstatus"
          >
            <label>TokenTribute</label>
            <input placeholder="Order status" />
          </Form.Field>
          <Form.Field
            control={Input}
            onChange={this.handleChange}
            name="Description"
          >
            <label>ShareRequested</label>
            <input placeholder="Description" />
          </Form.Field>
          <Form.Field
            control={Input}
            onChange={this.handleChange}
            name="Quantity"
          >
            <label>Details</label>
            <input placeholder="Quantity" />
          </Form.Field>
      
          <button onClick={this.showPolicyModal}>Submit</button>
        </div>
      </div>
    );
  }
}
