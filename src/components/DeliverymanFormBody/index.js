import React from 'react';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { StyledBody } from './styles';

import AvatarInput from '~/components/AvatarInput';

export const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
});

export const deliverymanFormBody = (
  <StyledBody>
    <div>
      <div className="avatar">
        <AvatarInput name="avatar"></AvatarInput>
      </div>
    </div>
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
