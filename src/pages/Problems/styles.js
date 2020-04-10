import React from 'react';

import ActionsMenu from '~/components/ActionsMenu';

export const columns = [
  { Header: 'ID', accessor: 'id', maxwidth: 1, minwidth: 1, width: 1 },
  {
    Header: 'Name',
    accessor: 'name',
    maxwidth: 2,
    minwidth: 1,
    width: 2,
  },
  {
    Header: 'Problem',
    accessor: 'description',
    maxwidth: 5,
    minwidth: 1,
    width: 3,
  },

  {
    Header: 'Actions',
    accessor: 'actions',
    maxwidth: 1,
    minwidth: 1,
    width: 1,
    Cell: cell => <ActionsMenu actions={cell.value} />,
  },
];
