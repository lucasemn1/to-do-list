import  * as path from 'path';
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
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "test",
        synchronize: true,
        logging: true,
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