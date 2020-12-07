"use strict";

var routes = require("next-routes")();

// Add the route mapping
routes.add("/projects/create", "/projects/create").add("/projects/list", "/projects/list").add("/projects/:address", "/projects/single").add("/projects/:address/requests", "/projects/requests/index").add("/projects/:address/requests/create", "/projects/requests/create");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BQ0ssQUFETCxJQUNTLEFBRFQsb0JBQzZCLEFBRDdCLG9CQUVLLEFBRkwsSUFFUyxBQUZULGtCQUUyQixBQUYzQixrQkFHSyxBQUhMLElBR1MsQUFIVCxzQkFHK0IsQUFIL0Isb0JBSUssQUFKTCxJQUlTLEFBSlQsK0JBSXdDLEFBSnhDLDRCQUtLLEFBTEwsSUFLUyxBQUxULHNDQUsrQyxBQUwvQzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=