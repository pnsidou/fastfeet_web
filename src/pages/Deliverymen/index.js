import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Table from '~/components/Table';
import TableFrame from '~/components/TableFrame';
import { columns } from './styles';

import {
  listDeliverymen,
  deleteDeliveryman,
} from '~/store/modules/deliverymen/actions';

function Deliverymen() {
  const dispatch = useDispatch();
  const history = useHistory();

  const deliverymen = useSelector(state => {
    const deliverymen = state.deliverymen.list;
    return deliverymen.map(deliveryman => {
      const { id } = deliveryman;

      const actions = [
        {
          type: 'edit',
          handler: () => history.push(`/deliverymen/${id}/update`),
        },
        {
          type: 'delete',
          handler: () => {
            dispatch(deleteDeliveryman(id));
          },
        },
      ];

      return {
        ...deliveryman,
        actions,
      };
    });
  });

  const handleSearch = query => {
    dispatch(listDeliverymen(query));
  };

  useEffect(() => {
    dispatch(listDeliverymen());
  }, [dispatch]);

  return (
    <TableFrame
      title="Deliverymen"
      searchPlaceholder="Search deliverymen by name..."
      handleSearch={handleSearch}
      registerButtonHandler={() => history.push('/deliverymen/register')}
    >
      <Table columns={columns} data={deliverymen} />
    </TableFrame>
  );
}

export default Deliverymen;
