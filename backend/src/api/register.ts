import type { MongoClient } from 'mongodb';
import type { TRPCBuilder } from '../types';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { randomBytes } from 'node:crypto';

export default function register(database: MongoClient, t: TRPCBuilder) {
    return t.procedure
        .input(z.object({
            username: z.string(),
            password: z.string()
        }))
        .output(z.object({
            success: z.boolean(),
            token: z.ostring(),
            error: z.ostring()
        }))
        .query(async ({ input: { username, password } }) => {
            // Test if username is already taken (case insensitive, using collation)
            const user = await database.db('main').collection('users').findOne({
                username: username
            }, {
                collation: {
                    locale: 'en',
                    strength: 2
                }
            });

            if (user) {
                return {
                    success: false,
                    error: "Tài khoản đã tồn tại"
                };
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 12);

            // Insert user into database
            await database.db('main').collection('users').insertOne({
                username: username,
                password: hashedPassword
            });

            // Generate session token
            const token = randomBytes(32).toString('hex');

            // Insert session token into database
            await database.db('main').collection('sessions').insertOne({
                token: token,
                username: username
            });

            return {
                success: true,
                token: token
            };
        });
}
