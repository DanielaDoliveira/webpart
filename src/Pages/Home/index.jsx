
import React from 'react'
import { Menu } from '../../Components/Menu'
import { Unity } from 'react-unity-webgl';
import {useUnityContext} from 'react-unity-webgl'
import { ContainerGame } from '../../Components/ContainerGame/styles';
import { FeedbackBtn } from '../../Components/FeedbackBtn';
import { ChatDots} from "phosphor-react";

export default function Home() 
{
  const {unityProvider} = useUnityContext({
    loaderUrl:"Build/advbuild.loader.js",
    dataUrl: "Build/advbuild.data",
    frameworkUrl: "Build/advbuild.framework.js",
    codeUrl: "Build/advbuild.wasm",
    webglContextAttributes:{
      preserveDrawingBuffer:true,
    },
  });


  return(
    <>
  
 
      <ContainerGame>
      <FeedbackBtn image ={ <ChatDots size={50} color="#97aa09" />}/>
        <Unity
          style = {{background: '#000',width: '100%', height: '100%'}}
          unityProvider={unityProvider}
        / >


      </ContainerGame>
    
   

   
    </>
  );

}