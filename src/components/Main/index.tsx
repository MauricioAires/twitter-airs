import React from 'react';

import ProfilePage from '../ProfilePage';

import { database } from '../../utils/database';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  ToggleTheme,
  ThemeIcon,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

interface Props {
  toggleTheme(): void;
}

const Main: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Header>
        <div>
          <button>
            <BackIcon />
          </button>

          <ProfileInfo>
            <strong>{database.profile.name}</strong>
            <span>123 Tweets</span>
          </ProfileInfo>
        </div>
        <ToggleTheme onClick={toggleTheme}>
          <ThemeIcon />
        </ToggleTheme>
      </Header>

      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
