import styled from "styled-components";
import FamilyFavColor from "../../utils/color";

export const ShowsListContainer = styled.div`
  margin: 30px auto;
  /* box-shadow: 1px 1px 5px 0px #f8afa6; */
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  /* width: 250px; */
  /* text-align: center; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20vh;
  width: 60%;

  :hover {
    transform: scale(1);
    cursor: pointer;
    box-shadow: 5px 5px 15px 5px #cea1a1;
  }
`;

export const ShowDetailsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 2vh;
`;

export const ShowName = styled.div`
  color: ${FamilyFavColor.primaryTextColor};
  font-size: 40px;
`;

export const ShowGenre = styled.div`
  color: ${FamilyFavColor.secondaryTextColor};
  font-size: 20px;
`;

export const ShowDescription = styled.div`
  color: ${FamilyFavColor.textColor};
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
`;
export const ShowCast = styled.div`
  color: ${FamilyFavColor.textColor};
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;
export const ShowImdbRating = styled.div`
  color: ${FamilyFavColor.textColor};
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;
