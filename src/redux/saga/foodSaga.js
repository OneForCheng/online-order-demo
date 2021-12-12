import { fetchFoodList } from '../../services/foodService';
import { call, put } from 'redux-saga/effects'

export function * fetchFoodSaga(action) {
  const data = yield call(fetchFoodList, action.payload);
  yield put({ payload: data });
}
