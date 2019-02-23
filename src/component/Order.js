/*******************************************************************
 * Order.js
 * TODO Explain this module and fill in author
 * @director jun
 *******************************************************************/

"use strict"

class Order {

  constructor() {
    this.order = null
    // TODO Do whatever needed
  }


  build() {
    if (this.order == null) {
      this.order = ["timestamp", "location", "severity", "message"]
    } else {
      // TODO finalize it
    }
  }


  /**
   * This method pushes timestamp to log order
   */

  setTimestamp() {
    if (this.order == null) {
      this.order = ["timestamp"]
    } else {
      this.order.push("timestamp")
    }
  }


  /**
   * This method pushes location to log order
   */

  setLocation() {
    if (this.order == null) {
      this.order = ["location"]
    } else {
      this.order.push("location")
    }
  }


  /**
   * This method pushes severity to log order
   */

  setSeverity() {
    if (this.order == null) {
      this.order = ["severity"]
    } else {
      this.order.push("severity")
    }
  }


  /**
   * This method pushes message to log order
   */

  setMessage() {
    if (this.order == null) {
      this.order = ["message"]
    } else {
      this.order.push("message")
    }
  }

}
