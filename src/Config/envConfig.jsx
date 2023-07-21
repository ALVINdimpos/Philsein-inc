// config/envConfig.js
const ENV = process.env.NODE_ENV || 'development'

const config = {
  development: {
    API_KEY: 'YOUR_DEVELOPMENT_API_KEY',
    DEBUG_MODE: true,
  },
  production: {
    API_KEY: 'YOUR_PRODUCTION_API_KEY',
    DEBUG_MODE: false,
  },
}

export const AppConfig = config[ENV]

// Usage example:
// import { AppConfig } from '../config/envConfig';
// const apiKey = AppConfig.API_KEY;
// const isDebugMode = AppConfig.DEBUG_MODE;
