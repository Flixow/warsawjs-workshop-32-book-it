import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Spin, Row, Col } from 'antd';

import { MainViewHandler } from 'shared/hocs';

import { SearchForm } from 'shared/components';
import { HotelsList } from './components';

import { fetchHotels } from 'data/actions/hotels.actions';
import { averageRatingSelector, averagePriceSelector } from 'data/selectors/hotels.selectors';

let Hotels = ({ items, averageRating, averagePrice, isLoading }) => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <SearchForm />
      </Col>
      <Col span={16}>
        {isLoading ? (
          <Spin />
        ) : (
          <Fragment>
            <h1>{items.length} hotels</h1>
            <h1>Average Rating: {averageRating}</h1>
            <h1>Average Price: {averagePrice}</h1>
            <HotelsList items={items} />
          </Fragment>
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
  averageRating: averageRatingSelector(state),
  averagePrice: averagePriceSelector(state),
}))(Hotels);


export default Hotels;
