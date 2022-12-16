import "./index.css";
// import bakeryData from "./assets/project-data.json";
import Nav from "./components/Nav"
import Home from "./components/Home";
import Projects from "./components/Projects";
import IterativeDesign from "./components/IterativeDesign.js";
import ShoppingCart from "./components/ShoppingCart.js";
import {Routes, Route} from 'react-router';
import { ChakraProvider, extendTheme, Container} from '@chakra-ui/react'
import ResponsiveRedesign from "./components/ReponsiveRedesign";
import Persona from "./components/Persona";
import theme from './components/Theme.js'
import Model from "./components/Model.js"
import Blog from "./components/Blog.js"


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
// bakeryData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });
/* ############################################################## */




function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
 
  return (
      <div clasname='APP'>
        <ChakraProvider theme={theme}>
        <Nav/>
          <div id="model">
            <Container maxWidth="2xl" centerContent>
              <div id='goHere'>
              <Model></Model>
              </div>  
            </Container>
          </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="Projects" element={<Projects/>}/>
          <Route path="IterativeDesign" element={<IterativeDesign/>}/>
          <Route path="shoppingCart" element={<ShoppingCart/>}/>
          <Route path="responsiveRedesign" element={<ResponsiveRedesign/>}/>
          <Route path="persona" element={<Persona/>}/>
          <Route path="Blog" element={<Blog/>}/>
        </Routes>
        </ChakraProvider>
    </div>
  );
}

export default App;
