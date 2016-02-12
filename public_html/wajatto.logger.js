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

/**
 * This JS logger utility helps managing/customizing the print out mechanism of the log messages, the main 
 * reason I have developed this logger to enable debugging Javascrip on mobile devices - when you don't have 
 * Javascript Developer Tool in the handset, this logger will print out the log messages on the screen.
 * 
 * @author Hudhaifa Shatnawi <hudhaifa.shatnawi@gmail.com>
 * @version 1.0 Apr 24, 2015 - 01:41:35 PM
 */
var Logger = Logger || {};

(function () {
    /**
     * Logger can be:
     * - ture; to use the system console.log()
     * - false; to stop showing log messages
     * - 'OnScreen'; to show the log messages on the screen, used to debug on mobile phones
     */
    Logger.LOGGER = false;

    /**
     * Prints the debug message on screen for mobile devices
     * 
     * @param {type} msg The log message
     */
    Logger.debug = function (msg) {
        if (Logger.LOGGER === true) {
            console.log(msg);

        } else if (Logger.LOGGER === 'OnScreen') {
            $debugger = $('body').find('#debug-onscreen');
            if (!$debugger.length) {
                $('body').append('<div id="debug-onscreen" class="debug-onscreen"></div>');
                $debugger = $('body').find('#debug-onscreen');
            }

            $debugger.append(msg + '<br />');
        }
    };

    /**
     * Changes the default error print to use the custom log method.
     * 
     * @see debug()
     */
    Logger.initJSDebug = function () {
        Logger.debug('JS Errors for page: ' + window.location.href);

        window.onerror = function (error, url, line) {
            Logger.debug(error + '\t || \t' + url + ':' + line);
        };
    };
})();
