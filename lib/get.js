"use strict";

var utils = require('./utils');

module.exports = function (object, keyPath, defaults, sep) {
	if (keyPath == null) {
		return object;
	}

	if (object == null || !utils.isObjectFunctionArray(object)) {
		return defaults;
	}

	if (utils.has(object, keyPath)) {
		return object[keyPath];
	}

	keyPath = utils.prepareKeyPath(keyPath, sep);

	var length = keyPath.length,
		lastIndex = length - 1,
		index,
		obj = object, k;

	for (index = 0; index < length; index++) {
		k = keyPath[index];

		if (!utils.has(obj, k) || obj[k] == null) {
			obj = null;
			return defaults;
		}

		obj = obj[k];

		if (index !== lastIndex && !utils.isObjectFunctionArray(obj)) {
			obj = null;
			return defaults;
		}
	}

	return obj;
};
