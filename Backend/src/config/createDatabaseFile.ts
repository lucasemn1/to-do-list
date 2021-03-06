import * as path from 'path';
import { writeFileSync } from 'fs';
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const databaseConfig = {
    development: {
        type: "sqlite",
        database: "src/database/database.sqlite",
        synchronize: true,
        logging: false,
        entities: [
            "src/app/entity/**/*.ts"
        ],
        migrations: [
            "src/database/migration/**/*.ts"
        ],
        subscribers: [
            "src/subscriber/**/*.ts"
        ],
        cli: {
            entitiesDir: "src/app/entity",
            migrationsDir: "src/database/migration",
            subscribersDir: "src/subscriber"
        }
    },

    production: {
        type: "postgres",
        url: process.env.DATABASE_URL,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
        synchronize: true,
        logging: true,
        entities: [
            "build/app/entity/**/*.js"
        ],
        migrations: [
            "build/database/migration/**/*.js"
        ],
        subscribers: [
            "build/subscriber/**/*.js"
        ],
        cli: {
            entitiesDir: "build/app/entity",
            migrationsDir: "build/database/migration",
            subscribersDir: "build/subscriber"
        }
    }
};

writeFileSync(
    path.resolve(
        __dirname,
        '..',
        '..',
        'ormconfig.json'
    ),
    JSON.stringify(databaseConfig[env])
);

console.log('OK');