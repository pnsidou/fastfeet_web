import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const refHeight = 30;

export const Frame = styled.span`
  display: grid;
  margin: 20px auto 0;
  max-width: 80%;
  grid-template-rows: 40px 25px;
  justify-content: space-between;
  align-items: flex-end;
  grid-template-areas:
    'title title '
    'searchBar registerButton'
    'table table';
`;

export const Title = styled.h1`
  grid-area: title;
  align-self: flex-start;
  font-size: 25px;
`;

export const SearchBar = styled.span`
  grid-area: searchBar;
  display: flex;
  align-items: center;
  max-width: 600px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 3px;
  height: ${refHeight}px;
`;

export const SearchButton = styled.button`
  background: rgba(255, 255, 255, 0);
  height: ${refHeight}px;
  width: ${refHeight}px;
  border: none;
`;

export const SearchIcon = styled(MdSearch)`
  background: rgba(255, 255, 255, 0);
  height: ${refHeight};
  width: ${refHeight};
  border: none;
  margin-left: 5px;
`;

export const SearchInput = styled.input`
  width: 100%;
  min-width: 300px;
  background: rgba(255, 255, 255, 0);
  height: ${refHeight}px;
  border: none;
`;

export const RegisterButton = styled.button`
  grid-area: registerButton;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: ${refHeight}px;
  color: white;
  background: #7159c1;
  padding: auto 5px;
  border-radius: 4px;
  border: none;

  h1 {
    font-size: 20px;
  }

  p {
    font-weight: bold;
    font-size: 14px;
  }
`;

export const TableContainer = styled.div`
  grid-area: table;
  padding-top: 5px;
  height: 100%;
  width: 100%;
  .tr {
    height: 35px;
    margin: 0px 0 15px;
    padding: 5px 11px;
    align-items: center;
  }
  .thead .tr {
    font-size: 8px;
  }
  .tbody {
    margin-top: 0;
    height: 290px;
    border-radius: 4px;
  }
  .tbody .tr {
    background: #fff;
    font-size: 12px;
    border-radius: 3px;
  }
`;
