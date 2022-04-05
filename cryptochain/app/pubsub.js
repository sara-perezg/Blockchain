const PubNub = require('pubnub');
const {CREDENTIALS} = require('../credential')

const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN'
};

class PubSub{
    constructor({ blockchain }){
        this.blockchain = blockchain;
        this.pubnub = new PubNub(CREDENTIALS);
        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
        this.pubnub.addListener(this.listener());

    };

    broadcastChain() {
        this.publish({
          channel: CHANNELS.BLOCKCHAIN,
          message: JSON.stringify(this.blockchain.chain)
        });
      }

    listener(){
        return {
            message: messageObject => {
                const { channel, message } = messageObject;
                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
                const parsedMessage = JSON.parse(message);

                switch(channel) {
                    case CHANNELS.BLOCKCHAIN:
                      this.blockchain.replaceChain(parsedMessage, true, () => {
                        this.transactionPool.clearBlockchainTransactions(
                          { chain: parsedMessage.chain }
                        );
                      });
                    default:
                        return;
                }
            }
        };
    };


    subscribeToChannels(){
        this.pubnub.subscribe({
            channels: [Object.values(CHANNELS)]
          });
    }

    publish({ channel, message }){
        this.pubnub.publish({ channel, message });
    }
}

module.exports = PubSub;