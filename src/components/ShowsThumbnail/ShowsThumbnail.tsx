import React, { useState } from "react";
import { ListInterface } from "../../pages/MoviePage/MoviePage";
import Button from "../Button/Button";
import * as Styled from "./styled";
import FamilyFavColor from "../../utils/color";

interface ListDetailProps {
  list: ListInterface;
}

export default function ShowsThumbnail(props: ListDetailProps) {
  const [shouldShowCharacters, setShouldShowCharacters] = useState(false);
  const [showImdbRating, setshowImdbRating] = useState(false);
  const { list } = props;

  if (!list) {
    return <div>"Something went wrong..."</div>;
  }

  return (
    <Styled.ShowsListContainer>
      <Styled.ShowDetailsContainer>
        <Styled.ShowName>{list.movieName}</Styled.ShowName>

        <Styled.ShowGenre>
          Movie Genres: {""}
          {list.movieGenre}
        </Styled.ShowGenre>

        <Styled.ShowDescription>{list.movieDescription}</Styled.ShowDescription>

        <Button
          onClick={() => {
            setShouldShowCharacters(!shouldShowCharacters);
          }}
          text={!shouldShowCharacters ? "Stars" : "Hide Cast"}
        ></Button>

        {shouldShowCharacters && (
          <Styled.ShowCast>
            StarCast:{" "}
            {list.movieCharacters.map((character, index: number) => {
              return (
                <span>
                  {character}
                  {index !== list.movieCharacters.length - 1 && ", "}
                </span>
              );
            })}
          </Styled.ShowCast>
        )}

        <Button
          onClick={() => {
            setshowImdbRating(!showImdbRating);
          }}
          text={!showImdbRating ? "IMDb Rating" : "Hide Rating"}
        ></Button>
        {showImdbRating && (
          <Styled.ShowImdbRating>{list.imdbRating}</Styled.ShowImdbRating>
        )}
      </Styled.ShowDetailsContainer>

      <div>
        <img src={list.imageUrl} style={{ width: 200 }} />
      </div>
    </Styled.ShowsListContainer>
  );
}
