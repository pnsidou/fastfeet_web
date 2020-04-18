import React, { useRef, useState } from 'react';
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
  handleSearch,
  children,
}) {
  const [query, setQuery] = useState(null);
  console.tron.log(query);
  return (
    <Frame>
      <Title>{title}</Title>
      <SearchBar>
        <SearchButton onClick={() => handleSearch(query)}>
          <SearchIcon />
        </SearchButton>
        <SearchInput
          placeholder={searchPlaceholder}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
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
