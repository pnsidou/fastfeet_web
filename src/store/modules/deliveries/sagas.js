import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  listDeliveriesSuccess,
  listDeliveriesFailure,
  deleteDeliverySuccess,
} from './actions';

import api from '~/services/api';

export function* listDeliveries({ payload }) {
  try {
    const response = yield call(api.get, '/deliveries');
    yield put(listDeliveriesSuccess(response.data));
  } catch (err) {
    yield put(listDeliveriesFailure());
  }
}

export function* deleteDelivery({ payload }) {
  try {
    const id = payload;
    yield put(deleteDeliverySuccess());
  } catch (err) {
    yield put(listDeliveriesFailure());
  }
}

export default all([
  takeLatest('@deliveries/LIST_REQUEST', listDeliveries),
  takeLatest('@deliveries/DELETE_REQUEST', deleteDelivery),
  takeLatest('@deliveries/DELETE_SUCCESS', listDeliveries),
]);
