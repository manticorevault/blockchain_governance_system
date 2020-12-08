"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _ProjectFactory = require("./build/ProjectFactory.json");

var _ProjectFactory2 = _interopRequireDefault(_ProjectFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a contract instance and export it
var contractInstance = new _web2.default.eth.Contract(JSON.parse(_ProjectFactory2.default.interface), "0xBEb6E73316927620057825650b384f3182e0c565" // Address where the contract was deployed
);

exports.default = contractInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIlByb2plY3RGYWN0b3J5IiwiY29udHJhY3RJbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7Ozs7O0FBRTNCO0FBQ0EsSUFBTSx1QkFBdUIsY0FBQSxBQUFLLElBQVQsQUFBYSxTQUNsQyxLQUFBLEFBQUssTUFBTSx5QkFEVSxBQUNyQixBQUEwQixZQURMLEFBRXJCLDZDQUZKLEFBQXlCLEFBRXdCLEFBR2pEO0FBTHlCOztrQkFLekIsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=