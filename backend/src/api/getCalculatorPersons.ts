import type { MongoClient } from 'mongodb';
import type { TRPCBuilder } from '../types';
import { z } from 'zod';

export default function getCalculatorPersons(database: MongoClient, t: TRPCBuilder) {
    return t.procedure
        .input(z.string())
        .output(
            z.object({
                success: z.boolean(),
                isLoggedIn: z.boolean(),
                error: z.ostring(),
                data: z.optional(z.array(z.object({
                    name: z.string(),
                    year: z.number(),
                    month: z.number(),
                    day: z.number(),
                    height: z.number(),
                    weight: z.number(),
                    gender: z.enum(["MALE", "FEMALE"])
                })))
            })
        )
        .query(async ({ input: token }) => {
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

            // Pull persons info from database
            const personsInfo = await database.db('main').collection<{
                username: string,
                data: {
                    name: string,
                    year: number,
                    month: number,
                    day: number,
                    height: number,
                    weight: number,
                    gender: "MALE" | "FEMALE"
                }[]
            }>('persons').findOne({
                username: session.username
            });

            if (!personsInfo) {
                return {
                    success: true,
                    isLoggedIn: true,
                    data: []
                }
            }

            return {
                success: true,
                isLoggedIn: true,
                data: personsInfo.data
            }
        });
}
