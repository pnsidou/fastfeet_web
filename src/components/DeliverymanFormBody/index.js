import React from 'react';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { StyledBody } from './styles';

export const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
});

export const deliverymanFormBody = (
  <StyledBody>
    <div>
      <div className="name">
        <h3>Name</h3>
        <Input name="name"></Input>
      </div>
    </div>
    <div>
      <div className="email">
        <h3>email</h3>
        <Input name="email"></Input>
      </div>
    </div>
  </StyledBody>
);
