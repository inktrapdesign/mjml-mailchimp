'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _mjmlCore = require('mjml-core');

var _fp = require('lodash/fp');

var _mjmlWrapper = require('mjml-wrapper');

var _mjmlWrapper2 = _interopRequireDefault(_mjmlWrapper);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-body': ['mc-wrapper'],
  'mc-wrapper': ['mj-section', 'mc-section', 'mj-group', 'mj-raw']
});

var McWrapper = (_temp = _class = function (_MjWrapper) {
  (0, _inherits3.default)(McWrapper, _MjWrapper);

  function McWrapper() {
    (0, _classCallCheck3.default)(this, McWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (McWrapper.__proto__ || (0, _getPrototypeOf2.default)(McWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(McWrapper, [{
    key: 'renderWrappedChildren',
    value: function renderWrappedChildren() {
      var children = this.props.children;
      var containerWidth = this.context.containerWidth;


      return '\n      ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return component.constructor.isRawElement() ? component.render() : '\n            <!--[if mso | IE]>\n              <tr>\n                <td\n             \n              ' + component.htmlAttributes({
            align: component.getAttribute('align'),
            class: (0, _mjmlCore.suffixCssClasses)(component.getAttribute('css-class'), 'outlook'),
            width: containerWidth
          }) + '\n            >\n          <![endif]-->\n            ' + component.render() + '\n          <!--[if mso | IE]>\n            </td>\n            </tr>\n          <![endif]-->\n        ';
        }
      }) + '\n    ';
    }
  }]);
  return McWrapper;
}(_mjmlWrapper2.default), _class.componentName = 'mc-wrapper', _class.allowedAttributes = (0, _extends3.default)({}, _mjmlWrapper2.default.allowedAttributes, {
  'mc:hideable': 'string',
  'mc:repeatable': 'string',
  'mc:variant': 'string',
  'mc:edit': 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlWrapper2.default.defaultAttributes, {
  'mc:hideable': false
}), _temp);
exports.default = McWrapper;
module.exports = exports.default;