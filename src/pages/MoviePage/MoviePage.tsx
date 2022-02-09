import React, { useState, useEffect } from "react";
import ShowsThumbnail from "../../components/ShowsThumbnail/ShowsThumbnail";
import { url } from "inspector";
import Button from "../../components/Button/Button";
import PagesMainContainer from "../../components/PagesMainContainer/PagesMainContainer";
import styled from "styled-components";

export interface ListInterface {
  movieName: String;
  movieGenre: String;
  movieDescription: String;
  movieCharacters: Array<string>;
  imageUrl: string;
  imdbRating: string;
}

const movies: Array<ListInterface> = [
  {
    movieName: "The Green Mile",
    movieGenre: "Drama",
    movieDescription:
      "Fantasy:The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    movieCharacters: ["Tom Hanks", "Michael Clarke Duncan"],

    imageUrl:
      "https://nathanburgessinsights.files.wordpress.com/2018/10/img_1794.jpg?w=584",
    imdbRating: "8.6/10",
  },
  {
    movieName: "Forrest Gump",
    movieGenre: "Drama",
    movieDescription:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    movieCharacters: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    imdbRating: "8.8/10",
  },
  {
    movieName: "London Has Fallen",
    movieGenre: "Action",
    movieDescription:
      "TrillerIn London for the Prime Minister's funeral, Mike Banning is caught up in a plot to assassinate all the attending world leaders.",
    movieCharacters: ["Gerard Butler", "Aaron Eckhart", "Morgan Freeman"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/A1FBieXKitL._RI_.jpg",
    imdbRating: "5.9/10",
  },
  {
    movieName: "Django Unchained",
    movieGenre: "Drama",
    movieDescription:
      "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
    movieCharacters: ["Jamie Foxx", "Leoardo Dicaprio", "Christoph Waltz"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",

    imdbRating: "8.4/10",
  },
  {
    movieName: "Hotel Rwanda",
    movieGenre: "Biography",
    movieDescription:
      "Paul Rusesabagina, a hotel manager, houses over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda, Africa.",
    movieCharacters: ["Don Cheadle", "Sophie Okonedo", "Joaquin Phonenix"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81n73GOrOwL._RI_.jpg",
    imdbRating: "8.1/10",
  },
  {
    movieName: "The Revenant",
    movieGenre: "Drama",
    movieDescription:
      "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    movieCharacters: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    imdbRating: "8.0/10",
  },
  {
    movieName: "The Wolf Of Wall Street",
    movieGenre: "Biography",
    movieDescription:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    movieCharacters: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81n73GOrOwL._RI_.jpg",
    imdbRating: "8.1/10",
  },
  {
    movieName: "Titanic",
    movieGenre: "Romance",
    movieDescription:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    movieCharacters: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    imageUrl:
      "https://www.themoviedb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    imdbRating: "7.8/10",
  },
  {
    movieName: "The Last Samurai",
    movieGenre: "Action",
    movieDescription:
      "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
    movieCharacters: ["Tom Cruise", "Ken Watanable", "Billy Connolly"],
    imageUrl: "https://flxt.tmsimg.com/assets/p9991602_p_v13_ah.jpg",
    imdbRating: "7.7/10",
  },
  {
    movieName: "The NoteBook",
    movieGenre: "Romance",
    movieDescription:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    movieCharacters: ["Gena Rowlands", "James Garber", "Rachel McAdams"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
    imdbRating: "7.8/10",
  },
  {
    movieName: "The Conjuring",
    movieGenre: "Horror",
    movieDescription:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    movieCharacters: ["Patrick Wilson", "Vera Farmiga", "Ron Livingston"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
    imdbRating: "7.5/10",
  },
  {
    movieName: "The Conjuring 2",
    movieGenre: "Horror",
    movieDescription:
      "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
    movieCharacters: ["Patrick Wilson", "Vera Farmiga"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_FMjpg_UX1000_.jpg",
    imdbRating: "7.3/10",
  },
  {
    movieName: "Olympus Has Fallen",
    movieGenre: "Action",
    movieDescription:
      "Secret Service agent Mike Banning finds himself trapped inside the White House in the wake of a terrorist attack and works with national security to rescue the President from his kidnappers.",
    movieCharacters: ["Gerard Butler", "Aaron Eckhart", "Morgan Freeman"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTU0NmY4MWYtNzRlMS00MDkxLWJkODYtOTM3NGI2ZDc1NTJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    imdbRating: "6.5/10",
  },
  {
    movieName: "Angel Has Fallen",
    movieGenre: "Action",
    movieDescription:
      "Paul Rusesabagina, a hotel manager, houses over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda, Africa.",
    movieCharacters: ["Gerard Butler", "Danny Huston", "Frederick Schmidt"],
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmRmMWZhZGItYzA4MC00ZDYyLWE0OTMtYmM0MWRiN2Q4NGU2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg",
    imdbRating: "6.4/10",
  },
];

export default function MoviePage() {
  const [movieType, setMovieType] = useState(movies);

  const renderAllMovies = () => {
    setMovieType(movies);
  };

  const showMovieType = (e: any) => {
    const MovieGenre = movies.filter(
      (movie) => movie.movieGenre === e.target.innerText
    );
    setMovieType(MovieGenre);
  };

  function renderMovies(movielist: ListInterface) {
    return <ShowsThumbnail list={movielist}></ShowsThumbnail>;
  }

  return (
    <>
      <PagesMainContainer text="Check out our list of Movies">
        <Button
          text="Horror"
          onClick={(e: any) => {
            showMovieType(e);
          }}
        ></Button>

        <Button
          text="Action"
          onClick={(e: any) => {
            showMovieType(e);
          }}
        ></Button>
        <Button
          text="Romance"
          onClick={(e: any) => {
            showMovieType(e);
          }}
        ></Button>
        <Button
          text="Biography"
          onClick={(e: any) => {
            showMovieType(e);
          }}
        ></Button>
        <Button text="View All" onClick={renderAllMovies}></Button>
      </PagesMainContainer>
      <MovieListContainer>
        <div>{movieType.map(renderMovies)}</div>
      </MovieListContainer>
    </>
  );
}

const MovieListContainer = styled.div`
  margin: 30px;
  padding: 5px;
  box-shadow: 5px 5px 10px 5px #cea1a1;
`;
