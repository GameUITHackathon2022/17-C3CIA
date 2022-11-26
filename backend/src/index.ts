import dotenv from 'dotenv';
dotenv.config();

import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

import { z } from 'zod';
import express from 'express';

const t = initTRPC.create();

// Database
import { MongoClient } from 'mongodb';
const database = new MongoClient(process.env.MONGODB_ENDPOINT ?? "");

// API
import register from './api/register';
import isLoggedIn from './api/isLoggedIn';
import login from './api/login';

const appRouter = t.router({
    register: register(database, t),
    isLoggedIn: isLoggedIn(database, t),
    login: login(database, t)
});

export type AppRouter = typeof appRouter;

const app = express();
app.use("/api", trpcExpress.createExpressMiddleware({
    router: appRouter
}));
