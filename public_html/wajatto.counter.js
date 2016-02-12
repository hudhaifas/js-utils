/* 
 * The MIT License
 *
 * Copyright 2016 hshatnawi.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var wajatto = wajatto || {};
wajatto.util = wajatto.util || {};

/**
 * This JS utility implements the logic of the JQuery countdown class.
 * 
 * @param {Number} duration the countdown duration in millisecondes
 * @returns {wajatto.util.Counter} return Counter instance
 * 
 * @author Hudhaifa Shatnawi <hudhaifa.shatnawi@gmail.com>
 * @version 1.0 Jul 27, 2015 - 02:12:20 PM
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
