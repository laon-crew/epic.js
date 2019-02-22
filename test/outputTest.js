const epic = require("../src/Epic.js")

const epicOption = {
  "appender" : "console",
  "severity" : {
    "tiger": "log",
    "lion" : "error"
  },
  "formatterOptions" : {
    "dateKey": "WHEN?",
    "messageKey": "WHAT?",
    "severityKey": "IMPORTANT??",
    "dateFormat": "year:%y, month:%m, date:%d %H:%M:%S",
    "separator": " / ",
    "order": ["message", "date"]

  },
}

const log = new epic(epicOption)

log.tiger("TIGER!")
log.lion("LION~")
