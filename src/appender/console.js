/*******************************************
 * Epic
 * Logging module
 * @author   lannstark
 * @director jun
 *******************************************/


/**
 * consoleAppender
 * Print message with proper stream in console
 */ 

function consoleAppender(stream, message) {
  if (stream === "log") {
    console.log(message)
  } else if (stream === "warn") {
    console.warn(message)
  } else if (stream === "error") {
    console.error(message)
  } else {
    throw `Wrong stream ${stream}`
  }
}


/**
 * Export module
 */

module.exports = consoleAppender
