/*jshint esversion: 8 */
const isDev = process.env.NODE_ENV !== 'production';

const logger = {
  debug: (...args) => {
    if (isDev) console.debug('[DEBUG]', ...args);
  },
  info: (...args) => {
    console.info('[INFO]', ...args);
  },
  warn: (...args) => {
    console.warn('[WARN]', ...args);
  },
  error: (...args) => {
    console.error('[ERROR]', ...args);
  },
};

export default logger;
