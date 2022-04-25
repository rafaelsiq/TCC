const devConfig = {
    MONGO_URL: 'mongodb://localhost:27017/tccdatabase-dev',
    JWT_SECRET: 'dev_secret_key_%$$#8asd!44jn',
};
const testConfig = {
    MONGO_URL: 'mongodb://localhost:27017/tccdatabase-test',
    JWT_SECRET: 'test_secret_key_%$$#8asd!44jn',
};
const prodConfig = {
    MONGO_URL: 'mongodb://localhost:27017/tccdatabase-prod',
    JWT_SECRET: 'prod_secret_key_%$$#8asd!44jn',
};
const defaultConfig = {
    PORT: process.env.PORT || 3000,
};
function envConfig(env) {
    switch (env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig;
        default:
            return prodConfig;
    }
}
export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV),
};