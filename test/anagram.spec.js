const getAnagram = require('../anagram');
const assert = require('assert');

const arraysMatch = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

	for (var i = 0; arr1.length < i; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
};

describe('anagrams generator', ()=> {
  it('should return expected values when the value is not present', () => {
    const anagrams = getAnagram('ABC');
    assert.equal(arraysMatch(anagrams, 
      [ 'A',
        'AB',
        'ABC',
        'AC',
        'ACB',
        'B',
        'BA',
        'BAC',
        'BC',
        'BCA',
        'C',
        'CA',
        'CAB',
        'CB',
        'CBA' 
      ]
    ));
  });
});
