import React, { Component } from 'react'

import { Button, Form , Input,Card, Icon, Image } from 'semantic-ui-react';

export default class About extends Component {
    render() {
        return (
            <div>
                  <div>
            <div>
            <div>
 <Card> <Card.Content>
   <Card.Header>NAME: </Card.Header>
   <Card.Meta>
  <span className='date'>Date :</span>   </Card.Meta>
   <Card.Description>
   <h5>DESCRIPTION: </h5>
   <h5>DATE: </h5>
   </Card.Description>
 </Card.Content>
 <Card.Content extra>
   <a>
     <Icon name='user' />
     QUANTITY: 
   </a>
 </Card.Content>
 </Card>
   </div>

  <div style={{margin: "50px"}}></div>
 <div>
 <Card>
 <Card.Content>
   <Card.Header></Card.Header>
   <Card.Meta>
   <span className='date'></span>
   </Card.Meta>
   <Card.Description>
   <h5>DESCRIPTION: </h5>
  <h5>DATE:</h5>
   </Card.Description>
 </Card.Content>
 <Card.Content extra>
   <a>
     <Icon name='user' />     QUANTITY: 
   </a>
 </Card.Content>
 </Card>
   </div>

 </div>






<div className="row" style={{
marginLeft:"250px"
}}> 
<div >
<Card>
<Card.Content>
  <Card.Header>NAME:</Card.Header>
  <Card.Meta>
  <span className='date'>Date :</span>
  </Card.Meta>
  <Card.Description>
  <h5>DESCRIPTION:</h5>
  <h5>DATE: </h5>
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <a>
    <Icon name='user' />
    QUANTITY: 
  </a>
</Card.Content>
</Card>   </div>
  
  <div style={{margin: "50px"}}></div>

<div>
<Card>
<Card.Content>
  <Card.Header>NAME: </Card.Header>
  <Card.Meta>
  <span className='date'>Date :</span>
  </Card.Meta>
  <Card.Description>
  <h5>DESCRIPTION:</h5>
  <h5>DATE: </h5>
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <a>
    <Icon name='user' />
    QUANTITY: 
  </a>
</Card.Content>
</Card>   </div>
            </div>

            </div>
            </div>
        )
    }
}
