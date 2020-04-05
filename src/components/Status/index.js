import React from 'react';

import { StyledStatus } from './styles';

function Status({ status }) {
  return (
    <StyledStatus status={status}>
      <div />
      {status.toUpperCase()}
    </StyledStatus>
  );
}

export default Status;
