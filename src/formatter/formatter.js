/*******************************************************************
 * Formatter.js
 * TODO Explain this module and fill in author
 * @director jun
 *******************************************************************/

"use strict"

class Formatter {

  constructor(config, order) {
    this.config = config
    this.order = order
    // TODO Do whatever needed
  }


  /**
   * This method must be called only one time right after Epic.js configuration is done
   * After build is called, user configuration cannot be changed
   */

  build() {
    // TODO Build format string here
  }


  /**
   * This method returns formatted log message using given user input
   */

  format(severity, message) {
    // TODO Using format string, generate final output format
  }


  /**
   * This method returns filename and line number
   */

  getLocation() {
    // TODO Implement this
  }

}
