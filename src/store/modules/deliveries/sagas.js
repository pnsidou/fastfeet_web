import { takeLatest, call, put, all } from 'redux-saga/effects';

import { listDeliveriesSuccess, listDeliveriesFailure } from './actions';

import api from '~/services/api';

export function* listDeliveries({ payload }) {
  try {
    const response = yield call(api.get, '/deliveries');
    yield put(listDeliveriesSuccess(response.data));
  } catch (err) {
    yield put(listDeliveriesFailure());
  }
}

export default all([takeLatest('@deliveries/LIST_REQUEST', listDeliveries)]);
