import styled from 'styled-components';
import { darken } from 'polished';

export const StyledAvatar = styled.div.attrs({
  className: 'avatar',
})`
  display: flex;
  justify-contents: center;
  padding: 7px;
  align-items: center;
  border-radius: 50%;
  font-weight: bold;
  overflow: hidden;
  background: ${props => props.color};
  color: ${props => darken(0.3, props.color)};
  border: 1px solid ${props => darken(0.3, props.color)};

  img {
    height: 200%;
    width: 200%;
  }
`;
