import React from 'react';
import { ButtonNav } from './styles';
import {Link} from 'react-router-dom'

export const ButtonMenu = (props)=>{
  return(
    <ButtonNav
    className={'bg-[{props.color}]'}
    onClick={props.clicked}>
    {props.name} 
    
    </ButtonNav>

  );
}