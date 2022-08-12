import axios from 'axios';
import {NFTStorage, File} from 'nft.storage';


const apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERBNTQzZUE4NTBlQzQ5MEZEYjYwRGMzNzM4NkMyZDJhMTY5RTYzNjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTE3OTMxOTYxNCwibmFtZSI6Im5ld0tleSJ9.L939Un52xPfMeTA2F84RXfWYfq633QfdavdTVhECV_g';
    const client = new NFTStorage({token: apiKey});
    const uploadToIpfs = async (name, description,symbol, imgFile) => {
    const metadata = await client.store({
        name: name,
        description: description,
        image: new File([imgFile], imgFile.name, {type: imgFile.type}),
        symbol: symbol,
        decimals: 0,
        shouldPreferSymbol: false,
        isBooleanAmount: true,
        artifactUri: new File([imgFile], imgFile.name, {type: imgFile.type}),
        displayUri: new File([imgFile], imgFile.name, {type: imgFile.type}),
        thumbnailUri: new File([imgFile], imgFile.name, {type: imgFile.type}),
        creators: ['EASYMINT'],
    });
    return metadata.url;
    
};


export {uploadToIpfs};
