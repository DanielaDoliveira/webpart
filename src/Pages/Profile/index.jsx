

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
import { DefaultButton } from '../../Components/Buttons/DefaultButton';
import { Gear,User,Trash} from "phosphor-react";
import { Card } from '../../Components/Card';
import { useState } from 'react';
import { DeleteButton } from '../../Components/Buttons/DeleteButton';
import { Form } from '../../Components/Form';
import { FormEmail } from '../../Components/Form/FormEmail';
import { FormPassword } from '../../Components/Form/FormPassword';
import { UpdateButton } from '../../Components/Buttons/UpdateButton';
export default function Profile() {
  const[account,setAccount] = useState(false);
  function AccountSet(){
    return setAccount(!account);
  }
  return(
  <Cont>
  <Container_Left>

    <Content_container_left>

      <Profile_photo src = {profile}/>

      <User_name>
        player_00
      </User_name>

{!account &&(
    <DefaultButton
    name = "Account"
    clicked = {AccountSet}
    icon = {<Gear size={25} color="#ecdfdf"/>}
/>

)

}

{account &&(
 <>
  <DefaultButton
    name = "Change Avatar"
    clicked = {()=>{}}
    icon = {<User size={25} color="#ecdfdf"/>}
/>
<DeleteButton
    name = "DELETE ACCOUNT"
    clicked = {()=>{}}
    icon = {<Trash size={25} color="#ecdfdf"/>}
    color = "#BC1414"
/>
 
 </>

)}
    
  
    </Content_container_left>

    </Container_Left>


    <Container_Right>
      
     
{!account &&(
<>
<Content_title>
<Title>
  Achievements
</Title>
</Content_title>

<Container_Cards>
<Card/>
<Card/>
</Container_Cards>
</>

)}
{account &&(
  <>
  <Form
  nameLabel="Real Name"
  name = "Real Name:"
  />

<Form
  nameLabel="User Name"
  name = "User Name:"
  />

  <FormEmail
  nameLabel="Email"
  name = "Email address:"
  />

  <FormPassword
  nameLabel="Password"
  name = "Password:"
  />

<FormPassword
  nameLabel="Confirm Password"
  name = "Confirm Password:"
  />

  <UpdateButton
  
  name =  "SAVE & UPDATE"
  clicked = {()=>{}}
  />
  </>
)}


     
      
      </Container_Right>

   
  
  
  </Cont>

  );
}