import styled from 'styled-components';

export const StyledTrigger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(220, 220, 220, 0);
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;

export const StyledMenu = styled.div`
  > button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(220, 220, 220, 0);
    width: 100%;
    border: none;
    padding-bottom: 3px;
    padding-top: 3px;
    border-bottom: 1px solid rgba(220, 220, 220, 0.4);
    > div {
      margin-right: 10px;
      margin-left: 5px;
    }
  }
`;
