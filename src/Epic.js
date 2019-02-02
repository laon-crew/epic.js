/**
 * Epic
 * Logging module
 */

const DEFAULT_SEVERITY_LEVELS = ["error", "warning", "info", "debug", "verbose"]


/**
 * Epic class
 * @member {Object} _severities Object with key as severity level name and index as verbosity index
 * @member {Function[]} _transforms Array of transform functions that accepts an element and return data that should be logged
 */

class Epic {
  constructor() {
    this._severities = {}
    this._transforms = []
    this.setSeverities(DEFAULT_SEVERITY_LEVELS)
  }


  /**
   * setSeverities
   * Sets the severity level names and indexes from the given levels array
   * and creates logging functions for each level name with corresponding name
   * @params {String[]} levels Array of names for each severity level
   */

  setSeverities(levels) {

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
