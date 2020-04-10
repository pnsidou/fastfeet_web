import React from 'react';
import { useDispatch } from 'react-redux';

import { registerDelivery } from '~/store/modules/deliveries/actions';

import FormFrame from '~/components/FormFrame';
import { deliveryFormBody, schema } from '~/components/DeliveryFormBody';

function RegisterDelivery() {
  const dispatch = useDispatch();

  const handleRegister = data => {
    console.tron.log(data);
    dispatch(registerDelivery(data));
  };

  return (
    <FormFrame
      title="Register delivery"
      schema={schema}
      handleRegister={handleRegister}
      formBody={deliveryFormBody}
    ></FormFrame>
  );
}

export default RegisterDelivery;
