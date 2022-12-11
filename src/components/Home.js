import React from 'react';
import Main from "./Main"
import {Container} from '@chakra-ui/react'
import Model from "./Model"

const Home = () => {
    return (
      <div>
     <div id="model">
      <Container maxWidth="2xl" centerContent>
      <div id='goHere'>
        <Model></Model>
      </div>  
      </Container>
      </div>
       <div>
       <Container maxWidth="5xl" centerContent>
       <Main></Main> 
         </Container> 
     </div>

      </div>


    
    );
  };
    
  export default Home;