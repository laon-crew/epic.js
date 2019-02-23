/*******************************************************************
 * Epic.js
 * Simple, fast, lightweight and epic logging module for node.js
 * TODO Fill in author who fix this file
 * @director jun
 *******************************************************************/

"use strict"

// TODO Configure module alias or set absolute path
const Order = require("@order-module")
const Config = require("@config-module")
const Formatter = require("@formatter-module")

class Epic {

  constructor() {
    this.order = new Order()
    this.config = new Config()
    this.formatter = new Formatter(this.order, this.config)
    // TODO Do whatever needed
  }


  /**
   * This method is the final configuration step to fix all configured values
   */

  build() {
    this.formatter.build()
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
