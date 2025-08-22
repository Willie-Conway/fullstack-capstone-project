/*jshint esversion: 8 */
const pino = require('pino');

let logger;

if (process.env.NODE_ENV !== 'production') {
  // In non-production environments, log to the console in pretty format
  logger = pino({
    level: 'debug',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'yyyy-mm-dd HH:MM:ss.l o',
      },
    },
  });
} else {
  // In production, plain JSON logging
  logger = pino({
    level: 'info',
  });
}

module.exports = logger;
