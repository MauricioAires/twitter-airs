import styled, { css } from 'styled-components';
import Button from '../Button';
import {
  Home,
  Notifications,
  FavoriteBorder,
  Person,
  Rocketseat,
  ExitToApp,
  TweetIcon,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;

    scrollbar-width: none; /** firefox */
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;

  @media (min-width: 1280px) {
    margin-left: 17px;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 9px;

      font-weight: bold;
      font-size: 19px;
    }

    width: unset;
    height: unset;

    padding-right: 15px;
    padding-left: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      margin-left: 15px;
      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

export const NewTweetIcon = styled(TweetIcon)`
  display: none;

  fill: #fff;
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  @media (max-width: 1280px) {
    display: block;
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  fill: var(--text);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const ButtonTweetar = styled(Button)`
  > span {
    color: var(--white) !important;
  }
`;

export const Bottomside = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 39px;
  height: 39px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--profile-background);

  > svg {
    fill: var(--profile);
  }
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;

    font-size: 14px;

    > span {
      font-weight: normal;
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 25px;
    height: 25px;
    color: var(--white);

    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
