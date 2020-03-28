import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';
import { Background } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
});

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <h1>EMAIL</h1>
        <Input name="email" type="email" placeholder="example@email.com" />
        <h1>PASSWORD</h1>
        <Input
          name="password"
          type="password"
          placeholder="Type your password"
        />
        <button type="submit">Sign In</button>
      </Form>
    </Background>
  );
}

export default SignIn;
