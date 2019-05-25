import { createSelector } from 'reselect';

const hotelItemsSelector = state => state.hotels.list;

const getAverageRating = hotels => hotels.reduce((acc, hotel, idx, arr) => {
  acc = acc + parseFloat(hotel.rating.average);

  if (idx === arr.length - 1) {
    acc = acc / arr.length;
  }

  return acc;
}, 0).toFixed(2);

export const averageRatingSelector = createSelector(
  hotelItemsSelector,
  getAverageRating,
);

const getAveragePrice = hotels => hotels.reduce((acc, hotel, idx, arr) => {
  acc = acc + parseFloat(hotel.price.amount);

  if (idx === arr.length - 1) {
    acc = acc / arr.length;
  }

  return acc;
}, 0).toFixed(2);

export const averagePriceSelector = createSelector(
  hotelItemsSelector,
  getAveragePrice,
);
