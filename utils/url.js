import { cleanObject } from './misc';

export const addQuery = (router, query) => {
  const location = {
    pathname: router.pathname,
    query: {
      ...router.query,
      ...query,
    },
  };

  location.query = cleanObject(location.query);
  return location;
};
