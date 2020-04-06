import React from 'react';

import { StyledAvatar } from './styles';

function Avatar({ name, url, color }) {
  if (url)
    return (
      <StyledAvatar>
        <img src={url} />
      </StyledAvatar>
    );

  const splitName = name.split(' ');

  let firstLetters = '';

  if (splitName.length > 1) {
    const lastIndex = splitName.length - 1;
    firstLetters = splitName[0][0] + splitName[lastIndex][0];
  } else {
    firstLetters = splitName && splitName[0][0];
  }

  return (
    <StyledAvatar color={color}>{firstLetters.toUpperCase()}</StyledAvatar>
  );
}

export default Avatar;
