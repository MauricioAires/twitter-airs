import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import { database } from '../../utils/database';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  const suggestions = database.suggestions.map((suggestion) => (
    <FollowSuggestion
      avatar={suggestion.avatar}
      name={suggestion.name}
      nickname={suggestion.nickname}
    />
  ));

  const trending_a = database.trending_a.map((trending) => (
    <News title={trending.title} description={trending.description} />
  ));

  const trending_b = database.trending_b.map((trending) => (
    <News title={trending.title} description={trending.description} />
  ));

  const trending_c = database.trending_c.map((trending) => (
    <News title={trending.title} description={trending.description} />
  ));

  return (
    <Container>
      <SearchWrapper>
        <SearchInput type="search" placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List title="Quem seguir" elements={suggestions} />
          <List title="O que está acontecendo" elements={trending_a} />
          <List title="O que está acontecendo" elements={trending_b} />
          <List title="O que está acontecendo" elements={trending_c} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
