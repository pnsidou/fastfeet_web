import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  listDeliveriesSuccess,
  listDeliveriesFailure,
  deleteDeliverySuccess,
  deleteDeliveryFailure,
  registerDeliverySuccess,
  registerDeliveryFailure,
  updateDeliverySuccess,
  updateDeliveryFailure,
} from './actions';

import api from '~/services/api';
import { deleteDeliverymenFailure } from '../deliverymen/actions';

export function* listDeliveries({ payload }) {
  try {
    const response = yield call(api.get, '/deliveries');
    yield put(listDeliveriesSuccess(response.data));
  } catch (err) {
    yield put(listDeliveriesFailure());
  }
}

export function* registerDelivery({ payload }) {
  try {
    const response = yield call(api.post, '/deliveries', payload);

    yield put(registerDeliverySuccess());
  } catch (err) {
    yield put(registerDeliveryFailure());
  }
}

export function* updateDelivery({ payload }) {
  try {
    const { id, data } = payload;
    const response = yield call(api.put, `/deliveries/${id}`, data);
    yield put(updateDeliverySuccess());
  } catch (err) {
    yield put(updateDeliveryFailure());
  }
}

export function* deleteDelivery({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/deliveries/${id}`);

    yield put(deleteDeliverySuccess());
  } catch (err) {
    toast('Failed to delete delivery');
    yield put(deleteDeliveryFailure());
  }
}

export default all([
  takeLatest('@deliveries/LIST_REQUEST', listDeliveries),
  takeLatest('@deliveries/DELETE_REQUEST', deleteDelivery),
  takeLatest('@deliveries/REGISTER_REQUEST', registerDelivery),
  takeLatest('@deliveries/UPDATE_REQUEST', updateDelivery),
  takeLatest('@deliveries/DELETE_SUCCESS', listDeliveries),
  takeLatest('@deliveries/REGISTER_SUCCESS', listDeliveries),
  takeLatest('@deliveries/UPDATE_SUCCESS', listDeliveries),
]);
