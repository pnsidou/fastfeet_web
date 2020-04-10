import React from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { updateDelivery } from '~/store/modules/deliveries/actions';

import FormFrame from '~/components/FormFrame';
import { deliveryFormBody, schema } from '~/components/DeliveryFormBody';

function UpdateDelivery() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const delivery = useSelector(state => {
    const delivery = state.deliveries.list.find(delivery => delivery.id == id);

    const recipient_id = delivery && {
      label: delivery.recipient.name,
      value: delivery.recipient.id,
    };
    const deliveryman_id = delivery && {
      label: delivery.deliveryman.name,
      value: delivery.deliveryman.id,
    };
    return {
      ...delivery,
      recipient_id,
      deliveryman_id,
    };
  });

  const handleRegister = data => {
    dispatch(updateDelivery(id, data));
  };

  return (
    <FormFrame
      title="Edit delivery"
      schema={schema}
      handleRegister={handleRegister}
      formBody={deliveryFormBody}
      defaultValue={delivery}
    ></FormFrame>
  );
}

export default UpdateDelivery;
