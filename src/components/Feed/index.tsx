import React from 'react';

import Tweet from '../Tweet';

import { database } from '../../utils/database';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  const tweets = database.feed.map((tweet) => (
    <Tweet
      name={tweet.name}
      nickname={tweet.nickname}
      date={tweet.date}
      description={tweet.description}
      image={tweet.image}
    />
  ));

  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>{tweets}</Tweets>
    </Container>
  );
};

export default Feed;
