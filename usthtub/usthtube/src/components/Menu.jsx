import React from "react";
import styled from "styled-components";
import YouTube from "../img/logo.png";
import { FaHome, FaCompass, FaBell, FaFilm, FaHistory, FaMusic, FaGamepad, FaBasketballBall, FaTv, FaUserCircle, FaCog, FaFlag, FaQuestionCircle, FaSun } from 'react-icons/fa'; 
import { MdVideoLibrary } from 'react-icons/md'
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;   // To not move the menu while scrolling vertically
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 9px 10px;
  font-size: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YouTube} />
            USTH Tube
          </Logo>
        </Link>
        <Item>
          <FaHome />
          Home
        </Item>
        <Item>
          <MdVideoLibrary />
          Shorts
        </Item>
        <Item>
          <FaCompass />
          Explore
        </Item>
        <Item>
          <FaBell />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <FaFilm />
          Library
        </Item>
        <Item>
          <FaHistory />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <FaUserCircle />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF USTH TUBE</Title>
        <Item>
          <FaMusic />
          Music
        </Item>
        <Item>
          <FaBasketballBall />
          Sports
        </Item>
        <Item>
          <FaGamepad />
          Gaming
        </Item>
        <Item>
          <FaFilm />
          Movies
        </Item>
        <Item>
          <FaUserCircle />
          News
        </Item>
        <Item>
          <FaTv />
          Live
        </Item>
        <Hr />
        <Item>
          <FaCog />
          Settings
        </Item>
        <Item>
          <FaFlag />
          Report
        </Item>
        <Item>
          <FaQuestionCircle />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <FaSun />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;