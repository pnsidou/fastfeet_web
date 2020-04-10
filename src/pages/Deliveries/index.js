import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Popup from 'reactjs-popup';

import Table from '~/components/Table';
import TableFrame from '~/components/TableFrame';
import DeliveryPopup from '~/components/DeliveryPopup';
import { columns } from './styles';

import {
  listDeliveries,
  deleteDelivery,
} from '~/store/modules/deliveries/actions';

function Deliveries() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [deliveryDetails, setDeliveryDetails] = useState(false);

  const deliveries = useSelector(state => {
    const deliveries = state.deliveries.list;
    return deliveries.map(delivery => {
      const { id, recipient } = delivery;

      const detailedDelivery = {
        ...delivery,
        recipient: recipient && recipient.name,
        street: recipient && recipient.street,
        number: recipient && recipient.number,
        city: recipient && recipient.city,
        state: recipient && recipient.state,
        zip_code: recipient && recipient.zip_code,
      };

      const actions = [
        {
          type: 'view',
          handler: () => setDeliveryDetails(detailedDelivery),
        },
        {
          type: 'edit',
          handler: () => history.push(`/deliveries/${id}/update`),
        },
        {
          type: 'delete',
          handler: () => {
            dispatch(deleteDelivery(id));
          },
        },
      ];

      return { ...detailedDelivery, actions };
    });
  });

  const handleSearch = query => {
    dispatch(listDeliveries(query));
  };

  useEffect(() => {
    dispatch(listDeliveries());
  }, [dispatch]);

  return (
    <TableFrame
      title="Deliveries"
      searchPl
      placeholder="Search deliveries by product name..."
      handleSearch={handleSearch}
      registerButtonHandler={() => history.push('/deliveries/register')}
    >
      <Table columns={columns} data={deliveries} />
      <Popup
        closeOnDocumentClick
        modal
        open={deliveryDetails}
        onClose={() => setDeliveryDetails(false)}
      >
        <DeliveryPopup deliveryDetails={deliveryDetails} />
      </Popup>
    </TableFrame>
  );
}

export default Deliveries;
