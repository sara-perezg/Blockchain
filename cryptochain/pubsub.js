const PubNub = require('pubnub');

const credential = {
    publishKey: 'pub-c-02d03d24-56e1-4035-b220-f20f2defad38',
    subscibeKey: 'sub-c-9397f8fc-b1c6-11ec-ac48-7ec486788b75',
    secretKey: 'sec-c-NzcwODhmMTMtM2QzMC00NjQ4LTk2MmEtOGIwMDE5MDdhMTFi'
};

const CHANNELS = {
    TEST: 'TEST'
};

class PubSub{
    constructor(){
        this.pubnub = new PubNub(credential);
        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
        this.pubnub.addListener();
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

module.exports = PubSub;