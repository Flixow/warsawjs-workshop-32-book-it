import qs from 'qs';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const BASE_URL = 'http://localhost:3004';
export default (path, options = {}) => {
  const { data, ...rest } = options;
  const params = qs.stringify(options.params, { arrayFormat: 'brackets' });
  const url = `${BASE_URL}${path}?${params}`;

  return fetch(url, {
    ...rest,
    body: JSON.stringify(data),
  }).then(response => response.json());
};
