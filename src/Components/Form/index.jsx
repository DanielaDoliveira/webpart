import React from 'react'
import { ContainerForm,LabelForm,InputFOrm
 } from './styles'


export const Form = (props)=>{

return(
  <ContainerForm>
    <LabelForm for = {props.nameLabel}>{props.name} </LabelForm>
      <InputFOrm type = 'text'>
      </InputFOrm>
  
  </ContainerForm>
)

}