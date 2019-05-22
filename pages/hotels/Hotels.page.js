import { Fragment } from 'react';
import Link from 'next/link';

import { MainViewHandler } from 'shared/hocs';

import { HotelsList } from './components';

const Hotels = ({}) => {
  return (
    <Fragment>
      <Link href="/hotels?test=abc">
        <a>here</a>
      </Link>{' '}
      <HotelsList />
    </Fragment>
  );
};

Hotels.getInitialProps = () => {
  console.log('Hotels.getInitialProps');
};

export default MainViewHandler()(Hotels);
