var assert = require('assert');
var isPhone = require('..');

describe('is-phone', function() {
  it('should return true with a phone number', function() {
    assert.ok(isPhone('(123) 456-7890'));
  });

  it('should return false without a phone number', function() {
    assert.ok(!isPhone('1234567'));
  });

  it('should throw an error when a string is not passed', function() {
    assert.throws(isPhone, TypeError, "is-phoneexpects a string");
  });
});
