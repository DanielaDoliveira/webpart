import React from 'react'
import { Span,Div, EmailDiv, EmailInput,DescLabel,DivBtn,BtnContainer,
  CheckDiv,CheckInput,CheckLabel,DivRememberForgot,AForgot, PRegister, ARegister, GeneralDivBtn
 } from './styles'

import {LoginButton} from '../../Buttons/LoginButton'
import {GameController, IdentificationBadge} from 'phosphor-react'
export const FormLogin = (props)=>{

return(
<>
<Span>
<Div>
<EmailDiv>
<DescLabel>Email Address:</DescLabel>
  <EmailInput type = 'text'
  placeholder="Email Address"/>
</EmailDiv>
</Div>
<Div>
<EmailDiv>
<DescLabel>Password:</DescLabel>
  <EmailInput type = 'password'
  placeholder="Password"/>
</EmailDiv>
<GeneralDivBtn>
<DivBtn>


 <DivRememberForgot>

 <CheckDiv>
    <CheckInput type = "checkbox"/>
    <CheckLabel>Remember me</CheckLabel>
  </CheckDiv>

  <AForgot href = "#">Forgot Password? </AForgot>

 </DivRememberForgot>

 <BtnContainer>
      <LoginButton
      icon = {<GameController size={25} color="#fcfcfc" />}
      name = "Login"
      />

<PRegister>
  Don't Have an account?

  <ARegister>Register</ARegister>
</PRegister>
  </BtnContainer>

</DivBtn>




</GeneralDivBtn>


</Div>
</Span>
</>
)

}