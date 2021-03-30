import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

interface Props {
  toggleTheme(): void;
}

const Layout: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main toggleTheme={toggleTheme} />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
