var bip39 = require('bip39')
var hdkey = require('hdkey')
var ethUtil = require('ethereumjs-util');

const mnemonic = bip39.generateMnemonic(); //generates string
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
const root = hdkey.fromMasterSeed(seed);
const masterPrivateKey = root.privateKey.toString('hex')

console.log("master private Key is: ", masterPrivateKey)

for(var i = 0; i <10; i++) {
    const addrNode = root.derive("m/44'/60'/0'/0/"+i); 
    const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
    const addr = ethUtil.publicToAddress(pubKey).toString('hex');
    const address = ethUtil.toChecksumAddress(addr);
    console.log("address ---- at index" + i + ":  "+ address + "\n")
}
