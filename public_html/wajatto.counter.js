/**
 * @author Hudhaifa Shatnawi <hudhaifa.shatnawi@gmail.com>
 * @version 1.0 Jul 27, 2015 - 02:12:20 PM
 */


var wajatto = wajatto || {};
wajatto.util = wajatto.util || {};

/**
 * This JS utility implements the logic of the JQuery countdown class.
 * 
 * @param {Number} duration the countdown duration in millisecondes
 * @returns {wajatto.util.Counter} return Counter instance
 */
wajatto.util.Counter = function (duration) {
    this.duration = duration;

    /**
     * Cancels the current counter
     */
    this.cancel = function () {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
    };

    /**
     * Starts counting down
     * @param {Function} callback this function will be called every tick
     */
    this.count = function (callback) {
        // cancel the previous counter
        this.cancel();

        this.timeout = setTimeout(function () {
            callback();
        }, this.duration);
    };

};
