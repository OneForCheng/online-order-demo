import { render, screen } from '@testing-library/react';
import { FoodList } from './index';

describe('FoodList', () => {
  it('should call `fetchFoodList` action when FoodList did mount', () => {
    const spyFetchFoodList = jest.fn();
    const data = {};
    render(<FoodList foodListData={data} fetchFoodList={spyFetchFoodList} />);

    expect(spyFetchFoodList).toBeCalledWith({
      page: 1,
      size: 10,
    })
  });

  it('should show `暂无数据` when food table is empty', () => {
    render(<FoodList foodListData={{ content: [] }} fetchFoodList={() => {}} />);
    const linkElement = screen.getByText(/暂无数据/i);
    expect(linkElement).toBeInTheDocument();
  });
});
