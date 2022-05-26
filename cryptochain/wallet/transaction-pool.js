const Transaction = require('./transaction');

class TransactionPool {
  constructor() {
    this.transactionMap = {};
  }


    clear() {
        this.transactionMap = {};
    }

    setTransaction(transaction) {
        this.transactionMap[transaction.id] = transaction;
    }
}
module.exports = TransactionPool;