import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FamilyFavBackgroundImages from "../../utils/background";
import FamilyFavColor from "../../utils/color";

export const HeroContainer = styled.div`
  /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); */
  background-image: url(${FamilyFavBackgroundImages.homePageBackgroundImage});
  width: 100%;
  margin: auto;
  padding: 80px 0px 50px;
  height: 60vh;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const HeroHeader = styled.h1`
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 60px;
  text-align: center;
  /* width: 50vw; */
  margin: auto;
  padding: 60px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
    width: 95vw;
  }
`;
export const HeroSubHeader = styled.h3`
  color: white;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HeroIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4vw;
  margin-top: 80px;
  padding: 60px;
`;

export const HeroIcon = styled(FontAwesomeIcon).attrs({ size: "6x" })`
  color: #8fdde7;
  padding: 20px;

  :hover {
    color: white;
    transition: 200ms;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const ArticleContainer = styled.article`
  width: 80%;
  margin: auto;
  height: 30vh;
  padding: 50px;
  /* background-image: url(${FamilyFavBackgroundImages.articleImage}); */
`;

export const ArticleHeader = styled.h4`
  font-size: 50px;
  color: ${FamilyFavColor.secondaryTextColor};
  font-family: cursive;
  margin-bottom: 20px;
`;

export const ArticleContent = styled.p`
  font-size: 25px;
  color: ${FamilyFavColor.primaryTextColor};
  padding: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const SectionContainer = styled.section`
  width: 100%;
  margin: auto;
  padding: 80px px 50px;
  margin-top: 50px;
  gap: 1vw;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 100px auto auto;
  border-top: 1px solid lightgrey;
  padding: 40px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;
