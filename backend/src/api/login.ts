import type { MongoClient } from 'mongodb';
import type { TRPCBuilder } from '../types';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { randomBytes } from 'node:crypto';

export default function login(database: MongoClient, t: TRPCBuilder) {
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
            // Test if username exists (case insensitive, using collation)
            const user = await database.db('main').collection('users').findOne({
                username: username
            }, {
                collation: {
                    locale: 'en',
                    strength: 2
                }
            });

            if (!user) {
                return {
                    success: false,
                    error: "Tài khoản không tồn tại"
                };
            }

            // Test if password is correct
            const passwordCorrect = await bcrypt.compare(password, user.password);

            if (!passwordCorrect) {
                return {
                    success: false,
                    error: 'Incorrect password'
                };
            }

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
