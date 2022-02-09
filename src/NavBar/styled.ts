import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import FamilyFavColor from "../utils/color";

type NavProps = {
  isSticky: boolean;
};

export const Link = styled(RouterLink)`
  color: ${FamilyFavColor.secondaryTextColor};
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
`;

export const Logo = styled(RouterLink)`
  color: ${FamilyFavColor.primaryTextColor};
  text-decoration: none;
  font-size: 50px;
  margin-right: 20px;
`;

export const Li = styled.li`
  margin-right: 25px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.nav<NavProps>`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  background-color: #deb3ad;
  position: ${(props) => (props.isSticky ? "fixed" : "absolute")};
`;
