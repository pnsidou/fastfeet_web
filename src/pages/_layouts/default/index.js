import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/fastfeet-logo.png';

import {
  Layout,
  Children,
  Header,
  Spacer,
  TopRightMenu,
  CustomLink,
} from './styles.js';

export default function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }
  console.tron.log(user);
  return (
    <Layout>
      <Header>
        <img src={logo} alt="" />
        <Spacer />
        <div>
          <nav>
            <CustomLink to="/deliveries">DELIVERIES</CustomLink>
            <CustomLink to="/recipients">RECIPIENTS</CustomLink>
            <CustomLink to="/deliverymen">DELIVERYMEN</CustomLink>
            <CustomLink to="/problems">PROBLEMS</CustomLink>
          </nav>
          <TopRightMenu>
            <div>
              <h1>{user.name}</h1>
              <button onClick={handleSignOut}>Sign out</button>
            </div>
          </TopRightMenu>
        </div>
      </Header>
      <Children>{children}</Children>
    </Layout>
  );
}
