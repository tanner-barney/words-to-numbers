'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jaro = require('talisman/metrics/jaro');

var _jaro2 = _interopRequireDefault(_jaro);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (word, haystack) {
  return (haystack || _constants.ALL_WORDS).map(function (numberWord) {
    return {
      word: numberWord,
      score: _jaro2.default.score(numberWord, word)
    };
  }).reduce(function (acc, stat) {
    return !(0, _itsSet2.default)(acc.score) || stat.score > acc.score ? stat : acc;
  }, {}).word;
};