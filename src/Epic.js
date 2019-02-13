/*******************************************
 * Epic
 * Logging module
 * @author   lannstark, jidan
 * @director jun
 *******************************************/

"use strict"


/**
 * Default settings
 */ 

const DEFAULT_SEVERITY = {
  "error": "error",
  "warning": "warn",
  "info": "log",
  "debug": "log",
  "verbose": "log"
}

const DEFAULT_APPENDER = "console"

const SUPPORTED_APPENDER = ["console"]
const SUPPORTED_STREAM = ["log", "warn", "error"]


/**
 * Epic class
 * @member {Object} _severities Object with key as severity level name and index as verbosity index
 * @member {Function[]} _transforms Array of transform functions that accepts an element and return data that should be logged
 */

class Epic {


  /**
   * constructor
   * @param {object} options
   */

  constructor(options) {
    const _options = typeof options === "undefined" ? {} : options
    this._severities = {}
    this._appender = ""

    // Set severities
    if (_options.hasOwnProperty("severity")) {
      for (let stream of Object.values(options["severity"])) {
        if (SUPPORTED_STREAM.includes(stream) == false) {
          throw "NOT SUPPORTED STREAM"
        }
      }
      this._severities = options["severity"]
    } else {
      this._severities = DEFAULT_SEVERITY 
    }

    // Set appender
    if (_options.hasOwnProperty("appender")) {
      this._appender = options["appender"]
    } else {
      this._appender = DEFAULT_APPENDER
    }

    this._setSeverities()
    this._setAppender()

    // Freeze this object
    Object.freeze(this)
  }


  /**
   * _setSeverities
   * Sets the severity level names and indexes from the given levels array
   * and creates logging functions for each level name with corresponding name
   * @params {String[]} levels Array of names for each severity level
   */

  _setSeverities() {
    // Create log functions corresponding to severity levels
    const severities = Object.keys(this._severities)
    const self = this
    severities.forEach((severity) => {
      
      /**
       * @param {String} msg
       * TODO  : Allow only string now, but be updated to allow others
       */

      this[severity] = function(msg) {
        // Add stacktrace
        const args = [severity, self._severities[severity], msg]
        self.log.apply(self, args)
      }
    })
  }


  /**
   * setAppender
   * Sets the appender
   */
  
  _setAppender() {
    // Create appender
    if (SUPPORTED_APPENDER.includes(this._appender) === false) {
      throw `Not supported Appender, ${this_appender}`
    }
    this["appender"] = require(`./appender/${this._appender}`)
  }


  /**
   * log
   * Connect the message to the formatter,
   * and pass the message to the appender
   * @param {String} severity
   * @param {String} stream
   * @param {String} msg
   */ 
  
  log(severity, stream, msg) {
    // TODO: formatting
    const message = msg
    this["appender"](stream, message)
  }


  /**
   * _getOrigin
   * Gets the file path and line number of where the log came from
   * @private
   */

  _getOrigin() {

  }


  /**
   * _transform
   * Applies all the transform functions to an element
   * @param {*} elem Any element to be transformed
   * @returns {*} The transformed element
   * @private
   */
  _transform(elem) {

  }

}


/**
 * Export module
 */ 

module.exports = Epic
