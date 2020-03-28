import React from 'react';

import logo from '~/assets/fastfeet-logo.png';

import { Background } from './styles';

function SignIn() {
  return (
    <Background>
      <form>
        <img src={logo} />
        <h>EMAIL</h>
        <input type="email" placeholder="example@email.com" />
        <h>PASSWORD</h>
        <input type="password" placeholder="Type your password" />
        <button type="submit">Sign In</button>
      </form>
    </Background>
  );
}

export default SignIn;
