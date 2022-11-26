import type { MongoClient } from 'mongodb';
import type { TRPCBuilder } from '../types';
import { z } from 'zod';

export default function template(database: MongoClient, t: TRPCBuilder) {
    return t.procedure
        .input(z.never())
        .output(z.void())
        .query(async ({ input }) => {
            
        });
}
