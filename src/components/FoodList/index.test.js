import { render } from '@testing-library/react';
import { FoodList } from './index';

describe('FoodList', () => {
  it('should call `fetchFoodList` action when FoodList did mount', () => {
    const spyFetchFoodList = jest.fn();
    render(<FoodList fetchFoodList={spyFetchFoodList} />);

    expect(spyFetchFoodList).toBeCalledWith({
      page: 1,
      size: 10,
    })
  });
});
