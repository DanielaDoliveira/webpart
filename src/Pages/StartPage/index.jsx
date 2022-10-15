import React from 'react'
import {
  MainContainer,
  Logo,
  BtnRegister,
  BtnLogin,
  Cont_Btn,
  Text,
  Form_Div,
  MainDiv
} from './styles'

import {FormLogin} from '../../Components/Form/FormLogin'
import{Div} from './styles'
export default function StartPage() {

  return(
 <MainDiv>
   <Div>
    <FormLogin></FormLogin>
  </Div>
 </MainDiv>
  
  )
}