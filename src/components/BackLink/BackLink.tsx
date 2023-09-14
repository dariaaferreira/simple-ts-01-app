import React from 'react';
import { HiArrowLeft } from "react-icons/hi";
import { StyledLink } from "./BackLink.styled";

interface BackLinkProps {
  goBackLink: string;
}

const BackLink: React.FC<BackLinkProps> = ({ goBackLink }) => {
  return (
    <StyledLink to={goBackLink}>
      <HiArrowLeft size="24" />
      Go back
    </StyledLink>
  );
};

export default BackLink;

