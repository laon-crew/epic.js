/*******************************************************************
 * console.js
 * This module appends log messages to console
 * @author   lannstark
 * @director jun
 *******************************************************************/


/**
 * consoleAppender
 * Print message with proper stream in console
 * @param {String} stream
 * @param {String} message
 */ 

function consoleAppender(stream, message) {
  console[stream](message)
}


/**
 * Export module
 */

module.exports = consoleAppender
