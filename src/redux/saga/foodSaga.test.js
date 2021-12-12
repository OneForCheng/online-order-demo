import * as foodService from '../../services/foodService';
import { fetchFoodSaga } from './foodSaga';
import { runSaga } from 'redux-saga';

describe('food saga', () => {
  it('should get correct result from fetchOrderList when invoke fetchFoodSaga', async () => {
    jest.spyOn(foodService, 'fetchFoodList').mockReturnValue(Promise.resolve({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: "香甜考肉饭", price: 15.5, description: "香甜可口，巴适得板" }]
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
        content: [{ id: 1, name: "香甜考肉饭", price: 15.5, description: "香甜可口，巴适得板" }]
      }
    }])
  });
})
