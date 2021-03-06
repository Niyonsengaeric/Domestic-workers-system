"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _signUpController = _interopRequireDefault(require("../controllers/signUpController"));

var _addDomesticWorker = _interopRequireDefault(require("../controllers/addDomesticWorker"));

var _inputValidation = _interopRequireDefault(require("../middlewares/inputValidation"));

var _checkAuth = _interopRequireDefault(require("../middlewares/checkAuth"));

var _loginController = _interopRequireDefault(require("../controllers/loginController"));

var _validateLogin = _interopRequireDefault(require("../middlewares/validateLogin"));

var userRoutes = _express["default"].Router({
  mergeParams: true
});

userRoutes.post('/auth/signup', _signUpController["default"].signUp);
userRoutes.post('/auth/addDomestic', _checkAuth["default"].auth, _inputValidation["default"].validateDomesticWorkers, _addDomesticWorker["default"].addDomesticWorker);
userRoutes.post('/auth/login', _validateLogin["default"], _loginController["default"]);
var _default = userRoutes;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlclJvdXRlcy5qcyJdLCJuYW1lcyI6WyJ1c2VyUm91dGVzIiwiZXhwcmVzcyIsIlJvdXRlciIsIm1lcmdlUGFyYW1zIiwicG9zdCIsInNpZ25VcCIsImF1dGhDaGVja2VyIiwiYXV0aCIsImRvbWVzdGljVmFsaWRhdGlvbiIsInZhbGlkYXRlRG9tZXN0aWNXb3JrZXJzIiwiYWRkRG9tZXN0aWNXb3JrZXIiLCJ2YWxpZGF0ZUxvZ2luIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBR0Msb0JBQVFDLE1BQVIsQ0FBZTtBQUFFQyxFQUFBQSxXQUFXLEVBQUU7QUFBZixDQUFmLENBQW5COztBQUVBSCxVQUFVLENBQUNJLElBQVgsQ0FBZ0IsY0FBaEIsRUFBZ0NDLDZCQUFPQSxNQUF2QztBQUNBTCxVQUFVLENBQUNJLElBQVgsQ0FBZ0IsbUJBQWhCLEVBQXFDRSxzQkFBWUMsSUFBakQsRUFBdURDLDRCQUFtQkMsdUJBQTFFLEVBQW1HQyw4QkFBa0JBLGlCQUFySDtBQUNBVixVQUFVLENBQUNJLElBQVgsQ0FBZ0IsYUFBaEIsRUFBK0JPLHlCQUEvQixFQUE4Q0MsMkJBQTlDO2VBRWVaLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHNpZ25VcCBmcm9tICcuLi9jb250cm9sbGVycy9zaWduVXBDb250cm9sbGVyJ1xuaW1wb3J0IGFkZERvbWVzdGljV29ya2VyIGZyb20gJy4uL2NvbnRyb2xsZXJzL2FkZERvbWVzdGljV29ya2VyJ1xuaW1wb3J0IGRvbWVzdGljVmFsaWRhdGlvbiBmcm9tICcuLi9taWRkbGV3YXJlcy9pbnB1dFZhbGlkYXRpb24nXG5pbXBvcnQgYXV0aENoZWNrZXIgZnJvbSAnLi4vbWlkZGxld2FyZXMvY2hlY2tBdXRoJ1xuaW1wb3J0IGxvZ2luIGZyb20gJy4uL2NvbnRyb2xsZXJzL2xvZ2luQ29udHJvbGxlcidcbmltcG9ydCB2YWxpZGF0ZUxvZ2luIGZyb20gJy4uL21pZGRsZXdhcmVzL3ZhbGlkYXRlTG9naW4nXG5cbmNvbnN0IHVzZXJSb3V0ZXMgPSBleHByZXNzLlJvdXRlcih7IG1lcmdlUGFyYW1zOiB0cnVlIH0pXG5cbnVzZXJSb3V0ZXMucG9zdCgnL2F1dGgvc2lnbnVwJywgc2lnblVwLnNpZ25VcClcbnVzZXJSb3V0ZXMucG9zdCgnL2F1dGgvYWRkRG9tZXN0aWMnLCBhdXRoQ2hlY2tlci5hdXRoLCBkb21lc3RpY1ZhbGlkYXRpb24udmFsaWRhdGVEb21lc3RpY1dvcmtlcnMsIGFkZERvbWVzdGljV29ya2VyLmFkZERvbWVzdGljV29ya2VyKVxudXNlclJvdXRlcy5wb3N0KCcvYXV0aC9sb2dpbicsIHZhbGlkYXRlTG9naW4sIGxvZ2luKVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVzXG4iXX0=