import React from 'react';
import { Btn,Content,cont } from './styles';

export const DefaultButton = (props)=>{
  return(
    <Btn>
    <Content>{props.icon} </Content> <Content>{props.name}</Content>
   
    </Btn>
  );
}