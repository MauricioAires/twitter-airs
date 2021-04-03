import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.img`
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
