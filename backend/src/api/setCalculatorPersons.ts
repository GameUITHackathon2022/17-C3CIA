import type { MongoClient } from 'mongodb';
import type { TRPCBuilder } from '../types';
import { z } from 'zod';

export default function setCalculatorPersons(database: MongoClient, t: TRPCBuilder) {
    return t.procedure
        .input(z.object({
            data: z.array(z.object({
                name: z.string(),
                year: z.number(),
                month: z.number(),
                day: z.number(),
                height: z.number(),
                weight: z.number(),
                gender: z.enum(["MALE", "FEMALE"])
            })),
            token: z.string()
        }))
        .output(
            z.object({
                success: z.boolean(),
                isLoggedIn: z.boolean(),
                error: z.ostring()
            })
        )
        .mutation(async ({ input: { data, token } }) => {
            // Test if session token is valid
            const session = await database.db('main').collection<{
                username: string,
                token: string
            }>('sessions').findOne({
                token: token
            });

            if (!session) {
                return {
                    success: false,
                    isLoggedIn: false,
                    error: 'Phiên đăng nhập không hợp lệ'
                };
            }

            // Replace existing data (if any)
            await database.db('main').collection('calculatorPersons').deleteMany({
                username: session.username
            });

            // Insert new data
            await database.db('main').collection('calculatorPersons').insertOne({
                username: session.username,
                data: data
            });

            return {
                success: true,
                isLoggedIn: true
            }
        });
}
