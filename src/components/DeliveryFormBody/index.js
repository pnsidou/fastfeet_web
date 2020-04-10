import React from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { StyledBody } from './styles';

import api from '~/services/api';

import SelectInput from '~/components/SelectInput';

export const schema = Yup.object().shape({
  product: Yup.string().required(),
  recipient_id: Yup.number().required(),
  deliveryman_id: Yup.number().required(),
});

async function getDeliverymen(inputValue) {
  const deliverymen = (await api.get('/deliverymen')).data.map(deliveryman => ({
    ...deliveryman,
    label: deliveryman.name,
    value: deliveryman.id,
  }));
  return deliverymen.filter(deliveryman =>
    deliveryman.name.toLowerCase().includes(inputValue.toLowerCase())
  );
}

async function getRecipients(inputValue) {
  const recipients = (await api.get('/recipients')).data.map(recipient => ({
    ...recipient,
    label: recipient.name,
    value: recipient.id,
  }));
  return recipients.filter(recipient =>
    recipient.name.toLowerCase().includes(inputValue.toLowerCase())
  );
}

export const deliveryFormBody = (
  <StyledBody>
    <div>
      <div className="recipient">
        <h3>Recipient</h3>
        <SelectInput name="recipient_id" loadOptions={getRecipients} />
      </div>
      <div className="deliveryman">
        <h3>Deliveryman</h3>
        <SelectInput name="deliveryman_id" loadOptions={getDeliverymen} />
      </div>
    </div>
    <div>
      <div className="product">
        <h3>Product name</h3>
        <Input name="product"></Input>
      </div>
    </div>
  </StyledBody>
);
