(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global['use-form-data'] = {}, global.react));
}(this, function (exports, react) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var getFormDataHandler = function getFormDataHandler(formData) {
    return function (e) {
      return submitHandler(e, formData);
    };
  };

  function useForm(elements, submitHandler) {
    var initialState = elements.reduce(function (acc, curr) {
      acc[curr.name] = curr.value;
      return acc;
    }, {});

    var _useState = react.useState(initialState),
        _useState2 = _slicedToArray(_useState, 2),
        formState = _useState2[0],
        setFormState = _useState2[1];

    var setFieldValue = function setFieldValue(name, value) {
      setFormState(_objectSpread({}, formState, _defineProperty({}, name, value)));
    };

    var handleSubmit = getFormDataHandler(formState);
    react.useEffect(function () {
      handleSubmit = getFormDataHandler(formState);
    }, [formState]);
    return {
      formState: formState,
      setFieldValue: setFieldValue,
      handleSubmit: handleSubmit
    };
  }

  exports.getFormDataHandler = getFormDataHandler;
  exports.default = useForm;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
