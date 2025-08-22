// src/logger.js
/* jshint esversion: 8 */

/**
 * Simple frontend logger for React or any browser JS.
 * This logger works entirely in the browser console.
 * No Node.js modules are used, so it's compatible with CRA and Vite.
 */

const logger = {
  /**
   * General log
   * @param  {...any} args
   */
  log: (...args) => {
    console.log(...args);
  },

  /**
   * Info level
   * @param  {...any} args
   */
  info: (...args) => {
    console.info('[INFO]', ...args);
  },

  /**
   * Warning level
   * @param  {...any} args
   */
  warn: (...args) => {
    console.warn('[WARN]', ...args);
  },

  /**
   * Error level
   * @param  {...any} args
   */
  error: (...args) => {
    console.error('[ERROR]', ...args);
  },
};

export default logger;
