/*******************************************
 * Util
 * Util module
 * @author   jeonha
 * @director jun
 *******************************************/


/**
 * Default settings
 */ 

const DEFAULT_DATE_KEY = "date"
const DEFAULT_SEVERITY_KEY = "severity"
const DEFAULT_MESSAGE_KEY = "message"
const DEFAULT_ORDER = []
const DEFAULT_DATE_INDEX = 0
const DEFAULT_SEVERITY_INDEX = 1
const DEFAULT_MESSAGE_INDEX = 2


/**
 * twoDigit
 * change one digit to a two-digit
 */

const twoDigit = (number) => {
  return ("0" + number).slice(-2)
}


/**
 * dateToString
 * change Date object to String
 */

exports.dateToString = (date, dateFormat) => {
  return dateFormat.replace("%y", (1900 + date.getYear()))
                   .replace("%m", twoDigit(date.getMonth() + 1))
                   .replace("%d", twoDigit(date.getDate()))
                   .replace("%H", twoDigit(date.getHours()))
                   .replace("%M", twoDigit(date.getMinutes()))
                   .replace("%S", twoDigit(date.getSeconds()))
                   .replace("%s", date.getMilliseconds())
}


/**
 * orderSetting
 * set formatter contents order
 */

exports.formatterOptionsSetting = (formatterOptions) => {
  let tempOrder = {}
  formatterOptions.order.forEach((value) => {
    switch (value) {
      case DEFAULT_DATE_KEY:
        tempOrder[formatterOptions.dateKey || DEFAULT_DATE_KEY] = DEFAULT_DATE_INDEX
        break
      case DEFAULT_SEVERITY_KEY:
        tempOrder[formatterOptions.severityKey || DEFAULT_SEVERITY_KEY] = DEFAULT_SEVERITY_INDEX
        break
      case DEFAULT_MESSAGE_KEY:
        tempOrder[formatterOptions.messageKey || DEFAULT_MESSAGE_KEY] = DEFAULT_MESSAGE_INDEX
        break
      default:
        break
    }
  })
  return tempOrder
}
