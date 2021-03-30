import styled from 'styled-components';

import { Person } from '../../styles/Icons';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  background: var(--profile-background);
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileIcon = styled(Person)`
  flex-shrink: 0;

  width: 35px;
  height: 35px;

  fill: var(--profile);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;
