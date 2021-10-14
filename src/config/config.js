require('dotenv').config();

module.exports = {
    development: {
        use_env_variable: 'DB_URL_DEV',
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        database: process.env.DB_DATABASE_DEV,
        host: process.env.DB_HOST_DEV,
        port: process.env.DB_PORT_DEV,
        dialect: 'postgres',
        dialectOptions: {},
        seederStorage: 'sequelize',
        seederStorageTableName: 'sequelize_data',
    },
    test: {
        use_env_variable: 'DB_URL_TEST',
        username: process.env.DB_USERNAME_TEST,
        password: process.env.DB_PASSWORD_TEST,
        database: process.env.DB_DATABASE_TEST,
        host: process.env.DB_HOST_TEST,
        port: process.env.DB_PORT_TEST,
        dialect: 'postgres',
        dialectOptions: {},
        seederStorage: 'sequelize',
        seederStorageTableName: 'sequelize_data',
    },
    production: {
        use_env_variable: 'DB_URL_PROD',
        username: process.env.DB_USERNAME_PROD,
        password: process.env.DB_PASSWORD_PROD,
        database: process.env.DB_DATABASE_PROD,
        host: process.env.DB_HOST_PROD,
        port: process.env.DB_PORT_PROD,
        dialectOptions: {},
        seederStorage: 'sequelize',
        seederStorageTableName: 'sequelize_data',
    }
};