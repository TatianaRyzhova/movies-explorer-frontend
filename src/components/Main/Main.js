import React from "react";
import Header from '../Header/Header';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe"
import Footer from "../Footer/Footer";

function Main({loggedIn}) {
  return (
    <main className="content">
      <Header loggedIn={loggedIn}/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Footer/>
    </main>
  )
}

export default Main;
