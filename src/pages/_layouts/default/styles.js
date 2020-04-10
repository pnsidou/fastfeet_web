import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
`;

export const Children = styled.div`
  height: 100%;
  background: #ececec;
`;
export const Header = styled.div`
  display: flex;
  background: #fff;
  width: 100%;

  border-bottom: 0.5px solid #ddd;
    img {
        width: 150px;
        margin: 5px;
  }

  nav {
    display: flex;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }}
`;

export const Spacer = styled.span`
  width: 0;
  height: 15px;
  margin: auto 10px;
  border: 0.5px solid #ddd;
`;

export const TopRightMenu = styled.span`
  min-width: 125px;
  margin: 5px;
  div {
    display: flex;
    flex-direction: column;
    font-size: 5px;

    h1 {
      margin: auto;
    }
    button {
      background: rgba(255, 255, 255, 0);
      font-size: 10px;
      font-weight: bold;
      color: #f00;
      margin: 3px auto;
      border: none;
      width: 50px;
    }
  }
`;

export const CustomLink = styled(NavLink).attrs({
  activeClassName: 'selected',
  activeStyle: {
    fontWeight: 'bold',
    color: 'black',
  },
})`
  color: #aaa;
  background: #fff;
  margin: auto 10px 8px;
`;
