import React from 'react';
import { useDispatch } from 'react-redux';

import { registerRecipient } from '~/store/modules/recipients/actions';

import FormFrame from '~/components/FormFrame';
import { recipientFormBody, schema } from '~/components/RecipientFormBody';

function RegisterRecipient() {
  const dispatch = useDispatch();

  const handleRegister = data => {
    const number = data.number && Number(data.number);
    dispatch(registerRecipient({ ...data, number }));
  };

  return (
    <FormFrame
      title="Register recipient"
      schema={schema}
      handleRegister={handleRegister}
      formBody={recipientFormBody}
    ></FormFrame>
  );
}

export default RegisterRecipient;
