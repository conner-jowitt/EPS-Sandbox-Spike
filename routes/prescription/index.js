const get = require('./get-prescription');
const post = require('./post-prescription');

const routes = [].concat(get, post);

module.exports = routes;