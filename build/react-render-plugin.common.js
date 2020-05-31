/*!
* rete-react-render-plugin v0.2.0 
* (c) 2020  
* Released under the ISC license.
*/
'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function kebab(str) {
  var replace = function replace(s) {
    return s.toLowerCase().replace(/ /g, '-');
  };

  return Array.isArray(str) ? str.map(replace) : replace(str);
}

var Control =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Control, _React$Component);

  function Control() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Control);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Control)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "createRef", function (el) {
      var _this$props = _this.props,
          innerRef = _this$props.innerRef,
          control = _this$props.control;
      el && innerRef(el, control);
    });

    return _this;
  }

  _createClass(Control, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          control = _this$props2.control;
      return React.createElement("div", {
        className: className,
        title: control.key,
        ref: this.createRef
      });
    }
  }]);

  return Control;
}(React.Component);

var Socket =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Socket, _React$Component);

  function Socket() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Socket);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Socket)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "createRef", function (el) {
      var _this$props = _this.props,
          innerRef = _this$props.innerRef,
          type = _this$props.type,
          io = _this$props.io;
      el && innerRef(el, type, io);
    });

    return _this;
  }

  _createClass(Socket, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          socket = _this$props2.socket,
          type = _this$props2.type;
      return React.createElement("div", {
        className: "socket ".concat(type, " ").concat(kebab(socket.name)),
        title: socket.name,
        ref: function ref(el) {
          return _this2.createRef(el);
        } // force update for new IO with a same key 

      });
    }
  }]);

  return Socket;
}(React.Component);

___$insertStyle(".node {\n  background: rgba(110, 136, 255, 0.8);\n  border: 2px solid #4e58bf;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: 180px;\n  height: auto;\n  padding-bottom: 6px;\n  box-sizing: content-box;\n  position: relative;\n  user-select: none;\n}\n.node:hover {\n  background: rgba(130, 153, 255, 0.8);\n}\n.node.selected {\n  background: #ffd92c;\n  border-color: #e3c000;\n}\n.node .title {\n  color: white;\n  font-family: sans-serif;\n  font-size: 18px;\n  padding: 8px;\n}\n.node .output {\n  text-align: right;\n}\n.node .input {\n  text-align: left;\n}\n.node .input-title, .node .output-title {\n  vertical-align: middle;\n  color: white;\n  display: inline-block;\n  font-family: sans-serif;\n  font-size: 14px;\n  margin: 6px;\n  line-height: 24px;\n}\n.node .input-control {\n  z-index: 1;\n  width: calc(100% - 36px);\n  vertical-align: middle;\n  display: inline-block;\n}\n.node .control {\n  padding: 6px 18px;\n}\n\n.socket {\n  display: inline-block;\n  cursor: pointer;\n  border: 1px solid white;\n  border-radius: 12px;\n  width: 24px;\n  height: 24px;\n  margin: 6px;\n  vertical-align: middle;\n  background: #96b38a;\n  z-index: 2;\n  box-sizing: border-box;\n}\n.socket:hover {\n  border-width: 4px;\n}\n.socket.multiple {\n  border-color: yellow;\n}\n.socket.output {\n  margin-right: -12px;\n}\n.socket.input {\n  margin-left: -12px;\n}");

var Node =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Node, _React$Component);

  function Node() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Node);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Node)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(Node, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          node = _this$props.node,
          bindSocket = _this$props.bindSocket,
          bindControl = _this$props.bindControl;
      var _this$state = this.state,
          outputs = _this$state.outputs,
          controls = _this$state.controls,
          inputs = _this$state.inputs,
          selected = _this$state.selected;
      return React.createElement("div", {
        className: "node ".concat(selected, " ").concat(kebab(node.name))
      }, React.createElement("div", {
        className: "title"
      }, node.name), outputs.map(function (output) {
        return React.createElement("div", {
          className: "output",
          key: output.key
        }, React.createElement("div", {
          className: "output-title"
        }, output.name), React.createElement(Socket, {
          type: "output",
          socket: output.socket,
          io: output,
          innerRef: bindSocket
        }));
      }), controls.map(function (control) {
        return React.createElement(Control, {
          className: "control",
          key: control.key,
          control: control,
          innerRef: bindControl
        });
      }), inputs.map(function (input) {
        return React.createElement("div", {
          className: "input",
          key: input.key
        }, React.createElement(Socket, {
          type: "input",
          socket: input.socket,
          io: input,
          innerRef: bindSocket
        }), !input.showControl() && React.createElement("div", {
          className: "input-title"
        }, input.name), input.showControl() && React.createElement(Control, {
          className: "input-control",
          control: input.control,
          innerRef: bindControl
        }));
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref) {
      var node = _ref.node,
          editor = _ref.editor;
      return {
        outputs: Array.from(node.outputs.values()),
        controls: Array.from(node.controls.values()),
        inputs: Array.from(node.inputs.values()),
        selected: editor.selected.contains(node) ? 'selected' : ''
      };
    }
  }]);

  return Node;
}(React.Component);

function install(editor, _ref) {
  var _ref$component = _ref.component,
      NodeComponent = _ref$component === void 0 ? Node : _ref$component;
  editor.on('rendernode', function (_ref2) {
    var el = _ref2.el,
        node = _ref2.node,
        component = _ref2.component,
        bindSocket = _ref2.bindSocket,
        bindControl = _ref2.bindControl;
    if (component.render && component.render !== 'react') return;
    var Component = component.component || NodeComponent;

    node.update = function () {
      return new Promise(function (res) {
        ReactDOM.render(React.createElement(Component, {
          node: node,
          editor: editor,
          bindSocket: bindSocket,
          bindControl: bindControl
        }), el, res);
      });
    };

    node._reactComponent = true;
    node.update();
  });
  editor.on('rendercontrol', function (_ref3) {
    var el = _ref3.el,
        control = _ref3.control;
    if (control.render && control.render !== 'react') return;
    var Component = control.component;

    control.update = function () {
      return new Promise(function (res) {
        ReactDOM.render(React.createElement(Component, control.props), el, res);
      });
    };

    control.update();
  });
  editor.on('connectioncreated connectionremoved', function (connection) {
    connection.output.node.update();
    connection.input.node.update();
  });
  editor.on('nodeselected', function () {
    editor.nodes.filter(function (n) {
      return n._reactComponent;
    }).map(function (node) {
      return node.update();
    });
  });
}
var index = {
  name: 'react-render',
  install: install
};

exports.Control = Control;
exports.Node = Node;
exports.Socket = Socket;
exports.default = index;
//# sourceMappingURL=react-render-plugin.common.js.map
