import React from 'react'
import { ContainerForm,LabelForm,InputFOrm
 } from '../styles'


export const FormEmail = (props)=>{

return(
  <ContainerForm>
    <LabelForm for = {props.nameLabel}>{props.name} </LabelForm>
      <InputFOrm type = 'email'>
      </InputFOrm>
  
  </ContainerForm>
)

}