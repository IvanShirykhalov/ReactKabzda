"use strict";
globalThis["webpackHotUpdatemy_app"]("main",{

/***/ "./src/stories/input.stories.tsx":
/*!***************************************!*\
  !*** ./src/stories/input.stories.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "UncontrolledInput": () => (/* binding */ UncontrolledInput),
/* harmony export */   "ControlledInputWithFixedValue": () => (/* binding */ ControlledInputWithFixedValue),
/* harmony export */   "TrackValueOfUncontrolledInput": () => (/* binding */ TrackValueOfUncontrolledInput),
/* harmony export */   "GetValueAfterButtonClick": () => (/* binding */ GetValueAfterButtonClick),
/* harmony export */   "ControlledInput": () => (/* binding */ ControlledInput),
/* harmony export */   "ControlledCheckbox": () => (/* binding */ ControlledCheckbox),
/* harmony export */   "ControlledSelect": () => (/* binding */ ControlledSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "C:\\JavaScript\\INCUBATOR\\ReactKabzda\\src\\stories\\input.stories.tsx",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature(),
    _s3 = __webpack_require__.$Refresh$.signature(),
    _s4 = __webpack_require__.$Refresh$.signature(),
    _s5 = __webpack_require__.$Refresh$.signature();

/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "import React, {ChangeEvent, useRef, useState} from \"react\";\r\n\r\nexport default {\r\n    title: 'input'\r\n}\r\n\r\nexport const UncontrolledInput = () => <input/>\r\nexport const ControlledInputWithFixedValue = () => <input value={'value'}/>\r\n\r\nexport const TrackValueOfUncontrolledInput = () => {\r\n    const [value, setValue] = useState('')\r\n    const onChange = (e: ChangeEvent<HTMLInputElement>) => {\r\n        setValue(e.currentTarget.value)\r\n    }\r\n\r\n    return <><input onChange={onChange}/> {value}</>\r\n}\r\n\r\nexport const GetValueAfterButtonClick = () => {\r\n    const [value, setValue] = useState('')\r\n    const inputRef = useRef<HTMLInputElement>(null)\r\n\r\n    const actualValue = () => {\r\n        const av = inputRef.current as HTMLInputElement\r\n        setValue(av.value)\r\n    }\r\n\r\n\r\n    return <><input ref={inputRef}/><button onClick={actualValue}>save</button> actual value: {value}</>\r\n}\r\n\r\nexport const ControlledInput = () => {\r\n    const [parentValue, setParentValue] = useState('')\r\n    const value = (e: ChangeEvent<HTMLInputElement>) => {\r\n        setParentValue(e.currentTarget.value)\r\n    }\r\n\r\n    return <><input value={parentValue} onChange={value}/> value: {parentValue}</>\r\n}\r\n\r\nexport const ControlledCheckbox = () => {\r\n    const [parentValue, setParentValue] = useState<boolean>(true)\r\n    const valueCheck = (e: ChangeEvent<HTMLInputElement>) => {\r\n        setParentValue(e.currentTarget.checked)\r\n    }\r\n\r\n    return <><input type={'checkbox'} checked={parentValue} onChange={valueCheck}/> {`checkbox: ${parentValue}`}</>\r\n}\r\n\r\nexport const ControlledSelect = () => {\r\n\r\n    const [parentValue, setParentValue] = useState<string | undefined>(undefined)\r\n    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {\r\n        setParentValue(e.currentTarget.value)\r\n    }\r\n\r\n    return <select value={parentValue} onChange={onChange}>\r\n        <option></option>\r\n        <option value={'1'}>Kiev</option>\r\n        <option value={'2'}>Moscow</option>\r\n        <option value={'3'}>Minsk</option>\r\n\r\n    </select>\r\n}"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "UncontrolledInput": {
    "startLoc": {
      "col": 33,
      "line": 7
    },
    "endLoc": {
      "col": 47,
      "line": 7
    },
    "startBody": {
      "col": 33,
      "line": 7
    },
    "endBody": {
      "col": 47,
      "line": 7
    }
  },
  "ControlledInputWithFixedValue": {
    "startLoc": {
      "col": 45,
      "line": 8
    },
    "endLoc": {
      "col": 75,
      "line": 8
    },
    "startBody": {
      "col": 45,
      "line": 8
    },
    "endBody": {
      "col": 75,
      "line": 8
    }
  },
  "TrackValueOfUncontrolledInput": {
    "startLoc": {
      "col": 45,
      "line": 10
    },
    "endLoc": {
      "col": 1,
      "line": 17
    },
    "startBody": {
      "col": 45,
      "line": 10
    },
    "endBody": {
      "col": 1,
      "line": 17
    }
  },
  "GetValueAfterButtonClick": {
    "startLoc": {
      "col": 40,
      "line": 19
    },
    "endLoc": {
      "col": 1,
      "line": 30
    },
    "startBody": {
      "col": 40,
      "line": 19
    },
    "endBody": {
      "col": 1,
      "line": 30
    }
  },
  "ControlledInput": {
    "startLoc": {
      "col": 31,
      "line": 32
    },
    "endLoc": {
      "col": 1,
      "line": 39
    },
    "startBody": {
      "col": 31,
      "line": 32
    },
    "endBody": {
      "col": 1,
      "line": 39
    }
  },
  "ControlledCheckbox": {
    "startLoc": {
      "col": 34,
      "line": 41
    },
    "endLoc": {
      "col": 1,
      "line": 48
    },
    "startBody": {
      "col": 34,
      "line": 41
    },
    "endBody": {
      "col": 1,
      "line": 48
    }
  },
  "ControlledSelect": {
    "startLoc": {
      "col": 32,
      "line": 50
    },
    "endLoc": {
      "col": 1,
      "line": 64
    },
    "startBody": {
      "col": 32,
      "line": 50
    },
    "endBody": {
      "col": 1,
      "line": 64
    }
  }
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'input'
});
const UncontrolledInput = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 40
}, undefined);
_c = UncontrolledInput;
const ControlledInputWithFixedValue = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
  value: 'value'
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 52
}, undefined);
_c2 = ControlledInputWithFixedValue;
const TrackValueOfUncontrolledInput = () => {
  _s();

  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const onChange = e => {
    setValue(e.currentTarget.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 14
    }, undefined), " ", value]
  }, void 0, true);
};

_s(TrackValueOfUncontrolledInput, "A2PXPeq8TepW328gUMM4+o8Xryo=");

_c3 = TrackValueOfUncontrolledInput;
const GetValueAfterButtonClick = () => {
  _s2();

  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const actualValue = () => {
    const av = inputRef.current;
    setValue(av.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      ref: inputRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 14
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: actualValue,
      children: "save"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }, undefined), " actual value: ", value]
  }, void 0, true);
};

_s2(GetValueAfterButtonClick, "hFRrsaDpQQySf+bs97CvaaOWJIQ=");

_c4 = GetValueAfterButtonClick;
const ControlledInput = () => {
  _s3();

  const [parentValue, setParentValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const value = e => {
    setParentValue(e.currentTarget.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      value: parentValue,
      onChange: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 14
    }, undefined), " value: ", parentValue]
  }, void 0, true);
};

_s3(ControlledInput, "qpc4hF4fbRW/5sIugwNzEnhdOA0=");

_c5 = ControlledInput;
const ControlledCheckbox = () => {
  _s4();

  const [parentValue, setParentValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  const valueCheck = e => {
    setParentValue(e.currentTarget.checked);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      type: 'checkbox',
      checked: parentValue,
      onChange: valueCheck
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 14
    }, undefined), " ", `checkbox: ${parentValue}`]
  }, void 0, true);
};

_s4(ControlledCheckbox, "FHAis5x3Pp/JJ1bNWnI2gSE0/Yo=");

_c6 = ControlledCheckbox;
const ControlledSelect = () => {
  _s5();

  const [parentValue, setParentValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);

  const onChange = e => {
    setParentValue(e.currentTarget.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
    value: parentValue,
    onChange: onChange,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
      value: '1',
      children: "Kiev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
      value: '2',
      children: "Moscow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
      value: '3',
      children: "Minsk"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 12
  }, undefined);
};

_s5(ControlledSelect, "Mohh4k4aJUN1eDJhl/CjYq/D7Vw=");

_c7 = ControlledSelect;
UncontrolledInput.parameters = {
  storySource: {
    source: "() => <input/>"
  },
  ...UncontrolledInput.parameters
};
ControlledInputWithFixedValue.parameters = {
  storySource: {
    source: "() => <input value={'value'}/>"
  },
  ...ControlledInputWithFixedValue.parameters
};
TrackValueOfUncontrolledInput.parameters = {
  storySource: {
    source: "() => {\r\n    const [value, setValue] = useState('')\r\n    const onChange = (e: ChangeEvent<HTMLInputElement>) => {\r\n        setValue(e.currentTarget.value)\r\n    }\r\n\r\n    return <><input onChange={onChange}/> {value}</>\r\n}"
  },
  ...TrackValueOfUncontrolledInput.parameters
};
GetValueAfterButtonClick.parameters = {
  storySource: {
    source: "() => {\r\n    const [value, setValue] = useState('')\r\n    const inputRef = useRef<HTMLInputElement>(null)\r\n\r\n    const actualValue = () => {\r\n        const av = inputRef.current as HTMLInputElement\r\n        setValue(av.value)\r\n    }\r\n\r\n\r\n    return <><input ref={inputRef}/><button onClick={actualValue}>save</button> actual value: {value}</>\r\n}"
  },
  ...GetValueAfterButtonClick.parameters
};
ControlledInput.parameters = {
  storySource: {
    source: "() => {\r\n    const [parentValue, setParentValue] = useState('')\r\n    const value = (e: ChangeEvent<HTMLInputElement>) => {\r\n        setParentValue(e.currentTarget.value)\r\n    }\r\n\r\n    return <><input value={parentValue} onChange={value}/> value: {parentValue}</>\r\n}"
  },
  ...ControlledInput.parameters
};
ControlledCheckbox.parameters = {
  storySource: {
    source: "() => {\r\n    const [parentValue, setParentValue] = useState<boolean>(true)\r\n    const valueCheck = (e: ChangeEvent<HTMLInputElement>) => {\r\n        setParentValue(e.currentTarget.checked)\r\n    }\r\n\r\n    return <><input type={'checkbox'} checked={parentValue} onChange={valueCheck}/> {`checkbox: ${parentValue}`}</>\r\n}"
  },
  ...ControlledCheckbox.parameters
};
ControlledSelect.parameters = {
  storySource: {
    source: "() => {\r\n\r\n    const [parentValue, setParentValue] = useState<string | undefined>(undefined)\r\n    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {\r\n        setParentValue(e.currentTarget.value)\r\n    }\r\n\r\n    return <select value={parentValue} onChange={onChange}>\r\n        <option></option>\r\n        <option value={'1'}>Kiev</option>\r\n        <option value={'2'}>Moscow</option>\r\n        <option value={'3'}>Minsk</option>\r\n\r\n    </select>\r\n}"
  },
  ...ControlledSelect.parameters
};

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "UncontrolledInput");
__webpack_require__.$Refresh$.register(_c2, "ControlledInputWithFixedValue");
__webpack_require__.$Refresh$.register(_c3, "TrackValueOfUncontrolledInput");
__webpack_require__.$Refresh$.register(_c4, "GetValueAfterButtonClick");
__webpack_require__.$Refresh$.register(_c5, "ControlledInput");
__webpack_require__.$Refresh$.register(_c6, "ControlledCheckbox");
__webpack_require__.$Refresh$.register(_c7, "ControlledSelect");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

});
//# sourceMappingURL=main.d719087ff839a8067509.hot-update.js.map