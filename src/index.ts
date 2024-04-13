import { ponder } from "@/generated";

ponder.on("WrappedOne:Deposit", async ({ event, context }) => {
  const { Deposit } = context.db;
  await Deposit.create({
    id: event.transaction.hash,
    data: {
      account: event.args.dst,
      amount: event.args.wad,
    },
  });
});
