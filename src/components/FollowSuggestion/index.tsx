import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  avatar: string;
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ avatar, name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar src={avatar} alt={name} title={name} />
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
