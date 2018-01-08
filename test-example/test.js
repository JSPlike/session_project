var assert = require('assert');
describe('Strig#split', function(){
  it('should return and array', function(){
	assert(Array.isArray('a,b,c'.split(',')));
	});
  });
