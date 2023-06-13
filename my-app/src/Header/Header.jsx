import React from "react";
import "./Header.css";
import { BsYoutube,BsFacebook,BsTwitter,BsInstagram,BsWhatsapp,BsPinterest,BsLinkedin } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Header() {
//  const names = [{name :"EXPERIENCE KERALA" },{name :"WHERE TO GO"},{name :"WHERE TO STAY"},{name :"THINGS TO DO"},{name :"PLAN YOUR TRIP"},{name :"TRAVEL CARE"},{name :"E BROCHURESE"},{name :"E NEWSLETTER"}]

  return (
    <div className="">
      <div className="main">
        <div className="logo">
          <img
            className="logo-img"
            src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017"
            alt=""
          />
        </div>
        <div className="one" style={{flexDirection:'row'}}>
          <div className="icons">
            <BsYoutube />
            <BsFacebook/>
            <BsTwitter/>
           <BsInstagram/>
           <BsWhatsapp/>
           <BsPinterest/>
           <BsLinkedin/>
          </div>

          <div className="nav2" >
            {/* {names.map((obj)=> */}

          <Navbar   >
      <Container >
        <Navbar.Brand className="text-white " style={{fontSize:'15px'}}   href="#home"> EXPERIENCE KERALA </Navbar.Brand>
        <Navbar.Brand className="text-white"  style={{fontSize:'15px'}} href="#home"> WHERE TO GO </Navbar.Brand>
        <Navbar.Brand className="text-white"  style={{fontSize:'15px'}} href="#home"> WHERE TO STAY </Navbar.Brand>
        <Navbar.Brand className="text-white"  style={{fontSize:'15px'}} href="#home"> THINGS TO DO </Navbar.Brand>
        <Navbar.Brand className="text-white"  style={{fontSize:'15px'}} href="#home"> PLAN YOUR TRIP </Navbar.Brand>
        <Navbar.Brand className="text-white"  style={{fontSize:'15px'}}href="#home"> TRAVEL CARE </Navbar.Brand>
        <Navbar.Brand className="text-white"  style={{fontSize:'15px'}} href="#home"> E BROCHURESE </Navbar.Brand>
        <Navbar.Brand className="text-white"  style={{fontSize:'15px'}} href="#home"> E NEWSLETTER </Navbar.Brand>
       
        
      </Container>
    </Navbar>
    {/* )} */}
            
            
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default Header;
