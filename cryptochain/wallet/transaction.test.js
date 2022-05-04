const { intFromLE } = require('elliptic/lib/elliptic/utils');
const Wallet = require('.');
const Transaction = require('./transaction');

describe('Transaction', ()=>{
    let transaction,senderWallet, recepient, amount;
    
    befoerEach(() => {
        senderWallet = new Wallet();
        recipient = 'recipient-public-key';
        amount = 50;
        transaction = new Transaction({senderWallet,recepient,amount});
    });

    it('has an `id`', ()=>{
        expect(transaction).toHaveProperty('id');
    });

    
});