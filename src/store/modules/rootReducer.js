import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import deliverymen from './deliverymen/reducer';

export default combineReducers({
  auth,
  user,
  deliverymen,
});
