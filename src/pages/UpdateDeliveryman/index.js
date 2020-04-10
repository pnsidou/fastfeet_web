import React from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { updateDeliveryman } from '~/store/modules/deliverymen/actions';

import FormFrame from '~/components/FormFrame';
import { deliverymanFormBody, schema } from '~/components/DeliverymanFormBody';

function UpdateDeliveryman() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const deliveryman = useSelector(state =>
    state.deliverymen.list.find(deliveryman => deliveryman.id == id)
  );

  const handleRegister = data => {
    dispatch(updateDeliveryman(id, data));
  };

  return (
    <FormFrame
      title="Edit deliveryman"
      schema={schema}
      handleRegister={handleRegister}
      formBody={deliverymanFormBody}
      defaultValue={deliveryman}
    ></FormFrame>
  );
}

export default UpdateDeliveryman;
