"use strict";

var utils = module.exports;

utils.has = function (object, prop) {
	return Object.prototype.hasOwnProperty.call(object, prop);
};

utils.type = function (object) {
	return Object.prototype.toString.call(object);
};

utils.isObjectFunctionArray = function (object) {
	return /^\[object (Object|Array|Function)]$/.test(utils.type(object));
};

utils.prepareKeyPath = function (keyPath, sep) {
	if (typeof keyPath === 'number') {
		keyPath = String(keyPath);
	}

	if (typeof keyPath === 'string') {

		sep || (sep = ':');
		if (utils.type(sep) === '[object RegExp]' ? sep.test(keyPath) : keyPath.indexOf(sep) !== -1) {
			keyPath = keyPath.split(sep);
		} else {
			keyPath = [keyPath];
		}
	}

	return keyPath;
};
