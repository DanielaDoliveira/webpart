
import{
  Container,
  ListContainer,
  InfoContainer,
  RankContainerNumber,
  GamerProfile,
  GamerName,
  GamerRecord,
  GamerImg,
  GamerTextInfo,
  
}from './styles'


export default function LeaderBoard(props) {
return(

<Container>

  
      <ListContainer>
           
         
            <InfoContainer>
               <GamerProfile>
                  <GamerImg src = {props.urlPhoto}/>
                  <GamerTextInfo>
                  <GamerName>{props.gamerName}</GamerName>
               <GamerRecord> {props.gamerRecord}</GamerRecord>
                  </GamerTextInfo>

           
               </GamerProfile>
              
            </InfoContainer>
      </ListContainer>

    

</Container>

);


}