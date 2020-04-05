import styled from 'styled-components';
import { darken } from 'polished';

const darkenAmount = 0.25;

const statusColorMap = {
  waiting: '#dd8',
  retrieved: '#bbe',
  cancelled: '#fcc',
  delivered: '#ada',
};

export const StyledStatus = styled.div`
  display: flex;
  font-weight: bold;
  width: 110px;
  background: ${props => statusColorMap[props.status]};
  color: ${props => darken(darkenAmount, statusColorMap[props.status])};
  border: 1px solid
    ${props => darken(darkenAmount, statusColorMap[props.status])};
  justify-content: flex-start;
  align-items: center;
  padding: 1px 3px;
  height: 20px;
  border-radius: 10px;
  > div {
      height: 10px;
      width: 10px;
      border-radius: 5px;
      margin-left: 5px;
      margin-right: 8px;
   background: ${props => darken(darkenAmount, statusColorMap[props.status])};}
  }
`;

export const Point = styled.div``;
