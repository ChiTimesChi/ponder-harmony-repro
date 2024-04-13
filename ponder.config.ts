import { createConfig } from "@ponder/core";
import { http } from "viem";

import { wOneAbi } from "./abis/wOneAbi";

export default createConfig({
  networks: {
    harmony: {
      chainId: 1666600000,
      transport: http(process.env.PONDER_RPC_URL_1666600000),
      maxRequestsPerSecond: 5,
    },
  },
  contracts: {
    WrappedOne: {
      network: "harmony",
      abi: wOneAbi,
      address: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
      // 2024-04-12
      startBlock: 56100000,
      maxBlockRange: 1000,
    },
  },
});
