'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mjmlCore = require('mjml-core');

Object.keys(_mjmlCore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mjmlCore[key];
    }
  });
});

var _mjmlButton = require('mjml-button');

var _mjmlButton2 = _interopRequireDefault(_mjmlButton);

var _mjmlColumn = require('mjml-column');

var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);

var _mjmlContainer = require('mjml-container');

var _mjmlContainer2 = _interopRequireDefault(_mjmlContainer);

var _mjmlDivider = require('mjml-divider');

var _mjmlDivider2 = _interopRequireDefault(_mjmlDivider);

var _mjmlGroup = require('mjml-group');

var _mjmlGroup2 = _interopRequireDefault(_mjmlGroup);

var _mjmlHtml = require('mjml-html');

var _mjmlHtml2 = _interopRequireDefault(_mjmlHtml);

var _mjmlImage = require('mjml-image');

var _mjmlImage2 = _interopRequireDefault(_mjmlImage);

var _mjmlList = require('mjml-list');

var _mjmlList2 = _interopRequireDefault(_mjmlList);

var _mjmlLocation = require('mjml-location');

var _mjmlLocation2 = _interopRequireDefault(_mjmlLocation);

var _mjmlHero = require('mjml-hero');

var _mjmlHero2 = _interopRequireDefault(_mjmlHero);

var _mjmlInvoice = require('mjml-invoice');

var _mjmlInvoice2 = _interopRequireDefault(_mjmlInvoice);

var _mjmlNavbar = require('mjml-navbar');

var _mjmlNavbar2 = _interopRequireDefault(_mjmlNavbar);

var _mjmlRaw = require('mjml-raw');

var _mjmlRaw2 = _interopRequireDefault(_mjmlRaw);

var _mjmlSection = require('mjml-section');

var _mjmlSection2 = _interopRequireDefault(_mjmlSection);

var _mjmlSocial = require('mjml-social');

var _mjmlSocial2 = _interopRequireDefault(_mjmlSocial);

var _mjmlSpacer = require('mjml-spacer');

var _mjmlSpacer2 = _interopRequireDefault(_mjmlSpacer);

var _mjmlTable = require('mjml-table');

var _mjmlTable2 = _interopRequireDefault(_mjmlTable);

var _mjmlText = require('mjml-text');

var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _mjmlHeadAttributes = require('mjml-head-attributes');

var _mjmlHeadAttributes2 = _interopRequireDefault(_mjmlHeadAttributes);

var _mjmlHeadFont = require('mjml-head-font');

var _mjmlHeadFont2 = _interopRequireDefault(_mjmlHeadFont);

var _mjmlHeadTitle = require('mjml-head-title');

var _mjmlHeadTitle2 = _interopRequireDefault(_mjmlHeadTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = _mjmlHero2.default.Hero;
var HeroContent = _mjmlHero2.default.HeroContent;
var Invoice = _mjmlInvoice2.default.Invoice;
var InvoiceItem = _mjmlInvoice2.default.InvoiceItem;
var Navbar = _mjmlNavbar2.default.Navbar;
var InlineLinks = _mjmlNavbar2.default.InlineLinks;
var Link = _mjmlNavbar2.default.Link;


[_mjmlButton2.default, _mjmlColumn2.default, _mjmlContainer2.default, _mjmlDivider2.default, _mjmlGroup2.default, Hero, HeroContent, _mjmlHtml2.default, _mjmlImage2.default, InlineLinks, Invoice, InvoiceItem, Link, _mjmlList2.default, _mjmlLocation2.default, Navbar, _mjmlRaw2.default, _mjmlSection2.default, _mjmlSocial2.default, _mjmlSpacer2.default, _mjmlTable2.default, _mjmlText2.default].map(_mjmlCore.registerMJElement);

[_mjmlHeadAttributes2.default, _mjmlHeadFont2.default, _mjmlHeadTitle2.default].map(function (headElement) {
  return (0, _mjmlCore.registerMJHeadElement)(headElement.name, headElement.handler);
});