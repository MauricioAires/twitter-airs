import React from 'react';

import { Container, Avatar, ProfileIcon, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar>
          <ProfileIcon />
        </Avatar>
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>{' '}
      <FollowButton outline>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
