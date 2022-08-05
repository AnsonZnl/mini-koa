const url = require('url');
module.exports = {
  get query() {
    const { query } = url.parse(this.req.url);
    return query;
  },
  get path() {
    const { pathname } = url.parse(this.req.url);
    return pathname;
  },
};