import { connect } from 'react-redux';
import { Spin, Row, Col } from 'antd';

import { MainViewHandler } from 'shared/hocs';

import { SearchForm } from 'shared/components';
import { HotelsList } from './components';

import { fetchHotels } from 'data/actions/hotels.actions';

let Hotels = ({ items, isLoading }) => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <SearchForm />
      </Col>
      <Col span={16}>
        {isLoading ? (
          <Spin />
        ) : (
          <HotelsList items={items} />
        )}
      </Col>

    </Row>
  );
};

// Hotels.getInitialProps = async() => {
//   console.log('Hotels.getInitialProps');
// };

Hotels = MainViewHandler({
  fetchData: fetchHotels,
})(Hotels);

Hotels = connect(state => ({
  state: state.hotels.state,
  items: state.hotels.list,
}))(Hotels);


export default Hotels;
