/**
 * StringExtensions
 * https://github.com/karalamalar/StringExtensions
 *
 * @author: twitter.com/IzzetEmreErkan
 * @author_uri: http://www.karalamalar.net
 *
 * Copyright (c) 2009-2013 İzzet Emre Erkan
 * Licensed under Creative Commons Attribution-Share Alike 3.0 Unported License
 * http://creativecommons.org/licenses/by-sa/3.0/
 */
String.prototype.trimLeft = function (character) {
  character = character || ' ';
  return this.replace(new RegExp('^[' + character + ']+'), "");
};

String.prototype.trimRight = function (character) {
  character = character || ' ';
  return this.replace(new RegExp('[' + character + ']+$'), "");
};

String.prototype.trim = function (character) {
  return this.trimLeft(character).trimRight(character);
};

String.prototype.padLeft = function (length, character) {
  var t = this.toString();
  character = character || ' ';
  while (t.length < length) {
    t = character + t;
  }
  return t;
};

String.prototype.padRight = function (length, character) {
  var t = this.toString();
  character = character || ' ';
  while (t.length < length) {
    t = t + character;
  }
  return t;
};

String.prototype.insert = function (position, character) {
  var t = this.toString();
  return t.substring(0, position) + character + t.substring(position);
};

String.prototype.startsWith = function (text) {
  return this.substring(0, text.length) === text;
};

String.prototype.endsWith = function (text) {
  return this.substring(this.length - text.length) === text;
};

String.prototype.isNullOrEmpty = function () {
  return this === null || this.length === 0;
};

String.prototype.isNullOrWhitespace = function () {
  return this === null || this.replace(/\s/g, '').length === 0;
};

String.prototype.append = function (text, count) {
  var t = this.toString();
  count = count || 1;
  while (0 < count) {
    t = t + text;
    count--;
  }
  return t;
};

String.prototype.appendTo = function (text, count) {
  var t = this.toString();
  return text.append(t, count);
};

String.prototype.prepend = function (text, count) {
  var t = this.toString();
  count = count || 1;
  while (0 < count) {
    t = text + t;
    count--;
  }
  return t;
};

String.prototype.prependTo = function (text, count) {
  var t = this.toString();
  return text.prepend(t, count);
};

String.prototype.capitalize = function(type, splitChar) {
  var t, i, il, y, yl;
  type = type ? type.toLowerCase() : 'word';
  splitChar = splitChar || ' ';
  function capitalizeText(text) {
    var trimmed = text.trimLeft();
    return (trimmed.charAt(0).toUpperCase() + trimmed.substring(1)).padLeft(text.length);
  }
  function splitAndCapitalize(text, splitChar) {
    for(i=0,il=splitChar.length; i < il; i++) {
      t = text.split(splitChar.charAt(i));
      for(y = 0, yl = t.length; y < yl; y++) {
        t[y] = capitalizeText(t[y]);
      }
      text = t.join(splitChar.charAt(i));
    }
    return text;
  }
  switch(type) {
    case 'split':
    case 's':
      return splitAndCapitalize(this, splitChar);
      break;
    case 'paragraph':
    case 'p':
      return splitAndCapitalize(this, '.!?;');
      break;
    case 'every':
    case 'everyword':
    case 'every-word':
    case 'e':
      return splitAndCapitalize(this, ' ');
      break;
    case 'word':
    case 'w':
    default:
      return capitalizeText(this);
      break;
  }
};

String.prototype.count = function(text) {
  return text ? this.split(text).length - 1 : this.trim().split(/\s+/g).length;
};

String.prototype.isEmail = function() {
  return /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)$/i.test(this);
};

String.prototype.isURL = function() {
  return /^(?:\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])$/i.test(this);
};

Number.prototype.toTime = function(compact) {
  var hour = Math.floor(this / 3600),
    minute = Math.floor((this - hour * 3600) / 60),
    second = this - (hour * 3600 + minute * 60),
    returnValue = [hour < 10 ? 0 : '', hour, ':', minute < 10 ? 0 : '', minute, ':', second < 10 ? 0 : '', second].join('');
  return compact ? returnValue.trimLeft('0').trimLeft(':').trimLeft('0').trimLeft(':').trimLeft('0') : returnValue;
}

String.prototype.toTime = function(compact) {
    return parseInt(this, 10).toTime(compact);
};

// More info: https://github.com/karalamalar/valiDate
String.prototype.valiDate = function () {
  if (/^(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)[0-9]{2}$/.test(this)) {
    var v = this.replace(/[- /]/g, '.').split('.'),
      d = parseInt(v[0], 10),
      m = parseInt(v[1], 10),
      y = parseInt(v[2], 10),
      o = new Date(y, m - 1, d);
    return o.getDate() === d && o.getMonth() + 1 === m && o.getFullYear() === y ? o : false;
  } else {
    return false;
  }
};