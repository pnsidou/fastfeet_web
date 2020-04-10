import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Table from '~/components/Table';
import TableFrame from '~/components/TableFrame';
import { columns } from './styles';

import {
  listRecipients,
  deleteRecipient,
} from '~/store/modules/recipients/actions';

function Recipients() {
  const dispatch = useDispatch();
  const history = useHistory();

  const recipients = useSelector(state => {
    const recipients = state.recipients.list;
    return recipients.map(recipient => {
      const { id, street, number, city, state } = recipient;

      const actions = [
        {
          type: 'edit',
          handler: () => history.push(`/recipients/${id}/update`),
        },
        {
          type: 'delete',
          handler: () => {
            dispatch(deleteRecipient(id));
          },
        },
      ];

      return {
        ...recipient,
        address: `${street}, ${number}, ${city} - ${state}`,
        actions,
      };
    });
  });

  const handleSearch = query => {
    dispatch(listRecipients(query));
  };

  useEffect(() => {
    dispatch(listRecipients());
  }, [dispatch]);

  return (
    <TableFrame
      title="Recipients"
      searchPlaceholder="Search recipients by name..."
      handleSearch={handleSearch}
      registerButtonHandler={() => history.push('/recipients/register')}
    >
      <Table columns={columns} data={recipients} />
    </TableFrame>
  );
}

export default Recipients;
