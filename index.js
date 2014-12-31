var phoneRegex = require('phone-regex');

module.exports = function(phone) {
  if(typeof phone !== 'string') {
    throw new TypeError('is-phone expects a string');
  }

  return phoneRegex({ exact: true }).test(phone);
};
