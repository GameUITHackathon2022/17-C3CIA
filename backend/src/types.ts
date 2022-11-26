import { initTRPC } from '@trpc/server';
export type TRPCBuilder = ReturnType<typeof initTRPC.create<{}>>;