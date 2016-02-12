/**
 * @author Hudhaifa Shatnawi <hudhaifa.shatnawi@gmail.com>
 * @version 1.0 Apr 24, 2015 - 01:41:35 PM
 */

/**
 * This JS logger utility helps managing/customizing the print out mechanism of the log messages, the main 
 * reason I have developed this logger to enable debugging Javascrip on mobile devices - when you don't have 
 * Javascript Developer Tool in the handset, this logger will print out the log messages on the screen.
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
