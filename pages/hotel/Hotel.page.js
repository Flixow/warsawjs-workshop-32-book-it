import { HotelItem } from './components';

import fetch from 'data/core/fetch';

const Hotels = ({ item }) => {
  return (
    <HotelItem item={item} />
  );
};

Hotels.getInitialProps = async ctx => {
  const { query } = ctx;

  try {
    const response = await fetch(`/hotels/${query.id}`, {
      params: {
        title: query.searched_phrase,
      },
    });
    console.log('TCL: response', response);

    return { item: response };
  } catch (error) {
    return { error };
  }
};


export default Hotels;
