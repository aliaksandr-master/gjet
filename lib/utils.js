"use strict";

var utils = module.exports;

utils.has = function (object, prop) {
	return Object.prototype.hasOwnProperty.call(object, prop);
};

utils.type = function (object) {
	return Object.prototype.toString.call(object);
};

utils.isObjectFunctionArray = function (object) {
	var t = utils.type(object);
	return t === '[object Array]' || t === '[object Object]' || t === '[object Function]';
};

utils.prepareKeyPath = function (keyPath, sep) {
	if (keyPath == null || typeof keyPath === 'number' && keyPath != +keyPath) { // jshint ignore : line
		return null;
	}

	return String(keyPath).split(sep == null ? ':' : sep);
};
