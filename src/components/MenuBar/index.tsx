import React from 'react';

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
        <Avatar>
          <ProfileIcon />
        </Avatar>

        <ProfileData>
          <strong>Mauricio Aires</strong>
          <span>@mauricio_airs</span>
        </ProfileData>

        <ExitIcon />
      </Bottomside>
    </Container>
  );
};

export default MenuBar;
