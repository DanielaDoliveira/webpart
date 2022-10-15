import React from 'react'
import { ContainerForm,LabelForm,InputFOrm
 } from '../styles'


export const FormPassword = (props)=>{

return(
  <ContainerForm>
    <LabelForm for = {props.nameLabel}>{props.name} </LabelForm>
      <InputFOrm type = 'password'
      placeholder="•••••••••" required
      >
      </InputFOrm>
  
  </ContainerForm>
)

}