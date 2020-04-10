import { takeLatest, call, put, all } from 'redux-saga/effects';

import { listProblemsSuccess, listProblemsFailure } from './actions';

import api from '~/services/api';

export function* listProblems({ payload }) {
  try {
    const response = yield call(api.get, '/problems');

    yield put(listProblemsSuccess(response.data));
  } catch (err) {
    yield put(listProblemsFailure());
  }
}

export default all([takeLatest('@problems/LIST_REQUEST', listProblems)]);
