const cryptoHash = require('./cryptoHash');

describe('cryptoHash()', () => {
    // sha-256 of 'foo'
    const sha = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae';

    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('foo')).toEqual(sha);
    });

    it('produces the same has with the same input arguments in any order', () =>{
        expect(cryptoHash('one','two','three')).toEqual(cryptoHash('three','one','two'));
    });
    
});