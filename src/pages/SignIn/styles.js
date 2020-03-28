import styled from 'styled-components';

export const Background = styled.div`
  background: #7159c1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

form{
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 315px;
  padding: 50px 35px;
  border-radius: 4px;

  img {
    margin-bottom: 15px;
  }

  h {
      margin-top: 15px;
      font-weight: bold;
  }

  input {
    margin-top: 15px;
    height: 44px;
    border: 1px solid
    border-color:  rgba(255, 255, 255, 0.6); ;
    border-radius: 4px;
  }

  button {
    height: 44px;
    margin-top: 15px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    background: #7159c1;
  }
}
`;
