import React from "react";
import styled from "styled-components";

interface ButtonDetailProps {
  onClick?: any;
  text: string;
}

export default function Button(props: ButtonDetailProps) {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}

const StyledButton = styled.button`
  font-size: 40px;
  background-color: #955670;
  color: white;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #821d30;
  cursor: pointer;
  border-radius: 15px;

  :hover {
    color: black;
  }
`;
