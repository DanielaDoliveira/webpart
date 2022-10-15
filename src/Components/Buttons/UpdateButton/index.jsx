import React from 'react';
import { Btn,Content,cont } from './styles';

export const UpdateButton = (props)=>{
  return(
    <Btn onClick={props.clicked}>
     <Content>{props.name}</Content>
   
    </Btn>
  );
}