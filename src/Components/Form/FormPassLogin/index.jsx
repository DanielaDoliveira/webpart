import React from 'react'
import { ContainerForm,LabelForm,InputFOrm, DivForm
 } from './styles'


export const FormPassLogin = (props)=>{

return(
  <ContainerForm>
   <DivForm>
   <LabelForm for = {props.nameLabel}>{props.name} </LabelForm>
    <InputFOrm type = 'password'
      placeholder="•••••••••" required
      >
      </InputFOrm>
   </DivForm>
  
  </ContainerForm>
)

}