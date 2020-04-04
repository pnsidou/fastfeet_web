import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import deliverymen from './deliverymen/sagas';
import recipients from './recipients/sagas';
import deliveries from './deliveries/sagas';

export default function* rootSaga() {
  return yield all([auth, deliverymen, recipients, deliveries]);
}
