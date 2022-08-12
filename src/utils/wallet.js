import { TezosToolkit, MichelsonMap, OpKind } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { bytes2Char, char2Bytes } from '@taquito/utils';
import axios from 'axios';



export const NAME = 'Tutorial';
export const CONTRACT_ADDRESS = 'KT1XSqpRQUqubwJwdjRFduYwKa3vXAqBssxU';
export const NETWORK = 'jakartanet';



const tezos = new TezosToolkit("https://jakartanet.smartpy.io")

const wallet = new BeaconWallet({
    name: "tezosNFT",
    preferredNetwork: "jakartanet",

})

const connectWallet = async () => {
    await wallet.requestPermissions({ network: { type: "jakartanet" } })
};

tezos.setWalletProvider(wallet);

const getContractdetails = async () => {
    const contract = await tezos.wallet.at("KT1XSqpRQUqubwJwdjRFduYwKa3vXAqBssxU")
    return contract;
}


const disconnectWallet = async () => {
    await wallet.clearActiveAccount();
};

const getPKH = async () => {
    const pkh = await wallet.client.getActiveAccount();
    if (pkh) {
        return pkh.address;
    }
    else { return '' }
};

const mulmintNFT = async (address, urlobj) => {
    try {
        await disconnectWallet();
        await connectWallet();
        var obj = []
        const amount = 1;
        let url
        const contract = await getContractdetails();
        const token_id = await getNFTs();

        for (var i = 0; i < urlobj.length; i++) {
            url = char2Bytes(urlobj[i].toString());
            console.log(url)
            const op = contract.methods.mint(address, amount, MichelsonMap.fromLiteral({ "": url }), token_id.length + i).toTransferParams();
            op.kind = OpKind.TRANSACTION;
            obj[i] = op
        }
        console.log(obj)
        const batch = await tezos.wallet.batch(obj);
        const operation = await batch.send();
        return await operation.receipt;

    } catch (err) {
        console.log(err)
    }

};

const mintNFT = async (address, urlobj) => {
    try {

        const amount = 1;
        const token_id = await getNFTs();
        const contract = await getContractdetails();
        const url = char2Bytes(urlobj)
        const op = await contract.methods.mint(address, amount, MichelsonMap.fromLiteral({ "": url }), token_id.length).send();
        return await op.confirmation(3);

    } catch (err) {
        console.log(err)
    }

};

const getNFTs = async () => {
    const response = await axios.get(
        `https://api.jakartanet.tzkt.io/v1/contracts/${CONTRACT_ADDRESS}/bigmaps/token_metadata/keys`
    );
    const data = response.data;
    let tokens = [];
    for (let i = 0; i < data.length; i++) {
        let url = data[i].value.token_info[''];
        if (url) {
            url = bytes2Char(url);
        }
        const token = {
            token_id: data[i].value.token_id,
            url,
        };
        tokens.push(token);
    }
    return tokens;
};

export { connectWallet, disconnectWallet, getPKH, getContractdetails, mintNFT, getNFTs, mulmintNFT };
