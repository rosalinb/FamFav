import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

interface LinkButtonProps {
  to: string;
  text: string;
  onClick?: any;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <div>
      <StyledLink to={props.to} onClick={props.onClick}>
        {props.text}
      </StyledLink>
    </div>
  );
}

const StyledLink = styled(RouterLink)`
  font-size: 30px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
  background-color: #5f093d;
  color: white;

  font-weight: bold;
  /* letter-spacing: 1px; */
  outline: none;
  border: none;
  transition: 300ms;
  text-decoration: none;
  display: inline-block;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    color: black;
  }
`;
