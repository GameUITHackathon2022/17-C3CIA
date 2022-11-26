export const TARGET = "https://backend-foodsave.badaimweeb.me/api";
// Public backend server to be used for PoC in contest time only. BYOS in the future!

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
