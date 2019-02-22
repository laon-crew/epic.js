# epic.js

Simple, fast, lightweight and epic logging module for node.js

## Chracteristics

- Users can customize format, appender, severity
- Epic.js uses different stream corresponding to severity
  - It helps that one of process manager modules, can `pm2` catch log properly

## Usage

### Basic usage

```javascript=
const epic = require("epic.js")
const log = new epic()

log.info("INFO!") // INFO with console.log
log.warn("WARN!") // WARN with console.warn
log.error("ERROR!") // ERROR with console.error
```

### Formatter Options
With Epic, you can create your own formatter of any format.
You can follow the rules below.
#### Order
What is order?
Order is 

Default order: ["date", "severity", "message"]
#### Date Format
What is date format?
Date format is 

year: "%y"
month: "%m"
date: "%d"
hours: "%H"
minutes: "%M"
seconds: "%S"
milliseconds: "%s"

Default date format: "%y-%m-%d %H:%M:%S:%s"

#### Separator
What is separator?
Separator is

Default separator: " "

#### Content Key
What is content key?
Content key is

Default

### Configuration customizing

```javascript=
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
    "order": ["message", "date", "severity"]

  },
}

const log = new epic(epicOption)

log.tiger("TIGER") // TIGER with console.log
log.lion("LION") // LION with console.error
```

## Branch Rule

prefix

- feature : implement new feature
- fix : modify existing feature
- doc : add/modify documentation

