import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 40px;
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: rgb(0, 102, 183);
  }
`;