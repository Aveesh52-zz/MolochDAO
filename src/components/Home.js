import React, { Component } from "react";
import { Button, Form, Input, Card, Icon, Image } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Card>
            {" "}
            <Card.Content>
              <Card.Header>Connected </Card.Header>
              <Card.Meta>
                <span className="date">
                  0x720E1fa107A1Df39Db4E78A3633121ac36Bec132
                </span>{" "}
              </Card.Meta>
              <Card.Description>
                <h5>Balance</h5>
                <h5>Shares: 1 </h5>
                <h5>ETH: 0.530045450 </h5>
                <h5>Tribute: 0</h5>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}
