import React from 'react';
import styled from 'styled-components';

import ActionsMenu from '~/components/ActionsMenu';

const AvatarStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .avatar {
    margin-right: 10px;
    height: 30px;
    width: 30px;
    justify-content: center;
  }
`;

export const columns = [
  { Header: 'ID', accessor: 'id', maxwidth: 20, minwidth: 10, width: 15 },
  {
    Header: 'Picture',
    accessor: 'avatar',
    maxwidth: 50,
    minwidth: 20,
    width: 20,
    Cell: cell => <AvatarStyle>{cell.value.component}</AvatarStyle>,
  },
  {
    Header: 'Name',
    accessor: 'name',
    maxwidth: 50,
    minwidth: 20,
    width: 40,
  },
  {
    Header: 'Email',
    accessor: 'email',
    maxwidth: 50,
    minwidth: 20,
    width: 40,
  },
  {
    Header: 'Actions',
    accessor: 'actions',
    maxwidth: 20,
    minwidth: 10,
    width: 15,
    Cell: cell => <ActionsMenu actions={cell.value} />,
  },
];
