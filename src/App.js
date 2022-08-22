import { Header } from "./components/header/header";
import styled, { createGlobalStyle } from "styled-components";
import font from "./assets/fonts/IbarraRealNova-Italic-VariableFont_wght.ttf";
import { AppRoutes } from "./components/pages/routes";
import { Footer } from "./components/footer/footer";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
      <Footer/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'wiki-font';
  src: url(${font}) FORMAT('truetype');
} 

  *{
    font-family: 'wiki-font', sans-serif;
    padding:0;
    margin:0;
    
  }
  html{
    height:100%;
    body{
      height:100%;
    }
  }
`;

export default App;
