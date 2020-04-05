import { takeLatest, call, put, all } from 'redux-saga/effects';

import { listRecipientsSuccess, listRecipientsFailure } from './actions';

import api from '~/services/api';

export function* listRecipients({ payload }) {
  try {
    const response = yield call(api.get, '/recipients');

    yield put(listRecipientsSuccess(response.data));
  } catch (err) {
    yield put(listRecipientsFailure());
  }
}

export default all([
  takeLatest('@recipients/LIST_REQUEST', listRecipients),
  takeLatest('@deliveries/LIST_REQUEST', listRecipients),
]);
