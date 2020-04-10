import React from 'react';

import ActionsMenu from '~/components/ActionsMenu';

export const columns = [
  { Header: 'ID', accessor: 'id', maxwidth: 20, minwidth: 10, width: 15 },
  {
    Header: 'Name',
    accessor: 'name',
    maxwidth: 50,
    minwidth: 20,
    width: 40,
  },
  {
    Header: 'Address',
    accessor: 'address',
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
    Cell: row => <ActionsMenu actions={row.value} />,
  },
];
