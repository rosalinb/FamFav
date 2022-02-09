import React from "react";
import styled from "styled-components";
import FamilyFavBackgroundImages from "../../utils/background";

interface PagesMainContainerProps {
  text: string;
  children: any;
}

export default function PagesMainContainer(props: PagesMainContainerProps) {
  return (
    <PagesHeroContainer>
      <PageHeroHeader>{props.text}</PageHeroHeader>
      <GenreButtonsContainer>{props.children}</GenreButtonsContainer>
    </PagesHeroContainer>
  );
}

const PagesHeroContainer = styled.div`
  background-image: url(${FamilyFavBackgroundImages.pageBackgroundImage});
  width: 100%;
  margin: auto;
  padding: 80px 0px 50px;
  height: 50vh;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const PageHeroHeader = styled.h3`
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 60px;
  text-align: center;
  /* width: 50vw; */
  margin: auto;
  padding: 60px;
`;

export const GenreButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  gap: 3vw;
`;
