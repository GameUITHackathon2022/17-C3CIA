export const TARGET = "http://localhost:3000/trpc";

import { createTRPCProxyClient, createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../backend/src/index';

import { httpBatchLink } from '@trpc/client';

export const trpcReact = createTRPCReact<AppRouter>();
export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: TARGET,
        })
    ]
});
