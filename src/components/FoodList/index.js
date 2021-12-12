import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoodList } from '../../redux/actions/foodAction';
import { Table } from 'antd';


const columns = [
  {
    title: '序号',
    render:(text, record, index) => `${index+1}`,
  },
  {
    title: '餐品名称',
    dataIndex: 'name',
  },
  {
    title: '价格',
    dataIndex: 'price',
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
];

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

  onPageChange = page => {
    this.setState({
      page,
    }, this.loadData);
  }

  render() {
    const { content, totalElements = 0 } = this.props.foodListData;
    return (<Table
      dataSource={content}
      columns={columns}
      pagination={{
      total: totalElements,
      current: this.state.page,
      showTotal: (total) => `共${total.toLocaleString()}项结果`,
      pageSize: this.state.size,
      onChange: this.onPageChange,
      }}
    />)
  }
}

const mapStateToProps = (state) => ({
  foodListData: state.food.foodList,
})

const mapDispatchToProps = {
  fetchFoodList,
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
