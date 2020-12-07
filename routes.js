const routes = require("next-routes")();

// Add the route mapping
routes
    .add("/projects/create", "/projects/create")
    .add("/projects/list", "/projects/list")
    .add("/projects/:address", "/projects/single")
    .add("/projects/:address/requests", "/projects/requests/index")
    .add("/projects/:address/requests/create", "/projects/requests/create")

module.exports = routes;