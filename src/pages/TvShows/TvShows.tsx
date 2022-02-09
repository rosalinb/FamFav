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

// const movies: Array<MovieInterface> = [
//   {
//     movieName: "The Green Mile",
//     movieGenre: "Drama",
//     movieDescription: "Fantasy",
//     movieCharacters: ["Tom Hanks", "Michael Clarke Duncan"],
//     imageUrl:
//       "https://nathanburgessinsights.files.wordpress.com/2018/10/img_1794.jpg?w=584",
//     imdbRating: "8.6/10",
//   },
//   {
//     movieName: "Forrest Gump",
//     movieGenre: "Drama",
//     movieDescription: "Fantasy",
//     movieCharacters: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
//     imdbRating: "8.8/10",
//   },
//   {
//     movieName: "London Has Fallen",
//     movieGenre: "Action",
//     movieDescription: "Triller",
//     movieCharacters: ["Gerard Butler", "Aaron Eckhart", "Morgan Freeman"],
//     imageUrl:
//       "https://images-na.ssl-images-amazon.com/images/I/A1FBieXKitL._RI_.jpg",
//     imdbRating: "5.9/10",
//   },
// ];

const tvShows: Array<ListInterface> = [
  {
    movieName: "The Ranch",
    movieGenre: "Comedy",
    movieDescription:
      "Love The son of a Colorado rancher returns home from a semi-pro football career to run the family business. family",
    movieCharacters: ["Ashton Kutcher", "Sam Elliott", "Grady Lee Richmond"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTYxOTU5ODE0OV5BMl5BanBnXkFtZTgwNzM0MzQ1MDI@._V1_.jpg",
    imdbRating: "7.4/10",
  },
  {
    movieName: "Breaking Bad",
    movieGenre: "Action",
    movieDescription:
      "Crime and A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    movieCharacters: [" Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    imageUrl: "https://images.indianexpress.com/2018/01/breaking-bad-7591.jpg",
    imdbRating: "9.4/10",
  },
  {
    movieName: "24",
    movieGenre: "Action",
    movieDescription:
      "Jack Bauer races against the clock to subvert terrorist plots and save his nation from ultimate disaster. and Suspence",
    movieCharacters: [
      "Kiefer Sutherland",
      "Carlos Bernard",
      "Mary Lynn Rajskub",
    ],
    imageUrl: "https://cmsimg-290a.kxcdn.com/bigarticles/24_tv_series.jpg",
    imdbRating: "8.3/10",
  },
  {
    movieName: "Designated Survival",
    movieGenre: "Action",
    movieDescription:
      " A low-level Cabinet member becomes President of the United States after a catastrophic attack kills everyone above him in the line of succession.",
    movieCharacters: ["Kiefer Sutherland", "Adan Canto", "Italia Ricci"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZTdkMGNhZmYtNzAxMy00NWJkLThkN2MtNjVkNzY0NzVlMWQ4XkEyXkFqcGdeQXVyMTA0MDgzNTE1._V1_.jpg",
    imdbRating: "7.5/10",
  },
  {
    movieName: "The Big Bang Theory",
    movieGenre: "Comedy",
    movieDescription:
      "Crime A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory. Suspense",
    movieCharacters: [" Johnny Galecki", "Jim Parson", "Kaley Cuoco"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg",
    imdbRating: "9.4/10",
  },
  {
    movieName: "Supernatural",
    movieGenre: "Horror",
    movieDescription:
      "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth.",
    movieCharacters: ["Jared Padalecki", "Jensen Ackles", "Jim Beaver"],
    imageUrl:
      "https://i0.wp.com/abacstallion.com/wp-content/uploads/2019/04/Supernatural-Poster.jpg?fit=2000%2C3000&ssl=1",
    imdbRating: "8.4/10",
  },
  {
    movieName: "Two and a half Men",
    movieGenre: "Comedy",
    movieDescription:
      "A hedonistic jingle writer's free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house.",
    movieCharacters: ["Jon Cryer", "Ashton Kutcher", "Angus T.Jones"],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c9/Twoandahalfmen1.jpg",
    imdbRating: "7.0/10",
  },
  {
    movieName: "Salvation",
    movieGenre: "Mystery",
    movieDescription:
      " An MIT grad student and a tech superstar bring a low-level Pentagon official a staggering discovery--that an asteroid is just six months away from colliding with Earth.",
    movieCharacters: ["Santiago Cabrera", "Jennifer Finnigan", "Charlie Rowe"],
    imageUrl:
      "https://879ed873-madman-com-au.akamaized.net/media/Releases/54086/54086-2016576.jpg",
    imdbRating: "7.0/10",
  },
  {
    movieName: "BlindSpot",
    movieGenre: "Mystery",
    movieDescription:
      " Jane Doe is found in Times Square with no memory and mysterious tattoos on her body.",
    movieCharacters: [
      "Sullivan Stapleton",
      "Jaimie Alexander",
      "Audrey Esparza",
    ],
    imageUrl: "https://flxt.tmsimg.com/assets/p11770080_b_v12_se.jpg",

    imdbRating: "7.4/10",
  },
  {
    movieName: "Manifest",
    movieGenre: "Mystery",
    movieDescription:
      "A commercial airliner suddenly reappears after being missing for five years. As those aboard reintegrate into society, they experience guiding voices and visions of events yet to occur, and soon a deeper mystery unfolds.",
    movieCharacters: ["Melissa Roxburgh", "Josh Dallas", "J.R.Ramirez"],
    imageUrl: "https://flxt.tmsimg.com/assets/p17602726_b_v13_ab.jpg",

    imdbRating: "7.2/10",
  },
];

export default function TvShows() {
  const [tvShowType, setTvShowType] = useState(tvShows);

  const renderAllTvShows = () => {
    setTvShowType(tvShows);
  };

  const showTvShowsType = (e: any) => {
    const TvShowsGenre = tvShows.filter(
      (tvShow) => tvShow.movieGenre === e.target.innerText
    );
    setTvShowType(TvShowsGenre);
  };

  function renderMovies(tvShowlist: ListInterface) {
    return (
      <>
        <ShowsThumbnail list={tvShowlist}></ShowsThumbnail>
      </>
    );
  }

  return (
    <>
      <PagesMainContainer text="Collection of different genre Tv shows">
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
        <Button text="View All" onClick={renderAllTvShows}></Button>
      </PagesMainContainer>
      <TvShowsListContainer>
        <div>{tvShowType.map(renderMovies)}</div>
      </TvShowsListContainer>
    </>
  );
}

const TvShowsListContainer = styled.div`
  margin: 30px;
  padding: 5px;
  box-shadow: 5px 5px 10px 5px #cea1a1;
`;
