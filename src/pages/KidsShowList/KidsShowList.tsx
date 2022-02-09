import React, { useState } from "react";
import ShowsThumbnail from "../../components/ShowsThumbnail/ShowsThumbnail";
// import { useHistory } from "react-router-dom";
import PagesMainContainer from "../../components/PagesMainContainer/PagesMainContainer";
import Button from "../../components/Button/Button";
import styled from "styled-components";

interface ListInterface {
  movieName: String;
  movieGenre: String;
  movieDescription: String;
  movieCharacters: Array<string>;
  imageUrl: string;
  imdbRating: string;
}

const kidsShows: Array<ListInterface> = [
  {
    movieName: "Blippi",
    movieGenre: "Tv show",
    movieDescription:
      "Blippi is an American character on YouTube. Blippi videos are aimed at young children, and are educational. Blippi is a likable character and children love him and family",
    movieCharacters: ["Blippi"],
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566404438l/52384567._SX318_SY475_.jpg",
    imdbRating: "7.1/10",
  },
  {
    movieName: "Peppa Pig",
    movieGenre: "Tv show",
    movieDescription:
      "A little pig named Peppa and her little brother George have journeys everyday with their family and friends and Suspense",
    movieCharacters: ["Papa pig", "Mummy pig", "George", "Peppa"],
    imageUrl:
      "https://images.contentstack.io/v3/assets/blt822c60c126c92e3a/bltf15b4c8b8d8d3afd/617051ce6c56425dcbf63b04/PeppaPigFriendsPack_craft_en_thb.jpg?format=jpg&auto=webp",
    imdbRating: "6.2/10",
  },
  {
    movieName: "PAW Patrol",
    movieGenre: "Movie",
    movieDescription:
      "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos. and Suspence",
    movieCharacters: ["Rocky", "Sky", "Chase"],
    imageUrl:
      "https://www.classification.gov.au/sites/default/files/posters/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
    imdbRating: "6.2/10",
  },
  {
    movieName: "Designated Survival",
    movieGenre: "Action",
    movieDescription:
      " A low-level Cabinet member becomes President of the United States after a catastrophic attack kills everyone above him in the line of succession.",
    movieCharacters: ["Trans", "Leo", "Abby"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZTdkMGNhZmYtNzAxMy00NWJkLThkN2MtNjVkNzY0NzVlMWQ4XkEyXkFqcGdeQXVyMTA0MDgzNTE1._V1_.jpg",
    imdbRating: "7.5/10",
  },
  {
    movieName: "The Big Bang Theory",
    movieGenre: "Comedy",
    movieDescription:
      "Crime A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory. Suspense",
    movieCharacters: [" Jesse Pinkman", "W Salter", "Hank", "Skyler"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg",
    imdbRating: "9.4/10",
  },
  {
    movieName: "Supernatural",
    movieGenre: "Horror",
    movieDescription:
      "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth.",
    movieCharacters: ["Dean", "Sam", "Cass"],
    imageUrl:
      "https://i0.wp.com/abacstallion.com/wp-content/uploads/2019/04/Supernatural-Poster.jpg?fit=2000%2C3000&ssl=1",
    imdbRating: "8.4/10",
  },
  {
    movieName: "Two and a half Men",
    movieGenre: "Comedy",
    movieDescription: "comedy",
    movieCharacters: ["Charlie", "Jake", "Berta", "Alan"],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c9/Twoandahalfmen1.jpg",
    imdbRating: "7.0/10",
  },

  {
    movieName: "Salvation",
    movieGenre: "Mystery",
    movieDescription:
      " An MIT grad student and a tech superstar bring a low-level Pentagon official a staggering discovery--that an asteroid is just six months away from colliding with Earth.",
    movieCharacters: ["Trans", "Leo", "Abby"],
    imageUrl:
      "https://879ed873-madman-com-au.akamaized.net/media/Releases/54086/54086-2016576.jpg",
    imdbRating: "7.0/10",
  },
  {
    movieName: "BlindSpot",
    movieGenre: "Mystery",
    movieDescription:
      " Jane Doe is found in Times Square with no memory and mysterious tattoos on her body.",
    movieCharacters: ["Jane", "Patterson", "Tassa"],
    imageUrl: "https://flxt.tmsimg.com/assets/p11770080_b_v12_se.jpg",

    imdbRating: "7.4/10",
  },
  {
    movieName: "Manifest",
    movieGenre: "Mystery",
    movieDescription:
      "A commercial airliner suddenly reappears after being missing for five years. As those aboard reintegrate into society, they experience guiding voices and visions of events yet to occur, and soon a deeper mystery unfolds.",
    movieCharacters: ["Mick", "Carl", "Saanvi"],
    imageUrl: "https://flxt.tmsimg.com/assets/p17602726_b_v13_ab.jpg",

    imdbRating: "7.2/10",
  },
];

export default function KidsShowList() {
  const [kidsShowType, setKidsShowType] = useState(kidsShows);

  const renderAllKidsShows = () => {
    setKidsShowType(kidsShows);
  };

  const showTvShowsType = (e: any) => {
    const KidsShowsGenre = kidsShows.filter(
      (kidsShow) => kidsShow.movieGenre === e.target.innerText
    );
    setKidsShowType(KidsShowsGenre);
  };

  function renderMovies(kidslist: ListInterface) {
    return (
      <>
        <ShowsThumbnail list={kidslist}></ShowsThumbnail>
      </>
    );
  }

  return (
    <>
      <PagesMainContainer text=" The names of our all time favourite Tv Shows with IMDb rating">
        <Button
          text="Comedy"
          onClick={(e: any) => {
            showTvShowsType(e);
          }}
        ></Button>

        <Button
          text="Horror"
          onClick={(e: any) => {
            showTvShowsType(e);
          }}
        ></Button>

        <Button
          text="Mystery"
          onClick={(e: any) => {
            showTvShowsType(e);
          }}
        ></Button>

        <Button
          text="Action"
          onClick={(e: any) => {
            showTvShowsType(e);
          }}
        ></Button>
        <Button text="View All" onClick={renderAllKidsShows}></Button>
      </PagesMainContainer>
      <KidsShowsListContainer>
        <div>{kidsShowType.map(renderMovies)}</div>
      </KidsShowsListContainer>
    </>
  );
}

const KidsShowsListContainer = styled.div`
  margin: 30px;
  padding: 5px;
  box-shadow: 5px 5px 10px 5px #cea1a1;
`;
