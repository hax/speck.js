'use strict'


var fs = require('fs')
var yaml = require('js-yaml')

try {
	var vectors = yaml.safeLoad(fs.readFileSync(__dirname + '/vectors.yml', 'utf-8'))
} catch (e) {
	console.error('Failed to load test vectors:', e)
}

function words(s) {
	return s.split(/\s+/).map(function (x) { return parseInt(x, 16) })
}


var Speck = require('../src')
var assert = require('assert')

test('Speck32/64', function () {
	var v = vectors['Speck32/64']
	assert.deepEqual(
		words(v.Ciphertext),
		Speck['32/64'].encrypt(words(v.Plaintext), words(v.Key))
	)
})