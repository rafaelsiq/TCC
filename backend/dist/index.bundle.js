/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar devConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/tccdatabase-dev',\n  JWT_SECRET: 'dev_secret_key_%$$#8asd!44jn'\n};\nvar testConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/tccdatabase-test',\n  JWT_SECRET: 'test_secret_key_%$$#8asd!44jn'\n};\nvar prodConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/tccdatabase-prod',\n  JWT_SECRET: 'prod_secret_key_%$$#8asd!44jn'\n};\nvar defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n\n    case 'test':\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread(_objectSpread({}, defaultConfig), envConfig(\"development\")));\n\n//# sourceURL=webpack://backend/./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\n\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().Promise) = global.Promise;\n\ntry {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL);\n} catch (err) {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default().createConnection(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL);\n}\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.once('open', function () {\n  return console.log('MongoDB Running');\n}).on('error', function (e) {\n  throw e;\n});\n\n//# sourceURL=webpack://backend/./src/config/database.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _modules_streamers_streamer_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/streamers/streamer.routes */ \"./src/modules/streamers/streamer.routes.js\");\n\n\n\n\n\n\n\nvar isDev = \"development\" === 'development';\nvar isProd = \"development\" === 'production';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {\n  if (isProd) {\n    app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n    app.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());\n  }\n\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n    extended: true\n  }));\n  app.use('/api/v1/streamers', _modules_streamers_streamer_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n  if (isProd) {\n    app.use(_services_auth_services__WEBPACK_IMPORTED_MODULE_4__.authJwt.initialize());\n  }\n\n  if (isDev) {\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_0___default()('dev'));\n  }\n});\n\n//# sourceURL=webpack://backend/./src/config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n/* harmony import */ var _config_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n(0,_config_middleware__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\n(0,_modules__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app);\napp.listen(_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT, function (err) {\n  if (err) throw err;else console.log(\"Server running on port: \" + _config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT);\n});\n\n//# sourceURL=webpack://backend/./src/index.js?");

/***/ }),

/***/ "./src/modules/administrators/administrator.controller.js":
/*!****************************************************************!*\
  !*** ./src/modules/administrators/administrator.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"signUp\": () => (/* binding */ signUp)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _administrator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administrator.model */ \"./src/modules/administrators/administrator.model.js\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction signUp(_x, _x2) {\n  return _signUp.apply(this, arguments);\n}\n\nfunction _signUp() {\n  _signUp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _administrator_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(req.body);\n\n          case 3:\n            user = _context.sent;\n            return _context.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().CREATED)).json(user));\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().BAD_REQUEST)).json(_context.t0));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return _signUp.apply(this, arguments);\n}\n\nfunction login(req, res, next) {\n  res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().OK)).json(req.user);\n  return next();\n}\n\n//# sourceURL=webpack://backend/./src/modules/administrators/administrator.controller.js?");

/***/ }),

/***/ "./src/modules/administrators/administrator.model.js":
/*!***********************************************************!*\
  !*** ./src/modules/administrators/administrator.model.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _administrator_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administrator.validations */ \"./src/modules/administrators/administrator.validations.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\n\n\n\n\nvar AdministratorSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  type: {\n    type: String,\n    required: [true, 'Type is required!'],\n    trim: true,\n    unique: false\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required!'],\n    trim: true,\n    validate: {\n      validator: function validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(email);\n      },\n      message: '{VALUE} is not a valid email!'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'FirstName is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'LastName is required!'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'UserName is required!'],\n    trim: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [8, 'Password need to be longer!'],\n    validate: {\n      validator: function validator(password) {\n        return _administrator_validations__WEBPACK_IMPORTED_MODULE_2__.passwordReg.test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  }\n});\nAdministratorSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  return next();\n});\nAdministratorSchema.methods = {\n  _hashPassword: function _hashPassword(password) {\n    return hashSync(password);\n  },\n  authenticateUser: function authenticateUser(password) {\n    return compareSync(password, this.password);\n  }\n};\nAdministratorSchema.methods = {\n  createToken: function createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n  toJSON: function toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      token: \"JWT \".concat(this.createToken())\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Administrator', AdministratorSchema));\n\n//# sourceURL=webpack://backend/./src/modules/administrators/administrator.model.js?");

/***/ }),

/***/ "./src/modules/administrators/administrator.routes.js":
/*!************************************************************!*\
  !*** ./src/modules/administrators/administrator.routes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _administrator_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administrator.controller */ \"./src/modules/administrators/administrator.controller.js\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _administrator_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrator.validations */ \"./src/modules/administrators/administrator.validations.js\");\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__.Router();\nroutes.post('/signup', express_validation__WEBPACK_IMPORTED_MODULE_2___default()(_administrator_validations__WEBPACK_IMPORTED_MODULE_3__[\"default\"].signup), _administrator_controller__WEBPACK_IMPORTED_MODULE_1__.signUp);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://backend/./src/modules/administrators/administrator.routes.js?");

/***/ }),

/***/ "./src/modules/administrators/administrator.validations.js":
/*!*****************************************************************!*\
  !*** ./src/modules/administrators/administrator.validations.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"passwordReg\": () => (/* binding */ passwordReg)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\nvar passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  signup: {\n    type: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email().required(),\n    password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().regex(passwordReg).required(),\n    firstName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    lastName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    userName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required()\n  }\n});\n\n//# sourceURL=webpack://backend/./src/modules/administrators/administrator.validations.js?");

/***/ }),

/***/ "./src/modules/advertsements/advertsement.controller.js":
/*!**************************************************************!*\
  !*** ./src/modules/advertsements/advertsement.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAds\": () => (/* binding */ createAds),\n/* harmony export */   \"deleteAd\": () => (/* binding */ deleteAd),\n/* harmony export */   \"getAdById\": () => (/* binding */ getAdById),\n/* harmony export */   \"getAdsList\": () => (/* binding */ getAdsList),\n/* harmony export */   \"updateAd\": () => (/* binding */ updateAd)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _advertsement_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advertsement.model */ \"./src/modules/advertsements/advertsement.model.js\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction createAds(_x, _x2) {\n  return _createAds.apply(this, arguments);\n}\n\nfunction _createAds() {\n  _createAds = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var Ad;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _advertsement_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAds(req.body, req.user._id);\n\n          case 3:\n            Ad = _context.sent;\n            return _context.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().CREATED)).json(Ad));\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().BAD_REQUEST)).json(_context.t0));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return _createAds.apply(this, arguments);\n}\n\nfunction getAdById(_x3, _x4) {\n  return _getAdById.apply(this, arguments);\n}\n\nfunction _getAdById() {\n  _getAdById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {\n    var Ad;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _advertsement_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.params.id);\n\n          case 3:\n            Ad = _context2.sent;\n            return _context2.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().OK)).json(Ad));\n\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().BAD_REQUEST)).json(_context2.t0));\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 7]]);\n  }));\n  return _getAdById.apply(this, arguments);\n}\n\nfunction getAdsList(_x5, _x6) {\n  return _getAdsList.apply(this, arguments);\n}\n\nfunction _getAdsList() {\n  _getAdsList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(req, res) {\n    var limit, skip, Ads;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            limit = parseInt(req.query.limit, 0);\n            skip = parseInt(req.query.skip, 0);\n            _context3.prev = 2;\n            _context3.next = 5;\n            return _advertsement_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list({\n              limit: limit,\n              skip: skip\n            });\n\n          case 5:\n            Ads = _context3.sent;\n            return _context3.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().OK)).json(Ads));\n\n          case 9:\n            _context3.prev = 9;\n            _context3.t0 = _context3[\"catch\"](2);\n            return _context3.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().BAD_REQUEST)).json(_context3.t0));\n\n          case 12:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[2, 9]]);\n  }));\n  return _getAdsList.apply(this, arguments);\n}\n\nfunction updateAd(_x7, _x8) {\n  return _updateAd.apply(this, arguments);\n}\n\nfunction _updateAd() {\n  _updateAd = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(req, res) {\n    var Ad;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return _advertsement_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.params.id);\n\n          case 3:\n            Ad = _context4.sent;\n\n            if (Ad.user.equals(req.user._id)) {\n              _context4.next = 6;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", res.sendStatus((http_status__WEBPACK_IMPORTED_MODULE_3___default().UNAUTHORIZED)));\n\n          case 6:\n            Object.keys(req.body).forEach(function (key) {\n              Ad[key] = req.body[key];\n            });\n            _context4.t0 = res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().OK));\n            _context4.next = 10;\n            return Ad.save();\n\n          case 10:\n            _context4.t1 = _context4.sent;\n            return _context4.abrupt(\"return\", _context4.t0.json.call(_context4.t0, _context4.t1));\n\n          case 14:\n            _context4.prev = 14;\n            _context4.t2 = _context4[\"catch\"](0);\n            return _context4.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().BAD_REQUEST)).json(_context4.t2));\n\n          case 17:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 14]]);\n  }));\n  return _updateAd.apply(this, arguments);\n}\n\nfunction deleteAd(_x9, _x10) {\n  return _deleteAd.apply(this, arguments);\n}\n\nfunction _deleteAd() {\n  _deleteAd = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(req, res) {\n    var Ad;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            _context5.next = 3;\n            return _advertsement_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(req.params.id);\n\n          case 3:\n            Ad = _context5.sent;\n\n            if (Ad.user.equals(req.user._id)) {\n              _context5.next = 6;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", res.sendStatus((http_status__WEBPACK_IMPORTED_MODULE_3___default().UNAUTHORIZED)));\n\n          case 6:\n            _context5.next = 8;\n            return Ad.remove();\n\n          case 8:\n            return _context5.abrupt(\"return\", res.sendStatus((http_status__WEBPACK_IMPORTED_MODULE_3___default().OK)));\n\n          case 11:\n            _context5.prev = 11;\n            _context5.t0 = _context5[\"catch\"](0);\n            return _context5.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().BAD_REQUEST)).json(_context5.t0));\n\n          case 14:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[0, 11]]);\n  }));\n  return _deleteAd.apply(this, arguments);\n}\n\n//# sourceURL=webpack://backend/./src/modules/advertsements/advertsement.controller.js?");

/***/ }),

/***/ "./src/modules/advertsements/advertsement.model.js":
/*!*********************************************************!*\
  !*** ./src/modules/advertsements/advertsement.model.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slug */ \"slug\");\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar AdSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({\n  title: {\n    type: String,\n    trim: true,\n    required: [true, 'Title   is required!'],\n    minlength: [3, 'Title   need to be longer!'],\n    unique: true\n  },\n  text: {\n    type: String,\n    trim: true,\n    required: [true, 'Text   is required!'],\n    minlength: [10, 'Text   need to be longer!']\n  },\n  user: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema.Types.ObjectId,\n    ref: 'Sponsor'\n  },\n  fileURL: {\n    type: String,\n    trim: true,\n    required: [true, 'File is required!']\n  },\n  startDate: {\n    type: Date,\n    trim: true,\n    required: [true, 'Start Date is required!']\n  },\n  endDate: {\n    type: Date,\n    trim: true,\n    required: [true, 'End Date is required!']\n  },\n  startHour: {\n    type: Date,\n    trim: true,\n    required: [false, 'Start Hour is required!']\n  },\n  tags: {\n    type: String,\n    trim: true,\n    required: [false, 'Tags Hour is required!']\n  },\n  value: {\n    type: Number,\n    trim: true,\n    required: [true, 'Value is required!']\n  },\n  slug: {\n    type: String,\n    trim: true,\n    lowercase: true\n  }\n}, {\n  timestamps: true\n});\nAdSchema.plugin((mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3___default()), {\n  message: '{VALUE} already taken!'\n});\nAdSchema.pre('validate', function (next) {\n  this._slugify();\n\n  next();\n});\nAdSchema.methods = {\n  _slugify: function _slugify() {\n    this.slug = slug__WEBPACK_IMPORTED_MODULE_2___default()(this.title);\n  }\n};\nAdSchema.statics = {\n  createAds: function createAds(args, user) {\n    return this.create(_objectSpread(_objectSpread({}, args), {}, {\n      user: user\n    }));\n  },\n  list: function list() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$skip = _ref.skip,\n        skip = _ref$skip === void 0 ? 0 : _ref$skip,\n        _ref$limit = _ref.limit,\n        limit = _ref$limit === void 0 ? 5 : _ref$limit;\n\n    return this.find().sort({\n      createdAt: -1\n    }).skip(skip).limit(limit).populate('sponsor');\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_1___default().model('Advertsement', AdSchema));\n\n//# sourceURL=webpack://backend/./src/modules/advertsements/advertsement.model.js?");

/***/ }),

/***/ "./src/modules/advertsements/advertsement.routes.js":
/*!**********************************************************!*\
  !*** ./src/modules/advertsements/advertsement.routes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _advertsement_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advertsement.controller */ \"./src/modules/advertsements/advertsement.controller.js\");\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _advertsement_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advertsement.validation */ \"./src/modules/advertsements/advertsement.validation.js\");\n\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__.Router();\nroutes.post('/', _services_auth_services__WEBPACK_IMPORTED_MODULE_3__.authJwt, express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_advertsement_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"].createAds), _advertsement_controller__WEBPACK_IMPORTED_MODULE_2__.createAds);\nroutes.patch('/:id', _services_auth_services__WEBPACK_IMPORTED_MODULE_3__.authJwt, express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_advertsement_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"].updateAd), _advertsement_controller__WEBPACK_IMPORTED_MODULE_2__.updateAd);\nroutes[\"delete\"]('/:id', _services_auth_services__WEBPACK_IMPORTED_MODULE_3__.authJwt, _advertsement_controller__WEBPACK_IMPORTED_MODULE_2__.deleteAd);\nroutes.get('/:id', _advertsement_controller__WEBPACK_IMPORTED_MODULE_2__.getAdById);\nroutes.get('/', _advertsement_controller__WEBPACK_IMPORTED_MODULE_2__.getAdsList);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://backend/./src/modules/advertsements/advertsement.routes.js?");

/***/ }),

/***/ "./src/modules/advertsements/advertsement.validation.js":
/*!**************************************************************!*\
  !*** ./src/modules/advertsements/advertsement.validation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"passwordReg\": () => (/* binding */ passwordReg)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\nvar passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createAds: {\n    body: {\n      user: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      title: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      text: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      fileURL: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      startDate: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      endDate: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      startHour: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      tags: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      value: joi__WEBPACK_IMPORTED_MODULE_0___default().number().required(),\n      slug: joi__WEBPACK_IMPORTED_MODULE_0___default().string()\n    }\n  },\n  updateAd: {\n    body: {\n      user: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      title: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      text: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      fileURL: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      startDate: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      endDate: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      startHour: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      tags: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n      value: joi__WEBPACK_IMPORTED_MODULE_0___default().number(),\n      slug: joi__WEBPACK_IMPORTED_MODULE_0___default().string()\n    }\n  }\n});\n\n//# sourceURL=webpack://backend/./src/modules/advertsements/advertsement.validation.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _streamers_streamer_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streamers/streamer.routes */ \"./src/modules/streamers/streamer.routes.js\");\n/* harmony import */ var _sponsors_sponsor_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsors/sponsor.routes */ \"./src/modules/sponsors/sponsor.routes.js\");\n/* harmony import */ var _administrators_administrator_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administrators/administrator.routes */ \"./src/modules/administrators/administrator.routes.js\");\n/* harmony import */ var _advertsements_advertsement_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertsements/advertsement.routes */ \"./src/modules/advertsements/advertsement.routes.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {\n  app.use('/api/v1/streamers', _streamers_streamer_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  app.use('/api/v1/sponsors', _sponsors_sponsor_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  app.use('/api/v1/adminstrators', _administrators_administrator_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  app.use('/api/v1/sponsors/ads', _advertsements_advertsement_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n});\n\n//# sourceURL=webpack://backend/./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/sponsors/sponsor.controller.js":
/*!****************************************************!*\
  !*** ./src/modules/sponsors/sponsor.controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"signUp\": () => (/* binding */ signUp)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sponsor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sponsor.model */ \"./src/modules/sponsors/sponsor.model.js\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction signUp(_x, _x2) {\n  return _signUp.apply(this, arguments);\n}\n\nfunction _signUp() {\n  _signUp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _sponsor_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(req.body);\n\n          case 3:\n            user = _context.sent;\n            return _context.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().CREATED)).json(user));\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().BAD_REQUEST)).json(_context.t0));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return _signUp.apply(this, arguments);\n}\n\nfunction login(req, res, next) {\n  res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().OK)).json(req.user);\n  return next();\n}\n\n//# sourceURL=webpack://backend/./src/modules/sponsors/sponsor.controller.js?");

/***/ }),

/***/ "./src/modules/sponsors/sponsor.model.js":
/*!***********************************************!*\
  !*** ./src/modules/sponsors/sponsor.model.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sponsor_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sponsor.validations */ \"./src/modules/sponsors/sponsor.validations.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\n\n\n\n\nvar SponsorSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  type: {\n    type: String,\n    required: [true, 'Type is required!'],\n    trim: true,\n    unique: false\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required!'],\n    trim: true,\n    validate: {\n      validator: function validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(email);\n      },\n      message: '{VALUE} is not a valid email!'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'FirstName is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'LastName is required!'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'UserName is required!'],\n    trim: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [8, 'Password need to be longer!'],\n    validate: {\n      validator: function validator(password) {\n        return _sponsor_validations__WEBPACK_IMPORTED_MODULE_2__.passwordReg.test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  },\n  ads: {\n    type: String,\n    required: [false, 'You need to set up a ads Link'],\n    trim: true,\n    unique: false\n  },\n  cpf: {\n    type: String,\n    required: [false, 'You need to set up a CPF to your account'],\n    trim: true,\n    unique: true\n  },\n  tags: {\n    type: String,\n    required: [true, 'You need to set up a CPF to your account'],\n    trim: true,\n    unique: false\n  },\n  cnpj: {\n    type: String,\n    required: [false, 'You need to set up a CNPJ to your account'],\n    trim: true,\n    unique: true\n  }\n});\nSponsorSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  return next();\n});\nSponsorSchema.methods = {\n  _hashPassword: function _hashPassword(password) {\n    return hashSync(password);\n  },\n  authenticateUser: function authenticateUser(password) {\n    return compareSync(password, this.password);\n  }\n};\nSponsorSchema.methods = {\n  createToken: function createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n  toJSON: function toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      token: \"JWT \".concat(this.createToken())\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Sponsor', SponsorSchema));\n\n//# sourceURL=webpack://backend/./src/modules/sponsors/sponsor.model.js?");

/***/ }),

/***/ "./src/modules/sponsors/sponsor.routes.js":
/*!************************************************!*\
  !*** ./src/modules/sponsors/sponsor.routes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sponsor_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sponsor.controller */ \"./src/modules/sponsors/sponsor.controller.js\");\n/* harmony import */ var _sponsor_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sponsor.validations */ \"./src/modules/sponsors/sponsor.validations.js\");\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__.Router();\nroutes.post('/signup', express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_sponsor_validations__WEBPACK_IMPORTED_MODULE_3__[\"default\"].signup), _sponsor_controller__WEBPACK_IMPORTED_MODULE_2__.signUp);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://backend/./src/modules/sponsors/sponsor.routes.js?");

/***/ }),

/***/ "./src/modules/sponsors/sponsor.validations.js":
/*!*****************************************************!*\
  !*** ./src/modules/sponsors/sponsor.validations.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"passwordReg\": () => (/* binding */ passwordReg)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\nvar passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  signup: {\n    type: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email().required(),\n    password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().regex(passwordReg).required(),\n    firstName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    lastName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    userName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    ads: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    cpf: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    tags: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    cnpj: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required()\n  }\n});\n\n//# sourceURL=webpack://backend/./src/modules/sponsors/sponsor.validations.js?");

/***/ }),

/***/ "./src/modules/streamers/streamer.controller.js":
/*!******************************************************!*\
  !*** ./src/modules/streamers/streamer.controller.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"signUp\": () => (/* binding */ signUp)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _streamer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./streamer.model */ \"./src/modules/streamers/streamer.model.js\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction signUp(_x, _x2) {\n  return _signUp.apply(this, arguments);\n}\n\nfunction _signUp() {\n  _signUp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _streamer_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(req.body);\n\n          case 3:\n            user = _context.sent;\n            return _context.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().CREATED)).json(user));\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().BAD_REQUEST)).json(_context.t0));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return _signUp.apply(this, arguments);\n}\n\nfunction login(req, res, next) {\n  res.status((http_status__WEBPACK_IMPORTED_MODULE_3___default().OK)).json(req.user.toAuthJSON());\n  return next();\n}\n\n//# sourceURL=webpack://backend/./src/modules/streamers/streamer.controller.js?");

/***/ }),

/***/ "./src/modules/streamers/streamer.model.js":
/*!*************************************************!*\
  !*** ./src/modules/streamers/streamer.model.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _streamer_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./streamer.validations */ \"./src/modules/streamers/streamer.validations.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\n\n\n\n\nvar StreamerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  type: {\n    type: String,\n    required: [true, 'Type is required!'],\n    trim: true,\n    unique: false\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required!'],\n    trim: true,\n    validate: {\n      validator: function validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(email);\n      },\n      message: '{VALUE} is not a valid email!'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'FirstName is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'LastName is required!'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'UserName is required!'],\n    trim: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [8, 'Password need to be longer!'],\n    validate: {\n      validator: function validator(password) {\n        return _streamer_validations__WEBPACK_IMPORTED_MODULE_2__.passwordReg.test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  },\n  links: {\n    type: String,\n    required: [true, 'You need to set up a Stream Link'],\n    trim: true,\n    unique: false\n  },\n  cpf: {\n    type: String,\n    required: [true, 'You need to set up a CPF to your account'],\n    trim: true,\n    unique: true\n  },\n  tags: {\n    type: String,\n    required: [true, 'You need to set up a CPF to your account'],\n    trim: true,\n    unique: false\n  }\n});\nStreamerSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  return next();\n});\nStreamerSchema.methods = {\n  _hashPassword: function _hashPassword(password) {\n    return hashSync(password);\n  },\n  authenticateUser: function authenticateUser(password) {\n    return compareSync(password, this.password);\n  }\n};\nStreamerSchema.methods = {\n  createToken: function createToken() {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n      _id: this._id\n    }, _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"default\"].JWT_SECRET);\n  },\n  toJSON: function toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Streamer', StreamerSchema));\n\n//# sourceURL=webpack://backend/./src/modules/streamers/streamer.model.js?");

/***/ }),

/***/ "./src/modules/streamers/streamer.routes.js":
/*!**************************************************!*\
  !*** ./src/modules/streamers/streamer.routes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _streamer_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streamer.controller */ \"./src/modules/streamers/streamer.controller.js\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _streamer_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./streamer.validations */ \"./src/modules/streamers/streamer.validations.js\");\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__.Router();\nroutes.post('/signup', express_validation__WEBPACK_IMPORTED_MODULE_2___default()(_streamer_validations__WEBPACK_IMPORTED_MODULE_3__[\"default\"].signup), _streamer_controller__WEBPACK_IMPORTED_MODULE_1__.signUp);\nroutes.post('/login', _services_auth_services__WEBPACK_IMPORTED_MODULE_4__.authLocal, _streamer_controller__WEBPACK_IMPORTED_MODULE_1__.login);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://backend/./src/modules/streamers/streamer.routes.js?");

/***/ }),

/***/ "./src/modules/streamers/streamer.validations.js":
/*!*******************************************************!*\
  !*** ./src/modules/streamers/streamer.validations.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"passwordReg\": () => (/* binding */ passwordReg)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\nvar passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  signup: {\n    type: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email().required(),\n    password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().regex(passwordReg).required(),\n    firstName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    lastName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    userName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    links: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    cpf: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    tags: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required()\n  }\n});\n\n//# sourceURL=webpack://backend/./src/modules/streamers/streamer.validations.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authJwt\": () => (/* binding */ authJwt),\n/* harmony export */   \"authLocal\": () => (/* binding */ authLocal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_streamers_streamer_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/streamers/streamer.model */ \"./src/modules/streamers/streamer.model.js\");\n/* harmony import */ var _modules_sponsors_sponsor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/sponsors/sponsor.model */ \"./src/modules/sponsors/sponsor.model.js\");\n/* harmony import */ var _modules_administrators_administrator_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/administrators/administrator.model */ \"./src/modules/administrators/administrator.model.js\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\n\n\n\n\n\n\n\n\nvar localOpts = {\n  usernameField: 'email'\n};\nvar jwtOpts = {\n  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_7__.ExtractJwt.fromAuthHeaderWithScheme('authorization'),\n  secretOrKey: _config_constants__WEBPACK_IMPORTED_MODULE_8__[\"default\"].JWT_SECRET\n};\nvar localStrategy = new (passport_local__WEBPACK_IMPORTED_MODULE_3___default())(localOpts, /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(email, password, done) {\n    var streamer, sponsor, administrator, user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return User.findOne({\n              email: email\n            });\n\n          case 3:\n            streamer = _context.sent;\n            _context.next = 6;\n            return User.findOne({\n              email: email\n            });\n\n          case 6:\n            sponsor = _context.sent;\n            _context.next = 9;\n            return User.findOne({\n              email: email\n            });\n\n          case 9:\n            administrator = _context.sent;\n            user = !_modules_streamers_streamer_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? streamer : _modules_administrators_administrator_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"] ? administrator : _modules_sponsors_sponsor_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"] ? sponsor : undefined;\n\n            if (user) {\n              _context.next = 15;\n              break;\n            }\n\n            return _context.abrupt(\"return\", done(null, false));\n\n          case 15:\n            if (user.authenticateUser(password)) {\n              _context.next = 17;\n              break;\n            }\n\n            return _context.abrupt(\"return\", done(null, false));\n\n          case 17:\n            return _context.abrupt(\"return\", done(null, user));\n\n          case 20:\n            _context.prev = 20;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", done(_context.t0, false));\n\n          case 23:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 20]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar jwtStrategy = new passport_jwt__WEBPACK_IMPORTED_MODULE_7__.Strategy(jwtOpts, /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(payload, done) {\n    var streamer, sponsor, administrator, user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return User.findOne({\n              email: email\n            });\n\n          case 3:\n            streamer = _context2.sent;\n            _context2.next = 6;\n            return User.findOne({\n              email: email\n            });\n\n          case 6:\n            sponsor = _context2.sent;\n            _context2.next = 9;\n            return User.findOne({\n              email: email\n            });\n\n          case 9:\n            administrator = _context2.sent;\n            user = !_modules_streamers_streamer_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? streamer : _modules_administrators_administrator_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"] ? administrator : _modules_sponsors_sponsor_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"] ? sponsor : undefined;\n\n            if (user) {\n              _context2.next = 13;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", done(null, false));\n\n          case 13:\n            return _context2.abrupt(\"return\", done(null, user));\n\n          case 16:\n            _context2.prev = 16;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", done(_context2.t0, false));\n\n          case 19:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 16]]);\n  }));\n\n  return function (_x4, _x5) {\n    return _ref2.apply(this, arguments);\n  };\n}());\npassport__WEBPACK_IMPORTED_MODULE_2___default().use(localStrategy);\npassport__WEBPACK_IMPORTED_MODULE_2___default().use(jwtStrategy);\nvar authLocal = passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('local', {\n  session: false\n});\nvar authJwt = passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('jwt', {\n  session: false\n});\n\n//# sourceURL=webpack://backend/./src/services/auth.services.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-validation");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-status");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("mongoose-unique-validator");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "slug":
/*!***********************!*\
  !*** external "slug" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("slug");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;