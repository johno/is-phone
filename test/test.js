var assert = require('assert');
var isPhone = require('..');

describe('is-phone', function() {

  it('should return true with a phone number', function() {
    assert.ok(isPhone('(123) 456-7890'));
  });

  it('should return false without a phone number', function() {
    assert.ok(!isPhone('1234567'));
  });

  it('should return false without a phone number', function() {
    assert.ok(!isPhone('\n1234567890'));
  });


  it('should throw an error when a string is not passed', function() {
    assert.throws(isPhone, TypeError, "is-phoneexpects a string");
  });

  it('should return false when the phone number is not exact', function() {
    assert.ok(!isPhone('apples (123) 456 7890'));
  });

  it('should accept many phone number formats', function() {
    ['123 456 7890', '(123) 456 7890', '123-456-7890', '1234567890'].forEach(function(phone) {
      assert.ok(isPhone(phone));
    })
  });
});
