import React from "react";
import * as Styled from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faVideo,
  faCocktail,
  faCameraRetro,
  faSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton/LinkButton";
import Card from "../../components/Card/Card";
import FamilyFavBackgroundImages from "../../utils/background";

export default function Home() {
  return (
    <div>
      <Styled.HeroContainer>
        <Styled.HeroHeader>
          A collection of our "ALL-Time" Favourite
        </Styled.HeroHeader>
        <Styled.HeroSubHeader>Movies & TV shows</Styled.HeroSubHeader>

        <Styled.HeroIconsContainer>
          <Styled.HeroIcon icon={faCamera} />
          <Styled.HeroIcon icon={faVideo} />
          <Styled.HeroIcon icon={faCameraRetro} />
          <Styled.HeroIcon icon={faCocktail} />
          <Styled.HeroIcon icon={faSmileWink} />
        </Styled.HeroIconsContainer>
      </Styled.HeroContainer>

      <Styled.ArticleContainer>
        <Styled.ArticleHeader>What's in here</Styled.ArticleHeader>
        <Styled.ArticleContent>
          A collection of our family's favourite movies & Tv shows. A small
          guide for us to walk down the memory lane and for our family &
          friend's to refer various genres. <br />A selection of movies and Tv
          shows we admire ranging from "Horror","Crime","Mystry" to "Romance"
          and "Drama". All show list in one place along with the cast names &
          IMDb ratings.
        </Styled.ArticleContent>
      </Styled.ArticleContainer>

      <Styled.SectionContainer>
        <Card
          primaryHeader="Iconic Movie List"
          subText="Click to check out the movie collection"
        >
          <LinkButton to="/movielist" text="MovieList"></LinkButton>
        </Card>
        <Card
          primaryHeader="Biggest Hit TV shows"
          subText="Check out everlasting comedy sitcoms to the horror by clicking below."
        >
          <LinkButton to="/tvshowlist" text=" Tv show list"></LinkButton>
        </Card>
        <Card
          primaryHeader="Awesome Kids Collection"
          subText=" A collection of all movie name that never get too old watch with kids and be one with them."
        >
          <LinkButton to="/mylist" text="Kids Movies List"></LinkButton>
        </Card>
      </Styled.SectionContainer>
      <Styled.Footer></Styled.Footer>
    </div>
  );
}
