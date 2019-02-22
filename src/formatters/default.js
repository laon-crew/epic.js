/*******************************************
 * Epic
 * Default formatter module
 * @author   jeonha
 * @director jun
 *******************************************/

'use strict'


/**
 * import Utils
 */

const utils = require("../Utils")


const DEFAULT_DATE_FORMAT = "%y-%m-%d %H:%M:%S:%s"
const DEFAULT_SEPARATOR = " "
const DEFAULT_DATE_INDEX = 0
const DEFAULT_SEVERITY_INDEX = 1
const DEFAULT_MESSAGE_INDEX = 2


/**
 * Export module
 */

module.exports = (options, severity, date, msg) => {
  const obj = {}
  const dateFormat = options.dateFormat || DEFAULT_DATE_FORMAT
  const separator = options.separator || DEFAULT_SEPARATOR
  
  for (let key in options.order) {
    switch (options.order[key]) {
      case DEFAULT_DATE_INDEX:
        obj[key] = utils.dateToString(date, dateFormat)
        break
      case DEFAULT_SEVERITY_INDEX:
        obj[key] = severity
        break
      case DEFAULT_MESSAGE_INDEX:
        obj[key] = msg
        break
      default:
        break
    }
  }

  // Construct message
  let message = ""
  for (let key in obj) {
    message += key + ": "+ obj[key] + separator
  }
  return message
}
