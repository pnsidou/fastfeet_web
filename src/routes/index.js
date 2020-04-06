import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
      <Route path="/recipients" component={Recipients} />
      <Route path="/recipients/register" component={RegisterRecipient} />
      <Route path="/recipients/:id/update" component={UpdateRecipient} />
      <Route path="/deliveries" component={Deliveries} />
      <Route path="/deliveries/register" component={RegisterDelivery} />
      <Route path="/deliveries/:id/update" component={UpdateDelivery} />
      <Route path="/deliverymen" component={Deliverymen} />
      <Route path="/deliverymen/register" component={RegisterDeliveryman} />
      <Route path="/deliverymen/:id/update" component={UpdateDeliveryman} />
      <Route path="/problems" component={Problems} />
    </Switch>
  );
}
