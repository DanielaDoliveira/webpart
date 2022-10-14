import React from 'react'
import{
  Card_Container,
  Card_Header,
  Name_achievement,
  Desc_achievement
} from './styles'
import {Trophy} from "phosphor-react";

export const Card = ()=>{
  return(

    <Card_Container>

          <Card_Header>
          <Trophy size={42} color="#799d15" />
            <Name_achievement>
              Champion
            </Name_achievement>
           
           
          </Card_Header>


          <Desc_achievement>
              You defeat 1000 enemies
            </Desc_achievement>


            
        </Card_Container>
  )
}