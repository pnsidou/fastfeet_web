import React from 'react';
import PropTypes from 'prop-types';

import {
  Frame,
  Title,
  SearchBar,
  SearchButton,
  SearchIcon,
  SearchInput,
  RegisterButton,
  TableContainer,
} from './styles';

function TableFrame({
  title,
  searchPlaceholder,
  registerButtonHandler,
  children,
}) {
  return (
    <Frame>
      <Title>{title}</Title>
      <SearchBar>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
        <SearchInput placeholder={searchPlaceholder} />
      </SearchBar>
      <RegisterButton type="button" onClick={registerButtonHandler}>
        <h1>+</h1>
        <p>Register</p>
      </RegisterButton>
      <TableContainer>{children}</TableContainer>
    </Frame>
  );
}

TableFrame.propTypes = {
  title: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  children: PropTypes.element.isRequired,
};

TableFrame.defaultProps = {
  title: 'Title',
  searchPlaceholder: 'What would you like to search?',
};

export default TableFrame;
