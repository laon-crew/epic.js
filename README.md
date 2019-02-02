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

### Configuration customizing

```javascript=
const epic = require("../src/Epic.js")

const epicOption = {
  "appender" : "console",
  "severity" : {
    "tiger": "log",
    "lion" : "error"
  }
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

