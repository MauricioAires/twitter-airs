import React from 'react';

import { database } from '../../utils/database';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  FavoriteIcon,
  ProfileIcon,
  ButtonTweetar,
  Bottomside,
  Avatar,
  ProfileData,
  ExitIcon,
  NewTweetIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <ButtonTweetar>
          <NewTweetIcon />
          <span>Tweetar</span>
        </ButtonTweetar>
      </Topside>

      <Bottomside>
        <Avatar
          alt={database.profile.name}
          title={database.profile.name}
          src={database.profile.avatar}
        />
        <ProfileData>
          <strong>{database.profile.name}</strong>
          <span>{database.profile.nickname}</span>
        </ProfileData>

        <ExitIcon />
      </Bottomside>
    </Container>
  );
};

export default MenuBar;
