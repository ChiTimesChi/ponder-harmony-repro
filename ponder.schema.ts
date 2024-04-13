import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Deposit: p.createTable({
    id: p.hex(),
    account: p.hex(),
    amount: p.bigint(),
  }),
}));
