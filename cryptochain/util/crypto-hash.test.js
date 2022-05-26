const cryptoHash = require('./cryptoHash');

describe('cryptoHash()', () => {
    // sha-256 of 'foo'
    const sha = 'b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b';

    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('foo')).toEqual(sha);
    });

    it('produces the same has with the same input arguments in any order', () =>{
        expect(cryptoHash('one','two','three')).toEqual(cryptoHash('three','one','two'));
    });
    
    it('produces a unique hash when the properties have changed on an input', () => {
        const foo = {};
        const originalHash = cryptoHash(foo);
        foo['a'] = 'a';
    
        expect(cryptoHash(foo)).not.toEqual(originalHash);
      });
});