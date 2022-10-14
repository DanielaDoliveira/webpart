

import React from 'react'
import {
  Cont,
  Container_Left,
  Container_Right,
  Content_container_left,
  Content_container_right,
  Profile_photo,
  User_name,
  Content_title,
  Title,
  Container_Cards
  


} from './styles'
import profile from '../../Image/photo.png'
import { DefaultButton } from '../../Components/Buttons/ButtonMenu/DefaultButton';
import { Gear} from "phosphor-react";
import { Card } from '../../Components/Card';
export default function Profile() {

  return(
  <Cont>
  <Container_Left>

    <Content_container_left>

      <Profile_photo src = {profile}/>

      <User_name>
        player_00
      </User_name>

      <DefaultButton
      name = "Account"
      icon = {<Gear size={25} color="#ecdfdf" />}
      />
    </Content_container_left>

    </Container_Left>


    <Container_Right>
      
     

          <Content_title>
              <Title>
                Achievements
              </Title>
          </Content_title>

        <Container_Cards>
        <Card/>
        <Card/>
        </Container_Cards>


     
      
      </Container_Right>

   
  
  
  </Cont>

  );
}