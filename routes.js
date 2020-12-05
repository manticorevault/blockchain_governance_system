const routes = require("next-routes")();

// Add the route mapping
routes
    .add("/projects/create", "/projects/create")
    .add("/projects/list", "/projects/list")
    .add("/projects/:address", "/projects/single");

module.exports = routes;