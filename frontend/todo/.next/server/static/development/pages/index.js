module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/routes.js":
/*!*****************************!*\
  !*** ./pages/api/routes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const add = async task => {
  return await _axios.default.post('http://localhost:8080/add', {
    task: task
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const del = async id => {
  return await _axios.default.post('http://localhost:8080/delete', {
    id: id
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const getAll = async () => {
  return await _axios.default.get('http://localhost:8080/all');
};

module.exports = {
  add,
  getAll,
  del
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/routes */ "./pages/api/routes.js");
/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aouassalim/Desktop/Salim/nodejs_practice/openclassrooms_01/frontend/todo/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home(props) {
  const styles = {
    container: {
      borderRadius: "10px",
      backgroundColor: "#EDEDF4",
      diplay: "flex",
      justifyContent: "center",
      textAlign: "center",
      maxWidth: "700px",
      margin: "0 auto"
    },
    label_task: {
      color: "#555358",
      fontFamily: "Verdana",
      fontSize: "15px"
    },
    input_task: {
      height: "30px",
      maxWidth: "500px",
      border: "1px solid #eee",
      borderRadius: "5px"
    },
    button: {
      height: "30px",
      width: "80px",
      marginLeft: "5px",
      border: "1px solid",
      borderRadius: "3px"
    },
    task: {},
    footer: {
      textAlign: "center",
      color: "white"
    },
    container_tasks: {
      display: "flex",
      flexDirection: "column"
    },
    ul: {
      listStyleType: "none",
      paddingInlineStart: "0px"
    },
    container_task: {
      position: "relative",
      backgroundColor: "#FFFFFA",
      marginBottom: "10px",
      marginRight: "10px",
      marginLeft: "10px",
      minHeight: "50px",
      borderRadius: "5px",
      textAlign: "center",
      paddingTop: "40px"
    },
    cross: {
      position: "absolute",
      height: "10px",
      width: "10px",
      top: "10%",
      left: "95%"
    }
  };
  const {
    0: task,
    1: setTask
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: tasks,
    1: setTasks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    (async () => {
      const result = await Object(_api_routes__WEBPACK_IMPORTED_MODULE_2__["getAll"])().then(result => {
        setTasks(result.data);
      });
    })();
  }, [tasks]);

  const handleTask = async e => {
    e.preventDefault();

    if (task.length != "") {
      await Object(_api_routes__WEBPACK_IMPORTED_MODULE_2__["add"])(task);
      let result = await Object(_api_routes__WEBPACK_IMPORTED_MODULE_2__["getAll"])().then(result => {
        setTask('');
        setTasks(result.data);
      });
    }
  };

  const handleDelete = async e => {
    let id = e.target.id;
    await Object(_api_routes__WEBPACK_IMPORTED_MODULE_2__["del"])(id);
    let result = await Object(_api_routes__WEBPACK_IMPORTED_MODULE_2__["getAll"])().then(result => {
      setTasks(result.data);
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    style: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Todo List"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "task",
    style: styles.label_task,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Tache "), __jsx("input", {
    type: "text",
    id: "task",
    style: styles.input_task,
    value: task,
    onChange: e => setTask(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: handleTask,
    style: styles.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Ajouter")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: styles.container_tasks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("ul", {
    style: styles.ul,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, tasks.map(item => {
    return __jsx("div", {
      style: styles.container_task,
      key: `container-${item.id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "images/cross.png",
      style: styles.cross,
      id: item.id,
      key: `cross-${item.id}`,
      onClick: e => handleDelete(e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }), __jsx("li", {
      key: item.id,
      id: item.id,
      style: styles.task,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, item.task));
  }))))), __jsx("footer", {
    style: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, "Made with \u2764\uFE0F by ", __jsx("a", {
    href: "https://salimaouas.dev/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 51
    }
  }, "Salim Aouas")));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aouassalim/Desktop/Salim/nodejs_practice/openclassrooms_01/frontend/todo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map