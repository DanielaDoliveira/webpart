import React, { useEffect,useState } from 'react'

import Leaderboard from '../../Components/LeaderBoard/index'

import 
{Container,
  ContainerTitle,
  Title
} from './styles'

import{ Menu} from '../../Components/Menu/index'

import photo from '../../Image/photo.png'

import api from '../../services/api';






export default function Ranking() {
  const [result,setResult] = useState(null)
  useEffect(()=>{
    async function loadApi(){
      const response = await api.get(`ranking`).then(response=>{
          console.log("RESPONSE ===>",response.data);
          setResult(response);
      }).catch(error=>{
        console.log ("ERROR===> ",error);
      })

      
    
    }
    loadApi();

   
  },[])
  return(

  <>

  <Container>
    <ContainerTitle>
      <Title>Ranking</Title>
    </ContainerTitle>
   
   {result ?
   (
    <>
   
 
      {result.data.map((result)=>(
       
          <Leaderboard 
            key={result._id}
        
            urlPhoto = {photo}
            gamerName = {result.username}
            gamerRecord = {result.record}
            
            
            />

          ))}
        
 
       
     
     
     </>
   
   ):<h1>Loading...</h1>
     
   
   }
 
    

   </Container>

  </>
  );

}