require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn purpose hover kite bone shop'; 
let testAccounts = [
"0xf645d1737b5fa848d1c73ed81c1ee5b81223e33f7244ef46358254944fcb8c01",
"0x664342a5afd6db4335a621ea210138680e3591b9d8b17109a422a2723816f88a",
"0x74115cf5e8625d55f3edea4ca7fdf08db83c51c9b09779039ad2a187d1090535",
"0x0df9c8f2f9502ff8df1a0dd9412de3e7b17b1c82117715f1e1221189eb3dd376",
"0x7e0b51307d8ef2af66c335f5c7b0b45476a33cc6c7ed0d4448bd6364bb9c8e21",
"0x6b1ec81f27bb7dfefeaed76acaa718478a4a71b46b211af13efcd234b8ed788d",
"0x29132564872cc969f3e29d7493747b907e418a236cab133243052b1809decd8d",
"0x449ede718ec95139905fd240cc97665bd7c73cf303ab6a45885ac5593aeb7dc9",
"0x8f5c2e73e12b2f3d2fe3b94ff1216f8bfc9017bd46f998287fdbd6689c8f5afe",
"0xc1cd54cfc83e6e8cc45a9c90a53d83a2e2e99fb8d22519c22fe892cca675baf2"
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
            version: '^0.8.0'
        }
    }
};

