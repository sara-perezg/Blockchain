const { GENESIS_DATA, MINE_RATE } = require("../config");
const cryptoHash = require("../util/cryptoHash");
const hexToBinary = require('hex-to-binary');

class Block{
    constructor({ timestamp, lastHash, hash, nonce, difficulty, data }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.data = data;
      }

      static genesis(){
          return new this(GENESIS_DATA);
      }

      static mineBlock({ lastBlock, data }){

        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({originalBlock: lastBlock, timestamp});
            hash = cryptoHash(timestamp,lastHash, data, nonce, difficulty);
        } while (hexToBinary(hash).substring(0,difficulty) !== '0'.repeat(difficulty));
    
        return new this({timestamp, lastHash, data, nonce, difficulty, hash });
      }

      static adjustDifficulty({ originalBlock, timestamp }){
          const { difficulty } = originalBlock;

          if (difficulty < 1) return 1;
          if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty-1;
          return difficulty+1;
      }
}

module.exports = Block;