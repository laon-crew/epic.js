/*******************************************************************
 * Epic.js
 * Simple, fast, lightweight and epic logging module for node.js
 * TODO Fill in author who fix this file
 * @director jun
 *******************************************************************/

"use strict"

// TODO Configure module alias or set absolute path
const Order = require("./component/Order")
const Config = require("./component/Config")
const Formatter = require("./formatter/Formatter")

class Epic {

  constructor() {
    this.order = new Order()
    this.config = new Config()
    this.formatter = new Formatter()
    // TODO Do whatever needed
  }


  /**
   * This method is the final configuration step to fix all configured values
   */

  build() {
    // Create Forammter
    this.formatter.build(this.order, this.config)

    // TODO Create custom log methods here
  }


  /**
   * Log methods
   */

  error(message) {
    console.error(message)
  }

  warn(message) {
    console.warn(message)
  }

  info(message) {
    console.info(message)
  }

  debug(message) {
    console.debug(message)
  }

}


/**
 * Export module
 */

module.exports = Epic
