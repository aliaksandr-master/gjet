"use strict";

var _ = require('lodash');
var gjet = require('./_lib');

exports['test'] = function (test) {
	test.ok(true);

	test.done();
};

var bigObject = {
	a: 1,
	b: '',
	c: null,
	d: undefined,
	e: [],
	f: {},
	g: /asdasd/,
	h: new Date(),
	i: {
		a: 2,
		b: '1',
		c: null,
		d: undefined,
		e: [],
		f: {},
		g: {
			a: {
				a: 123123,
				c: [
					123123,
					'asdasd',
					{
						a: [
							123123,
							234234,
							null,
							undefined,
							'123'
						]
					}
				]
			},
			'null': 123123,
			'undefined': 123123
		}
	}
};

exports['get:self'] = function (test) {
	test.strictEqual(gjet.get(bigObject), bigObject);
	test.strictEqual(gjet.get(bigObject, null), bigObject);
	test.strictEqual(gjet.get(bigObject, undefined), bigObject);

	test.done();
};

exports['get:undefined'] = function (test) {
	test.strictEqual(gjet.get(bigObject, ''), undefined);
	test.strictEqual(gjet.get(bigObject, 123), undefined);
	test.strictEqual(gjet.get(bigObject, 'null'), undefined);
	test.strictEqual(gjet.get(bigObject, 'undefined'), undefined);

	test.done();
};

exports['get:defaults'] = function (test) {
	test.strictEqual(gjet.get(bigObject, 'null', null), null);
	test.strictEqual(gjet.get(bigObject, 'undefined', null), null);

	test.done();
};

exports['get:simple-get'] = function (test) {
	test.strictEqual(gjet.get(bigObject, 'a'), 1);
	test.strictEqual(gjet.get(bigObject, 'i:a'), 2);
	test.strictEqual(gjet.get(bigObject, 'i:g:a:a'), 123123);
	test.strictEqual(gjet.get(bigObject, 'i:g:a:c:0'), 123123);
	test.strictEqual(gjet.get(bigObject, 'i:g:a:c:2:a:1'), 234234);

	test.done();
};
