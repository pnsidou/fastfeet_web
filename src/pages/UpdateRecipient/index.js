import React from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { updateRecipient } from '~/store/modules/recipients/actions';

import FormFrame from '~/components/FormFrame';
import { recipientFormBody, schema } from '~/components/RecipientFormBody';

function UpdateRecipient() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const recipient = useSelector(state =>
    state.recipients.list.find(recipient => recipient.id == id)
  );

  const handleRegister = data => {
    const number = data.number && Number(data.number);
    dispatch(updateRecipient(id, { ...data, number }));
  };

  return (
    <FormFrame
      title="Edit recipient"
      schema={schema}
      handleRegister={handleRegister}
      formBody={recipientFormBody}
      defaultValue={recipient}
    ></FormFrame>
  );
}

export default UpdateRecipient;
