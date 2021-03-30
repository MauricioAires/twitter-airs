import styled, { css } from 'styled-components';
import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
  DarkTheme,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;
export const Header = styled.header`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > div {
    display: flex;
    align-items: center;
  }

  > button,
  > div button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const ToggleTheme = styled.button`
  color: var(--profile);
`;

export const ThemeIcon = styled(DarkTheme)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: var(--theme-button);
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconsCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;
  fill: var(--gray);

  &:hover,
  &.active {
    transition: 100ms;
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconsCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconsCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconsCSS}
`;
