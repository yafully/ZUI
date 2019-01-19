if (!Date.now) { Date.now = function() { return new Date().valueOf(); } }//ItIE8 bug
//object keys
if (!Object.keys) {
  Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}


$.getRegexForTag = function(tag, contents){
	tag = tag || '';
	var regstr = contents ? "<" + tag + "(?!\\w)[^>]*>([\\s\\S]*?)<\/" + tag + "(?!\\w)>" : "<\/?" + tag + "([^>]+)?>",
		reg = new RegExp(regstr, "gi");
	return reg;	
};
$.date = function (date) {
    return !date ? new Date() : new Date(date.replace(/-/g, "\/"));
};
//获取日期差
$.diffDate = function (startTime, endTime, diffType) {
	var timet = { day: 86400000, hour: 3600000, minute: 60000, seconds: 1000 };
	if (typeof startTime == "string")
		startTime = $.date(startTime);
	if (typeof endTime == "string")
		endTime = $.date(endTime);
	diffType = diffType || "day";
	return parseInt((endTime.getTime() - startTime.getTime()) / parseInt(timet[diffType]));
};

/*
ASDUI.GUID.Fn
*/
$.GUID = function () {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});		
}
$.fireEvent = function(fn,arg){
	if(!$.isFunction(fn)) return;
	var args = $.isArray(arg) ? arg : [].push(arg);
	return arg ? fn.apply(this,args) : fn.call(this);
}

$.support = $.support || {};
/*CSS3 animation detect*/
$.support.ani = 'WebkitAnimation' in document.documentElement.style ||'MozAnimation' in document.documentElement.style ||'msAnimation' in document.documentElement.style ||'OAnimation' in document.documentElement.style || 'animation' in document.documentElement.style;
/*CSS3 animation end Evt detect*/
$.support.whichTransitionEvent = function(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
$.support.transEvt = $.support.whichTransitionEvent();
/*Canvas detect*/
$.support.canvas = function() {
   return !!document.createElement("canvas").getContext;
};
//preload Imgs
$.imgpreload = function (imgs,settings){
	settings = $.extend({},$.fn.imgpreload.defaults,(settings instanceof Function)?{all:settings}:settings);
	// use of typeof required
	if ('string' == typeof imgs) { imgs = new Array(imgs); }
	var loaded = new Array();
	$.each(imgs,function(i,elem){
		var img = new Image();

		var url = elem;

		var img_obj = img;

		if ('string' != typeof elem){
			url = $(elem).attr('src') || $(elem).css('background-image').replace(/^url\((?:"|')?(.*)(?:'|")?\)$/mg, "$1");
			img_obj = elem;
		}

		$(img).bind('load error', function(e){
			loaded.push(img_obj);

			$.data(img_obj, 'loaded', ('error'==e.type)?false:true);
			
			if (settings.each instanceof Function) { 
				$.fireEvent(settings.each, [url,imgs]); 
			}

			if (loaded.length>=imgs.length && settings.all instanceof Function) {
				$.fireEvent(settings.all, [loaded,imgs]); 
			}

			$(this).unbind('load error');
		});

		img.src = url;
	});
};
/*异步缓存*/
$.createCache = function( requestFunction ) { 
	var cache = {}; 
	return function( key, callback ) { 
		if ( !cache[ key ] ) { 
			cache[ key ] = $.Deferred(function( defer ) { 
				requestFunction( defer, key ); 
			}).promise(); 
		} 
	return cache[ key ].done( callback ); 
	}; 
}
//请求js
$.cachedGetScript = $.createCache(function( defer, url ) { 
	$.getScript(url).then( defer.resolve, defer.reject ); 
});
//后domredy
var readyTime; 
$(function(){ 
	readyTime = jQuery.now();
}); 
$.afterDOMReady = $.createCache(function( defer, delay ) { 
	delay = delay || 0; 
	$(function() { 
		var delta = $.now() - readyTime; 
		if ( delta >= delay ) { 
			defer.resolve(); 
		}else { 
			setTimeout( defer.resolve, delay - delta ); 
		} 
	}); 
});

// ###################################url操作相关函数###################################
$.url = $.url || {};
/**
 * 根据参数名从目标URL中获取参数值
 * 
 * @name jQuery.url.getQueryValue
 * @function
 * @grammar $.url.getQueryValue('http://user:password@www.test.com:8383/the/path.html?query=value&page=12','page');
 * @param {string}
 *            url 目标URL
 * @param {string}
 *            key 要获取的参数名
 * @meta standard
 * @see jQuery.url.jsonToQuery
 * 
 * @returns {string|null} - 获取的参数值，其中URI编码后的字符不会被解码，获取不到时返回null
 */
$.url.getQueryValue = function(url, key) {
	var reg = new RegExp("(^|&|\\?|#)" + key.escapeReg()
			+ "=([^&#]*)(&|\x24|#)", "");
	var match = url.match(reg);
	if (match) {
		return match[2];
	}

	return null;
};
/**
 * 解析目标URL中的参数成json对象
 * 
 * @name jQuery.url.queryToJson
 * @function
 * @grammar jQuery.url.queryToJson(url)
 * @param {string}
 *            url 目标URL
 * @see jQuery.url.jsonToQuery
 * 
 * @returns {Object} - 解析为结果对象，其中URI编码后的字符不会被解码，'a=%20' ==> {a:'%20'}。
 */
$.url.queryToJson = function(url) {
	var query = url.substr(url.lastIndexOf('?') + 1), params = query.split('&'), len = params.length, result = {}, i = 0, key, value, item, param;

	for (; i < len; i++) {
		if (!params[i]) {
			continue;
		}
		param = params[i].split('=');
		key = param[0];
		value = param[1];

		item = result[key];
		if ('undefined' == typeof item) {
			result[key] = value;
		} else if ($.isArray(item)) {
			item.push(value);
		} else { // 这里只可能是string了
			result[key] = [ item, value ];
		}
	}

	return result;
};
/*
 * source   : commen Extend
 * Version  : beta 1.0
 * depends  : Jquery 1.9.1+
 *
 * Author   : YafullyZhao
 * create   : 2015/01/21
 *
 * message  :
**/
(function($){
	/*基本对象顶层扩展*/
    Function.prototype.fn = function (name, fun) {
        if (!this.prototype[name]) {
            this.prototype[name] = fun;
        }
        return this;
    }
	/*======String======*/
	/**
	 * 将目标字符串中可能会影响正则表达式构造的字符串进行转义。
	 * 
	 * @name jQuery.string.escapeReg
	 * @function
	 * @grammar jQuery.string.escapeReg(source)
	 * @param {string}
	 *            source 目标字符串
	 * @remark 给以下字符前加上"\"进行转义：.*+?^=!:${}()|[]/\
	 * @meta standard
	 * 
	 * @returns {string} 转义后的字符串
	 */
	String.fn("escapeReg", function (){	
		return String(this).replace(
				new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
	});
	//替换所有
	String.fn("replaceAll", function (s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2);
    });
	//对目标字符串进行html解码
	String.fn("decodeHTML", function(){
		var str = String(this).replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, "&");
		// 处理转义的中文和实体字符
		return str.replace(/&#([\d]+);/g, function(_0, _1) {
			return String.fromCharCode(parseInt(_1, 10));
		});	
	});
	//对目标字符串进行html编码
	String.fn("encodeHTML", function(){
		return String(this).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, "&quot;").replace(/'/g, "&#39;");
	});
	//将目标字符串中常见全角字符转换成半角字符
	String.fn("toHalfWidth", function(){
		return String(this).replace(/[\uFF01-\uFF5E]/g, function(c) {
			return String.fromCharCode(c.charCodeAt(0) - 65248);
		}).replace(/\u3000/g, " ");
	});
    // 从左截取指定长度的字串 
    String.fn("left", function (n) {
        return this.slice(0, n);
    });
    // 从右截取指定长度的字串 
    String.fn("right", function (n) {
        return this.slice(this.length - n);
    });
	//获取标签
	String.fn("getTags", function (tag, contents) {
		return this.match($.getRegexForTag(tag, contents)) || [];
	});
	//去除标签
	String.fn("stripTags", function (tag, contents) {
		return this.replace($.getRegexForTag(tag, contents), '');
	});
	/*======Array======*/
 	//判断一个数组中是否包含给定元素
	Array.fn("contains", function (obj) {
		return ($.inArray(obj,this) >= 0);
	});
	/**
	 * 从数组中寻找符合条件的第一个元素
	 * @param {Array}
	 *            source 需要查找的数组
	 * @param {Function}
	 *            iterator 对每个数组元素进行查找的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function
	 *            (item, index)，函数需要返回true或false
	 * @see jQuery.array.filter,jQuery.array.indexOf
	 * 
	 * @returns {Any|null} 符合条件的第一个元素，找不到时返回null
	 */
	Array.fn("pick", function (iterator) {
		var item, i, len = this.length;
		if ('function' == typeof iterator) {
			for (i = 0; i < len; i++) {
				item = this[i];
				if (true === iterator.call(this, item, i))return item;
			}
		}
		return null;
	});
	
	/**
	 * 查询数组中指定元素的索引位置
	 * 
	 * @function
	 * @param {Array}
	 *            source 需要查询的数组
	 * @param {Any}
	 *            match 查询项
	 * @param {number}
	 *            [fromIndex] 查询的起始位索引位置，如果为负数，则从source.length+fromIndex往后开始查找
	 * 
	 * @returns {number} 指定元素的索引位置，查询不到时返回-1
	 */
	Array.fn("indexOf", function (match, fromIndex) {
		return $.inArray(match,this,fromIndex);
	});
	/**
	 * 从后往前，查询数组中指定元素的索引位置
	 * 
	 * @function
	 * @param {Array}
	 *            source 需要查询的数组
	 * @param {Any}
	 *            match 查询项
	 * @param {number}
	 *            [fromIndex] 查询的起始位索引位置，如果为负数，则从source.length+fromIndex往前开始查找
	 * 
	 * @returns {number} 指定元素的索引位置，查询不到时返回-1
	 */
	Array.fn("lastIndexOf", function (match, fromIndex) {
	 	var len = this.length;
		fromIndex = fromIndex | 0;
		if (!fromIndex || fromIndex >= len) {
			fromIndex = len - 1;
		}
		if (fromIndex < 0) {
			fromIndex += len;
		}
		for (; fromIndex >= 0; fromIndex--) {
			if (fromIndex in this && this[fromIndex] === match) {
				return fromIndex;
			}
		}
		return -1;
	});
	//删除数组项
	Array.fn("remove", function (match) {
		if(!match){
			this.splice(0, this.length);
		}else{
			var len = this.length;
			
			while (len--) {
				if (len in this && this[len] === match) {
					this.splice(len, 1);
				}
			}
		}
		return this;		
	});
	//根据索引删除数组项
	Array.fn("removeAt", function (from, to) {
		var rest = this.slice((to || from) + 1 || this.length);
		this.length = from < 0 ? this.length + from : from;
		this.push.apply(this, rest);
		return this;	
	});
	//在指定位置插入项
    Array.fn("insert", function (index, item) {
		if(index < 0) index = 0;
		if(index > this.length) index = this.length;
		this.length++;
		for(var i = this.length - 1; i > index; i--) {
			this[i] = this[i - 1];
		}
		this[index] = item;
		return this;
    });
	//在指定位置插入数组
	Array.fn("insertArrayAt", function (index, arrayToInsert) {
		Array.prototype.splice.apply(this, [index, 0].concat(arrayToInsert));
    	return this;
    });
	
	//向对象数组push一个元素，如果它在数组中不存在,大小写敏感
	Array.fn("include", function (item) {
		if (!this.contains(item)) this.push(item);
		return this;
	});
	//联合2个数组且去掉重复项
	Array.fn("combine", function (array) {
		for (var i = 0, l = array.length; i < l; i++) this.include(array[i]);
		return this;
	});
	//过滤数组中的相同项。如果两个元素相同，会删除后一个元素
	Array.fn("unique", function () {
		return [].combine(this);
	});
	//返回2个数组的交集
	Array.fn("intersect", function (other) {
		var cpy = this.slice();
		$.each(this,function(i,el) {
			if (other.indexOf(el) < 0)cpy.splice(cpy.indexOf(el), 1);
		});
		return cpy;	
	});
	//返回2个数组的差集
	Array.fn("differentiate", function (other) {
		var src = this.slice();
			var cmp = other.slice();
			$.each(other,function(i,el) {
				if (src.indexOf(el) > -1) {
					src.splice(src.indexOf(el), 1);
					cmp.splice(cmp.indexOf(el), 1);
				}
			});
		return src.combine(cmp);
	});

	//随机打乱数
	Array.fn("shuffle", function () {
		return this.sort(function (x,y) { return Math.floor(Math.random()*3)-1; });
	});
	
	Array.fn("pluck", function (key) {
		return $.map(this, function(e) { 
			var arr;
			arr = e.nodeName ? e.getAttribute(key) : e[key];
			return arr; 
		}) 
	});
	
	//仿Linq条件查询
	//item	Object	当前回调返回的数组第index个元素
	//index	Int	可选参数,当前回调返的数组的索引
	//stooges.where(function(item,index){return item.name=="larry"})
	Array.fn("where", function (clause) {
		if (!clause)return;
		var len = this.length, newArray = [];
		for (var i = 0; i < len; i++) {
			if (clause(this[i], i)) {
				newArray[newArray.length] = this[i];
			}
		}
		return newArray;
	});
	/*======Date======*/
	//星期几
    Date.fn("getWeek", function (type) {
        var i = this.getDay();
        if (!type || type == "周" || type == "星期") {
            var nums = ["日", "一", "二", "三", "四", "五", "六"];
            type = type || "周";
            return type + nums[i];
        }
        else if (type == "En") {
            var ennmae = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return ennmae[i];
        }
        else if (type == "Short") {
            var enshortname = ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."];
            return enshortname[i];
        }
    });
	//是否是闰年
    Date.fn("isLeapYear", function () {
        var year = this.getFullYear();
        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
    });
	//该月有多少天
    Date.fn("daysInMonth", function () {
        var month = this.getMonth() + 1;
        if (month != 2)
            return ((month <= 7 && month % 2 == 1) || (month > 7 && month % 2 == 0)) ? 31 : 30;
        else return this.isLeapYear() ? 29 : 28;
    });
	
/**
 * 对目标日期对象进行格式化
 * 
 * @name jQuery.date.format
 * @function
 * @grammar $.date.format(new Date(),'yyyy-MM-ddThh:mm:ss')
 * @param {Date}
 *            source 目标日期对象
 * @param {string}
 *            pattern 日期格式化规则
 * @remark
 * 
 * <b>格式表达式，变量含义：</b><br>
 * <br>
 * hh: 带 0 补齐的两位 12 进制时表示<br>
 * h: 不带 0 补齐的 12 进制时表示<br>
 * HH: 带 0 补齐的两位 24 进制时表示<br>
 * H: 不带 0 补齐的 24 进制时表示<br>
 * mm: 带 0 补齐两位分表示<br>
 * m: 不带 0 补齐分表示<br>
 * ss: 带 0 补齐两位秒表示<br>
 * s: 不带 0 补齐秒表示<br>
 * yyyy: 带 0 补齐的四位年表示<br>
 * yy: 带 0 补齐的两位年表示<br>
 * MM: 带 0 补齐的两位月表示<br>
 * M: 不带 0 补齐的月表示<br>
 * dd: 带 0 补齐的两位日表示<br>
 * d: 不带 0 补齐的日表示
 * 
 * 
 * @returns {string} 格式化后的字符串
 */
	Date.fn("format", function (pattern) {
		if ('string' != typeof pattern)return this.toString();
		function replacer(patternPart, result) {
			pattern = pattern.replace(patternPart, result);
		}
		var year = this.getFullYear(), month = this.getMonth() + 1, date2 = this.getDate(), hours = this.getHours(), minutes = this.getMinutes(), seconds = this.getSeconds();
		replacer(/yyyy/g, year.pad());
		replacer(/yy/g, parseInt(year.toString().slice(2), 10).pad());
		replacer(/MM/g, month.pad());
		replacer(/M/g, month);
		replacer(/dd/g, date2.pad());
		replacer(/d/g, date2);
		replacer(/HH/g, hours.pad());
		replacer(/H/g, hours);
		replacer(/hh/g, (hours % 12).pad());
		replacer(/h/g, hours % 12);
		replacer(/mm/g, minutes.pad());
		replacer(/m/g, minutes);
		replacer(/ss/g, seconds.pad());
		replacer(/s/g, seconds);
		return pattern;	
	});
	/**
	 * 将目标字符串转换成日期对象
	 * 
	 * @name jQuery.date.parse
	 * @function
	 * @grammar $.date.parse('2014-05-06T12:20:35')
	 * @param {string}
	 *            source 目标字符串
	 * @remark
	 * 
	 * 对于目标字符串，下面这些规则决定了 parse 方法能够成功地解析： <br>
	 * <ol>
	 * <li>短日期可以使用"/"或"-"作为日期分隔符，但是必须用月/日/年的格式来表示，例如"7/20/96"。</li>
	 * <li>以 "July 10 1995" 形式表示的长日期中的年、月、日可以按任何顺序排列，年份值可以用 2 位数字表示也可以用 4
	 * 位数字表示。如果使用 2 位数字来表示年份，那么该年份必须大于或等于 70。 </li>
	 * <li>括号中的任何文本都被视为注释。这些括号可以嵌套使用。 </li>
	 * <li>逗号和空格被视为分隔符。允许使用多个分隔符。 </li>
	 * <li>月和日的名称必须具有两个或两个以上的字符。如果两个字符所组成的名称不是独一无二的，那么该名称就被解析成最后一个符合条件的月或日。例如，"Ju"
	 * 被解释为七月而不是六月。 </li>
	 * <li>在所提供的日期中，如果所指定的星期几的值与按照该日期中剩余部分所确定的星期几的值不符合，那么该指定值就会被忽略。例如，尽管 1996 年 11
	 * 月 9 日实际上是星期五，"Tuesday November 9 1996" 也还是可以被接受并进行解析的。但是结果 date 对象中包含的是
	 * "Friday November 9 1996"。 </li>
	 * <li>JScript 处理所有的标准时区，以及全球标准时间 (UTC) 和格林威治标准时间 (GMT)。</li>
	 * <li>小时、分钟、和秒钟之间用冒号分隔，尽管不是这三项都需要指明。"10:"、"10:11"、和 "10:11:12" 都是有效的。 </li>
	 * <li>如果使用 24 小时计时的时钟，那么为中午 12 点之后的时间指定 "PM" 是错误的。例如 "23:15 PM" 就是错误的。</li>
	 * <li>包含无效日期的字符串是错误的。例如，一个包含有两个年份或两个月份的字符串就是错误的。</li>
	 * </ol>
	 * 
	 * 
	 * @returns {Date} 转换后的日期对象
	 */
	Date.fn("parse", function () {
		var reg = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+\x24");
		if ('string' == typeof this) {
			if (reg.test(this) || isNaN(Date.parse(this))) {
				var d = this.split(/ |T/), d1 = d.length > 1 ? d[1]
						.split(/[^\d]/) : [ 0, 0, 0 ], d0 = d[0].split(/[^\d]/);
				return new Date(d0[0] - 0, d0[1] - 1, d0[2] - 0, d1[0] - 0,
						d1[1] - 0, d1[2] - 0);
			} else {
				return new Date(this);
			}
		}
	
		return new Date();
	});

	/*======Number======*/
	Number.fn("pad", function () {
		return this>9 ? this : '0'+this;
	});
	Number.fn("times", function (b, c) {
		for (var a = 0; a < this; a++) {
			b.call(c, a, this);
		}
	});
	
	//浏览器
			if(jQuery.browser) return;

		jQuery.browser = {};
		jQuery.browser.mozilla = false;
		jQuery.browser.webkit = false;
		jQuery.browser.opera = false;
		jQuery.browser.msie = false;

		var nAgt = navigator.userAgent;
		jQuery.browser.name  = navigator.appName;
		jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
		
		var nameOffset,verOffset,ix,IE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
	// In Opera, the true version is after "Opera" or after "Version"
		if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
			jQuery.browser.opera = true;
			jQuery.browser.name = "Opera";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
			if ((verOffset=nAgt.indexOf("Version"))!=-1)
				jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
		}
		//IE11
		else if(IE11){
			jQuery.browser.msie = true;
			jQuery.browser.name = "Microsoft Internet Explorer";
			jQuery.browser.fullVersion = nAgt.substring(139,141);

		}
	// In MSIE, the true version is after "MSIE" in userAgent
		else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
			jQuery.browser.msie = true;
			jQuery.browser.name = "Microsoft Internet Explorer";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
		}
	// In Chrome, the true version is after "Chrome"
		else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
			jQuery.browser.webkit = true;
			jQuery.browser.name = "Chrome";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		}
	// In Safari, the true version is after "Safari" or after "Version"
		else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
			jQuery.browser.webkit = true;
			jQuery.browser.name = "Safari";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
			if ((verOffset=nAgt.indexOf("Version"))!=-1)
				jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
		}
	// In Firefox, the true version is after "Firefox"
		else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
			jQuery.browser.mozilla = true;
			jQuery.browser.name = "Firefox";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);

		}
	// In most other browsers, "name/version" is at the end of userAgent
		else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
			
			jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
			jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
			if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
				jQuery.browser.name = navigator.appName;
			}
		}
	// trim the fullVersion string at semicolon/space if present
		if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1){
			jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);}
		if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1){
			jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);}
		
		jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
		if (isNaN(jQuery.browser.majorVersion)) {
			jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
			jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
		}
		jQuery.browser.version = jQuery.browser.majorVersion;
		jQuery.browser.oldIE = document.addEventListener ? false : true; //detection ie 6-8
		jQuery.browser.ItIE7 = $.browser.msie && $.browser.version < 8 && $.browser.oldIE;
	//Mouse wheel Evt Ver 3.0.6
	var types = ['DOMMouseScroll', 'mousewheel'];
	
	if ($.event.fixHooks) {
		for ( var i=types.length; i; ) {
			$.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
		}
	}
	
	$.event.special.mousewheel = {
		setup: function() {
			if ( this.addEventListener ) {
				for ( var i=types.length; i; ) {
					this.addEventListener( types[--i], handler, false );
				}
			} else {
				this.onmousewheel = handler;
			}
		},
		
		teardown: function() {
			if ( this.removeEventListener ) {
				for ( var i=types.length; i; ) {
					this.removeEventListener( types[--i], handler, false );
				}
			} else {
				this.onmousewheel = null;
			}
		}
	};
	
	$.fn.extend({
		mousewheel: function(fn) {
			return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
		},
		
		unmousewheel: function(fn) {
			return this.unbind("mousewheel", fn);
		}
	});
	
	
	function handler(event) {
		var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
		event = $.event.fix(orgEvent);
		event.type = "mousewheel";
		
		// Old school scrollwheel delta
		if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
		if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
		
		// New school multidimensional scroll (touchpads) deltas
		deltaY = delta;
		
		// Gecko
		if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
			deltaY = 0;
			deltaX = -1*delta;
		}
		
		// Webkit
		if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
		if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
		
		// Add event and delta to the front of the arguments
		args.unshift(event, delta, deltaX, deltaY);
		
		return ($.event.dispatch || $.event.handle).apply(this, args);
	}
	//Input Evt for oldIE
	$.event.special.input = {
        setup : function(){
            var $this = $(this);
            $.data($this, 'special-input', true);
            //IE低版本不支持input事件，用onpropertychange事件
            if('attachEvent' in this){
                this.attachEvent('onpropertychange', function(e){
                    e = e || window.event;
                    //如果是value改变，触发input事件
                    if(e.propertyName === 'value'){
                        $this.trigger('input',[])
                    }
                })
                return true
            }
            return false
        },
        teardown : function(){
            var $this = $(this);
            if($.data($this, 'special-input') === true){
                this.dispatchEvent('onpropertychange')
            }
        }
    }
})(jQuery);

