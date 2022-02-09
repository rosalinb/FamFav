import React from "react";
import styled from "styled-components";

interface CardProps {
  primaryHeader: string;
  subText: string;
  children: any;
}

export default function Card(props: CardProps) {
  return (
    <StyledCard>
      <PrimaryHeader>{props.primaryHeader}</PrimaryHeader>
      <SecondaryHeader>{props.subText}</SecondaryHeader>
      {props.children}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 50px;
  box-shadow: 1px 1px 5px 0px #f8afa6;
  transition: 300ms;
  background-color: white;
  text-align: center;
  width: "100%";
  height: 30vh;
  margin: 30px;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 5px 5px 15px 5px#CEA1A1;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const PrimaryHeader = styled.h3`
  text-align: center;
  margin: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #333652;
`;
const SecondaryHeader = styled.p`
  text-align: center;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #613659;
`;
