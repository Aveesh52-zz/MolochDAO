import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

import { Link, Switch, Route } from "react-router-dom";
import { Button, Form, Input, Card, Icon, Image } from "semantic-ui-react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPolicyModal: false,
    };
  }

  hidePolicyModal = (e) => {
    this.setState({
      showPolicyModal: false,
    });
  };

  showPolicyModal = (e) => {
    this.setState({
      showPolicyModal: true,
    });
  };

  render() {
    return (
      <div>

<button onClick={this.showPolicyModal}>New proposal</button>
        <div align="center">
          <Modal
            show={this.state.showPolicyModal}
            onHide={this.hidePolicyModal}
            align="center"
          >
            <Modal.Header>
              <Modal.Title>
                <b></b>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Link to="/funding">
                  <h1>Funding</h1>
                </Link>
                <Link to="/member">
                  <h1>Member</h1>
                </Link>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Card.Content extra>
                <div
                  className="ui two buttons"
                  style={{ paddingRight: "20px" }}
                >
                  <Button onClick={this.handlePolicySubmit} basic color="green">
                    CREATE
                  </Button>
                  <div style={{ paddingRight: "20px" }}></div>
                  <Button onClick={this.hidePolicyModal} basic color="red">
                    CANCEL
                  </Button>
                </div>
              </Card.Content>
            </Modal.Footer>
          </Modal>
        </div>

        <div>
          <div>

 
          <div
            className="row"
            style={{
              margin: "50px",
            }}
          >
            <div>
              <Card>
                {" "}
                <Card.Content>
                  <Card.Header>Passed </Card.Header>
                  <Card.Meta>
                    <span className="date">Member Proposal</span>{" "}
                  </Card.Meta>
                  <Card.Description>
                    <h5>New Member: Topround</h5>
                    <h5>Shares: 1 </h5>
                    <h5>Loot: 0 </h5>
                    <h5>Tribute: 0</h5>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    Fund Requested:3.5WETH
                  </a>
                </Card.Content>
              </Card>
            </div>

            <div style={{ margin: "50px" }}></div>
            <div>
              <Card>
                {" "}
                <Card.Content>
                  <Card.Header>Passed </Card.Header>
                  <Card.Meta>
                    <span className="date">Member Proposal</span>{" "}
                  </Card.Meta>
                  <Card.Description>
                    <h5>New Member: Topround</h5>
                    <h5>Shares: 1 </h5>
                    <h5>Loot: 0 </h5>
                    <h5>Tribute: 0</h5>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    Fund Requested:3.5WETH
                  </a>
                </Card.Content>
              </Card>
            </div>

            </div>
          

          <div style={{ margin: "50px" }}></div>

           
        <div
            className="row"
            style={{
              margin: "50px",
            }}
          >
            <div>
              <Card>
                {" "}
                <Card.Content>
                  <Card.Header>Passed </Card.Header>
                  <Card.Meta>
                    <span className="date">Member Proposal</span>{" "}
                  </Card.Meta>
                  <Card.Description>
                    <h5>New Member: Topround</h5>
                    <h5>Shares: 1 </h5>
                    <h5>Loot: 0 </h5>
                    <h5>Tribute: 0</h5>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    Fund Requested:3.5WETH
                  </a>
                </Card.Content>
              </Card>
            </div>

            <div style={{ margin: "50px" }}></div>

            <div>
              <Card>
                {" "}
                <Card.Content>
                  <Card.Header>Passed </Card.Header>
                  <Card.Meta>
                    <span className="date">Member Proposal</span>{" "}
                  </Card.Meta>
                  <Card.Description>
                    <h5>New Member: Topround</h5>
                    <h5>Shares: 1 </h5>
                    <h5>Loot: 0 </h5>
                    <h5>Tribute: 0</h5>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    Fund Requested:3.5WETH
                  </a>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
        </div>

      </div>
    );
  }
}
// }
