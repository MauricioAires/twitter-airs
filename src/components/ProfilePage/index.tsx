import React from 'react';

import Feed from '../Feed';

import { database } from '../../utils/database';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar
          src={database.profile.avatar}
          title={database.profile.name}
          alt={database.profile.name}
        />
      </Banner>
      <ProfileData>
        <EditButton outline>Editar perfil</EditButton>
        <h1>{database.profile.name}</h1>
        <h2>{database.profile.nickname}</h2>

        <p>
          Developer at <a href="https://brisanet.com.br">@Brisanet</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Ceará, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de outubro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>89</strong>
          </span>
          <span>
            <strong>12389 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
