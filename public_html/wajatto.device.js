/**
 * @author Hudhaifa Shatnawi <hudhaifa.shatnawi@gmail.com>
 * @version 1.0 Apr 2, 2015 - 10:48:03 PM
 */

/**
 * This JS util helps detecting the current web client mechine - covers most of the target web clients.
 */
var DeviceUtil = {};

(function () {

    var ua = navigator.userAgent;

    // Android
    var $androidPhone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i;
    var $androidTablet = /Android/i;

    // Apple iOS
    var $iOSPhone = /iPhone/i;
    var $iOSPod = /iPod/i;
    var $iOSTablet = /iPad/i;

    // Browsers
    var $browserOpera = /Opera Mini/i;
    var $browserIE = /MSIE/i;
    var $browserEdge = /Edge/i;
    var $browserFirefox = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i;

    // Amazon Kindle
    var $kindlePhone = /Kindle|Silk|KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA|SD4930UR/i;

    // Microsoft Windows
    var $windowsPhone = /IEMobile/i;
    var $windowsTablet = /(?=.*\bWindows\b)(?=.*\bARM\b)/i;

    // BlackBerry
    var $blackberryPhone = /BlackBerry/i;
    var $blackberry10 = /BB10/i;
    var $blackberryTablet = /PlayBook/i;

    /**
     * Returns the device name
     * @returns the device name
     */
    DeviceUtil.getDevice = function () {
        if (DeviceUtil.androidDevice())
            return 'Android';

        if (DeviceUtil.blackberryDevice())
            return 'BlackBerry';

        if (DeviceUtil.kindleDevice())
            return 'Amazon Kindle';

        if (DeviceUtil.iOSDevice())
            return 'Apple iOS';

        if (DeviceUtil.windowsDevice())
            return 'Microsoft Windows';

        if (DeviceUtil.notMobile)
            return 'another';
    };

    /**
     * Returns true if the device is a mobile phone
     * @returns true if the device is a mobile phone
     */
    DeviceUtil.isMobile = function () {
        return (DeviceUtil.androidDevice() || DeviceUtil.blackberryDevice() || DeviceUtil.iOSDevice() || DeviceUtil.kindleDevice() || DeviceUtil.windowsDevice());
    };

    /**
     * Returns true if the device is a mobile phone
     * @returns true if the device is a mobile phone
     */
    DeviceUtil.isNotMobile = function () {
        return !DeviceUtil.isMobile();
    };

    // Android
    DeviceUtil.androidPhone = function () {
        return $androidPhone.test(ua);
    };
    DeviceUtil.androidTablet = function () {
        return  $androidTablet.test(ua);
    };
    DeviceUtil.androidDevice = function () {
        return (DeviceUtil.androidPhone() || DeviceUtil.androidTablet());
    };
    // BlackBerry
    DeviceUtil.blackberryPhone = function () {
        return  $blackberryPhone.test(ua);
    };
    DeviceUtil.blackberry10 = function () {
        return $blackberry10.test(ua);
    };
    DeviceUtil.blackberryTablet = function () {
        return $blackberryTablet.test(ua);
    };
    DeviceUtil.blackberryDevice = function () {
        return (DeviceUtil.blackberryPhone() || DeviceUtil.blackberry10() || DeviceUtil.blackberryTablet());
    };
    // Apple iOS
    DeviceUtil.iOSPhone = function () {
        return $iOSPhone.test(ua);
    };
    DeviceUtil.iOSPod = function () {
        return $iOSPod.test(ua);
    };
    DeviceUtil.iOSTablet = function () {
        return $iOSTablet.test(ua);
    };
    DeviceUtil.iOSDevice = function () {
        return (DeviceUtil.iOSPhone() || DeviceUtil.iOSPod() || DeviceUtil.iOSTablet());
    };
    // Amazon Kindle
    DeviceUtil.kindlePhone = function () {
        return $kindlePhone.test(ua);
    };
    DeviceUtil.kindleDevice = function () {
        return (DeviceUtil.kindlePhone());
    };
    // Microsoft Windows
    DeviceUtil.windowsPhone = function () {
        return $windowsPhone.test(ua);
    };
    DeviceUtil.windowsTablet = function () {
        return $windowsTablet.test(ua);
    };
    DeviceUtil.windowsDevice = function () {
        return (DeviceUtil.windowsPhone() || DeviceUtil.windowsTablet());
    };
    // Mobile Device
    DeviceUtil.mobileDevice = function () {
        return (DeviceUtil.androidDevice() || DeviceUtil.blackberryDevice() || DeviceUtil.iOSDevice() || DeviceUtil.kindleDevice() || DeviceUtil.windowsDevice());
    };
    DeviceUtil.notMobile = function () {
        return !DeviceUtil.mobileDevice();
    };
    DeviceUtil.browserOpera = function () {
        return $browserOpera.test(ua);
    };
    DeviceUtil.browserIE = function () {
        return $browserIE.test(ua);
    };
    DeviceUtil.browserEdge = function () {
        return $browserEdge.test(ua);
    };
    DeviceUtil.browserFirefox = function () {
        return $browserFirefox.test(ua);
    };
    DeviceUtil.browser = function () {
        return DeviceUtil.browserOpera() || DeviceUtil.browserIE() || DeviceUtil.browserEdge() || DeviceUtil.browserFirefox();
    };

})();