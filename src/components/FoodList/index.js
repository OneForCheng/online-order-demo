import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodList } from '../../redux/actions/foodAction';

export class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      size: 10,
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const { page, size } = this.state;
    this.props.fetchFoodList({ page, size });
  }

  render() {
    return (<div>
      FoodList
    </div>)
  }
}

const mapStateToProps = (state) => ({
  foodListData: state.food.foodList,
})

const mapDispatchToProps = {
  fetchFoodList,
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
