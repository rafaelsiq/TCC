module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const devConfig = {
  MONGO_URL: 'mongodb://localhost/tccdatabase-dev',
  JWT_SECRET: 'jtw_secret_kn'
};
const testConfig = {
  MONGO_URL: 'mongodb://localhost/tccdatabase-test',
  JWT_SECRET: 'jtw_secret_kn'

};
const prodConfig = {
  MONGO_URL: 'mongodb://localhost/tccdatabase-prod',
  JWT_SECRET: 'jtw_secret_kn'
};

const defaultConfig = {
  PORT: process.env.PORT || 3000
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

exports.default = Object.assign({}, defaultConfig, envConfig(process.env.NODE_ENV));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http-status");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express-validation");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authJwt = exports.authLocal = undefined;

var _passport = __webpack_require__(17);

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = __webpack_require__(37);

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _passportJwt = __webpack_require__(36);

var _user = __webpack_require__(42);

var _user2 = _interopRequireDefault(_user);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const localOpts = {
  usernameField: 'email'
};

const localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {
  try {
    const user = await _user2.default.findOne({ email });
    if (!user) {
      return done(null, false);
    } else if (!user.authenticateUser(password)) {
      return done(null, { status: 'error' });
    } else {
      return done(null, user);
    }
  } catch (e) {
    return done(e, false);
  }
});

const jwtOpts = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeader('authorization'),
  secretOrKey: _constants2.default.JWT_SECRET
};

const jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {
  try {
    const user = await _user2.default.findById(payload.id);
    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  } catch (e) {
    return done(e, false);
  }
});

_passport2.default.use(localStrategy);
_passport2.default.use(jwtStrategy);

const authLocal = exports.authLocal = _passport2.default.authenticate('local', { session: false });
const authJwt = exports.authJwt = _passport2.default.authenticate('jwt', { session: false });

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

try {
  _mongoose2.default.connect(_constants2.default.MONGO_URL);
} catch (err) {
  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);
}

_mongoose2.default.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
  throw e;
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _morgan = __webpack_require__(35);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(31);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = __webpack_require__(32);

var _compression2 = _interopRequireDefault(_compression);

var _helmet = __webpack_require__(34);

var _helmet2 = _interopRequireDefault(_helmet);

var _passport = __webpack_require__(17);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

exports.default = app => {
  if (isProd) {
    app.use((0, _compression2.default)());
    app.use((0, _helmet2.default)());
  }

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_passport2.default.initialize());

  if (isDev) {
    app.use((0, _morgan2.default)('dev'));
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(39);

var _user2 = _interopRequireDefault(_user);

var _advertsement = __webpack_require__(26);

var _advertsement2 = _interopRequireDefault(_advertsement);

var _httpStatus = __webpack_require__(3);

var _httpStatus2 = _interopRequireDefault(_httpStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cors = __webpack_require__(33);

exports.default = app => {
  const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
    optionSuccessStatus: _httpStatus2.default.OK
  };

  app.use(cors(corsOptions));

  app.use('/api/v1/users', _user2.default);
  app.use('/api/v1/sponsors/ads', _advertsement2.default);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(18);

var _middlewares = __webpack_require__(19);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _modules = __webpack_require__(20);

var _modules2 = _interopRequireDefault(_modules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
(0, _middlewares2.default)(app);
(0, _modules2.default)(app);

app.listen(_constants2.default.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port: ${_constants2.default.PORT}
      ---
    `);
  }
});

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateById = updateById;
exports.deleteAd = deleteAd;
exports.validateUser = validateUser;
exports.createAd = createAd;

var _advertsement = __webpack_require__(25);

var _advertsement2 = _interopRequireDefault(_advertsement);

var _httpStatus = __webpack_require__(3);

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jwt = __webpack_require__(1);

async function updateById(req, res, next) {
    const userId = req.url.toString().split('userId=')[1];
    const user = await _advertsement2.default.findByIdAndUpdate(userId, Object.assign({}, req.body));
    res.status(_httpStatus2.default.OK).json(user);
    return next();
}
async function deleteAd(req, res) {
    try {
        const userId = req.url.toString().split('userId=')[1];
        const Sp = await _advertsement2.default.findById(userId);
        await Sp.remove();
        return res.sendStatus(_httpStatus2.default.OK);
    } catch (e) {
        return res.status(_httpStatus2.default.BAD_REQUEST).json(e);
    }
}
async function validateUser(req, res, next) {
    jwt.verify(req.headers['authorization'], _constants2.default.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({ status: "error", message: err.message, data: null });
        } else {
            req.body.userId = decoded.id; //eslint-disable-line no-param-reassign
            return next();
        }
    });
}
async function createAd(req, res) {
    try {
        const user = await _advertsement2.default.up(Object.assign({}, req.body, { sponsor: req.body.userId }));
        return res.status(_httpStatus2.default.CREATED).json(user);
    } catch (e) {
        return res.status(_httpStatus2.default.BAD_REQUEST).json(e);
    }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _slug = __webpack_require__(38);

var _slug2 = _interopRequireDefault(_slug);

var _mongooseUniqueValidator = __webpack_require__(16);

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AdSchema = new _mongoose.Schema({
    sponsor: {
        type: String,
        trim: true,
        required: [true, 'Sponsor   is required!']
    },
    title: {
        type: String,
        trim: true,
        required: [true, 'Title   is required!'],
        minlength: [3, 'Title   need to be longer!'],
        unique: true
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Text   is required!'],
        minlength: [10, 'Text   need to be longer!']
    },
    user: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'Sponsor'
    },
    fileURL: {
        type: String,
        trim: true,
        required: [true, 'File is required!']
    },
    startDate: {
        type: Date,
        trim: true,
        required: [true, 'Start Date is required!']
    },
    endDate: {
        type: Date,
        trim: true,
        required: [true, 'End Date is required!']
    },
    startHour: {
        type: Date,
        trim: true,
        required: [false, 'Start Hour is required!']
    },
    tags: {
        type: String,
        trim: true,
        required: [false, 'Tags Hour is required!']
    },
    value: {
        type: Number,
        trim: true,
        required: [true, 'Value is required!']
    },
    slug: {
        type: String,
        trim: true,
        lowercase: true
    }
}, { timestamps: true });

AdSchema.plugin(_mongooseUniqueValidator2.default, {
    message: '{VALUE} already taken!'
});

AdSchema.pre('validate', function (next) {
    this._slugify();

    next();
});

AdSchema.methods = {
    _slugify() {
        this.slug = (0, _slug2.default)(this.title);
    }
};
AdSchema.statics = {
    createAds(args, user) {
        return this.create(Object.assign({}, args, {
            user
        }));
    },
    list({ skip = 0, limit = 5 } = {}) {
        return this.find().sort({ createdAt: -1 }).skip(skip).limit(limit).populate('sponsor');
    }
};

exports.default = _mongoose2.default.model('Advertsement', AdSchema);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _advertsement = __webpack_require__(24);

var adController = _interopRequireWildcard(_advertsement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const routes = new _express.Router();

routes.post('/create', adController.validateUser, adController.createAd);
routes.post('/update', adController.validateUser, adController.updateById);
routes.delete('/delete', adController.validateUser, adController.deleteAd);

exports.default = routes;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressValidation = __webpack_require__(6);

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _express = __webpack_require__(2);

var _user = __webpack_require__(41);

var userController = _interopRequireWildcard(_user);

var _user2 = __webpack_require__(40);

var _user3 = _interopRequireDefault(_user2);

var _auth = __webpack_require__(15);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = new _express.Router();

routes.post('/signup', (0, _expressValidation2.default)(_user3.default.signup), userController.signUp); //ok
routes.post('/login', _auth.authLocal, userController.login); //ok
routes.patch('/update', (0, _expressValidation2.default)(_user3.default.update), userController.validateUser, userController.updateById); //ok
routes.delete('/delete', userController.validateUser, userController.deleteUser);
routes.get('/', userController.getUsersList); //ok

exports.default = routes;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.passwordReg = undefined;

var _joi = __webpack_require__(7);

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const passwordReg = exports.passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
exports.default = {
    signup: {
        type: _joi2.default.string().required(),
        email: _joi2.default.string().email().required(),
        password: _joi2.default.string().regex(passwordReg).required(),
        firstName: _joi2.default.string().required(),
        lastName: _joi2.default.string().required(),
        userName: _joi2.default.string().required(),
        links: _joi2.default.string(),
        cpf: _joi2.default.string(),
        tags: _joi2.default.string(),
        ads: _joi2.default.string(),
        cnpj: _joi2.default.string()
    },
    update: {
        password: _joi2.default.string().regex(passwordReg)
    }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signUp = signUp;
exports.login = login;
exports.updateById = updateById;
exports.getUserById = getUserById;
exports.getUsersList = getUsersList;
exports.deleteUser = deleteUser;
exports.validateUser = validateUser;

var _httpStatus = __webpack_require__(3);

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _user = __webpack_require__(42);

var _user2 = _interopRequireDefault(_user);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _bcryptNodejs = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jwt = __webpack_require__(1);

async function signUp(req, res) {
    try {
        if (!req.body.cnpj) req.body = Object.assign({}, req.body, { cnpj: req.body.userName });
        const user = await _user2.default.create(req.body);
        return res.status(_httpStatus2.default.CREATED).json(user.toAuthJSON());
    } catch (e) {
        return res.status(_httpStatus2.default.BAD_REQUEST).json(e);
    }
}
async function login(req, res, next) {
    try {
        res.status(_httpStatus2.default.OK).json(req.user.toAuthJSON());
    } catch (err) {
        res.status(_httpStatus2.default.BAD_REQUEST).json({ message: "Unauthorized" });
    }
    return next();
}
async function updateById(req, res, next) {
    const userId = req.url.toString().split('userId=')[1];
    if (req.body.password) req.body.password = (0, _bcryptNodejs.hashSync)(req.body.password); //eslint-disable-line no-param-reassign
    const user = await _user2.default.findByIdAndUpdate(userId, Object.assign({}, req.body));
    res.status(_httpStatus2.default.OK).json(user);
    return next();
}
async function getUserById(req, res) {
    try {
        const Ad = await _user2.default.findById(req.params.id);
        return res.status(_httpStatus2.default.OK).json(Ad.toAuthJSON());
    } catch (e) {
        return res.status(_httpStatus2.default.BAD_REQUEST).json(e);
    }
}
async function getUsersList(req, res) {
    try {
        const Ads = await _user2.default.find({});
        return res.status(_httpStatus2.default.OK).json(Ads);
    } catch (e) {
        console.log(e);
        return res.status(_httpStatus2.default.BAD_REQUEST).json(e);
    }
}
async function deleteUser(req, res) {
    try {
        const userId = req.url.toString().split('userId=')[1];
        const Ad = await _user2.default.findById(userId);
        await Ad.remove();
        return res.sendStatus(_httpStatus2.default.OK);
    } catch (e) {
        return res.status(_httpStatus2.default.BAD_REQUEST).json(e);
    }
}
async function validateUser(req, res, next) {
    console.log(req.body);
    jwt.verify(req.headers['authorization'], _constants2.default.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({ status: "error", message: err.message, data: null });
        } else {
            req.body.userId = decoded.id; //eslint-disable-line no-param-reassign
            return next();
        }
    });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = __webpack_require__(8);

var _validator2 = _interopRequireDefault(_validator);

var _user = __webpack_require__(40);

var _jsonwebtoken = __webpack_require__(1);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _constants = __webpack_require__(0);

var _constants2 = _interopRequireDefault(_constants);

var _mongooseUniqueValidator = __webpack_require__(16);

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

var _bcryptNodejs = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Type is required!'],
        trim: true,
        unique: false
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        trim: true,
        validate: {
            validator(email) {
                return _validator2.default.isEmail(email);
            },
            message: '{VALUE} is not a valid email!'
        }
    },
    firstName: {
        type: String,
        required: [true, 'FirstName is required!'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'LastName is required!'],
        trim: true
    },
    userName: {
        type: String,
        required: [true, 'UserName is required!'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true,
        minlength: [8, 'Password need to be longer!'],
        validate: {
            validator(password) {
                return _user.passwordReg.test(password);
            },
            message: '{VALUE} is not a valid password!'
        }
    },
    links: {
        type: String,
        required: [false, 'You need to set up a Stream Link'],
        trim: true,
        unique: false
    },
    cpf: {
        type: String,
        required: [false, 'You need to set up a CPF to your account'],
        trim: true,
        unique: false
    },
    tags: {
        type: String,
        required: [false, 'You need to set up a CPF to your account'],
        trim: true,
        unique: false
    },
    ads: {
        type: String,
        required: [false, 'You need to set up a ads Link'],
        trim: true,
        unique: false
    },
    cnpj: {
        type: String,
        required: [false, 'You need to set up a CNPJ to your account'],
        trim: true,
        unique: true
    },
    pix: {
        type: String,
        required: [false, 'You need to set up a CNPJ to your account']
    }
});
UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }
    return next();
});
UserSchema.plugin(_mongooseUniqueValidator2.default, {
    message: '{VALUE} already taken!'
});

UserSchema.methods = {
    _hashPassword(password) {
        return (0, _bcryptNodejs.hashSync)(password);
    },
    authenticateUser(password) {
        return (0, _bcryptNodejs.compareSync)(password, this.password);
    }
};

UserSchema.methods = {
    _hashPassword(password) {
        return (0, _bcryptNodejs.hashSync)(password);
    },
    authenticateUser(password) {
        return (0, _bcryptNodejs.compareSync)(password, this.password);
    },
    createToken() {
        return _jsonwebtoken2.default.sign({
            _id: this._id
        }, _constants2.default.JWT_SECRET);
    },
    toAuthJSON() {
        return {
            _id: this._id,
            userName: this.userName,
            name: this.name,
            type: this.type,
            token: `JWT ${this.createToken()}`
        };
    },
    toJSON() {
        return {
            _id: this._id,
            userName: this.userName,
            name: this.name
        };
    }
};

exports.default = _mongoose2.default.model('Users', UserSchema);

/***/ })
/******/ ]);