require('es6-promise').polyfill();
require('isomorphic-fetch');

export default (path, options = {}) => {
  const { data, ...rest } = options;

  return fetch(`http://localhost:3004${path}`, {
    ...rest,
    body: JSON.stringify(data),
  }).then(response => response.json());
};
