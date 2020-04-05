import { takeLatest, call, put, all } from 'redux-saga/effects';

import { listDeliverymenSuccess, listDeliverymenFailure } from './actions';

import api from '~/services/api';

export function* listDeliverymen({ payload }) {
  try {
    const response = yield call(api.get, '/deliverymen');

    yield put(listDeliverymenSuccess(response.data));
  } catch (err) {
    yield put(listDeliverymenFailure());
  }
}

export default all([
  takeLatest('@deliverymen/LIST_REQUEST', listDeliverymen),
  takeLatest('@deliveries/LIST_REQUEST', listDeliverymen),
]);
