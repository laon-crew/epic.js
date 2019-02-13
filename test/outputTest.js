const epic = require("../src/Epic.js")

const epicOption = {
  "appender" : "console",
  "severity" : {
    "tiger": "log",
    "lion" : "error"
  }
}

const log = new epic(epicOption)

log.tiger("TIGER!")
log.lion("LION~")
