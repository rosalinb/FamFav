import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styled";

export default function NavBar() {
  return (
    <div>
      <Styled.NavContainer isSticky>
        <Styled.Logo to="/">FamFav</Styled.Logo>
        <div>
          <Styled.Ul>
            <Styled.Li>
              <Styled.Link to="/">Home</Styled.Link>
            </Styled.Li>
            <Styled.Li>
              <Styled.Link to="/movielist">Movies</Styled.Link>
            </Styled.Li>
            <Styled.Li>
              <Styled.Link to="/tvshowlist">Tv Shows</Styled.Link>
            </Styled.Li>
            <Styled.Li>
              <Styled.Link to="/kidsshowlist">Kids</Styled.Link>
            </Styled.Li>
          </Styled.Ul>
        </div>
      </Styled.NavContainer>
    </div>
  );
}
