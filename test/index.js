/*
 * Module Dependancies
 */
var should = require('should');
var nd = require('../lib/index');

describe('nd', function() {
    describe('with no arguments', function() {
        it('should return an empty array', function() {
            var result = nd();
            result.should.eql([]);
        });
    });
});