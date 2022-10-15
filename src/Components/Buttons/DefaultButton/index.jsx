import React from 'react';
import { Btn,Content,cont } from './styles';

export const DefaultButton = (props)=>{
  return(
    <Btn onClick={props.clicked}>
    <Content>{props.icon} </Content> <Content>{props.name}</Content>
   
    </Btn>
  );
}