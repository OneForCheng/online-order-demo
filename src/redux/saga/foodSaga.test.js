import * as foodService from '../../services/foodService';
import * as cacheFood from '../../utils/cacheFood';
import * as foodAction from '../actions/foodAction';
import { fetchFoodSaga } from './foodSaga';
import { runSaga } from 'redux-saga';

describe('food saga', () => {
  it('should get correct result from fetchOrderList when run fetchFoodSaga', async () => {
    jest.spyOn(foodService, 'fetchFoodList').mockReturnValue(Promise.resolve({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: '香甜考肉饭', price: 15.5, description: '香甜可口，巴适得板' }]
    }));
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({}),
    }, fetchFoodSaga, {
      payload: {
        page: 1,
        size: 10,
      }
    });

    expect(dispatched).toEqual([{
      payload: {
        page: 1,
        size: 10,
        totalPages: 1,
        totalElements: 1,
        content: [{ id: 1, name: '香甜考肉饭', price: 15.5, description: '香甜可口，巴适得板' }]
      },
      type: 'SET_FOOD_LIST',
    }])
  });

  it('should cache result from fetchOrderList when run fetchFoodSaga', async () => {
    jest.spyOn(foodService, 'fetchFoodList').mockReturnValue(Promise.resolve({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: '香甜考肉饭', price: 15.5, description: '香甜可口，巴适得板' }]
    }));
    jest.spyOn(cacheFood, 'setCachedFoods');
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({}),
    }, fetchFoodSaga, {
      payload: {
        page: 1,
        size: 10,
      }
    });

    expect(cacheFood.setCachedFoods).toBeCalledWith('cached_foods_page_1_size_10', {
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: '香甜考肉饭', price: 15.5, description: '香甜可口，巴适得板' }]
    })
  });

  it('should invoke setFoodList when run fetchFoodSaga', async () => {
    jest.spyOn(foodService, 'fetchFoodList').mockReturnValue(Promise.resolve({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: '香甜考肉饭', price: 15.5, description: '香甜可口，巴适得板' }]
    }));
    jest.spyOn(foodAction, 'setFoodList').mockReturnValue({  type: 'SET_FOOD_LIST' })
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({}),
    }, fetchFoodSaga, {
      payload: {
        page: 1,
        size: 10,
      }
    });
    expect(foodAction.setFoodList).toBeCalledWith({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: '香甜考肉饭', price: 15.5, description: '香甜可口，巴适得板' }]
    })
    expect(dispatched).toEqual([{  type: 'SET_FOOD_LIST' }])
  });

  it('should get data from cached data when fetchOrderList throw error and cached foods ara not empty', async () => {
    jest.spyOn(foodService, 'fetchFoodList').mockReturnValue(Promise.reject({ errorCode: 'SYSTEM_ERROR', message: '系统错误，请稍后再试' }));
    jest.spyOn(foodAction, 'setFoodList').mockReturnValue({  type: 'SET_FOOD_LIST' })
    jest.spyOn(cacheFood, 'getCachedFoods').mockReturnValue({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: '香甜考肉饭', price: 15.5, description: '香甜可口，巴适得板' }]
    })
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({}),
    }, fetchFoodSaga, {
      payload: {
        page: 1,
        size: 10,
      }
    });

    expect(cacheFood.getCachedFoods).toBeCalled();
    expect(foodAction.setFoodList).toBeCalledWith({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: '香甜考肉饭', price: 15.5, description: '香甜可口，巴适得板' }]
    });
  });
})
