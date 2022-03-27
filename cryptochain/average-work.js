const Blockchain = require('./blockchain');
const fs = require('fs');

const csvWriter = createCsvWriter({
    path: 'data.csv',
  });

const blockchain = new Blockchain();

blockchain.addBlock({ data: 'initial' });

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;

const times = [];
const difficulties = [];
const averages = [];
//const all = [];
for (let i = 0; i < 250; i++) {
    prevTimestamp = blockchain.chain[blockchain.chain.length-1].timestamp;

    blockchain.addBlock({data: `block ${i}`});
    nextBlock = blockchain.chain[blockchain.chain.length-1];

    nextTimestamp = nextBlock.timestamp;
    timeDiff = nextTimestamp - prevTimestamp;
    times.push(timeDiff);
    difficulties.push(nextBlock.difficulty);
    average = times.reduce((total, num) => (total + num))/times.length;
    averages.push(average);
    console.log(`Time to mine block: ${timeDiff}ms. Difficulty: ${nextBlock.difficulty}. Average time: ${average}ms.`)
}

//all.push(times,difficulties,averages);
//console.log(all);

class Data{
    constructor(times, difficulties,averages){
        this.times = times;
        this.difficulties = difficulties;
        this.averages = averages;
    }
}

let dataObj = new Data(times,difficulties,averages);
//console.log(dataObj);
let data = JSON.stringify(dataObj);
fs.writeFileSync('data.json', data);