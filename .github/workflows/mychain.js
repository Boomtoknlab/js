import { defineChain } from "@thirdweb-dev/sdk";

const myChain = defineChain({
  id: 56,
  name: "Binance Smart Chain Virtual",
  rpc: ["https://virtual.binance.rpc.tenderly.co/add95b93-f1d4-4d71-a63d-0e89712c101d"],
  nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
  blockExplorers: [{ name: "BscScan", url: "https://bscscan.com" }],
});

export default myChain;
