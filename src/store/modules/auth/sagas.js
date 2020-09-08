import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import * as actions from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(
      api.post,
      'https://jsonplaceholder.typicode.com/users',
      {
        email,
        password,
      }
    );

    console.log(data);

    yield put(actions.signInSuccess({ token: data.id }));
  } catch (error) {
    yield put(actions.signInFailure({ error }));
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
