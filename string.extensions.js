/*
 * StringExtensions
 * http://www.karalamalar.net/
 *
 * Copyright (c) 2009-2013 İzzet Emre Erkan
 * Licensed under Creative Commons Attribution-Share Alike 3.0 Unported License
 * http://creativecommons.org/licenses/by-sa/3.0/
 */
String.prototype.trimLeft = function (c) {
  c = c || ' ';
  return this.replace(new RegExp('^[' + c + ']+'), "");
};

String.prototype.trimRight = function (c) {
  c = c || ' ';
  return this.replace(new RegExp('[' + c + ']+$'), "");
};

String.prototype.trim = function (c) {
  return this.trimLeft(c).trimRight(c);
};

String.prototype.padLeft = function (l, c) {
  var s = this.toString();
  c = c || ' ';
  while (s.length < l) {
    s = c + s;
  }
  return s;
};

String.prototype.padRight = function (l, c) {
  var s = this.toString();
  c = c || ' ';
  while (s.length < l) {
    s = s + c;
  }
  return s;
};

String.prototype.insert = function (p, c) {
  var s = this.toString();
  return s.substring(0, p) + c + s.substring(p);
};

String.prototype.startsWith = function (s) {
  return this.match('^' + s) === s;
};

String.prototype.endsWith = function (s) {
  return this.match(s + '$') === s;
};

String.prototype.isNullOrEmpty = function () {
  return this === null || this.length === 0;
};

String.prototype.isNullOrWhitespace = function () {
  return this === null || this.replace(/\s/g, '').length === 0;
};

String.prototype.append = function (s, c) {
  var t = this.toString();
  c = c || 1;
  while (0 < c) {
    t = t + s;
    c--;
  }
  return t;
};

String.prototype.appendTo = function (s, c) {
  var t = this.toString();
  return s.append(t, c);
};

String.prototype.prepend = function (s, c) {
  var t = this.toString();
  c = c || 1;
  while (0 < c) {
    t = s + t;
    c--;
  }
  return t;
};

String.prototype.prependTo = function (s, c) {
  var t = this.toString();
  return s.prepend(t, c);
};

// More info: https://github.com/karalamalar/valiDate
String.prototype.valiDate = function () {
  if (/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)[0-9]{2}$/.test(this)) {
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