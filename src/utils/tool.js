/**
 *
 * created by yanglei on 2018/4/13
 *
 */


/**
 *
 * @param num
 * @param dd
 * @returns {number}
 */
const numToFixed = (num, dd = 2) => {
    return num.toFixed(dd);
};

/**
 * 获取url 地址中的参数
 * @returns {Object}
 */
const getUrlParams = () => {
    let url = window.location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

/**
 * 时间格式化
 * @param date
 * @param format
 * @returns {*}
 */
const dateFormat = (date, format) => {

    let _str = "";
    if (!date) {
        return ""
    }
    if (typeof date === "string") {
        _str = date.replace(/\-/g, "/");
    } else {
        _str = date.getTime();
    }


    console.log("str----->", _str)
    const _date = new Date(_str);

    function formatFn(format) {
        var o = {
            "M+": _date.getMonth() + 1, //month
            "d+": _date.getDate(), //day
            "h+": _date.getHours() % 12, // 12小时制 hour
            "H+": _date.getHours(), //24 小时制 hour
            "m+": _date.getMinutes(), //minute
            "s+": _date.getSeconds(), //second
            "q+": Math.floor((_date.getMonth() + 3) / 3), //quarter
            "S": _date.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (_date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    }

    return formatFn(format)
}


export {
    numToFixed,
    getUrlParams,
    dateFormat
}