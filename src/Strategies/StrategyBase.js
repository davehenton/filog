/**
 * @fileOverview Base Strategy.
 */

import NullSender from "../Senders/NullSender";

/**
 * StrategyBase is an "abstract" strategy.
 *
 * Strategies customize the active Sender instances for a given log event.
 *
 * @see SenderBase
 */
const StrategyBase = class {
  constructor(init = true) {
    if (init) {
      this.senders = [new NullSender()];
    }
  }

  /**
   * Select senders to use for a given log event.
   *
   * @param {int} level
   *   The log event level..
   * @param {string} message
   *   The log event string/template.
   * @param {object} context
   *   The context of the log event.
   *
   * @returns {function[]}
   *   An array of senders to use for this event.
   */
  selectSenders() {
    return this.senders;
  }

  /**
   * This method may modify the logger methods, e.g. to do nothing on debug.
   *
   * @param {Logger} logger
   *   A logger service to customize.
   *
   * @returns {void}
   */
  customizeLogger() {}
};

export default StrategyBase;
