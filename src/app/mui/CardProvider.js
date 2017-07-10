import React, { Component } from 'react';
import { Card, CardText, CardHeader } from 'material-ui/Card';

const CardProvider = (props) => (
    <Card>
      <CardHeader
        title={props.title}
        style={props.style.header}
      />
      <CardText style={props.style.text}>
        {props.children}
      </CardText>
    </Card>
);

export default CardProvider;