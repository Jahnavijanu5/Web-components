// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app-internals/fetchData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Basic helper function to fetch JSON data
 * @param {string} url URL to fetch from
 * @returns {Promise} Promise that resolves in parsed JSON or empty array
 */
var fetchData = function fetchData(url) {
  return fetch(url).then(function (response) {
    return response.json();
  }).catch(function (data) {
    return [];
  });
};
var _default = exports.default = fetchData;
},{}],"app-internals/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * We're just hiding this form HTML here to make it cleaner as
 * it is out of the workshop scope.
 */
var _default = exports.default = "\n  <div class=\"field\">\n    <label class=\"label\">Filter</label>\n    <div class=\"control\">\n      <div class=\"select\">\n        <select name=\"url\">\n          <option value=\"https://demo3059429.mockable.io/vehicles\">Long list</option>\n          <option value=\"https://demo7966525.mockable.io/vehicles-short\">Short list</option>\n        </select>\n      </div>\n      <div class=\"select\">\n        <select name=\"limit\">\n          <option value=\"8\">8 items</option>\n          <option value=\"6\">6 items</option>\n          <option value=\"4\" selected>4 items</option>\n          <option value=\"2\">2 items</option>\n        </select>\n      </div>\n      <div class=\"select\">\n        <select name=\"show-details\">\n          <option value=\"true\">Show details</option>\n          <option value=\"\">Hide details</option>\n        </select>\n      </div>\n    </div>\n  </div>\n";
},{}],"components/hello-world.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * # Prety basic hello world component
 * Prints name attribute. Is reactive to attribute and property change.
 */
var HelloWorld = /*#__PURE__*/function (_HTMLElement) {
  _inherits(HelloWorld, _HTMLElement);
  var _super = _createSuper(HelloWorld);
  // Element constructor
  function HelloWorld() {
    var _this;
    _classCallCheck(this, HelloWorld);
    _this = _super.call(this);

    // Init shadow DOM
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  // Use properties to work with the 'name' attribute
  _createClass(HelloWorld, [{
    key: "name",
    get: function get() {
      return this.getAttribute('name');
    },
    set: function set(newValue) {
      if (newValue) this.setAttribute('name', newValue);else this.removeAttribute('name');
    }

    // The name attribute must be observed to react to changes
  }, {
    key: "attributeChangedCallback",
    value:
    // React to these changes
    function attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'name':
          if (this._shadowRoot) this._render();
          break;
      }
    }

    // Fires when component is mounted
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._render();
    }

    // Render the component
  }, {
    key: "_render",
    value: function _render() {
      var name = this.name;
      this._shadowRoot.innerHTML = "\n    <style>\n        :host {\n          display: block;\n          padding: 1rem;\n          margin: 0 0 1rem;\n          border: 2px solid var(--hw-border-color, gray);\n          background-color: var(--hw-bg-color, transparent);\n          color: var(--hw-color, black);\n          border-radius: .25rem;\n          font-weight: bold;\n          font-size: 1.2em;\n          line-height: 1.8em;\n        }\n        h1 {\n          margin: 0;\n          text-align: center;\n        }\n        h1.no-name {\n          opacity: .5;\n        }\n    </style>\n    <h1 class=\"".concat(name ? '' : 'no-name', "\">\n      Hello ").concat(name || 'World', "!\n    </h1>\n    ");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['name'];
    }
  }]);
  return HelloWorld;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('hello-world', HelloWorld);
},{}],"components/demo-component.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var styles = "\n    /** add component styles here **/\n    :host {\n      all: initial; /** completely immutable CSS **/\n      display: inline-block;\n      margin: 0 0 2rem;\n      border-radius: 1rem;\n      border-radius: calc(var(--borderRadius));\n      padding: .5rem;\n      padding: calc(var(--borderRadius) / 2);\n      font-family: sans-serif;\n      text-align: center;\n    }\n\n    /** No need for custom classes here **/\n    a {\n      display: block;\n      width: var(--imageWidth);\n      padding: .5rem;\n      padding: calc(var(--borderRadius) / 2);\n      border: 0;\n      border-radius: .5rem;\n      border-radius: calc(var(--borderRadius) / 2);\n      box-shadow: 0 0 calc(var(--borderRadius) / 2) rgba(0,0,0,0.5);\n      background: black;\n      background: var(--buttonBackground); \n      color: black;\n      color: var(--buttonColor);\n      cursor: pointer;\n      text-decoration: none;\n    }\n    h1 {\n      margin: 0;\n    }\n    img {\n      display: block;\n      max-width: 100px;\n      width: var(--imageWidth);\n    }\n  ";
/**
 * # Demo component
 * Showcase of cool stuff to use in Web Components:
 * - Life cycle
 * - Shadow DOM
 * - Attribute change observer
 * - Property getter/setter
 * - Slots
 * - CSS :host
 * - CSS custom properties
 */
var DemoComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(DemoComponent, _HTMLElement);
  var _super = _createSuper(DemoComponent);
  /**
   * An instance of the element is created or upgraded.
   * Useful for initializing state, settings up event listeners,
   * or creating shadow dom.
   */
  function DemoComponent() {
    var _this;
    _classCallCheck(this, DemoComponent);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.root = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  /**
   * Called every time the element is inserted into the DOM.
   * Useful for running setup code, such as fetching resources or rendering.
   * Generally, you should try to delay work until this time.
   */
  _createClass(DemoComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this._render();
    }

    /**
     * Called every time the element is removed from the DOM.
     * Useful for running clean up code.
     */
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      console.log('detached');
    }

    /**
     * Called when an observed attribute has been added, removed,
     * updated, or replaced.
     * Also called for initial values when an element is created by the parser,
     * or upgraded.
     * Note: only attributes listed in the observedAttributes property
     * will receive this callback.
     */
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'image-src':
        case 'title':
        case 'href':
          this._render();
          break;
      }
    }

    /** Only these attributes changes will trigger the callback */
  }, {
    key: "imageSrc",
    get:
    // Exposed properties getters/setters
    function get() {
      return this.getAttribute('image-src');
    },
    set: function set(newValue) {
      // Not the best practice but you may want to reflect property to attribute
      if (newValue) this.setAttribute('image-src', newValue);else this.removeAttribute('image-src');
    }
  }, {
    key: "_render",
    value: function _render() {
      var title = this.getAttribute('title');
      var href = this.getAttribute('href');
      var imageSrc = this.getAttribute('image-src');
      this.root.innerHTML = "\n        <style>\n          ".concat(styles, "\n        </style>\n        <article>\n          <a href=\"").concat(href || '#', "\">\n            ").concat(title ? "<h1>".concat(title, "</h1>") : '', "\n            <img src=\"").concat(imageSrc, "\"/>\n          </a>\n          <slot name=\"notes\"></slot>\n        </article>\n      ");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['title', 'image-src', 'href'];
    }
  }]);
  return DemoComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('demo-component', DemoComponent);
},{}],"components/model-chooser.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * # Model Choser
 * Lists all model objects from 'items' property
 *
 * TODO:
 * - MUST accept limit attribute to replace the HARDCODED_LIMIT
 * - MUST provide property getter and setter for limit
 * - MAY create new web component for each item
 * - (hero) MAY use SLOT element for title with existing H1 as fallback
 * - (hero) MAY accept CSS custom properties for selected item color
 */
var style = "\n  h1 {\n    color: mediumblue;\n  }\n  ul {\n    margin: 0 0 2rem;\n    padding: 0;\n    overflow: hidden; \n    border-radius: .5rem;\n  }\n  li {\n    list-style: none;\n    margin: 0;\n    margin-top: 1px;\n  }\n  a {\n    display: block;\n    padding: .5rem;\n    background: dimgray;\n    color: white;\n    text-decoration: none;\n  }\n  a:hover {\n    background: black;\n  }\n  a.selected {\n    font-weight: bold;\n    background: darkblue;\n  }\n";
var HARDCODED_LIMIT = 6;
var ModelChooser = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ModelChooser, _HTMLElement);
  var _super = _createSuper(ModelChooser);
  // Fires when component is created
  function ModelChooser() {
    var _this;
    _classCallCheck(this, ModelChooser);
    _this = _super.call(this);

    // Init our data & loading
    _this._items = [];

    // Init the shadow root
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  // Fires when component is mounted
  _createClass(ModelChooser, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this._render();

      // Set up listener
      this._shadowRoot.addEventListener('click', this._onModelSelect.bind(this));
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'idx':
          this._render();
          break;
      }
    }

    /** Only these attributes changes will trigger the callback */
  }, {
    key: "items",
    get: function get() {
      return this._items;
    },
    set:
    // Exposed properties getters/setters
    function set(newValue) {
      this._items = newValue;
      this._render();
    }
  }, {
    key: "_onModelSelect",
    value: function _onModelSelect(e) {
      if (e.target && e.target.matches('a[data-idx]')) {
        e.preventDefault();

        // Mark selected
        var idx = parseInt(e.target.dataset.idx);
        this.setAttribute('idx', idx);

        // Dispatch custom event
        var event = new CustomEvent('model-change', {
          bubbles: true,
          detail: idx
        });
        this.dispatchEvent(event);
      }
    }

    // Renders the component
  }, {
    key: "_render",
    value: function _render() {
      var items = this._items;
      var limit = HARDCODED_LIMIT;
      if (limit) {
        items = items.slice(0, limit);
      }
      var content = "\n      <style>\n        ".concat(style, "\n      </style>\n      <h1>Models List <sup>(").concat(items.length, ")</sup></h1>\n      <ul>\n        ").concat(items.map(this._renderModel.bind(this)).join(''), "\n      </ul>\n    ");
      this._shadowRoot.innerHTML = content;
    }

    // Returns one model's HTML
  }, {
    key: "_renderModel",
    value: function _renderModel(model, idx) {
      return "\n      <li>\n        <a \n          href=\"#\" \n          data-idx=\"".concat(idx, "\"\n          class=\"").concat(idx == this.getAttribute('idx') ? 'selected' : '', "\"\n        >").concat(model.name, "</a>\n      </li>\n    ");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['idx'];
    }
  }]);
  return ModelChooser;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('model-chooser', ModelChooser);
},{}],"components/model-viewer.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * # Model Viewer
 * Lists all models object loaded from 'url' parameter
 *
 * TODO:
 * - MUST NOT use shadowDOM to allow full CSS theming
 * - MUST use demo component replacing title and image
 * - (hero) print more vehicle data (data demo https://demo3059429.mockable.io/vehicles)
 * - (hero) create new component for each attribute (<dt><dd>)
 * - (hero) use a custom event to close the viewer
 */
var ModelViewer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ModelViewer, _HTMLElement);
  var _super = _createSuper(ModelViewer);
  // Fires when component is created
  function ModelViewer() {
    var _this;
    _classCallCheck(this, ModelViewer);
    _this = _super.call(this);

    // Init the shadow root
    _this._shadowRoot = _this.attachShadow({
      mode: 'open'
    });
    _this._render();
    return _this;
  }

  // Use attributes + properties to set model
  _createClass(ModelViewer, [{
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(newValue) {
      this._data = newValue;
      this._render();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldVal, newVal) {
      if (this._shadowRoot) this._render();
    }

    // Fires when component is mounted
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.data) this._render();
    }
  }, {
    key: "_render",
    value: function _render() {
      var content = '';
      var data = this._data;
      if (data) {
        content = "\n        <style></style>\n        <article class=\"message\">\n          <div class=\"message-header\">\n            <p>Selected Vehicle</p>\n            <button class=\"delete\" aria-label=\"close\"></button>\n          </div>\n          <div class=\"message-body\">\n            <div class=\"content\">\n              <img src=\"".concat(data.imageUrl, "\" />\n              <h1>").concat(data.name, "</h1>\n            ").concat(this._renderDetails(), "\n            </div>\n          </div>\n        </article>\n      ");
      } else {
        content = "\n        <div class=\"notification\">\n          <p>No model selected.</p>\n        </div>\n      ";
      }
      this._shadowRoot.innerHTML = content;
    }
  }, {
    key: "_renderDetails",
    value: function _renderDetails() {
      var showDetails = this.getAttribute('show-details');
      if (showDetails === null) return '<p class="tag is-black">hidden details</p>';
      var data = this._data;
      return "\n      <dl>\n        <dt class=\"tag is-black\">Transmission</dt>\n        <dd>".concat(data.transmissions[0], "</dd>\n        <dt class=\"tag is-black\">Fuel</dt>\n        <dd>").concat(data.fuelTypes[0], "</dd>\n      </dl>\n    ");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['show-details'];
    }
  }]);
  return ModelViewer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('model-viewer', ModelViewer);
},{}],"index.mjs":[function(require,module,exports) {
"use strict";

var _fetchData = _interopRequireDefault(require("./app-internals/fetchData"));
var _form = _interopRequireDefault(require("./app-internals/form"));
require("./components/hello-world");
require("./components/demo-component");
require("./components/model-chooser");
require("./components/model-viewer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// web components' import

var appElement = document.getElementById("app");
appElement.innerHTML = "\n  <hello-world></hello-world>\n  <hello-world name=\"Web Components\"></hello-world>\n  \n  <demo-component \n    title=\"Demo Component\"\n    image-src=\"https://cdn.worldvectorlogo.com/logos/mercedes-benz.svg\"\n    >\n    <p class=\"notes\" slot=\"notes\">This is a demo component</p>\n  </demo-component>\n\n  ".concat(_form.default, "\n  \n  <div class=\"columns\">\n    <nav class=\"column\">\n      <model-chooser limit=\"4\"></model-chooser>\n    </nav>\n    <section class=\"column\">\n      <model-viewer show-details></model-viewer>\n    </section>\n  </div>\n");
var chooser = appElement.querySelector("model-chooser");
var viewer = appElement.querySelector("model-viewer");
var showDetailsInput = appElement.querySelector("[name=show-details]");
var urlInput = appElement.querySelector("[name=url]");
var limitInput = appElement.querySelector("[name=limit]");
var loadList = function loadList() {
  return (0, _fetchData.default)(urlInput.value).then(function (data) {
    return chooser.items = data;
  });
};
appElement.addEventListener("model-change", function (event) {
  if (!viewer) return;
  viewer.data = chooser.items[event.detail];
});
showDetailsInput.addEventListener("change", function (event) {
  var enabled = !!showDetailsInput.value;
  if (enabled) {
    viewer.setAttribute("show-details", "");
  } else {
    viewer.removeAttribute("show-details");
  }
});
urlInput.addEventListener("change", function (event) {
  loadList();
});
loadList();
limitInput.addEventListener("change", function (event) {
  // chooser.setAttribute('limit', event.currentTarget.value)
  chooser.limit = event.currentTarget.value;
});
},{"./app-internals/fetchData":"app-internals/fetchData.js","./app-internals/form":"app-internals/form.js","./components/hello-world":"components/hello-world.js","./components/demo-component":"components/demo-component.js","./components/model-chooser":"components/model-chooser.js","./components/model-viewer":"components/model-viewer.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35883" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.mjs"], null)
//# sourceMappingURL=/src.bbc6c1c7.js.map