"use strict";

var routes = require("next-routes")();

// Add the route mapping
routes.add("/projects/create", "/projects/create").add("/projects/list", "/projects/list").add("/projects/:address", "/projects/single");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BQ0ssQUFETCxJQUNTLEFBRFQsb0JBQzZCLEFBRDdCLG9CQUVLLEFBRkwsSUFFUyxBQUZULGtCQUUyQixBQUYzQixrQkFHSyxBQUhMLElBR1MsQUFIVCxzQkFHK0IsQUFIL0I7O0FBS0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9