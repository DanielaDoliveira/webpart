import React,{useState} from 'react';
import 
{ Navbar,
  Logo,
  Option,
  OptionsMenu
 } from './styles';
import {Link, useNavigate} from 'react-router-dom'
import { ButtonMenu} from '../Buttons/ButtonMenu/index'

export const Menu = ()=>{

 const navigate = useNavigate();

  function handleClickRankingPage(){
  
    navigate('/ranking');

  }
  return(
    <Navbar>
      <Logo>
       <Link to= "/"> Adventure Quest</Link>
      </Logo>
      <OptionsMenu>

      <ButtonMenu 
      clicked = {()=>{}}
      name = "Profile"
     / >
       
       <ButtonMenu
       
      clicked = {handleClickRankingPage}
     
      name = "Ranking"
     / >

    <ButtonMenu 
     
      clicked = {()=>{}}
      name = "Credits"
     / >

      
          <ButtonMenu 
   
      clicked = {()=>{}}
      name = "Logout"
     / >
      

      
      </OptionsMenu>
    </Navbar>
  );

}