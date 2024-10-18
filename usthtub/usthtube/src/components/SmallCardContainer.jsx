import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 10px; 
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;             
  flex-wrap: wrap;          
  gap: 50px;                
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 10px 0;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.soft}; 
  color: ${({ theme }) => theme.text}; 
`;

const SmallCardContainer = ({ children }) => {
  const [showMore, setShowMore] = useState(false); 
  const initialCount = 5; 
  const totalCards = React.Children.count(children); 

  const displayedCards = showMore ? totalCards : initialCount; 

  return (
    <Container>
      <CardContainer>
        {React.Children.toArray(children).slice(0, displayedCards)}
      </CardContainer>
      {displayedCards < totalCards && (
        <Button onClick={() => setShowMore(true)}>Show more</Button>
      )}
      {showMore && (
        <Button onClick={() => setShowMore(false)}>Hide</Button>
      )}
    </Container>
  );
};

export default SmallCardContainer;
