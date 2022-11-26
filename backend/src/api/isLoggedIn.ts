import type { MongoClient } from 'mongodb';
import type { TRPCBuilder } from '../types';
import { z } from 'zod';

export default function template(database: MongoClient, t: TRPCBuilder) {
    return t.procedure
        .input(z.string())
        .output(z.object({
            loggedIn: z.boolean(),
            username: z.ostring()
        }))
        .query(async ({ input: token }) => {
            // Test if token exists
            const session = await database.db('main').collection('sessions').findOne({
                token: token
            });

            if (!session) {
                return {
                    loggedIn: false
                };
            }

            return {
                loggedIn: true,
                username: session.username
            };
        });
}
