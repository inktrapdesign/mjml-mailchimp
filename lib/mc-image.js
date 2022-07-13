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

var _class, _temp2;

var _lodash = require('lodash');

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

var _mjmlImage = require('mjml-image');

var _mjmlImage2 = _interopRequireDefault(_mjmlImage);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-column': ['mc-image'],
  'mj-hero': ['mc-image'],
  'mc-image': []
});

var McImage = (_temp2 = _class = function (_MjImage) {
  (0, _inherits3.default)(McImage, _MjImage);

  function McImage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, McImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = McImage.__proto__ || (0, _getPrototypeOf2.default)(McImage)).call.apply(_ref, [this].concat(args))), _this), _this.headStyle = function (breakpoint) {
      return '\n    @media only screen and (max-width:' + breakpoint + ') {\n      table.mj-full-width-mobile { width: 100% !important; }\n      td.mj-full-width-mobile { width: auto !important; }\n    }\n  ';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(McImage, [{
    key: 'getStyles',
    value: function getStyles() {
      var width = this.getContentWidth();
      var fullWidth = this.getAttribute('full-width') === 'full-width';

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      return {
        img: {
          border: this.getAttribute('border'),
          'border-left': this.getAttribute('border-left'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-radius': this.getAttribute('border-radius'),
          display: 'block',
          outline: 'none',
          'text-decoration': 'none',
          height: this.getAttribute('height'),
          'max-height': this.getAttribute('max-height'),
          'min-width': fullWidth ? '100%' : null,
          width: '100%',
          'max-width': fullWidth ? '100%' : null,
          'font-size': this.getAttribute('font-size')
        },
        td: {
          width: '' + parsedWidth + unit
        },
        table: {
          'min-width': fullWidth ? '100%' : null,
          'max-width': fullWidth ? '100%' : null,
          width: '' + parsedWidth + unit,
          'border-collapse': 'collapse',
          'border-spacing': '0px'
        }
      };
    }
  }, {
    key: 'getContentWidth',
    value: function getContentWidth() {
      var width = this.getAttribute('width') ? parseInt(this.getAttribute('width'), 10) : Infinity;

      var _getBoxWidths = this.getBoxWidths(),
          box = _getBoxWidths.box;

      return (0, _lodash.min)([box, width]);
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var height = this.getAttribute('height');

      var img = '\n      <img\n        ' + this.htmlAttributes({
        alt: this.getAttribute('alt'),
        height: height && (height === 'auto' ? height : parseInt(height, 10)),
        src: this.getAttribute('src'),
        srcset: this.getAttribute('srcset'),
        sizes: this.getAttribute('sizes'),
        style: 'img',
        title: this.getAttribute('title'),
        width: this.getContentWidth(),
        usemap: this.getAttribute('usemap'),
        'mc:edit': this.getAttribute('mc:edit'),
        'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null
      }) + '\n      />\n    ';

      if (this.getAttribute('href')) {
        return '\n        <a\n          ' + this.htmlAttributes({
          href: this.getAttribute('href'),
          target: this.getAttribute('target'),
          rel: this.getAttribute('rel'),
          name: this.getAttribute('name'),
          title: this.getAttribute('title')
        }) + '\n        >\n          ' + img + '\n        </a>\n      ';
      }

      return img;
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table',
        class: this.getAttribute('fluid-on-mobile') ? 'mj-full-width-mobile' : null
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td ' + this.htmlAttributes({
        style: 'td',
        class: this.getAttribute('fluid-on-mobile') ? 'mj-full-width-mobile' : null
      }) + '>\n              ' + this.renderImage() + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }]);
  return McImage;
}(_mjmlImage2.default), _class.componentName = 'mc-image', _class.allowedAttributes = (0, _extends3.default)({}, _mjmlImage2.default.allowedAttributes, {
  'mc:edit': 'string',
  'mc:hideable': 'string',
  'full-width': 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlImage2.default.defaultAttributes, {
  'mc:hideable': false,
  'full-width': false
}), _temp2);
exports.default = McImage;
module.exports = exports.default;