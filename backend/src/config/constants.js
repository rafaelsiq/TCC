const devConfig = {
  MONGO_URL: 'mongodb://localhost/tccdatabase-dev',
  JWT_SECRET: 'jtw_secret_kn',
};
const testConfig = {
  MONGO_URL: 'mongodb://localhost/tccdatabase-test',
  JWT_SECRET: 'jtw_secret_kn',

};
const prodConfig = {
  MONGO_URL: 'mongodb://localhost/tccdatabase-prod',
  JWT_SECRET: 'jtw_secret_kn',
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
