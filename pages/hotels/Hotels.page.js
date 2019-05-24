import { Fragment } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { MainViewHandler } from 'shared/hocs';

import { HotelsList } from './components';

import { fetchHotels } from 'data/actions/hotels.actions';

let Hotels = ({ items }) => {
  return (
    <Fragment>
      <Link href="/hotels?test=abc">
        <a>here</a>
      </Link>{' '}
      <HotelsList items={items} />
    </Fragment>
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
