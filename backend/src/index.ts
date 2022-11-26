import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

import { z } from 'zod';
import express from 'express';

const t = initTRPC.create();

const appRouter = t.router({
    
});

export type AppRouter = typeof appRouter;

const app = express();
app.use("/api", trpcExpress.createExpressMiddleware({
    router: appRouter
}));
