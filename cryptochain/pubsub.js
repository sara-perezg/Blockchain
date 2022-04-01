const PubNub = require('pubnub');
const {CREDENTIALS} = require('./credential')

const CHANNELS = {
    TEST: 'TEST'
};

class PubSub{
    constructor(){
        this.pubnub = new PubNub(CREDENTIALS);
        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
        this.pubnub.addListener(this.listener());
    };

    listener(){
        return {
            message: messageObject => {
                const { channel, message } = messageObject;
                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
            }
        };
    };

    publish({ channel, message }){
        this.pubnub.publish({ channel, message });
    }
}

const testPubSub = new PubSub();
testPubSub.publish({channel: CHANNELS.TEST, message: 'hello pubnub'});

module.exports = PubSub;