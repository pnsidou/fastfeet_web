import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex: 1;
min-height: 100%;
background: #7159c1;
margin: auto;

form{
  flex-direction: column;
  background: #fff;
  max-width: 315px;
  padding: 50px 35px;
  margin: auto;
  border-radius: 4px;

  img {
    margin-bottom: 15px;
  }

  h1 {
    font-size: 16px;
      margin-top: 15px;
      font-weight: bold;
  }

  input {
    margin-top: 15px;
    height: 44px;
    width: 100%;
    border: 1px solid
    border-color:  rgba(255, 255, 255, 0.6); ;
    border-radius: 4px;
  }

  button {
    height: 44px;
    width: 100%;
    margin-top: 15px;
    border-radius: 4px;
    color: #fff;
    border: none;
    font-weight: bold;
    font-size: 14px;
    background: #7159c1;
  }
}
`;
