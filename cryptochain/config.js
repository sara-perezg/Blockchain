const MINE_RATE = 1000; // one sec

const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: "-----",
    hash: 'hash1',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
}

module.exports = {GENESIS_DATA, MINE_RATE};