import React from 'react';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import ZipCodeInput from '~/components/ZipCodeInput';

import { StyledBody } from './styles';

export const schema = Yup.object().shape({
  name: Yup.string().required(),
  street: Yup.string().required(),
  number: Yup.number()
    .integer()
    .required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip_code: Yup.number().required(),
});

export const recipientFormBody = (
  <StyledBody>
    <div>
      <div className="name">
        <h3>Name</h3>
        <Input name="name"></Input>
      </div>
    </div>
    <div>
      <div className="street">
        <h3>Street</h3>
        <Input name="street"></Input>
      </div>
      <div className="number">
        <h3>Number</h3>
        <Input name="number" type="number"></Input>
      </div>
    </div>
    <div>
      <div className="city">
        <h3>City</h3>
        <Input name="city"></Input>
      </div>
      <div className="state">
        <h3>State</h3>
        <Input name="state"></Input>
      </div>
      <div className="zip">
        <h3>Zip code</h3>
        <ZipCodeInput name="zip_code"></ZipCodeInput>
      </div>
    </div>
  </StyledBody>
);
