import { ethers } from "ethers";

async function main() {
    const provider = ethers.getDefaultProvider("http://localhost:8545");
    const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
    const PRIVITE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const wallet = new ethers.Wallet(PRIVITE_KEY, provider);

    let blockNum = await provider.getBlockNumber();
    let balance = await provider.getBalance(address);
    let nance = await wallet.getTransactionCount();

    let tx = {
        to: "0x88545E21749bfb701c8aF84fe215169351b20011",
        value: ethers.utils.parseEther("100"),
        nonce: nance,
    };

    let txRes = await wallet.sendTransaction(tx);
    let txReceipt = await txRes.wait(0);


    console.log(blockNum, ethers.utils.formatEther(balance));
    console.log(wallet.address);
    console.log(txReceipt);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });