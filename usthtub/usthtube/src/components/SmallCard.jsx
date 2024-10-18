import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 200px; 
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column; 
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.soft}; 
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 300px; 
  background-color: #999;
`;

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column; 
  gap: 8px;
`;

const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #999;
  margin-bottom: 10px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const SmallCard = () => {
  return (
    <Link to="/shortvideo" style={{ textDecoration: "none" }}>
      <Container>
        <Image
          src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/462368125_956184886317960_3079959748132720328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=5cyzF7CDGvgQ7kNvgGZdXeS&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AnY2hYVJKXdaze-sUZWrOCR&oh=03_Q7cD1QEr4RrWvak47S0Feo0j9bxByIJxbG5Dkg8bGVq66WiLyA&oe=6739C4CB"
        />
        <Details>
          <ChannelImage
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/440943074_1170747797439436_348425053410420833_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=k3xetNTz_QgQ7kNvgFmUGFW&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AbO39JyR0iebMKfId55Qk9H&oh=00_AYCR6jbwhXjjrUuRUmoexangjYOk7hanJuTK9bM3RLLOCg&oe=67184A43"
          />
          <Texts>
            <Title>Test Reels Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default SmallCard;
