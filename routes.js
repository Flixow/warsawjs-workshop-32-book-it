const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'index', pattern: '/', page: '/index' })

  .add({ name: 'hotels', pattern: '/hotels', page: '/hotels' })
  .add({ name: 'hotel', pattern: '/hotels/:id', page: '/hotel' })
;
