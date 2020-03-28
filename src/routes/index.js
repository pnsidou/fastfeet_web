import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Recipients from '~/pages/Recipients';
import UpdateRecipient from '~/pages/UpdateRecipient';
import RegisterRecipient from '~/pages/RegisterRecipient';
import Deliveries from '~/pages/Deliveries';
import RegisterDelivery from '~/pages/RegisterDelivery';
import UpdateDelivery from '~/pages/UpdateDelivery';
import Deliverymen from '~/pages/Deliverymen';
import RegisterDeliveryman from '~/pages/RegisterDeliveryman';
import UpdateDeliveryman from '~/pages/UpdateDeliveryman';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/recipients" exact isPrivate component={Recipients} />
      <Route
        path="/recipients/register"
        isPrivate
        component={RegisterRecipient}
      />
      <Route
        path="/recipients/:id/update"
        isPrivate
        component={UpdateRecipient}
      />
      <Route path="/deliveries" exact isPrivate component={Deliveries} />
      <Route
        path="/deliveries/register"
        isPrivate
        component={RegisterDelivery}
      />
      <Route
        path="/deliveries/:id/update"
        isPrivate
        component={UpdateDelivery}
      />
      <Route path="/deliverymen" exact isPrivate component={Deliverymen} />
      <Route
        path="/deliverymen/register"
        isPrivate
        component={RegisterDeliveryman}
      />
      <Route
        path="/deliverymen/:id/update"
        isPrivate
        component={UpdateDeliveryman}
      />
      <Route path="/problems" isPrivate component={Problems} />
    </Switch>
  );
}
