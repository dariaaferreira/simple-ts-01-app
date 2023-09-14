import React from 'react';
import { ContainerFooter, LinkItem, TextFooter  } from './Footer.styled';

const Footer: React.FC = () => {
  
  return (
      <footer>
        <ContainerFooter>
          <TextFooter>
            Copyright ©{' '}
            <LinkItem href="https://github.com/dariaaferreira">
              Created by Daria Tkachenko
            </LinkItem>{' '}
            2023.
          </TextFooter>
        </ContainerFooter>
      </footer>     
  );
};

export default Footer;