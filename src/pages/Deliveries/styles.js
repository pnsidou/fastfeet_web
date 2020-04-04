import React from 'react';

import Status from '~/components/Status';
import DeliverymanCell from '~/components/DeliverymanCell';
import ActionsMenu from '~/components/ActionsMenu';

export const columns = [
  { Header: 'ID', accessor: 'id', maxwidth: 20, minwidth: 10, width: 15 },
  {
    Header: 'Recipient',
    accessor: 'recipient',
    maxwidth: 50,
    minwidth: 20,
    width: 40,
  },
  {
    Header: 'Deliveryman',
    accessor: 'deliveryman',
    maxwidth: 50,
    minwidth: 20,
    width: 40,
    Cell: row => row.value && <DeliverymanCell deliverymanId={row.value.id} />,
  },
  { Header: 'City', accessor: 'city', maxwidth: 50, minwidth: 20, width: 40 },
  { Header: 'State', accessor: 'state', maxwidth: 50, minwidth: 20, width: 40 },
  {
    Header: 'Status',
    accessor: 'status',
    maxwidth: 50,
    minwidth: 20,
    width: 40,
    Cell: row => {
      return <Status status={row.value} />;
    },
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
