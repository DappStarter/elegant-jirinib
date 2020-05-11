require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth predict comic harvest infant flat genre'; 
let testAccounts = [
"0x6c275c722f1be75b30f2b324f53379e1d9aa61ca4ac7eea80444c7d30f6dcc47",
"0x0fe8a83db2326cb90b33d3d64443193737b08b5b7e2c69aa18d94fddc9b53606",
"0x9bd2f8ce7a309147a34d11112581dbe1e3e45c88bb77ee47c40d9ba34661744e",
"0x8f8be259edab945d5eeb149b7f9055a031f088017541e5d990ac31c48ddb70a2",
"0xd6ae7b0480cf9a2b71f870b1e1e453fb7ba093b86f4c358eb72d12c84a2eb58a",
"0x4ac1ded5dd40abc1dc53c54476c09d3be0a11e9420e6cdf1b7c4849b643b5c7e",
"0xc636cb9009aff7586e1274b2cb91e859108af5d21605a85c1de8568fbc981e6a",
"0xf02ca9637b36b6829d22b2e1f7bb080d6070bcdf1f8e7ffcd5cca470102c003f",
"0xde153567c15a8e76e1845bd8415252d10bb81de69d416130bba27764e142ac0f",
"0x3a6a9e4b5a189bead6ec811c13d3861af72a085f61f0e3d67abe07941e782204"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
