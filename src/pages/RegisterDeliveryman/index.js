import React from 'react';
import { useDispatch } from 'react-redux';

import { registerDeliveryman } from '~/store/modules/deliverymen/actions';

import FormFrame from '~/components/FormFrame';
import { deliverymanFormBody, schema } from '~/components/DeliverymanFormBody';

function RegisterDeliveryman() {
  const dispatch = useDispatch();

  const handleRegister = data => {
    dispatch(registerDeliveryman(data));
  };

  return (
    <FormFrame
      title="Register deliveryman"
      schema={schema}
      handleRegister={handleRegister}
      formBody={deliverymanFormBody}
    ></FormFrame>
  );
}

export default RegisterDeliveryman;
