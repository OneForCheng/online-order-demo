import foodReducer from './foodReducer';
import { setFoodList } from '../actions/foodAction';

describe('food reducer', () => {
  it('should return newest state for food reducer', () => {
    const previousState = {
      foodList: {},
    };
    expect(foodReducer(previousState, setFoodList({
      page: 1,
      size: 10,
      totalPages: 1,
      totalElements: 1,
      content: [{ id: 1, name: "香甜考肉饭", price: 15.5, description: "香甜可口，巴适得板" }]
    }))).toEqual({
      foodList: {
        page: 1,
        size: 10,
        totalPages: 1,
        totalElements: 1,
        content: [{ id: 1, name: "香甜考肉饭", price: 15.5, description: "香甜可口，巴适得板" }]
      }
    })
  })
});
