(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["tableFilter"] = factory(require("react"));
	else
		root["tableFilter"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(9)();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var isUndefined = exports.isUndefined = function isUndefined(str, emptyStringCheck) {
	if (typeof str === "undefined" || str === null || str === "undefined" || str === "null") {
		return true;
	}
	if (emptyStringCheck && typeof str === "string" && str.toString().trim().length === 0) {
		return true;
	}
	return false;
};

var isTypeArray = exports.isTypeArray = function isTypeArray(val) {
	return toString.call(val) === "[object Array]" ? true : false;
};

var isTypeString = exports.isTypeString = function isTypeString(val) {
	return toString.call(val) === "[object String]" ? true : false;
};

var getValForKey = exports.getValForKey = function getValForKey(obj, key) {
	if (!isUndefined(key)) {
		if (isTypeString(key)) {
			var keyArray = key.split('.');

			if (keyArray.length === 1) {
				return obj[key];
			} else {
				var finalValue = obj;
				var i = void 0,
				    l = void 0;
				for (i = 0, l = keyArray.length; i < l; i = i + 1) {
					var currKey = keyArray[i];
					var currValue = finalValue[currKey];

					if (!isUndefined(currValue)) {
						finalValue = currValue;
					} else {
						finalValue = undefined;
						break;
					}
				}

				return finalValue;
			}
		} else {
			return obj[key];
		}
	}
	return;
};

exports.default = {
	isUndefined: isUndefined,
	isTypeArray: isTypeArray,
	isTypeString: isTypeString,
	getValForKey: getValForKey
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sortAction = undefined;

var _util = __webpack_require__(2);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * [Function to sort an array (asc or dsc) w.r.t to an filter]
 * @param  {Array}   inputArray            [Array to be sorted]
 * @param  {String}  type                  [asc or dsc]
 * @param  {Function}  options.valueFunc     [Function to calculate value of an item(optional)]
 * @param  {Boolean} options.caseSensitive [Whether case sensitive or not]
 * @param  {String}  options.key           [Filter Key]
 * @return {Array}                        [Sorted array]
 */
var sortAction = exports.sortAction = function sortAction() {
	var inputArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

	var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	    _ref$valueFunc = _ref.valueFunc,
	    valueFunc = _ref$valueFunc === undefined ? undefined : _ref$valueFunc,
	    _ref$caseSensitive = _ref.caseSensitive,
	    caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
	    _ref$key = _ref.key,
	    key = _ref$key === undefined ? undefined : _ref$key;

	if (!(0, _util.isUndefined)(type)) {
		var inputCopy = [].concat(_toConsumableArray(inputArray));

		var sortFunc = function sortFunc(a, b) {
			var aValue = void 0,
			    bValue = void 0;

			if (!(0, _util.isUndefined)(key)) {
				aValue = (0, _util.getValForKey)(a, key);
				bValue = (0, _util.getValForKey)(b, key);
			} else {
				aValue = a;
				bValue = b;
			}

			if (!(0, _util.isUndefined)(valueFunc)) {
				aValue = valueFunc(aValue);
				bValue = valueFunc(bValue);
			} else {
				if (!isNaN(Number(aValue)) && !isNaN(Number(bValue))) {
					aValue = Number(aValue);
					bValue = Number(bValue);
				}

				if ((0, _util.isTypeString)(aValue)) {
					aValue = aValue.trim();
					if (!caseSensitive) {
						aValue = aValue.toUpperCase();
					}
				}

				if ((0, _util.isTypeString)(bValue)) {
					bValue = bValue.trim();
					if (!caseSensitive) {
						bValue = bValue.toUpperCase();
					}
				}
			}

			if ((0, _util.isUndefined)(aValue)) {
				aValue = '';
			}

			if ((0, _util.isUndefined)(bValue)) {
				bValue = '';
			}

			var result = 0;

			if (aValue < bValue) {
				result = -1;
			} else {
				result = 1;
			}

			if (type === 'asc') {
				return result;
			} else {
				return -result;
			}
		};

		return inputCopy.sort(sortFunc);
	}
	return inputArray;
};

exports.default = sortAction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _template = __webpack_require__(6);

var _template2 = _interopRequireDefault(_template);

var _util = __webpack_require__(2);

var _filter = __webpack_require__(25);

var _sort = __webpack_require__(4);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Root Filter Component. This Component attaches filter icon and list to the table heads
 */
var TableFilter = function (_Component) {
	_inherits(TableFilter, _Component);

	function TableFilter(props) {
		_classCallCheck(this, TableFilter);

		var _this = _possibleConstructorReturn(this, (TableFilter.__proto__ || Object.getPrototypeOf(TableFilter)).call(this, props));

		_this.filterIcons = {};
		_this.childrenIntances;
		var stateData = _this._createData(_this.props.rows);

		_this._initMethods();

		_this.state = {
			initialData: stateData.initialData,
			filteredData: stateData.filteredData,
			sortKey: undefined
		};
		return _this;
	}

	/*Bind Functions to Context*/


	_createClass(TableFilter, [{
		key: '_initMethods',
		value: function _initMethods() {
			this._filterRows = this._filterRows.bind(this);
			this._resetRows = this._resetRows.bind(this);
			this._sortRows = this._sortRows.bind(this);
			this.reset = this.reset.bind(this);
		}

		// This method to be done with web worker
		/**
   * [_createData The data passed via props is copied to another array(to avoid mutation). // TODO - only one level
   * of mutation is prohibited right now.
   * @param  {Array}  rows [Data passed through props]
   * @return {Object}      [Created Data to be used in Filtering]
   */

	}, {
		key: '_createData',
		value: function _createData() {
			var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			var initialData = [];
			var filteredData = [];
			rows.map(function (item) {
				initialData.push(Object.assign({}, item));
				filteredData.push(Object.assign({}, item));
			});

			return {
				initialData: initialData,
				filteredData: filteredData
			};
		}

		/**
   * [_filterRows Function passed as a prop to FilterList Componenet and called in case a filter is applied 
   * or removed]
   * @param  {[type]}  value     [Filter value]
   * @param  {[type]}  key       [Filter key]
   * @param  {Boolean} addFilter [Add or remove fitler]
   * @param  {[type]}  valueFunc(optional) [Function passed to calculate the value of an item]
   */

	}, {
		key: '_filterRows',
		value: function _filterRows() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var addFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
			var valueFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			var filteredData = this.state.filteredData;
			if (!(0, _util.isUndefined)(value) && !(0, _util.isUndefined)(key)) {

				var result = (0, _filter.filterAction)(filteredData, { key: key, value: value }, addFilter, valueFunc);
				if (!(0, _util.isUndefined)(result)) {
					var filteredArray = result.filteredArray,
					    dataWithFilter = result.dataWithFilter;

					this.setState({
						filteredData: dataWithFilter
					});

					this.insideCall = true;
					this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray);
				}
			}
		}

		/**
   * [_resetRows Function called to reset selected the filters.]
   * @param  {Array}   filterValues [Array of values for which filter is to be removed]
   * @param  {[type]}  key          [Key of the filter to be removed]
   * @param  {Boolean} selectAll    [description]
   * @param  {[type]}  valueFunc    [description]
   * @return {[type]}               [description]
   */

	}, {
		key: '_resetRows',
		value: function _resetRows() {
			var filterValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var selectAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
			var valueFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

			if (!(0, _util.isUndefined)(key)) {
				var filteredData = this.state.filteredData;
				var result = (0, _filter.filtersReset)(filteredData, filterValues, key, selectAll, valueFunc);
				if (!(0, _util.isUndefined)(result)) {
					var filteredArray = result.filteredArray,
					    dataWithFilter = result.dataWithFilter;

					this.setState({
						filteredData: dataWithFilter
					});

					this.insideCall = true;
					this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray);
				}
			}
		}

		/**
   * [_sortRows Function to sort the values according to a filter]
   * @param  {[type]}  sortType              [description]
   * @param  {[type]}  options.valueFunc     [(optional) Function to calculate the value of the item]
   * @param  {Boolean} options.caseSensitive [Case Sensitive or not]
   * @param  {[type]}  options.key           [Key to sort by]
   */

	}, {
		key: '_sortRows',
		value: function _sortRows() {
			var sortType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
			    _ref$valueFunc = _ref.valueFunc,
			    valueFunc = _ref$valueFunc === undefined ? undefined : _ref$valueFunc,
			    _ref$caseSensitive = _ref.caseSensitive,
			    caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
			    _ref$key = _ref.key,
			    key = _ref$key === undefined ? undefined : _ref$key;

			if (!(0, _util.isUndefined)(sortType)) {
				var filteredData = this.state.filteredData;
				var result = (0, _sort.sortAction)(filteredData, sortType, { valueFunc: valueFunc, caseSensitive: caseSensitive, key: key });

				var filteredArray = [];

				this.setState({
					filteredData: result,
					sortKey: key,
					sortType: sortType
				});

				result.map(function (item) {
					if ((0, _util.isUndefined)(item.appliedFilters) || Object.keys(item.appliedFilters).length === 0) {
						var itemCopy = Object.assign({}, item);
						delete itemCopy['appliedFilters'];
						filteredArray.push(itemCopy);
					}
				});

				this.insideCall = true;
				this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray);
			}
		}

		/**
   * [reset Function called from parent(main code) to load/reset date of the filters]
   * @param  {[type]} rows [Array of items]
   */

	}, {
		key: 'reset',
		value: function reset(rows) {
			var stateData = this._createData(rows);
			this.setState({
				initialData: stateData.initialData,
				filteredData: stateData.filteredData
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _template2.default.call(this);
		}
	}]);

	return TableFilter;
}(_react.Component);

TableFilter.propTypes = {
	rows: _propTypes2.default.array.isRequired, // Filterable Data
	onFilterUpdate: _propTypes2.default.func.isRequired, // Function to be called with updated data when filters are applied or removed
	rowClass: _propTypes2.default.string // Optional class to be attached to row elements
};

exports.default = TableFilter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _filterList = __webpack_require__(7);

var _filterList2 = _interopRequireDefault(_filterList);

var _util = __webpack_require__(2);

var _tableFilter = __webpack_require__(24);

var _tableFilter2 = _interopRequireDefault(_tableFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * [render Main render function of the TableFilter]
 */
var render = function render() {
	var _this = this;

	var children = this.props.children;
	var finalChildren = [];

	if (!(0, _util.isUndefined)(children) && children.length > 0) {

		this.props.children.map(function (child, index) {

			if (!(0, _util.isUndefined)(child) && !(0, _util.isUndefined)(child.props.filterkey, true)) {

				var childClass = child.props.className;
				var childChildren = child.props.children || [];

				if (!(0, _util.isTypeArray)(childChildren)) {
					childChildren = [childChildren];
				}

				if ((0, _util.isUndefined)(childClass, true)) {
					childClass = "apply-filter";
				} else {
					childClass = [childClass, ' ', "apply-filter"].join('');
				}

				if (child.props.filterAdded != "true") {
					childChildren.push(_react2.default.createElement(_filterList2.default, _extends({}, child.props, {
						initialData: _this.state.initialData,
						filteredData: _this.state.filteredData,
						filterRows: _this._filterRows,
						resetRows: _this._resetRows,
						sortRows: _this._sortRows,
						sortKey: _this.state.sortKey,
						sortType: _this.state.sortType })));
				} else {
					childChildren[childChildren.length - 1] = _react2.default.createElement(_filterList2.default, _extends({}, child.props, {
						initialData: _this.state.initialData,
						filteredData: _this.state.filteredData,
						filterRows: _this._filterRows,
						resetRows: _this._resetRows,
						sortRows: _this._sortRows,
						sortKey: _this.state.sortKey,
						sortType: _this.state.sortType }));
				}

				var newProps = {
					className: childClass,
					filteradded: "true"
				};

				var clonedChild = _react2.default.cloneElement(child, newProps, [].concat(_toConsumableArray(childChildren)));
				finalChildren.push(clonedChild);
			} else {
				if (!(0, _util.isUndefined)(child)) {
					var _clonedChild = _react2.default.cloneElement(child);
					finalChildren.push(_clonedChild);
				}
			}
		});
	} else {
		console.error('TableFilter Error: Should contain one or more children');
	}
	return _react2.default.createElement(
		'tr',
		{ className: [this.props.rowClass ? this.props.rowClass + ' ' : '', 'table-filter-row'].join('') },
		finalChildren
	);
};

exports.default = render;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _filterListItem = __webpack_require__(8);

var _filterListItem2 = _interopRequireDefault(_filterListItem);

var _selectAllItem = __webpack_require__(13);

var _selectAllItem2 = _interopRequireDefault(_selectAllItem);

var _util = __webpack_require__(2);

var _eventStack = __webpack_require__(14);

var _eventStack2 = _interopRequireDefault(_eventStack);

var _filterIcon = __webpack_require__(21);

var _filterIcon2 = _interopRequireDefault(_filterIcon);

var _sort = __webpack_require__(4);

var _constants = __webpack_require__(22);

var _sortIcon = __webpack_require__(23);

var _sortIcon2 = _interopRequireDefault(_sortIcon);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterList = function (_React$Component) {
	_inherits(FilterList, _React$Component);

	function FilterList(props) {
		_classCallCheck(this, FilterList);

		var _this = _possibleConstructorReturn(this, (FilterList.__proto__ || Object.getPrototypeOf(FilterList)).call(this, props));

		_this._initMethods();

		_this.unselectedFilters = 0;

		var _this$_calculateFilte = _this._calculateFilterState(_this.props),
		    filterList = _this$_calculateFilte.filterList,
		    selectState = _this$_calculateFilte.selectState;

		_this.state = {
			filterList: filterList,
			showFilter: false,
			selectAllFilters: selectState,
			sortType: undefined
		};
		return _this;
	}

	_createClass(FilterList, [{
		key: '_initMethods',
		value: function _initMethods() {
			this._handleOutsideClick = this._handleOutsideClick.bind(this);
			this._calculateFilterState = this._calculateFilterState.bind(this);
			this._filterIconClicked = this._filterIconClicked.bind(this);
			this._displayFilter = this._displayFilter.bind(this);
			this._hideFilter = this._hideFilter.bind(this);
			this._filterUpdated = this._filterUpdated.bind(this);
			this._selectAllClicked = this._selectAllClicked.bind(this);
			this._filterData = this._filterData.bind(this);
			this._resetData = this._resetData.bind(this);
			this._sortClicked = this._sortClicked.bind(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_eventStack2.default.unsub('click', this._handleOutsideClick, document);
		}
	}, {
		key: '_handleOutsideClick',
		value: function _handleOutsideClick(e) {
			if (!this.filterIconNode.contains(e.target)) {
				this._hideFilter();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _calculateFilterState2 = this._calculateFilterState(nextProps),
			    filterList = _calculateFilterState2.filterList,
			    selectState = _calculateFilterState2.selectState;

			var sortTypeState = !(0, _util.isUndefined)(nextProps.sortKey) && nextProps.sortKey === this.props.filterkey ? nextProps.sortType : undefined;

			this.setState({
				filterList: filterList,
				selectAllFilters: selectState,
				sortType: sortTypeState
			});
		}
	}, {
		key: '_calculateFilterState',
		value: function _calculateFilterState(props) {
			var _this2 = this;

			var initialData = props.initialData ? [].concat(_toConsumableArray(props.initialData)) : [];
			var filteredData = props.filteredData ? [].concat(_toConsumableArray(props.filteredData)) : [];
			var filterkey = props.filterkey;
			var usedKeys = [];
			var filteredUsedKeys = [];
			var filterList = [];

			var selectState = true;

			filteredData.map(function (item) {
				var itemKey = (0, _util.getValForKey)(item, filterkey);
				var orinigalValue = itemKey;

				if (!(0, _util.isUndefined)(_this2.props.itemDisplayValueFunc)) {
					itemKey = _this2.props.itemDisplayValueFunc(itemKey);
				}

				var appliedFilters = item.appliedFilters || {};
				var displayName = itemKey;

				if ((0, _util.isUndefined)(itemKey)) {
					displayName = _constants.BLANK_LABEL;
					itemKey = "";
					orinigalValue = displayName;
				} else if ((0, _util.isTypeString)(itemKey)) {
					itemKey = itemKey.trim();
					if (itemKey.length === 0) {
						displayName = _constants.BLANK_LABEL;
						orinigalValue = displayName;
					}
				}

				if (usedKeys.indexOf(itemKey) === -1) {
					if (!(0, _util.isUndefined)(appliedFilters) && Object.keys(appliedFilters).length > 0) {
						if (Object.keys(appliedFilters).length === 1 && Object.keys(appliedFilters)[0] === filterkey) {
							selectState = false;
							filterList.push({
								"key": itemKey,
								"display": displayName,
								"selected": false,
								"visible": true,
								"orinigalValue": orinigalValue
							});
						} else {
							filterList.push({
								"key": itemKey,
								"display": displayName,
								"selected": true,
								"visible": false,
								"orinigalValue": orinigalValue
							});
						}
					} else {
						filterList.push({
							"key": itemKey,
							"display": displayName,
							"selected": true,
							"visible": true,
							"orinigalValue": orinigalValue
						});
					}

					usedKeys.push(itemKey);
				} else {
					var filterIndex = usedKeys.indexOf(itemKey);
					var filterItem = filterList[filterIndex];
					if (Object.keys(appliedFilters).length === 0) {
						if (!filterItem.selected || !filterItem.visible) {
							filterItem = Object.assign({}, filterItem, { "selected": true, "visible": true });
							filterList[filterIndex] = filterItem;
						}
					}

					if (Object.keys(appliedFilters).length === 1 && Object.keys(appliedFilters)[0] === filterkey) {
						selectState = false;
						filterItem = Object.assign({}, filterItem, { "selected": false, "visible": true });
						filterList[filterIndex] = filterItem;
					}
				}
			});

			filterList = (0, _sort.sortAction)(filterList, _constants.ASC_VALUE, {
				valueFunc: this.props.itemSortValueFunc,
				key: 'orinigalValue'
			});

			return {
				filterList: filterList,
				selectState: selectState
			};
		}
	}, {
		key: '_filterIconClicked',
		value: function _filterIconClicked(e) {
			var filterState = this.state.showFilter;
			var newState = !filterState;

			if (newState) {
				this._displayFilter();
			} else {
				this._hideFilter();
			}
		}
	}, {
		key: '_displayFilter',
		value: function _displayFilter() {
			_eventStack2.default.sub('click', this._handleOutsideClick, document);
			this.setState({
				showFilter: true
			});
		}
	}, {
		key: '_hideFilter',
		value: function _hideFilter() {
			_eventStack2.default.unsub('click', this._handleOutsideClick, document);
			this.setState({
				showFilter: false
			});
		}
	}, {
		key: '_filterUpdated',
		value: function _filterUpdated(index) {
			var allFilters = this.state.filterList;
			if (!(0, _util.isUndefined)(allFilters[index])) {
				var newFilterState = !allFilters[index]['selected'];
				this._filterData(allFilters[index]['key'], !newFilterState);
			}
		}
	}, {
		key: '_selectAllClicked',
		value: function _selectAllClicked() {
			var selectAllState = this.state.selectAllFilters;
			var newSelectAllState = !selectAllState;

			if (newSelectAllState) {
				var visibleFiltersValues = this.state.filterList.filter(function (filterItem) {
					return filterItem.visible && !filterItem.selected;
				}).map(function (filterItem) {
					return filterItem.key;
				});

				this._resetData(visibleFiltersValues, newSelectAllState);
			} else {

				var _visibleFiltersValues = this.state.filterList.filter(function (filterItem) {
					return filterItem.visible && filterItem.selected;
				}).map(function (filterItem) {
					return filterItem.key;
				});

				this._resetData(_visibleFiltersValues, newSelectAllState);
			}
		}
	}, {
		key: '_filterData',
		value: function _filterData() {
			var filterValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var addFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			this.props.filterRows(filterValue, this.props.filterkey, addFilter, this.props.itemDisplayValueFunc);
		}
	}, {
		key: '_resetData',
		value: function _resetData() {
			var filterValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var selectAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			this.props.resetRows(filterValues, this.props.filterkey, selectAll, this.props.itemDisplayValueFunc);
		}
	}, {
		key: '_sortClicked',
		value: function _sortClicked() {
			var currentSortType = this.state.sortType;
			var newSortType = void 0;
			if ((0, _util.isUndefined)(currentSortType) || currentSortType === _constants.DSC_VALUE) {
				newSortType = _constants.ASC_VALUE;
			} else {
				newSortType = _constants.DSC_VALUE;
			}

			this.props.sortRows(newSortType, {
				itemSortValueFunc: this.props.itemSortValueFunc,
				caseSensitive: this.props.caseSensitive,
				key: this.props.filterkey
			});
			// this.setState({
			// 	sortType: newSortType
			// }, () => {
			// 	debugger
			// 	this.props.sortRows(newSortType, {
			// 		itemSortValueFunc: this.props.itemSortValueFunc,
			// 		caseSensitive: this.props.caseSensitive,
			// 		key: this.props.filterkey
			// 	});
			// });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var filterState = this.state.showFilter,
			    filterkey = this.props.filterkey;
			var filterListItemHtml = [],
			    filterListHtml = void 0;

			if (this.state.filterList.length > 1) {
				if (filterState) {
					this.state.filterList.map(function (filterItem, index) {
						if (filterItem.visible) {
							filterListItemHtml.push(_react2.default.createElement(_filterListItem2.default, { filterClicked: _this3._filterUpdated, index: index, label: filterItem.display, selected: filterItem.selected }));
						}
					});

					var filterListClass = [!(0, _util.isUndefined)(this.props.alignleft) ? "align-left " : "", "filter-list"].join('');

					filterListHtml = _react2.default.createElement(
						'div',
						{ className: filterListClass },
						_react2.default.createElement(_sortIcon2.default, { sort: this._sortClicked, sortType: this.state.sortType }),
						_react2.default.createElement(_selectAllItem2.default, { filterClicked: this._selectAllClicked, selected: this.state.selectAllFilters }),
						filterListItemHtml
					);
				}

				var filterActive = !this.state.selectAllFilters || filterState;
				return _react2.default.createElement(
					'div',
					{ className: 'table-filter-parent', ref: function ref(node) {
							_this3.filterIconNode = node;
						} },
					_react2.default.createElement(_filterIcon2.default, { iconClicked: this._filterIconClicked, selected: filterActive }),
					filterListHtml
				);
			} else {
				return _react2.default.createElement('div', { style: { display: "none" } });
			}
		}
	}]);

	return FilterList;
}(_react2.default.Component);

FilterList.propTypes = {
	initialData: _propTypes2.default.array.isRequired,
	filteredData: _propTypes2.default.array.isRequired,
	filterRows: _propTypes2.default.func.isRequired,
	resetRows: _propTypes2.default.func.isRequired,
	sortRows: _propTypes2.default.func.isRequired,
	sortKey: _propTypes2.default.string,
	sortType: _propTypes2.default.string
};

exports.default = FilterList;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterListItem = function (_React$Component) {
	_inherits(FilterListItem, _React$Component);

	function FilterListItem(props) {
		_classCallCheck(this, FilterListItem);

		var _this = _possibleConstructorReturn(this, (FilterListItem.__proto__ || Object.getPrototypeOf(FilterListItem)).call(this, props));

		_this._initMethods();
		_this.state = {};
		return _this;
	}

	/*Bind Functions to Context*/


	_createClass(FilterListItem, [{
		key: '_initMethods',
		value: function _initMethods() {
			this._checkBoxClicked = this._checkBoxClicked.bind(this);
		}
	}, {
		key: '_checkBoxClicked',
		value: function _checkBoxClicked() {
			this.props.filterClicked(this.props.index);
		}
	}, {
		key: 'render',
		value: function render() {
			var checkBoxClass = [this.props.selected ? "selected " : "", "filter-check-box"].join('');
			return _react2.default.createElement(
				'div',
				{ className: 'filter-list-item ripple', onClick: this._checkBoxClicked },
				_react2.default.createElement('div', { className: checkBoxClass }),
				_react2.default.createElement(
					'div',
					{ className: 'filter-label' },
					this.props.label
				)
			);
		}
	}]);

	return FilterListItem;
}(_react2.default.Component);

FilterListItem.propTypes = {
	filterClicked: _propTypes2.default.func.isRequired,
	index: _propTypes2.default.number.isRequired,
	label: _propTypes2.default.any.isRequired,
	selected: _propTypes2.default.bool.isRequired
};

exports.default = FilterListItem;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);
var ReactPropTypesSecret = __webpack_require__(12);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectAllItem = function (_React$Component) {
	_inherits(SelectAllItem, _React$Component);

	function SelectAllItem(props) {
		_classCallCheck(this, SelectAllItem);

		var _this = _possibleConstructorReturn(this, (SelectAllItem.__proto__ || Object.getPrototypeOf(SelectAllItem)).call(this, props));

		_this.state = {};

		_this._initMethods();
		return _this;
	}

	/*Bind Functions to Context*/


	_createClass(SelectAllItem, [{
		key: '_initMethods',
		value: function _initMethods() {
			this._selectAllClicked = this._selectAllClicked.bind(this);
		}
	}, {
		key: '_selectAllClicked',
		value: function _selectAllClicked() {
			this.props.filterClicked();
		}
	}, {
		key: 'render',
		value: function render() {
			var checkBoxClass = [this.props.selected ? "selected " : "", "filter-check-box"].join('');
			return _react2.default.createElement(
				'div',
				{ className: 'filter-list-item', onClick: this._selectAllClicked },
				_react2.default.createElement('div', { className: checkBoxClass }),
				_react2.default.createElement(
					'div',
					{ className: 'filter-label select-all-label' },
					'Select All'
				)
			);
		}
	}]);

	return SelectAllItem;
}(_react2.default.Component);

SelectAllItem.propTypes = {
	filterClicked: _propTypes2.default.func.isRequired,
	selected: _propTypes2.default.bool.isRequired
};

exports.default = SelectAllItem;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventStack = __webpack_require__(15);

var _eventStack2 = _interopRequireDefault(_eventStack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _eventStack2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventTarget = __webpack_require__(16);

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _normalizeTarget = __webpack_require__(20);

var _normalizeTarget2 = _interopRequireDefault(_normalizeTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventStack = function () {
	function EventStack() {
		_classCallCheck(this, EventStack);

		this._targets = new Map();
	}

	// ------------------------------------
	// Target utils
	// ------------------------------------

	_createClass(EventStack, [{
		key: '_find',
		value: function _find(target) {
			var autoCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			var normalized = (0, _normalizeTarget2.default)(target);

			if (this._targets.has(normalized)) return this._targets.get(normalized);
			if (!autoCreate) return;

			var eventTarget = new _eventTarget2.default(normalized);
			this._targets.set(normalized, eventTarget);

			return eventTarget;
		}
	}, {
		key: '_remove',
		value: function _remove(target) {
			var normalized = (0, _normalizeTarget2.default)(target);

			this._targets.delete(normalized);
		}
	}, {
		key: 'sub',
		value: function sub(name, handlers) {
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var _options$target = options.target,
			    target = _options$target === undefined ? document : _options$target,
			    _options$pool = options.pool,
			    pool = _options$pool === undefined ? 'default' : _options$pool;

			var eventTarget = this._find(target);

			eventTarget.sub(name, handlers, pool);
		}
	}, {
		key: 'unsub',
		value: function unsub(name, handlers) {
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var _options$target2 = options.target,
			    target = _options$target2 === undefined ? document : _options$target2,
			    _options$pool2 = options.pool,
			    pool = _options$pool2 === undefined ? 'default' : _options$pool2;

			var eventTarget = this._find(target, false);

			if (eventTarget) {
				eventTarget.unsub(name, handlers, pool);
				if (eventTarget.empty()) this._remove(target);
			}
		}
	}]);

	return EventStack;
}();

var instance = new EventStack();

exports.default = instance;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(17);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventTarget = function () {
	function EventTarget(target) {
		_classCallCheck(this, EventTarget);

		this.target = target;
		this._handlers = {};
		this._pools = {};
	}

	// ------------------------------------
	// Utils
	// ------------------------------------

	_createClass(EventTarget, [{
		key: '_emit',
		value: function _emit(name) {
			var _this = this;

			return function (event) {
				_lodash2.default.forEach(_this._pools, function (pool, poolName) {
					var handlers = pool[name];


					if (!handlers) return;
					if (poolName === 'default') {
						_lodash2.default.forEach(handlers, function (handler) {
							return handler(event);
						});
						return;
					}
					_lodash2.default.last(handlers)(event);
				});
			};
		}
	}, {
		key: '_normalize',
		value: function _normalize(handlers) {
			return _lodash2.default.isArray(handlers) ? handlers : [handlers];
		}

		// ------------------------------------
		// Listeners handling
		// ------------------------------------

	}, {
		key: '_listen',
		value: function _listen(name) {
			if (_lodash2.default.has(this._handlers, name)) return;
			var handler = this._emit(name);

			this.target.addEventListener(name, handler);
			this._handlers[name] = handler;
		}
	}, {
		key: '_unlisten',
		value: function _unlisten(name) {
			if (_lodash2.default.some(this._pools, name)) return;
			var handler = this._handlers[name];


			this.target.removeEventListener(name, handler);
			delete this._handlers[name];
		}

		// ------------------------------------
		// Pub/sub
		// ------------------------------------

	}, {
		key: 'empty',
		value: function empty() {
			return _lodash2.default.isEmpty(this._handlers);
		}
	}, {
		key: 'sub',
		value: function sub(name, handlers) {
			var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

			var events = _lodash2.default.uniq([].concat(_toConsumableArray(_lodash2.default.get(this._pools, pool + '.' + name, [])), _toConsumableArray(this._normalize(handlers))));

			this._listen(name);
			_lodash2.default.set(this._pools, pool + '.' + name, events);
		}
	}, {
		key: 'unsub',
		value: function unsub(name, handlers) {
			var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

			var events = _lodash2.default.without.apply(_lodash2.default, [_lodash2.default.get(this._pools, pool + '.' + name, [])].concat(_toConsumableArray(this._normalize(handlers))));

			if (events.length > 0) {
				_lodash2.default.set(this._pools, pool + '.' + name, events);
				return;
			}

			_lodash2.default.set(this._pools, pool + '.' + name, undefined);
			this._unlisten(name);
		}
	}]);

	return EventTarget;
}();

exports.default = EventTarget;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="forEach,last,has,some,isEmpty,get,set,without,uniq,isArray" exports="umd"`
 */
;(function () {
  function t(t, e) {
    return t.set(e[0], e[1]), t;
  }function e(t, e) {
    return t.add(e), t;
  }function r(t, e, r) {
    switch (r.length) {case 0:
        return t.call(e);case 1:
        return t.call(e, r[0]);case 2:
        return t.call(e, r[0], r[1]);case 3:
        return t.call(e, r[0], r[1], r[2]);}return t.apply(e, r);
  }function n(t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n && false !== e(t[r], r, t);) {}return t;
  }function o(t, e) {
    for (var r = -1, n = null == t ? 0 : t.length, o = 0, u = []; ++r < n;) {
      var c = t[r];e(c, r, t) && (u[o++] = c);
    }return u;
  }function u(t, e) {
    var r;if (r = !(null == t || !t.length)) {
      if (e === e) t: {
        r = -1;for (var n = t.length; ++r < n;) {
          if (t[r] === e) break t;
        }r = -1;
      } else t: {
        r = f;for (var n = t.length, o = -1; ++o < n;) {
          if (r(t[o], o, t)) {
            r = o;break t;
          }
        }r = -1;
      }r = -1 < r;
    }return r;
  }function c(t, e) {
    for (var r = -1, n = e.length, o = t.length; ++r < n;) {
      t[o + r] = e[r];
    }return t;
  }function i(t, e, r) {
    for (var n = -1, o = null == t ? 0 : t.length; ++n < o;) {
      r = e(r, t[n], n, t);
    }return r;
  }function a(t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n;) {
      if (e(t[r], r, t)) return true;
    }return false;
  }function f(t) {
    return t !== t;
  }function l(t) {
    return function (e) {
      return null == e ? Pt : e[t];
    };
  }function s(t) {
    return function (e) {
      return t(e);
    };
  }function b(t, e) {
    return t.has(e);
  }function h(t) {
    var e = -1,
        r = Array(t.size);return t.forEach(function (t, n) {
      r[++e] = [n, t];
    }), r;
  }function p(t) {
    var e = Object;return function (r) {
      return t(e(r));
    };
  }function y(t) {
    var e = -1,
        r = Array(t.size);return t.forEach(function (t) {
      r[++e] = t;
    }), r;
  }function j() {}function _(t) {
    var e = -1,
        r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
      var n = t[e];this.set(n[0], n[1]);
    }
  }function v(t) {
    var e = -1,
        r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
      var n = t[e];this.set(n[0], n[1]);
    }
  }function g(t) {
    var e = -1,
        r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
      var n = t[e];this.set(n[0], n[1]);
    }
  }function d(t) {
    var e = -1,
        r = null == t ? 0 : t.length;for (this.__data__ = new g(); ++e < r;) {
      this.add(t[e]);
    }
  }function w(t) {
    this.size = (this.__data__ = new v(t)).size;
  }function A(t, e) {
    var r = tr(t),
        n = !r && Ze(t),
        o = !r && !n && er(t),
        u = !r && !n && !o && rr(t);if (r = r || n || o || u) {
      for (var n = t.length, c = String, i = -1, a = Array(n); ++i < n;) {
        a[i] = c(i);
      }n = a;
    } else n = [];var f,
        c = n.length;for (f in t) {
      !e && !fe.call(t, f) || r && ("length" == f || o && ("offset" == f || "parent" == f) || u && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || ft(f, c)) || n.push(f);
    }return n;
  }function m(t, e, r) {
    var n = t[e];fe.call(t, e) && vt(n, r) && (r !== Pt || e in t) || z(t, e, r);
  }function O(t, e) {
    for (var r = t.length; r--;) {
      if (vt(t[r][0], e)) return r;
    }return -1;
  }function k(t, e) {
    return t && K(e, Et(e), t);
  }function S(t, e) {
    return t && K(e, Ft(e), t);
  }function z(t, e, r) {
    "__proto__" == e && Ae ? Ae(t, e, { configurable: true, enumerable: true, value: r, writable: true }) : t[e] = r;
  }function x(t, e, r, o, u, c) {
    var i,
        a = 1 & e,
        f = 2 & e,
        l = 4 & e;if (r && (i = u ? r(t, o, u, c) : r(t)), i !== Pt) return i;if (!mt(t)) return t;if (o = tr(t)) {
      if (i = it(t), !a) return J(t, i);
    } else {
      var s = Ke(t),
          b = "[object Function]" == s || "[object GeneratorFunction]" == s;if (er(t)) return G(t, a);if ("[object Object]" == s || "[object Arguments]" == s || b && !u) {
        if (i = f || b ? {} : typeof t.constructor != "function" || st(t) ? {} : Ce(_e(t)), !a) return f ? X(t, S(i, t)) : Q(t, k(i, t));
      } else {
        if (!Kt[s]) return u ? t : {};i = at(t, s, x, a);
      }
    }if (c || (c = new w()), u = c.get(t)) return u;c.set(t, i);var f = l ? f ? et : tt : f ? Ft : Et,
        h = o ? Pt : f(t);return n(h || t, function (n, o) {
      h && (o = n, n = t[o]), m(i, o, x(n, e, r, o, t, c));
    }), i;
  }function E(t, e) {
    e = q(e, t);for (var r = 0, n = e.length; null != t && r < n;) {
      t = t[pt(e[r++])];
    }return r && r == n ? t : Pt;
  }function F(t, e, r) {
    return e = e(t), tr(t) ? e : c(e, r(t));
  }function I(t) {
    if (null == t) t = t === Pt ? "[object Undefined]" : "[object Null]";else if (we && we in Object(t)) {
      var e = fe.call(t, we),
          r = t[we];try {
        t[we] = Pt;var n = true;
      } catch (t) {}var o = se.call(t);n && (e ? t[we] = r : delete t[we]), t = o;
    } else t = se.call(t);return t;
  }function M(t, e) {
    return null != t && fe.call(t, e);
  }function U(t, e) {
    return null != t && e in Object(t);
  }function B(t) {
    return Ot(t) && "[object Arguments]" == I(t);
  }function D(t, e, r, n, o) {
    if (t === e) e = true;else if (null == t || null == e || !Ot(t) && !Ot(e)) e = t !== t && e !== e;else t: {
      var u = tr(t),
          c = tr(e),
          i = u ? "[object Array]" : Ke(t),
          a = c ? "[object Array]" : Ke(e),
          i = "[object Arguments]" == i ? "[object Object]" : i,
          a = "[object Arguments]" == a ? "[object Object]" : a,
          f = "[object Object]" == i,
          c = "[object Object]" == a;if ((a = i == a) && er(t)) {
        if (!er(e)) {
          e = false;break t;
        }u = true, f = false;
      }if (a && !f) o || (o = new w()), e = u || rr(t) ? Y(t, e, r, n, D, o) : Z(t, e, i, r, n, D, o);else {
        if (!(1 & r) && (u = f && fe.call(t, "__wrapped__"), i = c && fe.call(e, "__wrapped__"), u || i)) {
          t = u ? t.value() : t, e = i ? e.value() : e, o || (o = new w()), e = D(t, e, r, n, o);break t;
        }if (a) {
          e: if (o || (o = new w()), u = 1 & r, i = tt(t), c = i.length, a = tt(e).length, c == a || u) {
            for (f = c; f--;) {
              var l = i[f];if (!(u ? l in e : fe.call(e, l))) {
                e = false;break e;
              }
            }if ((a = o.get(t)) && o.get(e)) e = a == e;else {
              a = true, o.set(t, e), o.set(e, t);for (var s = u; ++f < c;) {
                var l = i[f],
                    b = t[l],
                    h = e[l];if (n) var p = u ? n(h, b, l, e, t, o) : n(b, h, l, t, e, o);if (p === Pt ? b !== h && !D(b, h, r, n, o) : !p) {
                  a = false;break;
                }s || (s = "constructor" == l);
              }a && !s && (r = t.constructor, n = e.constructor, r != n && "constructor" in t && "constructor" in e && !(typeof r == "function" && r instanceof r && typeof n == "function" && n instanceof n) && (a = false)), o.delete(t), o.delete(e), e = a;
            }
          } else e = false;
        } else e = false;
      }
    }return e;
  }function L(t, e) {
    var r = e.length,
        n = r;if (null == t) return !n;for (t = Object(t); r--;) {
      var o = e[r];if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t)) return false;
    }for (; ++r < n;) {
      var o = e[r],
          u = o[0],
          c = t[u],
          i = o[1];if (o[2]) {
        if (c === Pt && !(u in t)) return false;
      } else if (o = new w(), void 0 === Pt ? !D(i, c, 3, void 0, o) : 1) return false;
    }return true;
  }function $(t) {
    return Ot(t) && At(t.length) && !!Jt[I(t)];
  }function P(t) {
    return typeof t == "function" ? t : null == t ? Mt : (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object" ? tr(t) ? T(t[0], t[1]) : R(t) : Dt(t);
  }function V(t) {
    if (!st(t)) return ke(t);var e,
        r = [];for (e in Object(t)) {
      fe.call(t, e) && "constructor" != e && r.push(e);
    }return r;
  }function R(t) {
    var e = ot(t);return 1 == e.length && e[0][2] ? bt(e[0][0], e[0][1]) : function (r) {
      return r === t || L(r, e);
    };
  }function T(t, e) {
    return lt(t) && e === e && !mt(e) ? bt(pt(t), e) : function (r) {
      var n = zt(r, t);return n === Pt && n === e ? xt(r, t) : D(e, n, 3);
    };
  }function C(t) {
    return function (e) {
      return E(e, t);
    };
  }function N(t, e) {
    var r;return Ne(t, function (t, n, o) {
      return r = e(t, n, o), !r;
    }), !!r;
  }function W(t) {
    if (typeof t == "string") return t;
    if (tr(t)) {
      for (var e = W, r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) {
        o[r] = e(t[r], r, t);
      }return o + "";
    }return kt(t) ? Te ? Te.call(t) : "" : (e = t + "", "0" == e && 1 / t == -Vt ? "-0" : e);
  }function q(t, e) {
    return tr(t) ? t : lt(t, e) ? [t] : Xe(St(t));
  }function G(t, e) {
    if (e) return t.slice();var r = t.length,
        r = je ? je(r) : new t.constructor(r);return t.copy(r), r;
  }function H(t) {
    var e = new t.constructor(t.byteLength);return new ye(e).set(new ye(t)), e;
  }function J(t, e) {
    var r = -1,
        n = t.length;for (e || (e = Array(n)); ++r < n;) {
      e[r] = t[r];
    }return e;
  }function K(t, e, r) {
    var n = !r;r || (r = {});for (var o = -1, u = e.length; ++o < u;) {
      var c = e[o],
          i = Pt;i === Pt && (i = t[c]), n ? z(r, c, i) : m(r, c, i);
    }return r;
  }function Q(t, e) {
    return K(t, He(t), e);
  }function X(t, e) {
    return K(t, Je(t), e);
  }function Y(t, e, r, n, o, u) {
    var c = 1 & r,
        i = t.length,
        f = e.length;if (i != f && !(c && f > i)) return false;if ((f = u.get(t)) && u.get(e)) return f == e;var f = -1,
        l = true,
        s = 2 & r ? new d() : Pt;for (u.set(t, e), u.set(e, t); ++f < i;) {
      var h = t[f],
          p = e[f];if (n) var y = c ? n(p, h, f, e, t, u) : n(h, p, f, t, e, u);if (y !== Pt) {
        if (y) continue;l = false;break;
      }if (s) {
        if (!a(e, function (t, e) {
          if (!b(s, e) && (h === t || o(h, t, r, n, u))) return s.push(e);
        })) {
          l = false;break;
        }
      } else if (h !== p && !o(h, p, r, n, u)) {
        l = false;break;
      }
    }return u.delete(t), u.delete(e), l;
  }function Z(t, e, r, n, o, u, c) {
    switch (r) {case "[object DataView]":
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;t = t.buffer, e = e.buffer;case "[object ArrayBuffer]":
        if (t.byteLength != e.byteLength || !u(new ye(t), new ye(e))) break;return true;case "[object Boolean]":case "[object Date]":case "[object Number]":
        return vt(+t, +e);case "[object Error]":
        return t.name == e.name && t.message == e.message;case "[object RegExp]":
      case "[object String]":
        return t == e + "";case "[object Map]":
        var i = h;case "[object Set]":
        if (i || (i = y), t.size != e.size && !(1 & n)) break;return (r = c.get(t)) ? r == e : (n |= 2, c.set(t, e), e = Y(i(t), i(e), n, o, u, c), c.delete(t), e);case "[object Symbol]":
        if (Re) return Re.call(t) == Re.call(e);}return false;
  }function tt(t) {
    return F(t, Et, He);
  }function et(t) {
    return F(t, Ft, Je);
  }function rt() {
    var t = j.iteratee || Ut,
        t = t === Ut ? P : t;return arguments.length ? t(arguments[0], arguments[1]) : t;
  }function nt(t, e) {
    var r = t.__data__,
        n = typeof e === "undefined" ? "undefined" : _typeof(e);return ("string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }function ot(t) {
    for (var e = Et(t), r = e.length; r--;) {
      var n = e[r],
          o = t[n];e[r] = [n, o, o === o && !mt(o)];
    }return e;
  }function ut(t, e) {
    var r = null == t ? Pt : t[e];return (!mt(r) || le && le in r ? 0 : (wt(r) ? be : Gt).test(yt(r))) ? r : Pt;
  }function ct(t, e, r) {
    e = q(e, t);for (var n = -1, o = e.length, u = false; ++n < o;) {
      var c = pt(e[n]);if (!(u = null != t && r(t, c))) break;t = t[c];
    }return u || ++n != o ? u : (o = null == t ? 0 : t.length, !!o && At(o) && ft(c, o) && (tr(t) || Ze(t)));
  }function it(t) {
    var e = t.length,
        r = t.constructor(e);return e && "string" == typeof t[0] && fe.call(t, "index") && (r.index = t.index, r.input = t.input), r;
  }function at(r, n, o, u) {
    var c = r.constructor;switch (n) {case "[object ArrayBuffer]":
        return H(r);case "[object Boolean]":case "[object Date]":
        return new c(+r);case "[object DataView]":
        return n = u ? H(r.buffer) : r.buffer, new r.constructor(n, r.byteOffset, r.byteLength);case "[object Float32Array]":case "[object Float64Array]":case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
        return n = u ? H(r.buffer) : r.buffer, new r.constructor(n, r.byteOffset, r.length);case "[object Map]":
        return n = u ? o(h(r), 1) : h(r), i(n, t, new r.constructor());case "[object Number]":case "[object String]":
        return new c(r);case "[object RegExp]":
        return n = new r.constructor(r.source, qt.exec(r)), n.lastIndex = r.lastIndex, n;case "[object Set]":
        return n = u ? o(y(r), 1) : y(r), i(n, e, new r.constructor());case "[object Symbol]":
        return Re ? Object(Re.call(r)) : {};}
  }function ft(t, e) {
    return e = null == e ? 9007199254740991 : e, !!e && (typeof t == "number" || Ht.test(t)) && -1 < t && 0 == t % 1 && t < e;
  }function lt(t, e) {
    if (tr(t)) return false;var r = typeof t === "undefined" ? "undefined" : _typeof(t);return !("number" != r && "symbol" != r && "boolean" != r && null != t && !kt(t)) || Tt.test(t) || !Rt.test(t) || null != e && t in Object(e);
  }function st(t) {
    var e = t && t.constructor;return t === (typeof e == "function" && e.prototype || ce);
  }function bt(t, e) {
    return function (r) {
      return null != r && r[t] === e && (e !== Pt || t in Object(r));
    };
  }function ht(t, e, n) {
    return e = Se(e === Pt ? t.length - 1 : e, 0), function () {
      for (var o = arguments, u = -1, c = Se(o.length - e, 0), i = Array(c); ++u < c;) {
        i[u] = o[e + u];
      }for (u = -1, c = Array(e + 1); ++u < e;) {
        c[u] = o[u];
      }return c[e] = n(i), r(t, this, c);
    };
  }function pt(t) {
    if (typeof t == "string" || kt(t)) return t;var e = t + "";return "0" == e && 1 / t == -Vt ? "-0" : e;
  }function yt(t) {
    if (null != t) {
      try {
        return ae.call(t);
      } catch (t) {}return t + "";
    }return "";
  }function jt(t, e) {
    return (tr(t) ? n : Ne)(t, rt(e, 3));
  }function _t(t, e) {
    function r() {
      var n = arguments,
          o = e ? e.apply(this, n) : n[0],
          u = r.cache;return u.has(o) ? u.get(o) : (n = t.apply(this, n), r.cache = u.set(o, n) || u, n);
    }if (typeof t != "function" || null != e && typeof e != "function") throw new TypeError("Expected a function");return r.cache = new (_t.Cache || g)(), r;
  }function vt(t, e) {
    return t === e || t !== t && e !== e;
  }function gt(t) {
    return null != t && At(t.length) && !wt(t);
  }function dt(t) {
    return Ot(t) && gt(t);
  }function wt(t) {
    return !!mt(t) && (t = I(t), "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t);
  }function At(t) {
    return typeof t == "number" && -1 < t && 0 == t % 1 && 9007199254740991 >= t;
  }function mt(t) {
    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && ("object" == e || "function" == e);
  }function Ot(t) {
    return null != t && (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object";
  }function kt(t) {
    return (typeof t === "undefined" ? "undefined" : _typeof(t)) == "symbol" || Ot(t) && "[object Symbol]" == I(t);
  }function St(t) {
    return null == t ? "" : W(t);
  }function zt(t, e, r) {
    return t = null == t ? Pt : E(t, e), t === Pt ? r : t;
  }function xt(t, e) {
    return null != t && ct(t, e, U);
  }function Et(t) {
    return gt(t) ? A(t) : V(t);
  }function Ft(t) {
    if (gt(t)) t = A(t, true);else if (mt(t)) {
      var e,
          r = st(t),
          n = [];for (e in t) {
        ("constructor" != e || !r && fe.call(t, e)) && n.push(e);
      }t = n;
    } else {
      if (e = [], null != t) for (r in Object(t)) {
        e.push(r);
      }t = e;
    }return t;
  }function It(t) {
    return function () {
      return t;
    };
  }function Mt(t) {
    return t;
  }function Ut(t) {
    return P(typeof t == "function" ? t : x(t, 1));
  }function Bt() {}
  function Dt(t) {
    return lt(t) ? l(pt(t)) : C(t);
  }function Lt() {
    return [];
  }function $t() {
    return false;
  }var Pt,
      Vt = 1 / 0,
      Rt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Tt = /^\w*$/,
      Ct = /^\./,
      Nt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Wt = /\\(\\)?/g,
      qt = /\w*$/,
      Gt = /^\[object .+?Constructor\]$/,
      Ht = /^(?:0|[1-9]\d*)$/,
      Jt = {};Jt["[object Float32Array]"] = Jt["[object Float64Array]"] = Jt["[object Int8Array]"] = Jt["[object Int16Array]"] = Jt["[object Int32Array]"] = Jt["[object Uint8Array]"] = Jt["[object Uint8ClampedArray]"] = Jt["[object Uint16Array]"] = Jt["[object Uint32Array]"] = true, Jt["[object Arguments]"] = Jt["[object Array]"] = Jt["[object ArrayBuffer]"] = Jt["[object Boolean]"] = Jt["[object DataView]"] = Jt["[object Date]"] = Jt["[object Error]"] = Jt["[object Function]"] = Jt["[object Map]"] = Jt["[object Number]"] = Jt["[object Object]"] = Jt["[object RegExp]"] = Jt["[object Set]"] = Jt["[object String]"] = Jt["[object WeakMap]"] = false;var Kt = {};Kt["[object Arguments]"] = Kt["[object Array]"] = Kt["[object ArrayBuffer]"] = Kt["[object DataView]"] = Kt["[object Boolean]"] = Kt["[object Date]"] = Kt["[object Float32Array]"] = Kt["[object Float64Array]"] = Kt["[object Int8Array]"] = Kt["[object Int16Array]"] = Kt["[object Int32Array]"] = Kt["[object Map]"] = Kt["[object Number]"] = Kt["[object Object]"] = Kt["[object RegExp]"] = Kt["[object Set]"] = Kt["[object String]"] = Kt["[object Symbol]"] = Kt["[object Uint8Array]"] = Kt["[object Uint8ClampedArray]"] = Kt["[object Uint16Array]"] = Kt["[object Uint32Array]"] = true, Kt["[object Error]"] = Kt["[object Function]"] = Kt["[object WeakMap]"] = false;var Qt,
      Xt = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
      Yt = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
      Zt = Xt || Yt || Function("return this")(),
      te = ( false ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
      ee = te && ( false ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
      re = ee && ee.exports === te,
      ne = re && Xt.process;t: {
    try {
      Qt = ne && ne.binding && ne.binding("util");break t;
    } catch (t) {}Qt = void 0;
  }var oe = Qt && Qt.isTypedArray,
      ue = Array.prototype,
      ce = Object.prototype,
      ie = Zt["__core-js_shared__"],
      ae = Function.prototype.toString,
      fe = ce.hasOwnProperty,
      le = function () {
    var t = /[^.]+$/.exec(ie && ie.keys && ie.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
  }(),
      se = ce.toString,
      be = RegExp("^" + ae.call(fe).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      he = re ? Zt.Buffer : Pt,
      pe = Zt.Symbol,
      ye = Zt.Uint8Array,
      je = he ? he.a : Pt,
      _e = p(Object.getPrototypeOf),
      ve = Object.create,
      ge = ce.propertyIsEnumerable,
      de = ue.splice,
      we = pe ? pe.toStringTag : Pt,
      Ae = function () {
    try {
      var t = ut(Object, "defineProperty");return t({}, "", {}), t;
    } catch (t) {}
  }(),
      me = Object.getOwnPropertySymbols,
      Oe = he ? he.isBuffer : Pt,
      ke = p(Object.keys),
      Se = Math.max,
      ze = Date.now,
      xe = ut(Zt, "DataView"),
      Ee = ut(Zt, "Map"),
      Fe = ut(Zt, "Promise"),
      Ie = ut(Zt, "Set"),
      Me = ut(Zt, "WeakMap"),
      Ue = ut(Object, "create"),
      Be = yt(xe),
      De = yt(Ee),
      Le = yt(Fe),
      $e = yt(Ie),
      Pe = yt(Me),
      Ve = pe ? pe.prototype : Pt,
      Re = Ve ? Ve.valueOf : Pt,
      Te = Ve ? Ve.toString : Pt,
      Ce = function () {
    function t() {}return function (e) {
      return mt(e) ? ve ? ve(e) : (t.prototype = e, e = new t(), t.prototype = Pt, e) : {};
    };
  }();_.prototype.clear = function () {
    this.__data__ = Ue ? Ue(null) : {}, this.size = 0;
  }, _.prototype.delete = function (t) {
    return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t;
  }, _.prototype.get = function (t) {
    var e = this.__data__;return Ue ? (t = e[t], "__lodash_hash_undefined__" === t ? Pt : t) : fe.call(e, t) ? e[t] : Pt;
  }, _.prototype.has = function (t) {
    var e = this.__data__;return Ue ? e[t] !== Pt : fe.call(e, t);
  }, _.prototype.set = function (t, e) {
    var r = this.__data__;return this.size += this.has(t) ? 0 : 1, r[t] = Ue && e === Pt ? "__lodash_hash_undefined__" : e, this;
  }, v.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, v.prototype.delete = function (t) {
    var e = this.__data__;return t = O(e, t), !(0 > t) && (t == e.length - 1 ? e.pop() : de.call(e, t, 1), --this.size, true);
  }, v.prototype.get = function (t) {
    var e = this.__data__;return t = O(e, t), 0 > t ? Pt : e[t][1];
  }, v.prototype.has = function (t) {
    return -1 < O(this.__data__, t);
  }, v.prototype.set = function (t, e) {
    var r = this.__data__,
        n = O(r, t);return 0 > n ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
  }, g.prototype.clear = function () {
    this.size = 0, this.__data__ = { hash: new _(), map: new (Ee || v)(), string: new _() };
  }, g.prototype.delete = function (t) {
    return t = nt(this, t).delete(t), this.size -= t ? 1 : 0, t;
  }, g.prototype.get = function (t) {
    return nt(this, t).get(t);
  }, g.prototype.has = function (t) {
    return nt(this, t).has(t);
  }, g.prototype.set = function (t, e) {
    var r = nt(this, t),
        n = r.size;return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
  }, d.prototype.add = d.prototype.push = function (t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this;
  }, d.prototype.has = function (t) {
    return this.__data__.has(t);
  }, w.prototype.clear = function () {
    this.__data__ = new v(), this.size = 0;
  }, w.prototype.delete = function (t) {
    var e = this.__data__;return t = e.delete(t), this.size = e.size, t;
  }, w.prototype.get = function (t) {
    return this.__data__.get(t);
  }, w.prototype.has = function (t) {
    return this.__data__.has(t);
  }, w.prototype.set = function (t, e) {
    var r = this.__data__;if (r instanceof v) {
      var n = r.__data__;if (!Ee || 199 > n.length) return n.push([t, e]), this.size = ++r.size, this;r = this.__data__ = new g(n);
    }return r.set(t, e), this.size = r.size, this;
  };var Ne = function (t, e) {
    return function (r, n) {
      if (null == r) return r;if (!gt(r)) return t(r, n);for (var o = r.length, u = e ? o : -1, c = Object(r); (e ? u-- : ++u < o) && false !== n(c[u], u, c);) {}
      return r;
    };
  }(function (t, e) {
    return t && We(t, e, Et);
  }),
      We = function (t) {
    return function (e, r, n) {
      var o = -1,
          u = Object(e);n = n(e);for (var c = n.length; c--;) {
        var i = n[t ? c : ++o];if (false === r(u[i], i, u)) break;
      }return e;
    };
  }(),
      qe = Ae ? function (t, e) {
    return Ae(t, "toString", { configurable: true, enumerable: false, value: It(e), writable: true });
  } : Mt,
      Ge = Ie && 1 / y(new Ie([, -0]))[1] == Vt ? function (t) {
    return new Ie(t);
  } : Bt,
      He = me ? function (t) {
    return null == t ? [] : (t = Object(t), o(me(t), function (e) {
      return ge.call(t, e);
    }));
  } : Lt,
      Je = me ? function (t) {
    for (var e = []; t;) {
      c(e, He(t)), t = _e(t);
    }return e;
  } : Lt,
      Ke = I;(xe && "[object DataView]" != Ke(new xe(new ArrayBuffer(1))) || Ee && "[object Map]" != Ke(new Ee()) || Fe && "[object Promise]" != Ke(Fe.resolve()) || Ie && "[object Set]" != Ke(new Ie()) || Me && "[object WeakMap]" != Ke(new Me())) && (Ke = function Ke(t) {
    var e = I(t);if (t = (t = "[object Object]" == e ? t.constructor : Pt) ? yt(t) : "") switch (t) {case Be:
        return "[object DataView]";case De:
        return "[object Map]";case Le:
        return "[object Promise]";case $e:
        return "[object Set]";case Pe:
        return "[object WeakMap]";}return e;
  });var Qe = function (t) {
    var e = 0,
        r = 0;return function () {
      var n = ze(),
          o = 16 - (n - r);if (r = n, 0 < o) {
        if (800 <= ++e) return arguments[0];
      } else e = 0;return t.apply(Pt, arguments);
    };
  }(qe),
      Xe = function (t) {
    t = _t(t, function (t) {
      return 500 === e.size && e.clear(), t;
    });var e = t.cache;return t;
  }(function (t) {
    var e = [];return Ct.test(t) && e.push(""), t.replace(Nt, function (t, r, n, o) {
      e.push(n ? o.replace(Wt, "$1") : r || t);
    }), e;
  }),
      Ye = function (t, e) {
    return Qe(ht(t, e, Mt), t + "");
  }(function (t, e) {
    var r;if (dt(t)) {
      r = e;var n = -1,
          o = u,
          c = true,
          i = t.length,
          a = [],
          f = r.length;if (i) t: for (200 <= r.length && (o = b, c = false, r = new d(r)); ++n < i;) {
        var l = t[n],
            s = l,
            l = 0 !== l ? l : 0;if (c && s === s) {
          for (var h = f; h--;) {
            if (r[h] === s) continue t;
          }a.push(l);
        } else o(r, s, void 0) || a.push(l);
      }r = a;
    } else r = [];return r;
  });_t.Cache = g;var Ze = B(function () {
    return arguments;
  }()) ? B : function (t) {
    return Ot(t) && fe.call(t, "callee") && !ge.call(t, "callee");
  },
      tr = Array.isArray,
      er = Oe || $t,
      rr = oe ? s(oe) : $;j.constant = It, j.iteratee = Ut, j.keys = Et, j.keysIn = Ft, j.memoize = _t, j.property = Dt, j.set = function (t, e, r) {
    if (null != t && mt(t)) {
      e = q(e, t);for (var n = -1, o = e.length, u = o - 1, c = t; null != c && ++n < o;) {
        var i = pt(e[n]),
            a = r;if (n != u) {
          var f = c[i],
              a = Pt;a === Pt && (a = mt(f) ? f : ft(e[n + 1]) ? [] : {});
        }m(c, i, a), c = c[i];
      }
    }return t;
  }, j.uniq = function (t) {
    if (t && t.length) t: {
      var e = -1,
          r = u,
          n = t.length,
          o = true,
          c = [],
          i = c;if (200 <= n) {
        if (r = Ge(t)) {
          t = y(r);break t;
        }o = false, r = b, i = new d();
      } else i = c;e: for (; ++e < n;) {
        var a = t[e],
            f = a,
            a = 0 !== a ? a : 0;if (o && f === f) {
          for (var l = i.length; l--;) {
            if (i[l] === f) continue e;
          }c.push(a);
        } else r(i, f, void 0) || (i !== c && i.push(f), c.push(a));
      }t = c;
    } else t = [];return t;
  }, j.without = Ye, j.eq = vt, j.forEach = jt, j.get = zt, j.has = function (t, e) {
    return null != t && ct(t, e, M);
  }, j.hasIn = xt, j.identity = Mt, j.isArguments = Ze, j.isArray = tr, j.isArrayLike = gt, j.isArrayLikeObject = dt, j.isBuffer = er, j.isEmpty = function (t) {
    if (null == t) return true;if (gt(t) && (tr(t) || typeof t == "string" || typeof t.splice == "function" || er(t) || rr(t) || Ze(t))) return !t.length;var e = Ke(t);if ("[object Map]" == e || "[object Set]" == e) return !t.size;if (st(t)) return !V(t).length;for (var r in t) {
      if (fe.call(t, r)) return false;
    }return true;
  }, j.isFunction = wt, j.isLength = At, j.isObject = mt, j.isObjectLike = Ot, j.isSymbol = kt, j.isTypedArray = rr, j.last = function (t) {
    var e = null == t ? 0 : t.length;return e ? t[e - 1] : Pt;
  }, j.stubArray = Lt, j.stubFalse = $t, j.noop = Bt, j.some = function (t, e, r) {
    var n,
        o = tr(t) ? a : N;if (n = r) if (n = e, mt(r)) {
      var u = typeof n === "undefined" ? "undefined" : _typeof(n);n = !!("number" == u ? gt(r) && ft(n, r.length) : "string" == u && n in r) && vt(r[n], t);
    } else n = false;return n && (e = Pt), o(t, rt(e, 3));
  }, j.toString = St, j.each = jt, j.VERSION = "4.17.4", "function" == "function" && _typeof(__webpack_require__(3)) == "object" && __webpack_require__(3) ? (Zt._ = j, !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return j;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : ee ? ((ee.exports = j)._ = j, te._ = j) : Zt._ = j;
}).call(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18), __webpack_require__(19)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Normalizes `target` for EventStack, because `target` can be passed as `boolean` or `string`.
 *
 * @param {boolean|string|HTMLElement|Window} target Value for normalization.
 * @return {HTMLElement|Window} A DOM node.
 */
var normalizeTarget = function normalizeTarget(target) {
  if (target === 'document') return document;
  if (target === 'window') return window;
  return target || document;
};

exports.default = normalizeTarget;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterIcon = function (_React$Component) {
	_inherits(FilterIcon, _React$Component);

	function FilterIcon(props) {
		_classCallCheck(this, FilterIcon);

		var _this = _possibleConstructorReturn(this, (FilterIcon.__proto__ || Object.getPrototypeOf(FilterIcon)).call(this, props));

		_this._initMethods();

		_this.state = {};
		return _this;
	}

	_createClass(FilterIcon, [{
		key: '_initMethods',
		value: function _initMethods() {
			this._iconClicked = this._iconClicked.bind(this);
		}
	}, {
		key: '_iconClicked',
		value: function _iconClicked() {
			this.props.iconClicked && this.props.iconClicked();
		}
	}, {
		key: 'render',
		value: function render() {
			var className = [this.props.selected ? "selected " : "", "table-filter-icon"].join('');
			return _react2.default.createElement('div', { onClick: this._iconClicked, className: className });
		}
	}]);

	return FilterIcon;
}(_react2.default.Component);

FilterIcon.propTypes = {
	iconClicked: _propTypes2.default.func.isRequired, // Function to be called when filter icon is clicked
	selected: _propTypes2.default.bool
};

exports.default = FilterIcon;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var BLANK_LABEL = exports.BLANK_LABEL = "(blank)";
var ASC_VALUE = exports.ASC_VALUE = "asc";
var DSC_VALUE = exports.DSC_VALUE = "dsc";

exports.default = {
	BLANK_LABEL: BLANK_LABEL,
	ASC_VALUE: ASC_VALUE,
	DSC_VALUE: DSC_VALUE
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortIcon = function (_React$Component) {
	_inherits(SortIcon, _React$Component);

	function SortIcon(props) {
		_classCallCheck(this, SortIcon);

		var _this = _possibleConstructorReturn(this, (SortIcon.__proto__ || Object.getPrototypeOf(SortIcon)).call(this, props));

		_this.state = {};

		_this._initMethods();
		return _this;
	}

	/*Bind Functions to Context*/


	_createClass(SortIcon, [{
		key: '_initMethods',
		value: function _initMethods() {
			this._sortClicked = this._sortClicked.bind(this);
		}
	}, {
		key: '_sortClicked',
		value: function _sortClicked() {
			this.props.sort();
		}
	}, {
		key: 'render',
		value: function render() {
			var sortClass = !(0, _util.isUndefined)(this.props.sortType) ? ' ' + this.props.sortType : '';
			return _react2.default.createElement(
				'div',
				{ className: ["sort-parent clear-fix", sortClass].join(''), onClick: this._sortClicked },
				_react2.default.createElement('div', { className: 'dsc table-filter-arrow' }),
				_react2.default.createElement('div', { className: 'asc table-filter-arrow' })
			);
		}
	}]);

	return SortIcon;
}(_react2.default.Component);

SortIcon.propTypes = {
	sort: _propTypes2.default.func.isRequired,
	sortType: _propTypes2.default.string
};

exports.default = SortIcon;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.filtersReset = exports.filterAction = undefined;

var _util = __webpack_require__(2);

/**
 * [Function to apply a filter to an Array]
 * @param  {Array}   inputArray [Array to be filtered]
 * @param  {Object}  filter     [{key, value} filter key and value]
 * @param  {Boolean} addFilter  
 * @param  {Function}  valueFunc  [Function to calculate value of the property(optional)]
 * @return {Object} 
 *         filteredArray [Filtered items after appying filte]
 *         dataWithFilter [inputArray along with modification due to applied filters]            			 			
 */
var filterAction = exports.filterAction = function filterAction() {
	var inputArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var addFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	var valueFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

	var key = filter.key,
	    value = filter.value;

	if ((0, _util.isUndefined)(value)) {
		value = "";
	}
	if (!(0, _util.isUndefined)(key)) {

		var filteredArray = [];
		var dataWithFilter = inputArray.map(function (item) {
			var itemCopy = Object.assign({}, item);
			var itemValue = (0, _util.getValForKey)(item, key);

			if (!(0, _util.isUndefined)(valueFunc)) {
				itemValue = valueFunc(itemValue);
			}

			if ((0, _util.isUndefined)(itemValue)) {
				itemValue = "";
			}

			if ((0, _util.isUndefined)(itemCopy.appliedFilters)) {
				itemCopy.appliedFilters = {};
			}

			if ((0, _util.isTypeString)(itemValue)) {
				itemValue = itemValue.trim();
			}

			if (addFilter) {
				if (itemValue === value) {
					if (!itemCopy.appliedFilters[key]) {
						itemCopy.appliedFilters[key] = 0;
					}
					itemCopy.appliedFilters[key] += 1;
				}
			} else {
				if (itemValue === value) {
					itemCopy.appliedFilters[key] -= 1;
					if (itemCopy.appliedFilters[key] === 0) {
						delete itemCopy.appliedFilters[key];
					}
				}
			}

			if (Object.keys(itemCopy.appliedFilters).length === 0) {
				delete itemCopy['appliedFilters'];
				filteredArray.push(Object.assign({}, itemCopy));
			}

			return itemCopy;
		});

		return {
			filteredArray: filteredArray,
			dataWithFilter: dataWithFilter
		};
	}

	return;
};

/**
 * [Function to reset certain values for a filter]
 * @param  {Array}   inputArray [Array to be filtered]
 * @param  {Array}   values     [Filter values to reset]
 * @param  {[type]}  key        [Filter key]
 * @param  {Boolean} selectAll
 * @param  {Function}  valueFunc  [Function to calculate value of the property(optional)]
 * @return {[type]}
 */
var filtersReset = exports.filtersReset = function filtersReset() {
	var inputArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
	var selectAll = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	var valueFunc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;


	var filteredArray = [];
	var dataWithFilter = inputArray.map(function (item) {
		var itemCopy = Object.assign({}, item);

		if ((0, _util.isUndefined)(itemCopy.appliedFilters)) {
			itemCopy.appliedFilters = {};
		}

		var itemValue = (0, _util.getValForKey)(itemCopy, key);

		if (!(0, _util.isUndefined)(valueFunc)) {
			itemValue = valueFunc(itemValue);
		}

		if ((0, _util.isUndefined)(itemValue)) {
			itemValue = '';
		}

		if ((0, _util.isTypeString)(itemValue)) {
			itemValue = itemValue.trim();
		}

		if (values.indexOf(itemValue) >= 0) {
			if (selectAll) {
				delete itemCopy.appliedFilters[key];
			} else {
				if (!itemCopy.appliedFilters[key]) {
					itemCopy.appliedFilters[key] = 0;
				}
				itemCopy.appliedFilters[key]++;
			}
		}

		if (Object.keys(itemCopy.appliedFilters).length === 0) {
			delete itemCopy['appliedFilters'];
			filteredArray.push(Object.assign({}, itemCopy));
		}

		return itemCopy;
	});

	return {
		filteredArray: filteredArray,
		dataWithFilter: dataWithFilter
	};
};

exports.default = {
	filterAction: filterAction,
	filtersReset: filtersReset
};

/***/ })
/******/ ]);
});