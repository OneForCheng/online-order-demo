import { fetchFoodList } from '../../services/foodService';
import { call, put, takeEvery } from 'redux-saga/effects'
import { getFoodCachedKey, setCachedFoods } from '../../utils/cacheFood';
import * as foodAction from '../actions/foodAction';

export function * fetchFoodSaga(action) {
  let data
  try {
    data = yield call(fetchFoodList, action.payload);
  } catch (err) {
    data = {};
  }
  yield put(foodAction.setFoodList(data));
  const cachedKey = getFoodCachedKey(action.payload);
  setCachedFoods(cachedKey, data)
}

export default function* watchFetchFoodSaga() {
  yield takeEvery(foodAction.fetchFoodList.toString(), fetchFoodSaga)
}
