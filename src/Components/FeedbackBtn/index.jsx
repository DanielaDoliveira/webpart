
import React from 'react'
import { Button,Container } from './styles';

export const FeedbackBtn = (props)=>{

  return (
  <Container>
    <Button>
      {props.image}
    </Button>
  </Container>
 

  );
}