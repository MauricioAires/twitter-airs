import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  ProfileIcon,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface Props {
  name: string;
  nickname: string;
  date: string;
  description: string;
  image: string;
}

const Tweet: React.FC<Props> = ({
  name,
  nickname,
  date,
  description,
  image,
}) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar>
          <ProfileIcon />
        </Avatar>
        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{nickname}</span>
            <Dot />
            <time>{date}</time>
          </Header>
          <Description>{description}</Description>

          <ImageContent src={image} alt={description} title={name} />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
