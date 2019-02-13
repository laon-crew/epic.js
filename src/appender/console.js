/*******************************************
 * Epic
 * Logging module
 * @author   lannstark
 * @director jun
 *******************************************/


/**
 * consoleAppender
 * @param {String} stream
 * @param {String} message
 * Print message with proper stream in console
 */ 

function consoleAppender(stream, message) {
  console[stream](message)
}


/**
 * Export module
 */

module.exports = consoleAppender
