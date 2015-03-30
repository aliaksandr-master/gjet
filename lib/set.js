"use strict";

var utils = require('./utils');

module.exports = function (object, keyPath, value, sep) {
	if (keyPath == null) {
		return object;
	}

	keyPath = utils.prepareKeyPath(keyPath, sep);

	var length = keyPath.length,
		lastIndex = length - 1,
		index, k,
		obj = object;

	for (index = 0; index < length; index++) {
		if (index !== lastIndex && !utils.isObjectFunctionArray(obj)) {
			throw new TypeError('must be array or object');
		}

		k = keyPath[index];

		if (index === lastIndex) {
			obj[k] = value;
			break;
		}

		if (!utils.has(obj, k) || obj[k] == null) {
			obj[k] = /^\d+$/.test(k) ? [] : {};
		}

		obj = obj[k];
	}

	return object;
};
