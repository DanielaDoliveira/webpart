import React,{useState} from 'react';
import 
{ Main,Navbar,
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
  
    navigate('/home');

  }

  function handleClickStartPage(){
  
    navigate('/');

  }
  function handleClickProfilePage(){
  
    navigate('/profile');

  }
  function handleClickCreditsPage(){
  
    navigate('/credits');

  }
  return(

<Main>
<Navbar>
      <Logo>
       <Link to= "/home"> Adventure Quest</Link>
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
   
      clicked = {handleClickStartPage}
      name = "Logout"
     / >
      

      
      </OptionsMenu>
    </Navbar>

</Main>
  
  );

}