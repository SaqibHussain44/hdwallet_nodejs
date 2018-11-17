var bip39 = require('bip39')
var hdkey = require('hdkey')
var ethUtil = require('ethereumjs-util')

const mnemonic = bip39.generateMnemonic(); //generates string
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer

console.log("seed is: ", seed)
const root = hdkey.fromMasterSeed(seed);
const masterPrivateKey = root.privateKey.toString('hex')
const masterPublicKey = root.publicKey.toString('hex')
console.log("master private Key is: ", masterPrivateKey)
console.log("master public Key is: ", masterPublicKey)



