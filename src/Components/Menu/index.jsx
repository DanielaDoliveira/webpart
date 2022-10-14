import React,{useState} from 'react';
import 
{ Navbar,
  Logo,
  Container,
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
  function handleClickHomePage(){
  
    navigate('/');

  }
  function handleClickProfilePage(){
  
    navigate('/profile');

  }
  function handleClickCreditsPage(){
  
    navigate('/credits');

  }
  return(

  <Navbar>
      <Logo>
       <Link to= "/"> Adventure Quest</Link>
      </Logo>
      <OptionsMenu>

      <ButtonMenu 
      clicked = {handleClickProfilePage}
      name = "Profile"
     / >
       
       <ButtonMenu
       
      clicked = {handleClickRankingPage}
     
      name = "Ranking"
     / >

    <ButtonMenu 
     
      clicked = {handleClickCreditsPage}
      name = "Credits"
     / >

      
          <ButtonMenu 
   
      clicked = {handleClickHomePage}
      name = "Logout"
     / >
      

      
      </OptionsMenu>
    </Navbar>

  
  );

}