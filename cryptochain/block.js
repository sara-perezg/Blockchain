const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./cryptoHash");

class Block{
    constructor({ timestamp, lastHash, hash, data }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
      }

      static genesis(){
          return new this(GENESIS_DATA);
      }

      static mineBlock({lastBlock,data}){
        const timestamp =  Date.now();
        const lastHash = lastBlock.hash;
        const hash = cryptoHash(timestamp,lastHash,data);

        return new this({
            timestamp,
            lastHash,
            data,
            hash 
        });
      }
}

module.exports = Block;