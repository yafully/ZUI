//for Conflict mode
//jQuery.noConflict(); 

var ZUI = {
	version: '1.4.6Dev20140722'
};

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


/*
ASDUI.Browser.fn
*/



(function($){

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
//	
//	Function.prototype.fn = function (name, fun) {
//        if (!this.prototype[name]) {
//            this.prototype[name] = fun;
//        }
//        return this;
//    }
})(jQuery);
/*
ASDUI.GUID.Fn
*/
$.GUID = function () {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});		
}

//#加入收藏夹
$.addFav = function (url, title) {
	
	if (!url)url = window.location.href;
	if (!title)title = document.title;
	try {alert(1);
		window.external.addFavorite(url, title);//ie
		alert(2);
	} catch (e) {
		try {
			window.sidebar.addPanel(title, url, '');
		} catch (e) {
			if(!$.browser.mozilla) alert('加入收藏失败，请使用 Ctrl+D 进行添加');
		}
	}
}


$.Audio = function(path,flie) {
  	if($.browser.msie && $.browser.version < 9)return;
	var p = path ? path : 'sound/', n = flie ? flie : 'messagebox',A = document.createElement('audio');
	$.browser.mozilla ? A.setAttribute("src", p+n+'.ogg') : A.setAttribute("src", p+n+'.mp3');
	//A.setAttribute('autoplay', 'autoplay');
	$.get();
	A.addEventListener("load", function() {
		A.play()
		console.log('Audioload!');
		
	}, true);
	A.pause();
    A.play();
	return A;
};
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

// ################String扩展####################//
$.string = $.string || {};

/**
 * 对目标字符串进行html解码
 * 
 * @name jQuery.string.decodeHTML
 * @function
 * @grammar jQuery.string.decodeHTML(source)
 * @param {string}
 *            source 目标字符串
 * @shortcut decodeHTML
 * @meta standard
 * @see jQuery.string.encodeHTML
 * 
 * @returns {string} html解码后的字符串
 */
 
$.string.decodeHTML = function(source) {
	var str = String(source).replace(/&quot;/g, '"').replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>').replace(/&amp;/g, "&");
	// 处理转义的中文和实体字符
	return str.replace(/&#([\d]+);/g, function(_0, _1) {
		return String.fromCharCode(parseInt(_1, 10));
	});
};

/**
 * 对目标字符串进行html编码
 * 
 * @name jQuery.string.encodeHTML
 * @function
 * @grammar jQuery.string.encodeHTML(source)
 * @param {string}
 *            source 目标字符串
 * @remark 编码字符有5个：&<>"'
 * @shortcut encodeHTML
 * @meta standard
 * @see jQuery.string.decodeHTML
 * 
 * @returns {string} html编码后的字符串
 */
$.string.encodeHTML = function(source) {
	return String(source).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
			/>/g, '&gt;').replace(/"/g, "&quot;").replace(/'/g, "&#39;");
};

/**
 * 将目标字符串中常见全角字符转换成半角字符
 * 
 * @name jQuery.string.toHalfWidth
 * @function
 * @grammar jQuery.string.toHalfWidth(source)
 * @param {string}
 * source 目标字符串
 * @remark
 * 
 * 将全角的字符转成半角, 将"&amp;#xFF01;"至"&amp;#xFF5E;"范围的全角转成"&amp;#33;"至"&amp;#126;",
 * 还包括全角空格包括常见的全角数字/空格/字母, 用于需要同时支持全半角的转换, 具体转换列表如下("空格"未列出)：<br>
 * ０ => 0<br>
 * １ => 1<br>
 * ２ => 2<br>
 * ３ => 3<br>
 * ４ => 4<br>
 * ５ => 5<br>
 * ６ => 6<br>
 * ７ => 7<br>
 * ８ => 8<br>
...more
 * 
 * 
 * @returns {string} 转换后的字符串
 */

$.string.toHalfWidth = function(source) {
	return String(source).replace(/[\uFF01-\uFF5E]/g, function(c) {
		return String.fromCharCode(c.charCodeAt(0) - 65248);
	}).replace(/\u3000/g, " ");
};


$.string.getRegexForTag = function(tag, contents){
	tag = tag || '';
	var regstr = contents ? "<" + tag + "(?!\\w)[^>]*>([\\s\\S]*?)<\/" + tag + "(?!\\w)>" : "<\/?" + tag + "([^>]+)?>",
		reg = new RegExp(regstr, "gi");
	return reg;	
};
//获取标签
$.string.getTags = function(source, tag, contents){
		return source.match($.string.getRegexForTag(tag, contents)) || [];
};

//去除标签
$.string.stripTags = function(source, tag, contents){
		return source.replace($.string.getRegexForTag(tag, contents), '');
};

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
$.string.escapeReg = function(source) {
	return String(source).replace(
			new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
};


$.string.replaceAll = function(source,s1,s2) {
	return source.replace(new RegExp(s1,"gm"),s2); 
};

// ################Array扩展####################//
$.array = $.array || {};
/**
 * 判断一个数组中是否包含给定元素
 * 
 * @name jQuery.array.contains
 * @function
 * @grammar jQuery.array.contains(source, obj)
 * @param {Array}
 *            source 需要判断的数组.
 * @param {Any}
 *            obj 要查找的元素.
 * @return {boolean} 判断结果.
 * @author berg
 */
$.array.contains = function(source, obj) {
	return ($.inArray(obj,source) >= 0);
};

/*
*返回一个符合指定条件的新数组	
*/
$.array.filter = $.grep;
$.array.map = $.map;
/**
 * 从数组中寻找符合条件的第一个元素
 * 
 * @name jQuery.array.pick
 * @function
 * @grammar jQuery.array.pick(source, iterator)
 * @param {Array}
 *            source 需要查找的数组
 * @param {Function}
 *            iterator 对每个数组元素进行查找的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function
 *            (item, index)，函数需要返回true或false
 * @see jQuery.array.filter,jQuery.array.indexOf
 * 
 * @returns {Any|null} 符合条件的第一个元素，找不到时返回null
 */
$.array.pick = function(source, iterator) {
	var item, i, len = source.length;

	if ('function' == typeof iterator) {
		for (i = 0; i < len; i++) {
			item = source[i];
			if (true === iterator.call(source, item, i)) {
				return item;
			}
		}
	}

	return null;
};

/**
 * 查询数组中指定元素的索引位置
 * 
 * @name jQuery.array.indexOf
 * @function
 * @grammar jQuery.array.indexOf(source, match[, fromIndex])
 * @param {Array}
 *            source 需要查询的数组
 * @param {Any}
 *            match 查询项
 * @param {number}
 *            [fromIndex] 查询的起始位索引位置，如果为负数，则从source.length+fromIndex往后开始查找
 * @see jQuery.array.find,jQuery.array.lastIndexOf
 * 
 * @returns {number} 指定元素的索引位置，查询不到时返回-1
 */
$.array.indexOf = function(source, match, fromIndex) {
	return $.inArray(match,source,fromIndex);
};
/**
 * 从后往前，查询数组中指定元素的索引位置
 * 
 * @name jQuery.array.lastIndexOf
 * @function
 * @grammar jQuery.array.lastIndexOf(source, match)
 * @param {Array}
 *            source 需要查询的数组
 * @param {Any}
 *            match 查询项
 * @param {number}
 *            [fromIndex] 查询的起始位索引位置，如果为负数，则从source.length+fromIndex往前开始查找
 * @see jQuery.array.indexOf
 * 
 * @returns {number} 指定元素的索引位置，查询不到时返回-1
 */
$.array.lastIndexOf = function(source, match, fromIndex) {
	var len = source.length;

	fromIndex = fromIndex | 0;

	if (!fromIndex || fromIndex >= len) {
		fromIndex = len - 1;
	}
	if (fromIndex < 0) {
		fromIndex += len;
	}
	for (; fromIndex >= 0; fromIndex--) {
		if (fromIndex in source && source[fromIndex] === match) {
			return fromIndex;
		}
	}

	return -1;
};

/**
 * 移除数组中的项
 * 
 * @name jQuery.array.remove
 * @function
 * @grammar jQuery.array.remove(source, match)
 * @param {Array}
 *            source 需要移除项的数组
 * @param {Any}
 *            match 要移除的项
 * @meta standard
 * @see jQuery.array.removeAt
 * 
 * @returns {Array} 移除后的数组
 */
$.array.remove = function(source, match) {
	if(!match){
		source=[];
	}else{
		var len = source.length;
		
		while (len--) {
			if (len in source && source[len] === match) {
				source.splice(len, 1);
			}
		}
	}
	return source;
};
/**
 * 根据索引移除数组中的项
 * 
 * @name jQuery.array.removeAt
 * @function
 * @grammar jQuery.array.removeAt(source, index)
 * @param {Array}
 *            source 需要移除项的数组
 * @param {number}
 *            index 要移除项的索引位置
 * @see jQuery.array.remove
 * @meta standard
 * @returns {Any} 被移除的数组项
 */

$.array.removeAt = function(array, from, to) {
  var rest = array.slice((to || from) + 1 || array.length);
  array.length = from < 0 ? array.length + from : from;
  return array.push.apply(array, rest);
};
/**
 * 过滤数组中的相同项。如果两个元素相同，会删除后一个元素。
 * 
 * @name jQuery.array.unique
 * @function
 * @grammar jQuery.array.unique(source[, compareFn])
 * @param {Array}
 *            source 需要过滤相同项的数组
 * @param {Function}
 *            [compareFn] 比较两个数组项是否相同的函数,两个数组项作为函数的参数。
 * 
 * @returns {Array} 过滤后的新数组
 */
$.array.unique = function(source) {
	return $.array.combine([],source);
};

/*
*随机打乱数
*/
$.array.shuffle = function(source) {
	return source.sort(function (x,y) { return Math.floor(Math.random()*3)-1; });
};

/*
*向对象数组push一个元素，如果它在数组中不存在,大小写敏感
*/
$.array.include =  function(source,item){
		if (!$.array.contains(source,item)) source.push(item);
		return source;
};

/*
*联合2个数组且去掉重复项
*/
$.array.combine = function(source,array){
		for (var i = 0, l = array.length; i < l; i++) $.array.include(source,array[i]);
		return source;
};

/*
//返回2个数组的交集
*/
$.array.intersect = function(source,other){
		var cpy = source.slice();
		$.each(source,function(i,el) {
			if ($.array.indexOf(other,el) < 0)cpy.splice($.array.indexOf(cpy,el), 1);
		});
		return cpy;	
};

//在指定位置插入数组元素
//index插入位置
//item插入元素
// IE7 Bug
//$.array.insertAt = function(array, index) {
//    var arrayToInsert = Array.prototype.splice.apply(arguments, [2]);
//    return $.array.insertArrayAt(array, index, arrayToInsert);
//}


$.array.insertAt = function(array,index,obj) {
    if(index < 0) index = 0;
	if(index > array.length) index = array.length;
    array.length++;
    for(var i = array.length - 1; i > index; i--) {
        array[i] = array[i - 1];
    }
    array[index] = obj;
	return array;
}

$.array.insertArrayAt = function(array, index, arrayToInsert) {
    Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
    return array;
}
/*
//返回2个数组的差集
*/
$.array.differentiate = function(source,other){
		var src = source.slice();
		var cmp = other.slice();
		$.each(other,function(i,el) {
			if ($.array.indexOf(src,el) > -1) {
				// remove from both
				src.splice($.array.indexOf(src,el), 1);
				cmp.splice($.array.indexOf(cmp,el), 1);
			}
		});
		return $.array.combine(src,cmp);
};

/**/
//$.array.every = function(source,fn,bind){
//		for (var i = 0, l = source.length >>> 0; i < l; i++){
//			if ((i in source) && !fn.call(bind, i, source[i], this)) return false;
//		}
//		return true;
//};

//pluck 返回指定数组里面的某元素的新数组
$.array.pluck = function(source,key) { 
    return $.map(source, function(e) { 
		var arr;
		arr = e.nodeName ? e.getAttribute(key) : e[key];
		return arr; 
	}) 
}

//仿Linq条件查询
//item	Object	当前回调返回的数组第index个元素
//index	Int	可选参数,当前回调返的数组的索引
//$.array.where(stooges,function(item,index){return item.name=="larry"})
$.array.where = function(source,clause) {
	if (!clause)return;
	var len = source.length, newArray = [];
	for (var i = 0; i < len; i++) {
		if (clause(source[i], i)) {
			newArray[newArray.length] = source[i];
		}
	}
	return newArray;	
}

// ###################################number操作相关函数###################################
$.number = $.number || {};
$.number.pad = function(source){
	return source>9?source:'0'+source;  
};
/**
 * 生成随机整数，范围是[min, max]
 * 
 * @name jQuery.number.randomInt
 * @function
 * @grammar jQuery.number.randomInt(min, max)
 * 
 * @param {number}
 *            min 随机整数的最小值
 * @param {number}
 *            max 随机整数的最大值
 * @return {number} 生成的随机整数
 */
$.number.randomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
$.number.times = function (number , b, c) {	
	for (var a = 0; a < number; a++) {
		b.call(c, a, number);
	}
}


// ###################################cookie操作相关函数###################################
$.cookie = $.cookie || {};
/**
 * 验证字符串是否合法的cookie键名
 * 
 * @param {string}
 *            source 需要遍历的数组
 * @meta standard
 * @return {boolean} 是否合法的cookie键名
 */
$.cookie.isValidKey = function(key) {

	return (new RegExp(
			"^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24"))
			.test(key);
};

/**
 * 获取cookie的值，用decodeURIComponent进行解码
 * 
 * @name jQuery.cookie.get
 * @function
 * @grammar jQuery.cookie.get(key)
 * @param {string}
 *            key 需要获取Cookie的键名
 * @remark <b>注意：</b>该方法会对cookie值进行decodeURIComponent解码。如果想获得cookie源字符串，请使用getRaw方法。
 * @meta standard
 * @see jQuery.cookie.getRaw,jQuery.cookie.set
 * 
 * @returns {string|null} cookie的值，获取不到时返回null
 */
$.cookie.get = function(key) {
	var value = jQuery.cookie.getRaw(key);
	if ('string' == typeof value) {
		value = decodeURIComponent(value);
		return value;
	}
	return null;
};
/**
 * 获取cookie的值，不对值进行解码
 * 
 * @name jQuery.cookie.getRaw
 * @function
 * @grammar jQuery.cookie.getRaw(key)
 * @param {string}
 *            key 需要获取Cookie的键名
 * @meta standard
 * @see jQuery.cookie.get,jQuery.cookie.setRaw
 * 
 * @returns {string|null} 获取的Cookie值，获取不到时返回null
 */
$.cookie.getRaw = function(key) {
	if (jQuery.cookie.isValidKey(key)) {
		var reg = new RegExp("(^| )" + key + "=([^;]*)(;|\x24)"), result = reg
				.exec(document.cookie);

		if (result) {
			return result[2] || null;
		}
	}

	return null;
};
/**
 * 删除cookie的值
 * 
 * @name jQuery.cookie.remove
 * @function
 * @grammar jQuery.cookie.remove(key, options)
 * @param {string}
 *            key 需要删除Cookie的键名
 * @param {Object}
 *            options 需要删除的cookie对应的 path domain 等值
 * @meta standard
 */
$.cookie.remove = function(key, options) {
	options = options || {};
	options.expires = new Date(0);
	jQuery.cookie.setRaw(key, '', options);
};
/**
 * 设置cookie的值，用encodeURIComponent进行编码
 * 
 * @name jQuery.cookie.set
 * @function
 * @grammar jQuery.cookie.set(key, value[, options])
 * @param {string}
 *            key 需要设置Cookie的键名
 * @param {string}
 *            value 需要设置Cookie的值
 * @param {Object}
 *            [options] 设置Cookie的其他可选参数
 * @config {string} [path] cookie路径
 * @config {Date|number} [expires] cookie过期时间,如果类型是数字的话, 单位是毫秒
 * @config {string} [domain] cookie域名
 * @config {string} [secure] cookie是否安全传输
 * @remark
 * 
 * 1. <b>注意：</b>该方法会对cookie值进行encodeURIComponent编码。如果想设置cookie源字符串，请使用setRaw方法。<br>
 * <br>
 * 2. <b>options参数包括：</b><br>
 * path:cookie路径<br>
 * expires:cookie过期时间，Number型，单位为毫秒。<br>
 * domain:cookie域名<br>
 * secure:cookie是否安全传输
 * 
 * @meta standard
 * @see jQuery.cookie.setRaw,jQuery.cookie.get
 */
$.cookie.set = function(key, value, options) {
	jQuery.cookie.setRaw(key, encodeURIComponent(value), options);
};
/**
 * 设置cookie的值，不对值进行编码
 * 
 * @name jQuery.cookie.setRaw
 * @function
 * @grammar jQuery.cookie.setRaw(key, value[, options])
 * @param {string}
 *            key 需要设置Cookie的键名
 * @param {string}
 *            value 需要设置Cookie的值
 * @param {Object}
 *            [options] 设置Cookie的其他可选参数
 * @config {string} [path] cookie路径
 * @config {Date|number} [expires] cookie过期时间,如果类型是数字的话, 单位是毫秒
 * @config {string} [domain] cookie域名
 * @config {string} [secure] cookie是否安全传输
 * @remark
 * 
 * <b>options参数包括：</b><br>
 * path:cookie路径<br>
 * expires:cookie过期时间，Number型，单位为天。<br>
 * domain:cookie域名<br>
 * secure:cookie是否安全传输
 * 
 * @meta standard
 * @see jQuery.cookie.set,jQuery.cookie.getRaw
 */
$.cookie.setRaw = function(key, value, options) {
	if (!jQuery.cookie.isValidKey(key)) {
		return;
	}

	options = options || {};
	// options.path = options.path || "/"; // meizz 20100402 设定一个初始值，方便后续的操作
	// berg 20100409 去掉，因为用户希望默认的path是当前路径，这样和浏览器对cookie的定义也是一致的

	// 计算cookie过期时间
	var expires = options.expires;
	if (typeof options.expires == 'number') {
		expires = new Date();
		//expires.setTime(expires.getTime() + options.expires);//
		expires.setTime(expires.getTime() + options.expires * 24 * 60 * 60 * 1000);
	}

	document.cookie = key + "=" + value
			+ (options.path ? "; path=" + options.path : "")
			+ (expires ? "; expires=" + expires.toGMTString() : "")
			+ (options.domain ? "; domain=" + options.domain : "")
			+ (options.secure ? "; secure" : '');
};

// ###################################date操作相关函数###################################
$.date = $.date || {};
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

$.date.format = function(source, pattern) {
	if ('string' != typeof pattern) {
		return source.toString();
	}

	function replacer(patternPart, result) {
		pattern = pattern.replace(patternPart, result);
	}

	var pad = $.number.pad, year = source.getFullYear(), month = source
			.getMonth() + 1, date2 = source.getDate(), hours = source
			.getHours(), minutes = source.getMinutes(), seconds = source
			.getSeconds();

	replacer(/yyyy/g, pad(year, 4));
	replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
	replacer(/MM/g, pad(month, 2));
	replacer(/M/g, month);
	replacer(/dd/g, pad(date2, 2));
	replacer(/d/g, date2);

	replacer(/HH/g, pad(hours, 2));
	replacer(/H/g, hours);
	replacer(/hh/g, pad(hours % 12, 2));
	replacer(/h/g, hours % 12);
	replacer(/mm/g, pad(minutes, 2));
	replacer(/m/g, minutes);
	replacer(/ss/g, pad(seconds, 2));
	replacer(/s/g, seconds);

	return pattern;
};
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

$.date.parse = function(source) {
	var reg = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+\x24");
	if ('string' == typeof source) {
		if (reg.test(source) || isNaN(Date.parse(source))) {
			var d = source.split(/ |T/), d1 = d.length > 1 ? d[1]
					.split(/[^\d]/) : [ 0, 0, 0 ], d0 = d[0].split(/[^\d]/);
			return new Date(d0[0] - 0, d0[1] - 1, d0[2] - 0, d1[0] - 0,
					d1[1] - 0, d1[2] - 0);
		} else {
			return new Date(source);
		}
	}

	return new Date();
};
/*
对比2个日期间天数差并返回差值
$.date.compare('startTime','endTime')
eg:$.date.compare('2014-05-06T12:20:35','2014-06-08')

*/
$.date.compare = function(startTime, endTime) {
    return ((new Date(endTime.replace(/-/g, "/"))) - (new Date(startTime.replace(/-/g, "/"))));
};
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
	var reg = new RegExp("(^|&|\\?|#)" + $.string.escapeReg(key)
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

// ###################################swf操作相关函数###################################
$.swf = $.swf || {};
/**
 * 浏览器支持的flash插件版本
 * 
 * @property version 浏览器支持的flash插件版本
 * @grammar jQuery.swf.version
 * @return {String} 版本号
 * @meta standard
 */
$.swf.version = (function() {
	var n = navigator;
	if (n.plugins && n.mimeTypes.length) {
		var plugin = n.plugins["Shockwave Flash"];
		if (plugin && plugin.description) {
			return plugin.description.replace(/([a-zA-Z]|\s)+/, "").replace(
					/(\s)+r/, ".")
					+ ".0";
		}
	} else if (window.ActiveXObject && !window.opera) {
		for ( var i = 12; i >= 2; i--) {
			try {
				var c = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + i);
				if (c) {
					var version = c.GetVariable("$version");
					return version.replace(/WIN/g, '').replace(/,/g, '.');
				}
			} catch (e) {
			}
		}
	}
})();
/**
 * 创建flash对象的html字符串
 * 
 * @name jQuery.swf.createHTML
 * @function
 * @grammar jQuery.swf.createHTML(options)
 * 
 * @param {Object}
 *            options 创建flash的选项参数
 * @param {string}
 *            options.id 要创建的flash的标识
 * @param {string}
 *            options.url flash文件的url
 * @param {String}
 *            options.errorMessage 未安装flash player或flash player版本号过低时的提示
 * @param {string}
 *            options.ver 最低需要的flash player版本号
 * @param {string}
 *            options.width flash的宽度
 * @param {string}
 *            options.height flash的高度
 * @param {string}
 *            options.align flash的对齐方式，允许值：middle/left/right/top/bottom
 * @param {string}
 *            options.base 设置用于解析swf文件中的所有相对路径语句的基本目录或URL
 * @param {string}
 *            options.bgcolor swf文件的背景色
 * @param {string}
 *            options.salign
 *            设置缩放的swf文件在由width和height设置定义的区域内的位置。允许值：l/r/t/b/tl/tr/bl/br
 * @param {boolean}
 *            options.menu 是否显示右键菜单，允许值：true/false
 * @param {boolean}
 *            options.loop 播放到最后一帧时是否重新播放，允许值： true/false
 * @param {boolean}
 *            options.play flash是否在浏览器加载时就开始播放。允许值：true/false
 * @param {string}
 *            options.quality
 *            设置flash播放的画质，允许值：low/medium/high/autolow/autohigh/best
 * @param {string}
 *            options.scale 设置flash内容如何缩放来适应设置的宽高。允许值：showall/noborder/exactfit
 * @param {string}
 *            options.wmode 设置flash的显示模式。允许值：window/opaque/transparent
 * @param {string}
 *            options.allowscriptaccess
 *            设置flash与页面的通信权限。允许值：always/never/sameDomain
 * @param {string}
 *            options.allownetworking 设置swf文件中允许使用的网络API。允许值：all/internal/none
 * @param {boolean}
 *            options.allowfullscreen 是否允许flash全屏。允许值：true/false
 * @param {boolean}
 *            options.seamlesstabbing
 *            允许设置执行无缝跳格，从而使用户能跳出flash应用程序。该参数只能在安装Flash7及更高版本的Windows中使用。允许值：true/false
 * @param {boolean}
 *            options.devicefont 设置静态文本对象是否以设备字体呈现。允许值：true/false
 * @param {boolean}
 *            options.swliveconnect 第一次加载flash时浏览器是否应启动Java。允许值：true/false
 * @param {Object}
 *            options.vars 要传递给flash的参数，支持JSON或string类型。
 * 
 * @see jQuery.swf.create
 * @meta standard
 * @returns {string} flash对象的html字符串
 */
$.swf.createHTML = function(options) {
	options = options || {};
	var version = jQuery.swf.version, needVersion = options['ver'] || '6.0.0', vUnit1, vUnit2, i, k, len, item, tmpOpt = {}, encodeHTML = jQuery.string.encodeHTML;

	// 复制options，避免修改原对象
	for (k in options) {
		tmpOpt[k] = options[k];
	}
	options = tmpOpt;

	// 浏览器支持的flash插件版本判断
	if (version) {
		version = version.split('.');
		needVersion = needVersion.split('.');
		for (i = 0; i < 3; i++) {
			vUnit1 = parseInt(version[i], 10);
			vUnit2 = parseInt(needVersion[i], 10);
			if (vUnit2 < vUnit1) {
				break;
			} else if (vUnit2 > vUnit1) {
				return ''; // 需要更高的版本号
			}
		}
	} else {
		return ''; // 未安装flash插件
	}

	var vars = options['vars'], objProperties = [ 'classid', 'codebase', 'id',
			'width', 'height', 'align' ];

	// 初始化object标签需要的classid、codebase属性值
	options['align'] = options['align'] || 'middle';
	options['classid'] = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
	options['codebase'] = 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0';
	options['movie'] = options['url'] || '';
	delete options['vars'];
	delete options['url'];

	// 初始化flashvars参数的值
	if ('string' == typeof vars) {
		options['flashvars'] = vars;
	} else {
		var fvars = [];
		for (k in vars) {
			item = vars[k];
			fvars.push(k + "=" + encodeURIComponent(item));
		}
		options['flashvars'] = fvars.join('&');
	}

	// 构建IE下支持的object字符串，包括属性和参数列表
	var str = ['<object '];
	for (i = 0, len = objProperties.length; i < len; i++) {
		item = objProperties[i];
		str.push('', item, '="', encodeHTML(options[item]), '"');
	}
	str.push('>');
	var params = {
		'wmode' : 1,
		'scale' : 1,
		'quality' : 1,
		'play' : 1,
		'loop' : 1,
		'menu' : 1,
		'salign' : 1,
		'bgcolor' : 1,
		'base' : 1,
		'allowscriptaccess' : 1,
		'allownetworking' : 1,
		'allowfullscreen' : 1,
		'seamlesstabbing' : 1,
		'devicefont' : 1,
		'swliveconnect' : 1,
		'flashvars' : 1,
		'movie' : 1
	};

	for (k in options) {
		item = options[k];
		k = k.toLowerCase();
		if (params[k] && (item || item === false || item === 0)) {
			
			str.push('<param name="' + k + '" value="' + encodeHTML(item)
					+ '" />');
		}
	}

	// 使用embed时，flash地址的属性名是src，并且要指定embed的type和pluginspage属性
	options['src'] = options['movie'];
	options['name'] = options['id'];
	delete options['id'];
	delete options['movie'];
	delete options['classid'];
	delete options['codebase'];
	options['type'] = 'application/x-shockwave-flash';
	options['pluginspage'] = 'http://www.macromedia.com/go/getflashplayer';

	// 构建embed标签的字符串
	str.push('<embed');
	// 在firefox、opera、safari下，salign属性必须在scale属性之后，否则会失效
	// 经过讨论，决定采用BT方法，把scale属性的值先保存下来，最后输出
	var salign;
	for (k in options) {
		item = options[k];
		if (item || item === false || item === 0) {
			if ((new RegExp("^salign\x24", "i")).test(k)) {
				salign = item;
				continue;
			}

			str.push(' ', k, '="', encodeHTML(item), '"');
		}
	}

	if (salign) {
		str.push(' salign="', encodeHTML(salign), '"');
	}
	str.push('></embed></object>');
	return str.join('');
};
/**
 * 在页面中创建一个flash对象
 * 
 * @name jQuery.swf.create
 * @function
 * @grammar jQuery.swf.create(options[, container])
 * 
 * @param {Object}
 *            options 创建flash的选项参数
 * @param {string}
 *            options.id 要创建的flash的标识
 * @param {string}
 *            options.url flash文件的url
 * @param {String}
 *            options.errorMessage 未安装flash player或flash player版本号过低时的提示
 * @param {string}
 *            options.ver 最低需要的flash player版本号
 * @param {string}
 *            options.width flash的宽度
 * @param {string}
 *            options.height flash的高度
 * @param {string}
 *            options.align flash的对齐方式，允许值：middle/left/right/top/bottom
 * @param {string}
 *            options.base 设置用于解析swf文件中的所有相对路径语句的基本目录或URL
 * @param {string}
 *            options.bgcolor swf文件的背景色
 * @param {string}
 *            options.salign
 *            设置缩放的swf文件在由width和height设置定义的区域内的位置。允许值：l/r/t/b/tl/tr/bl/br
 * @param {boolean}
 *            options.menu 是否显示右键菜单，允许值：true/false
 * @param {boolean}
 *            options.loop 播放到最后一帧时是否重新播放，允许值： true/false
 * @param {boolean}
 *            options.play flash是否在浏览器加载时就开始播放。允许值：true/false
 * @param {string}
 *            options.quality
 *            设置flash播放的画质，允许值：low/medium/high/autolow/autohigh/best
 * @param {string}
 *            options.scale 设置flash内容如何缩放来适应设置的宽高。允许值：showall/noborder/exactfit
 * @param {string}
 *            options.wmode 设置flash的显示模式。允许值：window/opaque/transparent
 * @param {string}
 *            options.allowscriptaccess
 *            设置flash与页面的通信权限。允许值：always/never/sameDomain
 * @param {string}
 *            options.allownetworking 设置swf文件中允许使用的网络API。允许值：all/internal/none
 * @param {boolean}
 *            options.allowfullscreen 是否允许flash全屏。允许值：true/false
 * @param {boolean}
 *            options.seamlesstabbing
 *            允许设置执行无缝跳格，从而使用户能跳出flash应用程序。该参数只能在安装Flash7及更高版本的Windows中使用。允许值：true/false
 * @param {boolean}
 *            options.devicefont 设置静态文本对象是否以设备字体呈现。允许值：true/false
 * @param {boolean}
 *            options.swliveconnect 第一次加载flash时浏览器是否应启动Java。允许值：true/false
 * @param {Object}
 *            options.vars 要传递给flash的参数，支持JSON或string类型。
 * 
 * @param {HTMLElement|string}
 *            [container] flash对象的父容器元素，不传递该参数时在当前代码位置创建flash对象。
 * @meta standard
 * @see jQuery.swf.createHTML,jQuery.swf.getMovie
 */
$.swf.create = function(target,options) {
	options = options || {};
	var html = $.swf.createHTML(options) || options['errorMessage'] || '';

	if (target && 'string' == typeof target) {
		target = document.getElementById(target);
	}
	// TODO这个地方被我改过，原来是这样的：
	// jQuery.dom.insertHTML(target || document.body, 'beforeEnd', html);
	// 但这需要引入dom相关api，百度的dom相关的api不大好，所以改成jQuery的
	$(target || document.body).append(html);
};

/*!
 * jQuery MooTools-like class plugin.
 * Licence fall under Mootools's.
 */
(function($, window) {
 
    var enumerables = true, slice = Array.prototype.slice, has = Object.prototype.hasOwnProperty;
    for (var i in { toString: 1 }) { enumerables = null; }
    enumerables = (enumerables) ? [ 'hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable',
        'toLocaleString', 'toString', 'constructor' ] : enumerables;
 
    window.Function.prototype.overload = function() {
        var e = enumerables, self = this;
        return function() {
            var argc = arguments.length, argv = slice.call(arguments);
            if (0 === argc) { return this; }
            if ('string' === typeof argv[0]) { self.call(this, argv[0], argv[1]); return this; }
            for (var o in argv) for (var k in argv[o]) {
                self.call(this, k, argv[o][k]);
                if (e) for (var po in e) if (has.call(argv[o], e[po])) { self.call(this, e[po], this[e[po]]); }
            }
            return this;
        };
    };
    
    $.Class = function(params) {
        if ('undefined' === typeof params) { return $.noop; }
        params = ($.isFunction(params)) ? { initialize: params } : params;
        this['$instance'] = function() { return (this.initialize) ? this.initialize.apply(this, arguments) : this; };
        var $instance = this['$instance']; // hack to prevent chrome inspector lexer to display internal var...
        delete this['$instance'];
        $instance.extend = function(key, value) { this.prototype[key] = value; }.overload();
        $instance.prototype.implement = function(key, value) { this[key] = value; }.overload();
        $.extend($instance, this);
        if(has.call(params, "Extends")) {
            if($.isFunction(params.Extends)) $instance.extend(params.Extends.prototype);
            else if($.isArray(params.Extends))
                for(e in params.Extends) $instance.extend(params.Extends[e].prototype);
        }
        delete $instance.prototype.Extends;
        $.extend($instance.prototype, params);        
        return $instance;
    };
 
})(jQuery, this);




// ################Element扩展####################//
	/*
	ASDUI.step
	date:2014.04.22
	*/		
	$.fn.extend({
		unSecable: function(){
			try{
				$.browser.msie ? $(this).on('selectstart',function() { return false; }) : $(this).addClass('unSecable');
			}catch(err){
				
			}
			
			return this;
		},
		steps : function(num){		
		   var $this = $(this);
		   var steps = $this.children();
		   if(num > steps.length - 1) return false;
		   var step = $(steps[num]);
		   if(num == 0){
			 steps.removeClass().last().addClass('lastStep');
		   }
		   else if(num == 1){
			 step.prev().addClass('lastDone');
		   }
		   else if(num > 1){
			 step.prevAll().addClass('done');
			 step.prev().removeClass('done').addClass('lastDone');
		   }
		   step.addClass('current');
		},
		//progress
		progress: function(percent,fx){
			var fx = fx ? fx : 'swing';
			var probox = $(this).find('span.Progress')[0];
			var bar = $(probox).find('dfn')[0];		
			$(bar).stop().animate({width: $(probox).width()*percent/100}, 1000,fx);									
			$(this).find('em').text(percent+'%');
		},
		//ASDUI.highlight
		//date:2014.04.22
			
		highlight : function(pat) {
			 function innerHighlight(node, pat) {
			  var skip = 0;
			  if (node.nodeType == 3) {
				   var pos = node.data.toUpperCase().indexOf(pat);
				   if (pos >= 0) {
						var spannode = document.createElement('span');
						spannode.className = 'highlight';
						var middlebit = node.splitText(pos);
						var endbit = middlebit.splitText(pat.length);
						var middleclone = middlebit.cloneNode(true);
						spannode.appendChild(middleclone);
						middlebit.parentNode.replaceChild(spannode, middlebit);
						skip = 1;
				   }
			  }
			  else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
				   for (var i = 0; i < node.childNodes.length; ++i) {
						i += innerHighlight(node.childNodes[i], pat);
				   }
			  }
			  return skip;
			 }
			 return this.length && pat && pat.length ? this.each(function() {
				innerHighlight(this, pat.toUpperCase());
			 }) : this;
		},
		
		removeHighlight : function() {
			 return this.find("span.highlight").each(function() {
				  this.parentNode.firstChild.nodeName;
				  with (this.parentNode) {
					  
					   replaceChild(this.firstChild, this);
					   normalize();
				  }
			 });
		},
		cmPos: function(){
			var box = $(this);
			var w = $(window).width(), h = $(window).height(), st = $(window).scrollTop(),sl = $(window).scrollLeft(), ph = $("body").height();
				if(ph < h) ph = h;	
			var ie6y = (st + (h - box.outerHeight()) * 0.5) + 'px';
			var posy = (h - box.outerHeight()) * 0.5 + 'px';		
			box.css({
				top:($.browser.msie && $.browser.version < 7) ? ie6y : posy,
				left:(sl + (w - box.outerWidth()) / 2)
			});
			return this;	
		},
		flpos:function(Atel,pos,skewX,skewY){
			var tipMy,tipAt;
			var x = skewX ? skewX : 0;
			var y = skewX ? skewY : 0;
			switch(pos){
				case 'north':
					tipMy = 'left+'+x+' bottom';
					tipAt = 'left top-'+y+'';	
				break;

				case 'south':
					tipMy = 'left+'+x+' top';
					tipAt = 'left bottom+'+y+'';
				break;

				case 'east':
					tipMy = 'left+'+x+' top';
					tipAt = 'right top+'+y+'';
				break;
				case 'west':
				default:
					tipMy = 'right-'+x+' top';
					tipAt = 'left top+'+y+'';
				break;
			}
			
			$(this).position({my: tipMy,at: tipAt,of: Atel});
			return this;		
		},		
		ie7font: function(st){
			$(this).find(st ? st : '*').each(function(i,item){
				icon = $(item).data('icon');
				icon && $(item).append('<bdo style="font-family: \'icomoon\'">' + icon + '</bdo>');
			});	
		},
		/**/
        measure: function() {
            var clone = $(this).clone(), result;
            clone.removeAttr('id').css({
                visibility: 'hidden',
				display:'block',
                position: 'absolute',
				zIndex:-10
            });
            clone.appendTo(document.body);
			result = {width: clone.width(),outerWidth: clone.outerWidth(),outerHeight: clone.outerHeight(),height: clone.height(),top: clone.offset().top,left: clone.offset().left};
           	clone.remove();
            return result;
        },
		/*表单结算计算*/
		calculate: function(rule) {
			if (!rule) return;
			form = $(this);
	
			var oSerialize = form.data("serialize") || {};
			
			var oCal = {}, isNum = function(value) {
	
				return 	typeof value == "number" && (value || value === 0);
			};
			
			$.each(oSerialize, function(name) {
				oSerialize[name] = 0;	
			});
	
			form.find(":input").each(function() {
				var val, name = this.name, type = this.type;
				if (name) {
					val = $(this).val();
	
					if (/radio|checkbox/.test(type)) {
						if (oSerialize[name]) return;
						if (this.checked && !this.disabled) {
							oSerialize[name] = val * 1 || val;	
						} else {
	
							oSerialize[name] = 0;
						}
					} else {
					
						if (!val || this.disabled) {
							val = 0;	
						} 
						oSerialize[name] = val * 1 || val;	
					}
				}
			});
			
			form.data("serialize", oSerialize);
		
			oCal = $.extend({}, oSerialize);
			
	
			$.each(rule, function(id, fun) {
				var value = $.isFunction(fun)? fun.call(oCal): fun;
				if (!isNum(value)) value = 0;
				oCal[id] = value;
			});
			
	
			$.each(rule, function(id, fun) {
				var eleResult = /^\W|\[|\:/.test(id)? $(id) : $("#" + id), value = oCal[id] || ($.isFunction(fun)? fun.call(oCal): fun) || 0;
	
				if (isNum(value) && eleResult.length) {
					!oCal[id] && (oCal[id] = value);
					value = String(Math.round(value * 100) / 100).replace(/\.00/, "");
					eleResult.each(function() {
						if (/^input$/i.test(this.tagName)) {
							$(this).val(value);	
						} else {
							$(this).html(value);
						}
					});				
				}
			});
		},
		//input+1-1
		iVaryVal: function(iSet,CallBack){
			/*
			 * Minus:点击元素--减小
			 * Add:点击元素--增加
			 * Input:表单元素
			 * Min:表单的最小值，非负整数
			 * Max:表单的最大值，正整数
			 */
			iSet=$.extend({Minus:$('.J_minus'),Add:$('.J_add'),Input:$('.J_input'),Min:0,Max:20},iSet);
			var C=null,O=null;
			//插件返回值
			var $CB={};
			//增加
			iSet.Add.each(function(i){
				$(this).click(function(){
					O=parseInt(iSet.Input.eq(i).val());
					(O+1<=iSet.Max) || (iSet.Max==null) ? iSet.Input.eq(i).val(O+1) : iSet.Input.eq(i).val(iSet.Max);
					//输出当前改变后的值
					$CB.val=iSet.Input.eq(i).val();
					$CB.index=i;
					//回调函数
					$.fireEvent(CallBack,[$CB.val,$CB.index]);
				});
			});
			
			//减少
			iSet.Minus.each(function(i){
				$(this).click(function(){
					
					O=parseInt(iSet.Input.eq(i).val());
					O-1<iSet.Min ? iSet.Input.eq(i).val(iSet.Min) : iSet.Input.eq(i).val(O-1);
					$CB.val=iSet.Input.eq(i).val();
					$CB.index=i;
					//回调函数
					$.fireEvent(CallBack,[$CB.val,$CB.index]);

				});
			});
			//手动
			iSet.Input.on({
				'click':function(){
					O=parseInt($(this).val());
					$(this).select();
				},
				'keyup':function(e){
					if($(this).val()!=''){
						C=parseInt($(this).val());
						//非负整数判断
						if(/^[1-9]\d*|0$/.test(C)){
							$(this).val(C);
							O=C;
						}else{
							$(this).val(O);
						}
					}
					//键盘控制：上右--加，下左--减
					if(e.keyCode==38 || e.keyCode==39){
						iSet.Add.eq(iSet.Input.index(this)).click();
					}
					if(e.keyCode==37 || e.keyCode==40){
						iSet.Minus.eq(iSet.Input.index(this)).click();
					}
					//输出当前改变后的值
					$CB.val=$(this).val();
					$CB.index=iSet.Input.index(this);
					//回调函数
					$.fireEvent(CallBack,[$CB.val,$CB.index])
				},
				'blur':function(){
					$(this).trigger('keyup');
					if($(this).val()==''){
						$(this).val(O);
					}
					//判断输入值是否超出最大最小值
					if(iSet.Max){
						if(O>iSet.Max){
							$(this).val(iSet.Max);
						}
					}
					if(O<iSet.Min){
						$(this).val(iSet.Min);
					}
					//输出当前改变后的值
					$CB.val=$(this).val();
					$CB.index=iSet.Input.index(this);
					//回调函数
					$.fireEvent(CallBack,[$CB.val,$CB.index])
				}
			});
		},
		hint:function(tag,onHint){
			
			var label = tag ? $(this).parent().find(tag) : $(this).prev();
			if($(this).val() !='')label.hide();
			$(this).on('focus',function(){
				label.fadeOut(200);
				$.fireEvent(onHint,[$(this)]);
			});
			$(this).on('input',function(){
				label.fadeOut(200);
			});
			$(this).on('blur',function(){
				if($(this).val() =='')label.fadeIn(200);
			});
		},//input & textarea hint
        customSelect: function (options) {
            // filter out <= IE6
            if (typeof document.body.style.maxHeight === 'undefined') {
                return this;
            }
            var defaults = {
                    customClass: 'ZUIcustomSelect',
					skew:25,
                    mapClass:    false,
                    mapStyle:    true,
					absolute:    false
            },
            options = $.extend(defaults, options),
            prefix = options.customClass,
            changed = function ($select,customSelectSpan) {
                var currentSelected = $select.find(':selected'),
                customSelectSpanInner = customSelectSpan.children(':first'),
                html = currentSelected.html() || '&nbsp;';

                customSelectSpanInner.html(html);
                
                if (currentSelected.attr('disabled')) {
                    customSelectSpan.addClass(getClass('DisabledOption'));
                } else {
                    customSelectSpan.removeClass(getClass('DisabledOption'));
                }
                
                setTimeout(function () {
                    customSelectSpan.removeClass(getClass('Open'));
                    $(document).off('mouseup.customSelect');                  
                }, 60);
            },
            getClass = function(suffix){
                return prefix + suffix;
            };

            return this.each(function () {
                var $select = $(this),warpId = 'SelWarp'+$.GUID(),
                    customSelectInnerSpan = $('<span />').addClass(getClass('Inner')),
                    customSelectSpan = $('<span />'),
					gapSpan = '<span id="'+warpId+'" class="ZUIwrapper"></span>';
//				console.log($select.hasClass('hasCustomSelect'));
//				console.log($select.is(':visible'));
				if(!$select.hasClass('hasCustomSelect') && $select.is(':visible') && $select.is('select')){
					options.absolute ? $select.wrap(gapSpan).after(customSelectSpan.append(customSelectInnerSpan)): $select.wrap(gapSpan).before(customSelectSpan.append(customSelectInnerSpan));;
					
					//options.absolute ? $select.after(customSelectSpan.append(customSelectInnerSpan)): $select.before(customSelectSpan.append(customSelectInnerSpan));
					
					customSelectSpan.addClass(prefix).addClass($select.attr('id'));
	
					if (options.mapClass) {
						customSelectSpan.addClass($select.attr('class'));
					}
					if (options.mapStyle) {
						customSelectSpan.attr('style', $select.attr('style'));
					}
	
					$select
						.addClass('hasCustomSelect')
						.on('render.customSelect', function () {
							changed($select,customSelectSpan);
							$select.css('width','');			
							var selectBoxWidth = $select.data('width')?$select.data('width'):parseInt($select.outerWidth(), 10);
							var selectBoxHeight = $select.data('height')?$select.data('height'):$select.outerHeight();
							// Set to inline-block before calculating outerHeight
							customSelectSpan.css({
								display: 'inline-block',
								position: options.absolute ? 'static' : 'absolute'
							});
							
							
	
							if ($select.attr('disabled')) {
								customSelectSpan.addClass(getClass('Disabled'));
							} else {
								customSelectSpan.removeClass(getClass('Disabled'));
							}
	
							customSelectInnerSpan.css({
								width:   selectBoxWidth-options.skew,
								display: 'inline-block'
							});
	
							$select.css({
								'-webkit-appearance': 'menulist-button',
								width:                selectBoxWidth,
								position:             'absolute',
								opacity:              0,
								height:               selectBoxHeight,
								fontSize:             customSelectSpan.css('font-size')
							});
							
							$('#'+warpId).css({
								width:                selectBoxWidth,
								height:               selectBoxHeight
							});
							
						})
						.on('change.customSelect', function () {
							customSelectSpan.addClass(getClass('Changed'));
							changed($select,customSelectSpan);
						})
						.on('keyup.customSelect', function (e) {
							if(!customSelectSpan.hasClass(getClass('Open'))){
								$select.trigger('blur.customSelect');
								$select.trigger('focus.customSelect');
							}else{
								if(e.which==13||e.which==27){
									changed($select,customSelectSpan);
								}
							}
						})
						.on('mousedown.customSelect', function () {
							customSelectSpan.removeClass(getClass('Changed'));
						})
						.on('mouseup.customSelect', function (e) {
							
							if( !customSelectSpan.hasClass(getClass('Open'))){
								// if FF and there are other selects open, just apply focus
								if($('.'+getClass('Open')).not(customSelectSpan).length>0 && typeof InstallTrigger !== 'undefined'){
									$select.trigger('focus.customSelect');
								}else{
									customSelectSpan.addClass(getClass('Open'));
									e.stopPropagation();
									$(document).one('mouseup.customSelect', function (e) {
										if( e.target != $select.get(0) && $.inArray(e.target,$select.find('*').get()) < 0 ){
											$select.trigger('blur.customSelect');
										}else{
											changed($select,customSelectSpan);
										}
									});
								}
							}
						})
						.on('focus.customSelect', function () {
							customSelectSpan.removeClass(getClass('Changed')).addClass(getClass('Focus'));
						})
						.on('blur.customSelect', function () {
							customSelectSpan.removeClass(getClass('Focus')+' '+getClass('Open'));
						})
						.on('mouseenter.customSelect', function () {
							customSelectSpan.addClass(getClass('Hover'));
						})
						.on('mouseleave.customSelect', function () {
							customSelectSpan.removeClass(getClass('Hover'));
						})
						.trigger('render.customSelect');
				}
            });
        },
		toFullScreen: function(){
			var elmt = $(this).get(0);
			var satus = $(this).data('fsc');
			var prefix =  elmt.requestFullscreen ? 'w3c' :  elmt.mozRequestFullScreen ? 'moz' :  elmt.webkitRequestFullScreen ? 'webkit' : elmt.msRequestFullscreen ? 'ms':'';
			var types = {
				moz: {
					change: 'mozfullscreenchange',
					full: 'mozRequestFullScreen',
					cancel: 'mozCancelFullScreen',
					state: 'mozFullScreen'
				},
				webkit: {
					change: 'webkitfullscreenchange',
					full: 'webkitRequestFullScreen',
					cancel: 'webkitCancelFullScreen',
					state: 'webkitIsFullScreen'
				},
				ms : {
					change: 'msfullscreenchange',
					full: 'msRequestFullscreen',
					cancel: 'msExitFullscreen',
					state: 'msIsFullScreen'
				},
				w3c: {
					change: 'fullscreenchange',
					full: 'requestFullscreen',
					cancel: 'exitFullscreen',
					state: 'fullscreen'
				}
			}		
			if(prefix) {
				var op = types[prefix].full,
				st = types[prefix].cancel;
				(!satus || satus==0) ? elmt[op]() : document[st]();
				(!satus || satus==0) ? $(this).data('fsc',1) : $(this).data('fsc',0);
				
			}
			else if(!prefix && $.browser.msie && typeof window.ActiveXObject!="undefined"){
				// for Internet Explorer
				try {
					var wscript = new ActiveXObject("WScript.Shell");
					wscript.SendKeys("{F11}");
				} catch(e){
					alert('您IE的安全设置禁止全屏访问，请按F11键切换全屏或使用非IE浏览器.');
				}
			} 
			return this;
		},//IE本地可运行，服务端时因为安全限制不可运行
		disSelection: function() {
			return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
				".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
		},


		checkEvt: function(ckAll,ckItems,fn){
			var table = $(this),ckedArr =[];
			
			table.on('click','.'+ckAll+',.'+ckItems+'',function(){
				var ck = $(this),ckItemsArr = $('.'+ckItems,table),ckAllArr = $('.'+ckAll,table),isAll = false;
				if(ck.hasClass(ckAll)){
					ckAllArr.prop("checked",this.checked);
					ckItemsArr.prop("checked",this.checked);
					isAll = true;
					ckedArr = ckItemsArr.toArray();
				}else if(ck.hasClass(ckItems)){
					var allck = $.array.pick(ckItemsArr,function(a,b){
						return a.checked==false;
					});
					ckAllArr.prop("checked",allck==null ? true : false);
					isAll = false;
					this.checked ? ckedArr.push(this) : $.array.remove(ckedArr,this);
				}
				$.fireEvent(fn.CallBack,[ck,isAll,ckItemsArr,ckedArr]);
			});		
		},
		clearForm: function(){
			$(':input',$(this)).not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');  
		},

		//img preload element extend
		imgpreload : function(settings){
			$.imgpreload(this,settings);
			return this;
		},	
		//Timers
		everyTime: function (interval, label, fn, times, belay) {
			return this.each(function () {
				jQuery.timer.add(this, interval, label, fn, times, belay);
			});
		},
		oneTime: function (interval, label, fn) {
			return this.each(function () {
				jQuery.timer.add(this, interval, label, fn, 1);
			});
		},
		stopTime: function (label, fn) {
			return this.each(function () {
				jQuery.timer.remove(this, label, fn);
			});
		}								
	});
/*Timers*/	
jQuery.extend({
    timer: {
        guid: 1,
        global: {},
        regex: /^([0-9]+)\s*(.*s)?$/,
        powers: { // Yeah this is major overkill...
            'ms': 1,
            'cs': 10,
            'ds': 100,
            's': 1000,
            'das': 10000,
            'hs': 100000,
            'ks': 1000000
        },
        timeParse: function (value) {
            if (value == undefined || value == null) return null;
            var result = this.regex.exec(jQuery.trim(value.toString()));
            if (result[2]) {
                var num = parseInt(result[1], 10);
                var mult = this.powers[result[2]] || 1;
                return num * mult;
            } else {
                return value;
            }
        },
        add: function (element, interval, label, fn, times, belay) {
            var counter = 0;
            if (jQuery.isFunction(label)) {
                if (!times) times = fn;
                fn = label;
                label = interval;
            }
            interval = jQuery.timer.timeParse(interval);
            if (typeof interval != 'number' || isNaN(interval) || interval <= 0) return;
            if (times && times.constructor != Number) {
                belay = !!times;
                times = 0;
            }
            times = times || 0;
            belay = belay || false;
            if (!element.$timers) element.$timers = {};
            if (!element.$timers[label]) element.$timers[label] = {};
            fn.$timerID = fn.$timerID || this.guid++;
            var handler = function () {
                if (belay && this.inProgress) return;
                this.inProgress = true;
                if ((++counter > times && times !== 0) || fn.call(element, counter) === false) jQuery.timer.remove(element, label, fn);
                this.inProgress = false;
            };
            handler.$timerID = fn.$timerID;
            if (!element.$timers[label][fn.$timerID]) element.$timers[label][fn.$timerID] = window.setInterval(handler, interval);
            if (!this.global[label]) this.global[label] = [];
            this.global[label].push(element);
        },
        remove: function (element, label, fn) {
            var timers = element.$timers,
                ret;
            if (timers) {
                if (!label) {
                    for (label in timers) this.remove(element, label, fn);
                } else if (timers[label]) {
                    if (fn) {
                        if (fn.$timerID) {
                            window.clearInterval(timers[label][fn.$timerID]);
                            delete timers[label][fn.$timerID];
                        }
                    } else {
                        for (var fn in timers[label]) {
                            window.clearInterval(timers[label][fn]);
                            delete timers[label][fn];
                        }
                    }
                    for (ret in timers[label]) break;
                    if (!ret) {
                        ret = null;
                        delete timers[label];
                    }
                }
                for (ret in timers) break;
                if (!ret) element.$timers = null;
            }
        }
    }
});
$.browser.msie && $(window).one("unload", function () {
    var global = jQuery.timer.global;
    for (var label in global) {
        var els = global[label],
            i = els.length;
        while (--i) jQuery.timer.remove(els[i], label);
    }
});	


/*! jQuery UI - v1.9.2 - 2014-12-16
* http://jqueryui.com
* Includes: jquery.ui.position.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(e,t,i){return[parseInt(e[0],10)*(c.test(e[0])?t/100:1),parseInt(e[1],10)*(c.test(e[1])?i/100:1)]}function s(t,i){return parseInt(e.css(t,i),10)||0}e.ui=e.ui||{};var a,n=Math.max,r=Math.abs,o=Math.round,h=/left|center|right/,l=/top|center|bottom/,u=/[\+\-]\d+%?/,d=/^\w+/,c=/%$/,p=e.fn.position;e.position={scrollbarWidth:function(){if(a!==t)return a;var i,s,n=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=n.children()[0];return e("body").append(n),i=r.offsetWidth,n.css("overflow","scroll"),s=r.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(t){var i=t.isWindow?"":t.element.css("overflow-x"),s=t.isWindow?"":t.element.css("overflow-y"),a="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,n="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return p.apply(this,arguments);t=e.extend({},t);var a,c,m,f,g,v=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),_=v[0],x=(t.collision||"flip").split(" "),k={};return 9===_.nodeType?(c=v.width(),m=v.height(),f={top:0,left:0}):e.isWindow(_)?(c=v.width(),m=v.height(),f={top:v.scrollTop(),left:v.scrollLeft()}):_.preventDefault?(t.at="left top",c=m=0,f={top:_.pageY,left:_.pageX}):(c=v.outerWidth(),m=v.outerHeight(),f=v.offset()),g=e.extend({},f),e.each(["my","at"],function(){var e,i,s=(t[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):l.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=l.test(s[1])?s[1]:"center",e=u.exec(s[0]),i=u.exec(s[1]),k[this]=[e?e[0]:0,i?i[0]:0],t[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===t.at[0]?g.left+=c:"center"===t.at[0]&&(g.left+=c/2),"bottom"===t.at[1]?g.top+=m:"center"===t.at[1]&&(g.top+=m/2),a=i(k.at,c,m),g.left+=a[0],g.top+=a[1],this.each(function(){var h,l,u=e(this),d=u.outerWidth(),p=u.outerHeight(),_=s(this,"marginLeft"),w=s(this,"marginTop"),T=d+_+s(this,"marginRight")+b.width,S=p+w+s(this,"marginBottom")+b.height,D=e.extend({},g),N=i(k.my,u.outerWidth(),u.outerHeight());"right"===t.my[0]?D.left-=d:"center"===t.my[0]&&(D.left-=d/2),"bottom"===t.my[1]?D.top-=p:"center"===t.my[1]&&(D.top-=p/2),D.left+=N[0],D.top+=N[1],e.support.offsetFractions||(D.left=o(D.left),D.top=o(D.top)),h={marginLeft:_,marginTop:w},e.each(["left","top"],function(i,s){e.ui.position[x[i]]&&e.ui.position[x[i]][s](D,{targetWidth:c,targetHeight:m,elemWidth:d,elemHeight:p,collisionPosition:h,collisionWidth:T,collisionHeight:S,offset:[a[0]+N[0],a[1]+N[1]],my:t.my,at:t.at,within:y,elem:u})}),e.fn.bgiframe&&u.bgiframe(),t.using&&(l=function(e){var i=f.left-D.left,s=i+c-d,a=f.top-D.top,o=a+m-p,h={target:{element:v,left:f.left,top:f.top,width:c,height:m},element:{element:u,left:D.left,top:D.top,width:d,height:p},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":a>0?"bottom":"middle"};d>c&&c>r(i+s)&&(h.horizontal="center"),p>m&&m>r(a+o)&&(h.vertical="middle"),h.important=n(r(i),r(s))>n(r(a),r(o))?"horizontal":"vertical",t.using.call(this,e,h)}),u.offset(e.extend(D,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollLeft:s.offset.left,r=s.width,o=e.left-t.collisionPosition.marginLeft,h=a-o,l=o+t.collisionWidth-r-a;t.collisionWidth>r?h>0&&0>=l?(i=e.left+h+t.collisionWidth-r-a,e.left+=h-i):e.left=l>0&&0>=h?a:h>l?a+r-t.collisionWidth:a:h>0?e.left+=h:l>0?e.left-=l:e.left=n(e.left-o,e.left)},top:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollTop:s.offset.top,r=t.within.height,o=e.top-t.collisionPosition.marginTop,h=a-o,l=o+t.collisionHeight-r-a;t.collisionHeight>r?h>0&&0>=l?(i=e.top+h+t.collisionHeight-r-a,e.top+=h-i):e.top=l>0&&0>=h?a:h>l?a+r-t.collisionHeight:a:h>0?e.top+=h:l>0?e.top-=l:e.top=n(e.top-o,e.top)}},flip:{left:function(e,t){var i,s,a=t.within,n=a.offset.left+a.scrollLeft,o=a.width,h=a.isWindow?a.scrollLeft:a.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,m=-2*t.offset[0];0>u?(i=e.left+c+p+m+t.collisionWidth-o-n,(0>i||r(u)>i)&&(e.left+=c+p+m)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+m-h,(s>0||d>r(s))&&(e.left+=c+p+m))},top:function(e,t){var i,s,a=t.within,n=a.offset.top+a.scrollTop,o=a.height,h=a.isWindow?a.scrollTop:a.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,m="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,f=-2*t.offset[1];0>u?(s=e.top+p+m+f+t.collisionHeight-o-n,e.top+p+m+f>u&&(0>s||r(u)>s)&&(e.top+=p+m+f)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+m+f-h,e.top+p+m+f>d&&(i>0||d>r(i))&&(e.top+=p+m+f))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,a,n,r=document.getElementsByTagName("body")[0],o=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(n in s)t.style[n]=s[n];t.appendChild(o),i=r||document.documentElement,i.insertBefore(t,i.firstChild),o.style.cssText="position: absolute; left: 10.7432222px;",a=e(o).offset().left,e.support.offsetFractions=a>10&&11>a,t.innerHTML="",i.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var i=e.fn.position;e.fn.position=function(s){if(!s||!s.offset)return i.call(this,s);var a=s.offset.split(" "),n=s.at.split(" ");return 1===a.length&&(a[1]=a[0]),/^\d/.test(a[0])&&(a[0]="+"+a[0]),/^\d/.test(a[1])&&(a[1]="+"+a[1]),1===n.length&&(/left|center|right/.test(n[0])?n[1]="center":(n[1]=n[0],n[0]="center")),i.call(this,e.extend(s,{at:n[0]+a[0]+" "+n[1]+a[1],offset:t}))}}(jQuery)})(jQuery);
	
ZUI.Overlay = new $.Class({
	options : {
		color: '#000',
		opacity: 0.5,
		effect: 'none',
		zIndex:1000,
		container:null,
		closeOnClick: true,
		duration:150,
		clickHide:false,
		monitor:true,//监听容器变化
		onOpen:$.noop,
		onHide:$.noop
	}, // end defaults
	initialize: function(options) {
		this.options = $.extend({},this.options, options);

		this.container = this.options.container ? $('#'+this.options.container) : 'body';
		var GID = 'over' + $.GUID();
		this.ovOpen = false;
		//Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);


		var overlay = $('<div class="overlay" id='+GID+'></div>')
					  .css({
						background: this.options.color,
						opacity: this.options.opacity,
						position: 'absolute',
						zIndex: this.options.zIndex,
						display: 'none',
						overflow: 'hidden'
					  });
				  
		$('body').append(overlay);
		this.overlay = $(overlay);
		this.fixSize();
		this.options.clickHide && this.overlay.bind('click', $.proxy(function(){
			this.close();
		},this));
		$(window).resize($.proxy(function(){
			this.ovOpen && this.fixSize();
		},this));
	},
	fixSize: function(){
		if(!this.ovOpen){
			this.overlay.css({
				top: this.container == 'body' ? 0 : this.container.offset().top ,
				left: this.container == 'body' ? 0 : this.container.offset().left ,
				width: this.container == 'body' ? '100%' : this.container.outerWidth(),
				height: this.container == 'body' ?  Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) : this.container.outerHeight()
			});
		}
	},
	open : function(){
			this.options.monitor && this.fixSize();
			this.overlay.fadeIn(this.options.duration, $.proxy(function(){
				this.ovOpen = true;
				$.fireEvent(this.options.onOpen,[this.overlay]);
			},this));
	}, 
	close : function(){
			this.overlay.fadeOut(this.options.duration, $.proxy(function(){
				this.ovOpen = false;
				$.fireEvent(this.options.onHide,[this.overlay]);
			},this));

	},
	toElement: function(){
		return this.overlay;
	}
});

/*
description:ZUI.FullBg class
author:Yafully Zhao
Ite IE9 use image inject warper ,other Browser use css3
*/
ZUI.FullBg = new $.Class({
	options: {
		warpClass:'Fbg_wrapper',
		imgClass: 'Fbg_img',//图片样式
		center: true,//是否剧中
		minWidth: 1024,
		minHeight: 768,
		primary: 'auto',
		injectElement: null,//图片插入的容器，null时默认为body
		sizeElement: window, // resize的参照对象
		onBusy:$.noop,
		onLoad:$.noop,
		onComplete:$.noop,
		onErro:$.noop
	},

	initialize: function(image, options){
		options = options || {};
		options.primary = options.primary && $.array.contains(['width', 'height', 'auto'],options.primary) ? options.primary : 'auto';
		
		this.options = $.extend({},this.options, options);
		//if (!this.options.injectElement) this.options.injectElement = $('body');
		this.warper = this.options.injectElement ? $('#'+this.options.injectElement).addClass(this.options.warpClass) : $('body');
		this.warper.disSelection();//disable mouse select

		if($.browser.oldIE){
			this.image = $('<img>', {
					'class':this.options.imgClass
			}).appendTo(this.warper);
			
			$(window).on('resize',$.proxy(function () {
				this.resize();
			},this));
			
		}
		// *** Permanently bind some methods
//		this.resize = this.resize.bind(this);
//		this.inject = this.inject.bind(this);
		// *** Load the image

		// In case browser does not support load event for images
		this.BgLoad(image);
		
	},

	BgLoad:function(url){
		if(this.busy){
			//this.fireEvent('busy',this.warper);
			$.fireEvent(this.options.onBusy, [this.warper]);
			return;
		}
		this.busy = true;
		this.warper.fadeTo(200,.5);

		$.fireEvent(this.options.onLoad,[this.warper]);
		var image = new Image(),self = this;
		image.onload = function() {
			self.inject(url);
			self.warper.fadeTo(400,1,function(){
				self.busy = false;
			});
			$.fireEvent(self.options.onComplete,[self.warper]);
		};
		image.onerror= $.proxy(function(){
			self.busy = false;
			$.fireEvent(self.options.onErro,[self.warper]);
		},this);
		image.src = url;
				
	},
	inject: function(url){
		if($.browser.oldIE){ //iteIE8
		
			 this.image.attr('src',url);
			 this.resize();
		}else{
			 this.warper.css('backgroundImage','url(' + url + ')');
		}
		
		
		return this;
	},

	resize: function(){
		var sizeEl = $(this.options.sizeElement),
			rate = sizeEl.width() / sizeEl.height(),
			styles = {};

		if (!this.size || this.size.x == 0){
			// *** Detect image size
			this.size = this.image;
			
			if (this.size.width() == 0) return this; // Not loaded yet
			this.rate = this.size.width() / this.size.height();
		}

		// *** Set first dimension size
		if (this.options.primary == 'width' || (this.options.primary == 'auto' && this.rate < rate)){
			styles.width  = sizeEl.width();
			styles.height = null;
		} else if (this.options.primary == 'height' || (this.options.primary == 'auto' && this.rate > rate)){
			styles.width  = null;
			styles.height = sizeEl.height();
		} else {
			// *** Perfect fit!
			styles.width  = sizeEl.width();
			styles.height = sizeEl.height();
		}

		// *** Min width && height
		if (styles.width  !== null && this.options.minWidth  > styles.width)  styles.width  = this.options.minWidth;
		if (styles.height !== null && this.options.minHeight > styles.height) styles.height = this.options.minHeight;

		// *** Calculate second dimension size
		if (styles.width  === null) styles.width  = Math.round(styles.height * this.size.width() / this.size.height());
		if (styles.height === null) styles.height = Math.round(styles.width  * this.size.height() / this.size.width());

		// *** Position in the center of the screen
		if (this.options.center){
			// *** Horizontal
			if (styles.width > sizeEl.width()){styles.left = 0 - Math.round((styles.width - sizeEl.width()) / 2)}
			else if (styles.width < sizeEl.width()){styles.left = Math.round((sizeEl.width() - styles.width) / 2)}
			else {styles.left = 0};

			// *** Vertical
			if (styles.height > sizeEl.height()){styles.top = 0 - Math.round((styles.height - sizeEl.height()) / 2)}
			else if (styles.height < sizeEl.height()){styles.top = Math.round((sizeEl.height() - styles.height) / 2)}
			else {styles.top = 0}
		}

		this.image.css(styles);
		return this;
	}

});


/*
---
description: Content Impress - Highlight web page content

authors:
- YafullyZhao

requires:
- Element.Event
- Element.Style
- Element.Dimenstions
- String
- Array
- more.mesure
...
*/

ZUI.Impress = new $.Class({
	options:{
		color: '#333',
		opacity: 0.9,
		active: false,
		zIndex: 999,
		control:null,
		txtbox:null,
		dragHand:null,
		bgclose:false,
		onEvent:$.noop
	},
	initialize: function(options){
		this.options = $.extend({},this.options, options);
		this.Tblock = $('<div class="imblk"></div>').appendTo("body");
		this.Lblock = $('<div class="imblk"></div>').appendTo("body");
		this.Rblock = $('<div class="imblk"></div>').appendTo("body");
		this.Bblock = $('<div class="imblk"></div>').appendTo("body");
		this.BlockBox = $('<div>',{
							'class':'asd_Impress',		
							css:{'zIndex':this.options.zIndex + 1}
							}).appendTo("body");
		this.Block;
		$('.imblk').css({
			'display':'none',				  
			'position':'absolute',
			'background': this.options.color,
			'opacity': this.options.opacity,
			'zIndex': this.options.zIndex				
		});
		this.options.bgclose && $('.imblk').on('click',$.proxy(function(){
			this.removeBounds();
			this.options.active = false;
		},this));


        	this.options.control&&
			$('#'+this.options.control)
			 .css('zIndex',this.options.zIndex + 2)
			 .on('click','a',$.proxy(function(e){
				 var linkTg = $(e.target);
				 $.fireEvent(this.options.onEvent,[linkTg]);//这里有构建顺序						  
				 var imId = linkTg.attr('rel');																				  
				 if(imId == 'close'){
					this.options.active = false; 
					this.removeBounds();
				  }else{
					this.Block = $('#'+imId);
					this.setBounds(this.blockSize(this.Block));
					$('#'+this.options.txtbox).html(linkTg.data('info'));
					this.options.active = true;
				 }
				 $(this).siblings().removeClass('asd_imhover');
				 $(this).addClass('asd_imhover');

			  },this));
			  
			//this.options.dragHand &&  new ZUI.Drag('#'+this.options.control, {handle:this.options.dragHand});	 
		
			
			$(window).resize($.proxy(function(){									
				this.options.active && this.setBounds(this.blockSize());
			},this));		
	},
	isActive: function(){
		return this.options.active;
	},//判断是否显示

	blockSize: function(tg){
			var el =  tg ? tg : this.Block; 
			var elWidth = el.is(":hidden") ? el.measure().outerWidth : el.outerWidth();
			var elHeight = el.is(":hidden") ? el.measure().outerHeight : el.outerHeight();
			var elPosx = el.is(":hidden") ? el.measure().left : el.offset().left;
			var elPosy = el.is(":hidden") ? el.measure().top : el.offset().top;
			
			//LEFT BLOCK
			var leftHeight = this.getBodyHeight() - ( this.getBodyHeight() - elHeight) ;
			var leftWidth =  elPosx;

			//RIGHT BLOCK
			var rightWidth =  $("body").width() - (leftWidth + elWidth);
			var rightPosx = elPosx + elWidth;

			var topHeight = elPosy;

			//BOTTOM BLOCK
			var bodyH = this.getBodyHeight();	
			var bottomHeight = bodyH - elPosy - elHeight;
            var bottomPosy = elPosy + elHeight;
		
			return {lw:leftWidth,lh:leftHeight,ly:elPosy,rw:rightWidth,rx:rightPosx,th:topHeight,bh:bottomHeight,by:bottomPosy,ow:elWidth,oh:elHeight}
		},
    setBounds: function(size){
	    try{
				this.Lblock.css({
					'display':'block',				  
					'top': size.ly,
					'left': 0,
					'width': size.lw,
					'height': size.lh
				});//Left
				this.Rblock.css({
					'display':'block',				  
					'top': size.ly,
					'left': size.rx,
					'width': size.rw,
					'height': size.lh
				});//Right
				this.Tblock.css({
					'display':'block',				  
					'top': 0,
					'left': 0,
					'width': '100%',
					'height': size.th
				});//Top
				this.Bblock.css({
					'display':'block',				  
					'top': size.by,
					'left': 0,
					'width': '100%',
					'height': size.bh
				});//Bottom
				
				this.BlockBox.css({
					'display':'block',				  
					'top': size.ly - 2,
					'left': size.lw - 2,
					'width': size.ow ,
					'height': size.oh
				});//BorderBox

			}catch(err){alert(err)}//Ie7bug
		},
	removeBounds: function(){                                
        $('.imblk').hide();
		this.BlockBox.hide();
		this.options.control && $('#'+this.options.control).hide();
		//this.fireEvent('close');		
	},
	showCtrol: function(){
	    if(!this.options.active && $('#'+this.options.control))$('#'+this.options.control).show()
    },
	getBodyHeight: function(){
		return Math.max(
		Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
		Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
		Math.max(document.body.clientHeight, document.documentElement.clientHeight)
		);
	},
	getBlock: function(){
	    return this.BlockBox
	}
});
/*
ASDUI.Box 
autor:Yafullyzhao
date:2010.10.25
version:1.3
*/
ZUI.Box = new $.Class({
	options: {
		zIndex: 30,
		onReturn: false,
		display: 0,
		width: 280,
		height: 140,
		Useoverlay: true,
		closeDuration: 300,
		esc:false,
		//moveEffect: linear,
		onShowStart: function () {},
		onCloseStart: function () {},
		errorTxt:'数据请求失败,请稍后再试.',
		sound:false,
		properties: {
			'mywidth': 400,
			'myheight': 300,
			'boxtitle': '',
			'textBoxBtnOk': '确 定',
			'textBoxBtnCancel': '取 消',
			'chiantrue': '',
			'chianfalse': '',
			'backinfo': '',
			'password': false,
			'auto': false,
			'autoduration': 0,
			'bar':null
		}
	},
	initialize: function (options) {
		this.i = 0;
		this.options = $.extend({},this.options, options);
		this.SID = $.GUID();
		this.boxInfo = {};
		var boxId = 'Box' + this.SID,
			titleId = 'Btit' + this.SID,//标题ID
			closeId = 'Close' + this.SID,//关闭ID
			CondorId = 'Condor' + this.SID,
			InBoxId = 'Inbox' + this.SID,//Box主体ID
			InnerId = 'Inner' + this.SID,//内容容器ID
			BarId = 'Bar' + this.SID,//内容容器ID
			LoadId = 'Load' + this.SID;//loading ID
		
		var BoxCd = '<div class="ASDBox-InBoxTop"><div id="'+titleId+'" class="boxtile"></div><a href="javascript:;" class="closebtn" id="'+closeId+'"></a></div>';//Top
			BoxCd += '<div class="ASDBox-InBox" id="'+InBoxId+'"><div class="ASDBox-BoxContent" id="'+CondorId+'"><div id="'+InnerId+'"></div></div></div>';//Body
			BoxCd += '<div class="ASDBox-Buttons" id="'+BarId+'"></div>';
			BoxCd +='<div class="ASDloading" id="'+LoadId+'">正在请求数据...</div>';//Other
			
		if(this.options.Useoverlay)this.Overlay = new ZUI.Overlay({Oclass:'overlay',color: '#a1a1a1',duration: 300,zIndex:this.options.zIndex,opacity: 0.4});
		//if(this.options.sound)this.Sound = $.Audio('sound/','smallbox');
		this.Box = $("<div>",{
			'class': 'ASD_Abox',
			id: boxId,
			html: BoxCd,
			css:{
				'visibility':'hidden',
				'display':$.support.ani ? null : 'none',
				'zIndex': -1,
				'position': ($.browser.msie && $.browser.version < 7) ? 'absolute' : 'fixed'				
			}
		}).appendTo("body");		
		

		var self = this;
		this.InBox = $('#'+InBoxId);
		this.boxtitle = $('#'+titleId);
		this.Contenedor = $('#'+CondorId);
		this.Content = $('#'+InnerId);
		this.BtnBox = $('#'+BarId);
		this.loadBg = $('#'+LoadId);  
		this.closebtn = $('#'+closeId)
		.on('click', $.proxy(function(){
			this.options.onReturn = false;
			this.display(0);
		},this));
		$(window).resize($.proxy(function(){
			this.replaceBox();
		},this));
		this.options.esc && $(document).keydown($.proxy(function(e){
			if (e.keyCode == 27) {
				this.Box.stopTime ('D');
				this.options.display == 1 && this.display(0);
				
			}
		},this));
		($.browser.msie && $.browser.version < 7) && $(window).scroll($.proxy(function(){this.replaceBox()},this));
		
	},
	display: function (option) {
		
		// Show Box	
		if (this.options.display == 0 && option != 0 || option == 1) {
			this.Overlay && this.Overlay.open();
			this.showBox(true);
			this.Sound && this.Sound.play();
			if(this.options.sound)this.Sound = $.Audio('sound/','smallbox');
			//this.fireEvent('onShowStart', [this.Overlay]);
		}
		// Close Box
		else {
			$.fireEvent(this.options.onCloseStart, [this.boxInfo.type,this.boxInfo.message,this.Content]);
			this.showBox(false);
			switch(this.boxInfo.type){
				case 'myframe':
					this.ifram.attr({src: 'about:blank'}).remove();
				break;
				case 'myhtml':
					var repBox = $('.htmlIDBox'),hbox = repBox.data('hid'),crash = repBox.data('tid');
					crash && $(crash).replaceWith($(hbox).attr('class',null));
				break;
			}
			this.Content.empty();
			this.BtnBox && this.BtnBox.empty();
			this.loadbar(0);
			this.Overlay && this.Overlay.close();
			//this.Sound&&this.Sound.pause();
			
		}
	},
	showBox: function(opt){
		this.options.display = opt ? 1 : 0;
		this.Box.css({'zIndex':opt ? this.options.zIndex+2 : -1,'visibility':opt ? 'visible' : 'hidden','display':opt ? 'block':'none'}).toggleClass('fadeInTop');
		opt && this.replaceBox();
	},
	loadbar: function (option) {
		option ? this.loadBg.show() : this.loadBg.hide();
	},
	replaceBox: function () {
		if(this.options.display != 1) return;
		this.Box.cmPos();
	},

	toolBar: function(type,properties){
		
			this.BtnBox.css('width',(properties.mywidth -2) ||(this.options.width-2));
			switch (type) {
				case 'alert':
					return this.BtnOk = $('<input/>', {
						'class': 'button',
						type: 'button',
						val: this.options.properties.textBoxBtnOk
					}).appendTo(this.BtnBox);			
					break;

				case 'prompt':
				case 'confirm':
				   return[
						this.BtnOk = $('<input/>', {
							'class': 'button',
							type: 'button',
							val: properties.textBoxBtnOk ? properties.textBoxBtnOk : this.options.properties.textBoxBtnOk
						}).appendTo(this.BtnBox),
						this.BtnCancel = $('<input/>', {
							'class': 'button',
							'type': 'button',
							val: properties.textBoxBtnCancel ? properties.textBoxBtnCancel : this.options.properties.textBoxBtnCancel
						}).appendTo(this.BtnBox)
					];
				   break;

				default:
				  $.isFunction(properties.bar) ? this.BtnBox.append(properties.bar.call()) : null;
				 
				break;	
			}
		},	
	getTitle: function(){
		return this.boxtitle;
		},	
	getContent: function(){
		return this.Contenedor;
		},
	getFrame: function(){
		return this.ifram.contents();
		},
	getFrameName: function(){
		return this.ifram.name;
	},		
	messageBox: function (type, message, properties, input, chiantrue, chianfalse) {
			if(this.options.display==1)return;
			this.boxInfo.type = type;
			this.boxInfo.message = message;
			
			
			this.boxtitle.text(properties.boxtitle);
			this.toolBar(type,properties);//创建底部toolbar
			switch (type) {
			case 'alert':
			case 'prompt':
			case 'confirm':
				this.clase = 'BoxAlert';
				this.InBox.css({
					width:this.options.width,
					height:this.options.height
				});				
			break;
			case 'myhtml':
			case 'myAjax':
				this.clase = 'myhtmls';
				this.InBox.css({
					width: properties.mywidth,
					height: properties.myheight
				});
			break;
			case 'flash':
			case 'myframe':
			case 'myMessage':
				this.clase = 'Boxhtmls';
				this.InBox.css({
					width: properties.mywidth ,
					height: properties.myheight
				});			
			break;
			default:
				this.InBox.css({
					width: 'auto',
					height: 'auto'
				});			
			break;
			}
			this.Content.attr('class', this.clase);
			if (properties.autoduration > 0 && this.options.display !== 0 || properties.autoduration > 0 && this.options.display == 0) {
				this.options.onReturn = true;
//				this.autoclose = setTimeout($.proxy(function() {
//					this.display(0);
//				}, this), properties.autoduration);
				
				this.Box.oneTime(properties.autoduration+'ms','D',$.proxy(function() {
					this.display(0);
				},this));
			}
			properties.auto ? this.closebtn.hide() : this.closebtn.show();
			//\\toolbar	 
			switch (type) {
			case 'alert':
				{
					this.BtnOk.on('click', $.proxy(function(){
						this.options.onReturn = true;
						$.fireEvent(properties.callback);
						this.display(0);
					},this));
					this.Content.html(message);
					this.display(1);
					break;
				}
			case 'confirm':{
					this.BtnOk.on('click', $.proxy(function(){
						this.options.onReturn = true;
						$.fireEvent(properties.callback);
						this.display(0);
					},this));

					this.BtnCancel.on('click', $.proxy(function(){
						this.options.onReturn = false;
						$.fireEvent(properties.onCancle);
						this.display(0);
					},this));
					this.Content.html(message);
					this.display(1);
					break;
				}
			case 'prompt':{
					this.PromptInput = $('<input/>', {
						type: this.options.properties.password ? 'password' : 'text',
						val: '',
						css: {
							'width': '250'
						}
					});

					this.BtnOk.on('click', $.proxy(function(){
						this.options.onReturn = true;
						$.fireEvent(properties.callback,[this.PromptInput.val(),this]);
					},this));

					this.BtnCancel.on('click', $.proxy(function(){
						this.options.onReturn = false;
						this.display(0);
					},this));

					this.Content.html(message + '<br />');
					this.PromptInput.appendTo(this.Content);
					$('<br/>').appendTo(this.Content);
					this.display(1);
					break;
				}
			case 'flash':
				{
					$.swf.create(this.Content,{id:'myswf',url:message,width:'100%',height:'100%',bgcolor:'#fff'});
					this.display(1);
					break;
				}
			case 'myhtml':
				{
					var obj01 = $('<div>').appendTo(this.Content);
					
					if(typeof message === 'string'){
						obj01.append(message);
					}else{
						
						var htmlId = 'htmlbox' + message.attr('id') + this.SID,crashId = message.attr('id') + this.SID;				
						var obj02 = $('<div>', {id: crashId}).appendTo(message);
						obj01.replaceWith(message.children().first().addClass('htmlIDBox').attr('id', htmlId).data('hid','#'+htmlId).data('tid','#'+crashId));

					}
					this.display(1);
					$.fireEvent(properties.callback,['#'+htmlId,this.Content]);
					break;
				}

			case 'myframe':
				{
					this.ifram = $('<iframe>', {
					   src: message,
					   id: 'Frame' + this.SID,
					   'class':'YFrame',
                       name: 'myframes' + this.SID,
					   frameborder: 0,
					   allowTransparency: 'true',
					   load: $.proxy(function(){
						   this.loadbar(0);
					   },this)
					}).appendTo(this.Content);
					$.fireEvent(properties.callback,[this.ifram,this.Content]);
					this.display(1);
					this.loadbar(1);
					break;
				}
			case 'myAjax':
				{
					var obj02 = $('<div>', {
						'class': 'myAjax'
					}).appendTo(this.Content);
					
					$.ajax({
						url: message,
						data: properties.params || {},
						beforeSend:$.proxy(function(){
							this.loadbar(1);
						},this),
						success: $.proxy(function(html, other){
							obj02.html(html);
							this.loadbar(0);
						},this),
						error: $.proxy(function(){
							obj02.remove();
							this.loadbar(0);
							this.myMessage('加载出了点问题T T',{mywidth:'400',myheight:'80',Mstyle:'Yerro',boxtitle:'Erro'});
						},this)
					});
					this.display(1);
					
					break;
				}
			case 'myMessage':
				{
					var obj03 = $('<div>', {
						'class': properties.Mstyle,
						html:'<div>'+message+'</div>'
					}).appendTo(this.Content);
					$.fireEvent(properties.callback,[obj03,this.Content]);
					obj03.on('click', $.proxy(function(){
						this.options.onReturn = false;
						
						this.Box.stopTime ('D');
						this.display(0);
						this.options.display = 1;
					},this));
					this.display(1);
					break;
				}
			default:
				{
					this.options.onReturn = false;
					this.display(0);
				}
			}

	},
	error: function(message) {
		alert(message);
		this.display(0);
	},	
	alert: function (message, properties) {
		this.messageBox('alert', message, properties);
	},
	confirm: function (message, properties) {
		this.messageBox('confirm', message, properties);
	},

	prompt: function (message, properties) {
		this.messageBox('prompt', message, properties);
	},
	flash: function (message, properties) {
		this.messageBox('flash', message, properties);
	},
	myhtml: function (message, properties) {
		this.messageBox('myhtml', message, properties);
	},
	myframe: function (message, properties) {
		this.messageBox('myframe', message, properties);
	},
	myAjax: function (message, properties) {
		this.messageBox('myAjax', message, properties);
	},
	myMessage: function (message, properties) {
		this.messageBox('myMessage', message, properties);
	}
});
/*ZUI.Img
---
ZUI.Img Class
author:YafullyZhao
date:2011.06.15
...

*/
ZUI.Img = new $.Class({
    options: {
		zIndex: 3000,
		Useoverlay: true,
        imgshow: 0,
        moveDuration: 300,
        moveEffect:'linear',
		Selector:'a[rel=YafullyImg]',
		urlAttr:'big',
		titAttr:'title',
		album:'',
		bnb:0,
		imgToolbar:true,
		loadingTxt:'正在请求数据...',
		clickHide:false,
		thumbs:null,
		thumbProp:'href',
		skew:{w:8,h:8},
		preload:false,
		onLoad:$.noop,
		onShow:$.noop,
		onDelet:$.noop
    },
    initialize: function (options) {
        this.options = $.extend({},this.options, options);
		this.ID = $.GUID();this.thumbRend=false;
        var boxId = 'IgBox' + this.ID,
			titleId = 'Igtit' + this.ID,//标题ID
		    closeId = 'IgClose' + this.ID,//关闭ID
			InBoxId = 'IgInbox' + this.ID,//Box主体ID
			ImgId = 'Ig' + this.ID,//图片ID
			LoadId = 'IgLoad' + this.ID,
			NumId = 'IgNum' + this.ID,
			thumbId = 'thumb' + this.ID,
			arrId = 'Igarr' + this.ID;
					
		var ImgCd = '<em class="ASDImgClose" id="'+closeId+'"></em>';//Top
			ImgCd += '<div class="ASDBox-InBox" id="'+InBoxId+'"><img id="'+ImgId+'" src="about:blank" class="imgbox"></div>';//Body	
			ImgCd +='<div class="ASDloading" id="'+LoadId+'">'+this.options.loadingTxt+'</div><span class="numbox" id="'+NumId+'">NaN</span>';//Other
			//ImgCd +='<div class="ASDarrBox" id="'+arrId+'"></div>';
			ImgCd +='<div class="ASDImgTit"><span id="'+titleId+'"></span></div>';
					
		this.Overlay = new ZUI.Overlay({Oclass:'overlay',color: '#000',duration: 300,zIndex:this.options.zIndex,opacity: 0.4});	
		var OverElemt = this.Overlay.toElement();
		this.options.clickHide && OverElemt.on('click',$.proxy(function(){
			this.hideBox();
		},this));	
		
        this.Box = $("<div>", {
            'class':'ASD-Img',
			'id':boxId,
			html:ImgCd,
            css: {
                'z-index': this.options.zIndex + 2,
				'top':($(window).height()-400)/2,
				'left':($(window).width()-300)/2,
                'position': $.browser.IE6 ? 'absolute' : 'fixed'
            }
        }).appendTo("body");
		
		this.arrBox =$("<div>", {'class':'ASDarrBox','id':arrId,css:{'display':'none','z-index': this.options.zIndex + 5}}).appendTo("body");
		
		if(this.options.thumbs)
		this.thumbBox = $("<div>", {
            'class':'ASD-Thumb',
			'id':thumbId,
            css: {
				'width':'100%',
				'height':'60px',
				'left':0,
				'bottom':'-100px',
                'z-index': this.options.zIndex + 2,
                'position': $.browser.IE6 ? 'absolute' : 'fixed'
				
            }
        }).appendTo("body");
		
		this.boxtitle = $('#'+titleId);
		this.closebtn = $('#'+closeId)
		.on('click', $.proxy(function(){
            this.hideBox();
        },this));			
        this.InBox = $('#'+InBoxId);
		this.imgbox = $('#'+ImgId);
		this.loadbar = $('#'+LoadId);
		this.numbox = $('#'+NumId);
		//this.arrBox = $('#'+arrId);
		this.img_Id = null;
		this.options.imgToolbar && this.imgTool();
		$(window).on('resize',$.proxy(function () {
				if(!this.imgShow)return;	
				this.Box.stopTime ('D');
				this.imgbox.hide();
				this.Box.oneTime('500ms','D',$.proxy(this.anibox,this));
				
		},this));		
		
        this.prepair();
		
    },
	mkThumb: function(){
		this.thumbRend && this.thumbBox.empty();
		var urls = $.isArray(this.options.thumbs) ? this.options.thumbs : $.array.pluck($(this.options.thumbs),this.options.thumbProp),self = this,thumbStr='<ol class="fcenter">';
		
		$.each(urls,function(i,el){
			thumbStr +='<li data-rel="'+i+'">';
			thumbStr += self.options.preload ? '<img src="'+el+'"/><em class="ASD-ThumbOv"></em>' : '<img src="'+el+'"/>';
			thumbStr +='</li>'
		});
		thumbStr +='</ol>';
		this.thumbBox
		.on('click','li',function(){
			
			var num = $(this).data('rel'),title = self.cache[num].tit,url = self.cache[num].url;
			self.curtimg(url,title,num);
			
		})
		.append(thumbStr);
		this.thumbRend = true;
	},
	imgTool: function(){
		this.toolbox = $('<a>', {'class': 'img_tools',html:'<tt>×</tt>删除','href':'javascript:'})
		.on('click',$.proxy(function(){
		   imga = $('#'+this.options.album).find(this.options.Selector);
		   try{
		   		this.img_Id = $(imga[this.nowpages - 1]).attr('id');
				$.fireEvent(this.options.onDelet, [this.img_Id,this.Box]);
		   }catch(err){
			   alert('无法获取元素id');
			   return;
		   }
		   console.log(this.cache);
		   console.log(this.nowpages - 1);
		   console.log($.array.removeAt(this.cache,[this.nowpages - 1]));
		   $(imga[this.nowpages - 1]).remove();
		   
		   this.prepair();
		   //alert(nowpages+'|'+this.total);
		   if(this.nowpages>this.total && this.total>=1){
			   
			   this.dopre();
			   this.next.hide();
			   this.prev.show();
			   if(this.total==1)this.prev.hide();
		   }
		   else if(this.nowpages<=this.total || this.nowpages<=this.total && this.nowpages==1){
			   
			   url = $(imga[this.nowpages]).data('url');
			   title = $(imga[this.nowpages]).data('title');			   
			   this.curtimg(url,title,this.nowpages);
			   this.prev.show();
			   
			   if(this.total===1||this.total==this.nowpages)this.next.hide();
			   if(this.nowpages==1)this.prev.hide();
		   }
		   else if(this.total===0){
               this.hideBox()
		   }
		},this)).appendTo(this.Box);
	},
	prepair: function(options){
		if(this.options.bnb === 1){

			   this.next.remove();
			   this.prev.remove();	   					
		 };
		this.thumbRend	&& this.thumbBox.empty();	
		this.detach($('#'+this.options.album));//清除事件顺便触发默认按钮记录数执行上面的方法

		this.options = $.extend({},this.options, options);
		
		if(this.options.thumbs){ 
			this.mkThumb();
			this.ThumbLis = this.thumbBox.find('li');
		}
		this.events = {};this.cache=[];this.current = -1;this.imgShow=false;this.nowpages = 0;this.thumbSatus=false;
		
		var imga = $('#'+this.options.album).find(this.options.Selector),self = this;

		imga.each(function(i,el){
			var data = {
				imgObj: new Image(),
				loaded:false,
				url:$(el).data(self.options.urlAttr),
				tit:$(el).data(self.options.titAttr)
			};
			self.cache.push(data);
		});

		
		this.total = imga.length;

		this.events = function(e){
			$(e.target).is('a') && e.preventDefault();
			var aNum = $.array.indexOf(imga,this),title = self.cache[aNum].tit,url = self.cache[aNum].url;
			self.curtimg(url, title, aNum);
		};
		this.donext = function () {
			var next = self.current+1,nexttitle = self.cache[next].tit,nexturl = self.cache[next].url;
			this.curtimg(nexturl, nexttitle, next);
		};
		this.dopre = function () {
			var pre = self.current - 1,prevtitle = self.cache[pre].tit,prevurl = self.cache[pre].url;
			this.curtimg(prevurl, prevtitle, pre);
		};
		this.next = $('<a>', {
			'class': 'img_Pagenext',
			'id': 'Pagenextbtn'
		})
		.on('click', $.proxy(this.donext,this))
		.appendTo(this.arrBox);
		this.prev = $('<a>', {
			'class': 'img_Pageprev',
			'id': 'Pageprevbtn'
		})
		.on('click', $.proxy(this.dopre,this))
		.appendTo(this.arrBox);
		this.attach($('#'+this.options.album));	
	},
	showIndex: function(num){
		this.curtimg(this.cache[num].url,this.cache[num].tit,num);
	},
	attach: function(wraper){
		wraper.on('click',this.options.Selector,this.events);
	},

	detach: function(wraper){
		wraper.off('click',this.options.Selector,this.events);
		this.options.bnb = 1;
	},
		
    imgload: function (url, title,num) {

        this.showBox();
        
		
        this.boxtitle.html(title);
		this.image = this.cache[num].imgObj;
		this.loaded = this.cache[num].loaded;
		
		if(this.loaded){
			this.anibox();
			this.imgbox.attr('src',url);	
		}else{
			this.loadbar.show();
			this.image.onload = $.proxy(function() {
				if($(this.image).attr('src') == url){
	
					this.loadbar.hide();
					this.imgbox.hide();
					this.anibox();
					this.imgbox.attr('src',url);
					this.cache[num].loaded = true;
					$.fireEvent(this.options.onLoad, [this.Box]); 
				}
			},this);
		}
		this.image.onerror= $.proxy(function(){
			this.arrBox.show();
			this.numbox.html('Load failed.');
		},this);
        this.image.src = url;

    },
    anibox: function () {

        this.imgWidth = this.image.width;
        this.imgHeight = this.image.height;

		var thumbH = this.options.thumbs ? 60 : 0, wSizex = $(window).width(),wSizey = $(window).height(),scrollT = $(window).scrollTop(),scrollL = $(window).scrollLeft(),imgMaxW = wSizex - 50,imgMaxH = wSizey - 100 - thumbH;
        if (this.image.width > imgMaxW) {//大于最大宽度时执行
            this.imgWidth = imgMaxW;
            this.imgHeight = this.image.height * (imgMaxW / this.image.width);
            if (this.image.height > imgMaxH) {
                this.imgWidth = this.image.width * (imgMaxH / this.image.height);
                this.imgHeight = imgMaxH;
            }
        } else if (this.image.height > imgMaxH) {//大于最大高度时执行
            this.imgWidth = this.image.width * (imgMaxH / this.image.height);
            this.imgHeight = imgMaxH;
            if (this.image.width > imgMaxW) {
                this.imgHeight = this.image.height * (imgMaxW / this.image.width);
                this.imgWidth = imgMaxW;
            }
        } else if (this.image.height < 200){//小于最小高度时执行
            this.imgWidth = this.image.width * (200 / this.image.height);
            this.imgHeight = 200;
            if (this.imgWidth > imgMaxW) {
                this.imgHeight = this.image.height * (200 / this.image.width);
                this.imgWidth = 200;
            }			
		} else if (this.image.width < 200) {//小于最小宽度时执行

            this.imgHeight = this.image.height * (200 / this.image.width);
			this.imgWidth = 200;
            if (this.imgHeight > imgMaxH){
                this.imgWidth = this.image.width * (imgMaxH / this.image.height);
                this.imgHeight = imgMaxH;
            }
        } 
        ie6y = (scrollT + (wSizey - this.imgHeight-30 - thumbH) * 0.5);
        posy = (wSizey - this.imgHeight-30 - thumbH) * 0.5;
        fixWidth = this.imgWidth;
        fixHeight = this.imgHeight;

		this.Box.animate({
			'width': fixWidth + this.options.skew.w,
            'height': fixHeight + this.options.skew.h,
            'left': (scrollL + (wSizex - fixWidth) / 2),
            'top': $.browser.IE6 ? ie6y : posy
			},{
			duration:this.options.moveDuration,
			easing:this.options.moveEffect,
			start:$.proxy(function(){
				this.closebtn.hide();
			},this),
			complete: $.proxy(function(){
				this.imgbox.css({
					width: (this.image.width > 200&&this.image.height > 200)?fixWidth:'auto',
					height: (this.image.width > 200&&this.image.height > 200)?fixHeight:'auto'
				}).fadeIn(this.options.moveDuration);
				this.closebtn.show();
				this.arrBox.show();
				$.fireEvent(this.options.onShow, [this.Box]);
			},this)
		});

    },
	curtimg: function(url,title,num){
		
		if(this.current == num ) return;

		this.arrBox.hide();
        this.imgbox.hide();
        this.imgload(url, title,num);
		this.nowpages = (num !=null) ? parseInt(num)+1 : this.nowpages;
        this.numbox.html(this.nowpages + '/' + this.total);

		if(this.total>1){
			if(1<this.nowpages && this.nowpages<this.total){
				this.prev.css('left','20px');
				this.next.css('right','20px');
			}else if(this.nowpages==1){
				this.prev.css('left','-100px');
				this.next.css('right','20px');
			}else if(this.nowpages==this.total){
				this.prev.css('left','20px');
				this.next.css('right','-100px');
			}
		}else{
			this.next.hide();
			this.prev.hide();
		}
		if(this.options.thumbs){ 
			this.ThumbLis.removeClass('ASD-ThumbSec');
			$(this.ThumbLis[this.nowpages-1]).addClass('ASD-ThumbSec');
		}
		this.current = this.nowpages - 1;

	},
	showBox:function(){	
		this.Box.show();
		if(!this.thumbSatus){
			this.arrBox.show();
			var self = this;
			this.thumbBox && this.thumbBox.animate({
				bottom:'10px'
			}, self.options.moveDuration,function(){
				self.thumbSatus = true;
			});
		}
		this.Overlay.open();
		this.imgShow=true;
	},
	hideBox:function(){
		if(this.thumbSatus){
			this.thumbBox.css('bottom','-100px');
			this.thumbSatus = false;
		}
		this.arrBox.hide();
		this.imgbox.hide();
		this.Box.hide();
		this.Overlay && this.Overlay.close();
		this.current = -1;
		this.imgShow=false;
	}
});//!Class
/*
Yafully windows rigister
date:2014.06.20
*/
ZUI.WinStack = new $.Class({
	Stack: [],
	WinTop: null,
	ObjStack: [],
	ObjTop: null,
	//StackLength: null,
	BaseZIndex:20,
	regist: function(w,obj,dele,creat){
		$.array.include(this.Stack,w);
		creat && $.array.include(this.ObjStack,obj);
		$.each(this.Stack,$.proxy(function(i, el) {
			var z = this.BaseZIndex+i,k='#'+el;
			if(dele==true && this.Stack.length>1){//关闭现有的情况
				$('#'+w).removeClass('Atop');
				$.array.remove(this.Stack,w);
				$.array.remove(this.ObjStack,obj);
				
				var preW = $('#'+this.Stack[this.Stack.length-1]);
				if(preW.hasClass('Ywin')){
					preW.addClass('Atop').css('zIndex',z);
					this.WinTop = preW;
					this.ObjTop = this.ObjStack[this.Stack.length-1];
				   }else{
					this.WinTop = null;
					this.ObjTop = null;
				}
					   
			 }
			else if(dele==true && this.Stack.length===1){//全体关闭的情况
				$('#'+w).removeClass('Atop');
				//this.Stack.erase(w);
				$.array.remove(this.Stack,w);
				//this.ObjStack.erase(obj);
				$.array.remove(this.ObjStack,obj);
				
				this.WinTop = null;
				this.ObjTop = null;
				this.Stack=[];
				this.ObjStack = [];
			}else{//切换&新增的情况

				if(el==w){
					$(k).addClass('Atop').css('zIndex',z).siblings('.Ywin').removeClass('Atop').css('zIndex',z-10);
					this.WinTop = k;
					this.ObjTop = this.ObjStack[i];
				}
				
			}
			//StackLength = Stack.length;	
		},this));	
		//return [WinTop,StackLength];//返回当前激活窗口和当前开窗个数
	},
   getWinTop: function(){
	    return this.WinTop;
	   },
   getStack: function(){
	    return this.Stack;
	   },
   getObjStack: function(){
	    return this.ObjStack;
	   },	   
   getObjTop: function(){
	    return this.ObjTop;
	   },
   doTop: function(){
		this.doEmpty();
		$.array.include(this.Stack,this.WinTop);
		$.array.include(this.ObjStack,this.ObjTop);		
	   },//在计数器中保留最后一个置顶的窗口
   doEmpty: function(){
	    this.Stack=[];
		this.ObjStack=[];
	   },//完全清空计数器
   findWin: function(Wid){
	   	   //if($('#'+Wid).length<1)return false;
	   	   var indx = null,win = Wid;
		   $.array.contains(this.Stack,win) && $.grep(this.Stack,$.proxy(function(item,index){
																	
				if(item == win){
					$('#'+item).addClass('Atop').css('zIndex',this.BaseZIndex+10).siblings('.Ywin').removeClass('Atop');
					indx = this.ObjStack[index];
					this.WinTop = $('#'+item);
				}
		   },this));
		   return indx;
	   }//最小化时无法获取	   	   
});

var WinManager = new ZUI.WinStack;

/*
Drag&Resize Class v1.0
Author:YafullyZhao
Date:20140624
*/
ZUI.Drag = new $.Class({
	options : {
		minWidth:0,
		minHeight:0,
		mode:'dragging', // 'dragging','resizing',selecting
		ghost:null,
		handle:null,
		container:null,
		resizer:false,
		resizeBox:null,
		secStyle:false,
		onDrag: $.noop,
		onComplete: $.noop
		
	}, // end defaults
	initialize: function(el,options) {
		this.options = $.extend({},this.options, options);
		this.dragBox = $(el);
		this.target = this.options.ghost ? $(this.options.ghost) : this.dragBox;
//		if(this.options.ghost){
//			this.target = $(this.options.ghost);
//		}else if(this.options.ghost && this.options.resizer){
//			this.target = $(this.options.ghost);
//		}
		this.container = this.options.container ? $(this.options.container) : $('body');
		
		this.handle = this.options.handle ? $('#'+this.options.handle) : this.target;//如果handle为空则拖动对象为元素本身，否则必须以handle触发拖动;
		// 最近一个定位的父对象(target.offsetParent)元素在当前视口的相对偏移
		this.cpStyle = this.container.css('position')=='static'?false:true;
		this.info ={};
		this.options.resizer && this.setResizer();
		if(this.options.secStyle){
			this.container.on('mousedown',$.proxy(function(e){
				this.select(e, e.pageX, e.pageY);
			},this));
			this.handle.on('click',function(){
				$(this).hide();
			}).hide();
		}
		this.setContainer();
		$(window).resize($.proxy(this.setContainer,this));
		this.handlers = new Object;
		this.handlers['selecting']= this.eventMethod(this, 'onSelecting');
		this.handlers['dragging'] = this.eventMethod(this, 'onDragging');
		this.handlers['resizing'] = this.eventMethod(this, 'onResizing');
		this.handlers['complete'] = this.eventMethod(this, 'stop');
		this.attach();
	},
	setContainer:function(){
		this.parentOffset = this.container.offset();
		
		this.parentOffset.left+= parseInt(this.container.css('border-left-width'))||0;
		this.parentOffset.top += parseInt(this.container.css('border-top-width')) ||0;


		this.bound = {// 默认为限制在target.offsetParent内
			left  :this.parentOffset.left, 
			top	  :this.parentOffset.top, 
			right :this.parentOffset.left+ this.container.innerWidth(), 
			bottom:this.parentOffset.top + this.container.innerHeight()
		};
		
	},
	setResizer: function(){
		var resizers = '<div class="north-west-resize zuiResize" data-path="north-west"></div><div class="north-resize zuiResize" data-path="north"></div><div class="north-east-resize zuiResize" data-path="north-east"></div><div class="west-resize zuiResize" data-path="west"></div><div class="east-resize zuiResize" data-path="east"></div><div class="south-west-resize zuiResize" data-path="south-west"></div><div class="south-resize zuiResize" data-path="south"></div><div class="south-east-resize zuiResize" data-path="south-east"></div>',resizeBox = this.options.resizeBox ? $('#'+this.options.resizeBox) : this.target,self = this;
		
		
		resizeBox.append(resizers)
		.on('mousedown','.zuiResize',function(e){
			$.fireEvent(self.options.onResize,[self.target,self.handle]);								  
			self.resize(e, $(this).data('path'));
			
		});
	},
	// 开始
	start:function(e, mode) {
		this.mode = mode;
		this.width  = this.target.width();
		this.height = this.target.height();
		// 元素四边相对于当前视口的偏移
		this.border = this.target.offset();
		this.border.right  = this.border.left + this.width;
		this.border.bottom = this.border.top  + this.height;
		
		$(document).
		on('mousemove',this.handlers[this.mode]).
		on('mouseup',this.handlers['complete']).disSelection();
		// 阻止事件传播
		e.stopPropagation();
		e.preventDefault();
	},
	attach: function(){
		this.handle.on('mousedown',$.proxy(function(e){
			$.fireEvent(this.options.onDrag,[this.target,this.handle]);										
			this.drag(e);
			
		},this));		
		return this;
	},

	detach: function(){
		this.handle.off('mousedown',$.proxy(function(e){
			this.drag(e);
		},this));		
		return this;
	},	
	// 停止
	stop: function(e) {
		$(document).off('mousemove', this.handlers[this.mode]);
		$(document).off('mouseup'  , this.handlers['complete']);
		$.fireEvent(this.options.onComplete,[this.info,this.target,this.handle,this.dragBox]);
		return false;
	},
	resize:function(e, direction) {
		// 设置方向
		if(!e || !this.setDirection(direction)) return false;
		this.start(e, 'resizing');
	},
	drag:function(e) {
		this.start(e, 'dragging');
		this.oPos = {x :e.pageX||0, y :e.pageY||0};// 鼠标位置
	},
	select: function(e, x, y) {
		this.target.height(0).width(0).show();
		this.start(e, 'selecting');
		this.oPos = {x:this.boundx(x), y:this.boundy(y)};
	},
	// 设置方向, 以向量this.vector保存方向.共八个方向
	setDirection : function(direction) {
		switch(direction) {
		case 'west'	:this.vector = {x:-1,y: 0};break;
		case 'east'	:this.vector = {x: 1,y: 0};break;
		case 'north':this.vector = {x: 0,y:-1};break;
		case 'south':this.vector = {x: 0,y: 1};break;
		case 'north-west':this.vector = {x:-1,y:-1};break; 
		case 'south-west':this.vector = {x:-1,y: 1};break; 
		case 'north-east':this.vector = {x: 1,y:-1};break; 
		case 'south-east':this.vector = {x: 1,y: 1};break;
		default:return false;
		}
		return true;
	},
	onSelecting: function(e){
		this.border = {'left':this.oPos.x,'top':this.oPos.y, 'right':this.boundx(e.pageX), 'bottom':this.boundy(e.pageY)};
		if(this.border.right <= this.border.left) {this.border.left= this.border.right ;this.border.right = this.oPos.x;}
		if(this.border.bottom <= this.border.top) {this.border.top = this.border.bottom;this.border.bottom= this.oPos.y;}
		this.adjust(this.border.left - this.parentOffset.left, this.border.top - this.parentOffset.top, this.border.right - this.border.left , this.border.bottom- this.border.top);
		return false;
	},
	onResizing: function(e){
		// 修正X,Y
		var i = {x : this.boundx(e.pageX), y : this.boundy(e.pageY)};
		if(this.vector.x === -1) this.border.left = Math.min(i.x, this.border.right - this.options.minWidth);
		if(this.vector.x ===  1) this.border.right = Math.max(i.x, this.border.left + this.options.minWidth);
		if(this.vector.y === -1) this.border.top	= Math.min(i.y, this.border.bottom - this.options.minHeight);
		if(this.vector.y ===  1) this.border.bottom = Math.max(i.y, this.border.top + this.options.minHeight);
		this.adjust(this.cpStyle ? this.border.left - this.parentOffset.left: this.border.left, this.cpStyle ? this.border.top - this.parentOffset.top : this.border.top, this.border.right - this.border.left,this.border.bottom- this.border.top);
		return false;
	},	
	onDragging: function(e) {
		// 调整元素相对于当前视口的偏移

		this.border.left= this.boundx(this.border.left + e.pageX - this.oPos.x, -this.width);
		this.border.top = this.boundy(this.border.top  + e.pageY - this.oPos.y, -this.height);
		this.oPos = {x : e.pageX, y : e.pageY};
		//console.log(e.pageY);
		this.adjust(this.cpStyle ? this.border.left - this.parentOffset.left : this.border.left, this.cpStyle ? this.border.top - this.parentOffset.top : this.border.top);
		return false;
	},
	// left,top以parentOffset为原点
	adjust: function(left, top, width, height) {
		this.width = width || this.width || 0;
		this.height = height || this.height || 0;
		this.info = {'left':left, 'top':top, 'width':this.width, 'height':this.height};
		//var box = (this.options.ghost && this.options.resizer) ? this.dragBox :this.target;

		this.target.css(this.info);
		//if($.isFunction(this.options.callback)) this.options.callback(info, this.parentOffset);
		
	},
	boundx: function(x, extra) {
		
		return Math.max(Math.min(x||0, this.bound.right + (extra||0)), this.bound.left);
	},
	boundy: function(y, extra) {
		return Math.max(Math.min(y||0, this.bound.bottom+ (extra||0)), this.bound.top);
	},
	eventMethod: function(instance, method) {
		return function(event) { 
			return instance[method](event, this); 
		};
	}		
});

/*ASDUI.windows
date:2014.06.29
*/
ZUI.Win = new $.Class({		  
    options: {
        winId:null,
        winTitle: '',
        winHeight: 200,
        winWidth: 280,
        winTop: 200,
        winLeft: 100,
        winZindex: 20,
        data: '',
        winSrc: '',
		desk:'body',
        taskbar: '',
        Yicon: '',
        winMax: 4,
        Useoverlay: false,
        Tocenter: true,
        drag:false,
        dialogWin: false,
        Undistroy: false,
		Panel:false,
		Pwidth:'20%',
		Pdata:'',
		panelResize:true,
		panelMin:250,
		Pxpos:'right',
		Resize:true
		
    },
	
    initialize: function (options) {
        this.options = $.extend({},this.options, options);
		
        this.Id = 'Ywin' + this.options.winId;
		this.TId = 'TId' + this.options.winId;
		this.BId = 'BId' + this.options.winId;
		this.BBId = 'BB'+ this.options.winId;
		this.CId = 'CId' + this.options.winId;
        this.frameId = 'frame' + this.options.winId;
        this.htmlId = 'html' + this.options.winId;
        this.iconId = 'icon' + this.options.winId;
        this.handId = 'hand' + this.options.winId;
		this.TitId = 'Tit' + this.options.winId;
		this.closeId = 'close' + this.options.winId;
		this.Fsiz  = 'Fsiz'+ this.options.winId;
		this.Msiz  = 'Msiz'+ this.options.winId;
        this.crashId = 'crash' + this.options.winId;
        this.htmlboxId = 'htmlbox' + this.options.winId;
		this.panelId = 'panel' + this.options.winId;
		this.PanFId = 'PanF' + this.options.winId;
		this.desk = $(this.options.desk);
        this.taskbar = $('#' + this.options.taskbar) || $('body');
		this.resizeId = 'Yresiz' + this.options.winId;
		this.ghostId = 'ghost' + this.options.winId;
		this.loadId = 'loading' + this.options.winId;
		this.resId = 'res' + this.options.winId;
		this.OLId = 'OL' + this.options.winId;
		this.Cpos = {};
        this.winSatus = false;
		this.PanSatus = false;
		this.fullSizeSatus = false;
		this.minSizeSatus = false;
        this.build();
        $(window).resize($.proxy(function(){
              this.fullSizeSatus && this.fullSize();
        },this));//监听resize	

    },
    build: function () {
        if (WinManager.getStack().length >= this.options.winMax) {
            new ZUI.Box().alert('打开窗数目请不要超过' + this.options.winMax + '个.', {
                boxtitle: '系统提示'
            });
            return false;
        }
        if ($('#'+this.Id).length<1) {
			var WinCd = '<div class="ASDBox-InBoxTop" id="'+this.TId+'"><div class="handle" id="'+this.handId+'"></div><div id="'+this.TitId+'" class="boxtile"></div><a href="javascript:;" class="closebtn" id="'+this.closeId+'"></a><a href="javascript:;" class="Msizebtn" id="'+this.Msiz+'"></a><a href="javascript:;" class="Bsizebtn" id="'+this.Fsiz+'"></a></div>';//Top
				WinCd += '<div class="ASDBox-InBox" id="'+this.BId+'"><div class="ASDBox-BoxContent" id="'+this.BBId+'"><div class="myhtmls" id="'+this.CId+'"></div></div></div>';//Body	
				WinCd +='<div class="ASDloading" id="'+this.loadId+'">正在请求数据...</div><div class="frameOL" id="'+this.OLId+'"></div><div id="'+this.resId+'"></div>';//Other
		
			this.win = $('<div>', {
                        'class': 'ASDBox-Box Ywin',
                        'id': this.Id,
						html:WinCd,
						css:{
							'display': 'none',
							'position':'absolute',
							'top': this.options.winTop + 'px',
							'left': this.options.winLeft + 'px',
							'overflow':'hidden',
							'zIndex': this.options.winZindex						
						}
                    }).appendTo(this.desk);

			$('#'+this.BId).css({
                width: this.options.winWidth,
                height: this.options.winHeight			   
			});

            this.winEvn();
			WinManager.regist(this.Id,this,false,true);

        } else {
			WinManager.regist(this.Id,this,false);
            $('#'+this.iconId) && $('#'+this.iconId).hide();
            this.norSize();
        }
		
		
        $('#'+this.OLId).on('mousedown', $.proxy(function(){
            WinManager.regist(this.Id,this,false,true);
        },this));

    },
    winEvn: function () {
        var Bwin = this.win,
        Bhandle = $('#'+this.TId),
		hander = $('#'+this.handId).on('dblclick',$.proxy(function(){
			this.fullSize()
		},this)),
		Bcont = $('#'+this.BBId),
        Bcontent = $('#'+this.CId),
        Bclose = $('#'+this.closeId),
        Bloading = $('#'+this.loadId);
        $('#'+this.TitId).html(this.options.winTitle);
        switch (this.options.data) {
        case 'frame':{
                if (!this.frame) {
					
                    this.frame = $('<iframe>',{
                        'src': this.options.winSrc,
                        'id': this.frameId,
						'class':'YFrame',
                        'name': this.frameId,
                        'frameborder': 0,
                        'allowTransparency': 'true',
                        load: function () {
                                Bloading.hide();
								try{
									//frame.contentWindow.document.close();
									window.status='';
									return true;
								}catch(err){}//防止IE下进度条假死且跨域报错
                            }
                        
                    }).appendTo(Bcontent);
				     
                    Bloading.show();
                }
                break;
            }
        case 'ajax':
            {
                if (!$('#'+this.htmlId)) {
                    var wajax = new Element('<div>', {
                        'class': 'myAjax',
                        'id': this.htmlId
                    }).appendTo(Bcontent);
//                    new Request({
//                        url: this.options.winSrc,
//                        method: 'get',
//                        update: wajax,
//						noCache: true,
//                        evalScripts: true,

//                        onFailure: function() {
//                            this.error(this.options.errorTxt);
//							}.bind(this),							
//                        onComplete: function () {
//                            Bloading.hide();
//                        }.bind(this)
//                    }).send();
                    Bloading.show();
                }
                break;
            }
        case 'html':
            {
				
               var wajax = $('#'+this.htmlId).length>0 ? $('#'+this.htmlId) : $('<div>',{
					'class': 'myAjax',
					'id': this.htmlId
				}).appendTo(Bcontent); 
                
                if (typeof(this.options.winSrc) === 'element') {
//                    var obj02 = $('<div>', {
//                        'id': this.crashId
//                    }).appendTo($(this.options.winSrc));
//                    this.options.winSrc.getFirst().replaces(wajax).set('id', this.htmlboxId);
                } else {
                    wajax.html(this.options.winSrc)
                }
                break;
            }
        }
        Bclose.on('click', $.proxy(function () {
			if(this.options.Undistroy){
				this.minSize()
			}else{
				WinManager.regist(this.Id,this,true);
				this.clean();

			}
        },this));
        this.options.Panel && this.makePanel();

		$('#'+this.Fsiz).on('click',$.proxy(function () {
			this.fullSizeSatus ? this.norSize() : this.fullSize();
			},this));	
        $('#'+this.Msiz).on('click',$.proxy(function () {
                this.minSize()
            },this));
			$('#'+this.Id).show();
			this.options.Tocenter && this.tocenter();
			
			switch(this.options.drag){
				case 'drag':
					new ZUI.Drag(Bwin, {
						handle:this.handId,
						minWidth:320,
						minHeight:280,
						container:this.desk,
						resizer:this.options.Resize,
						resizeBox:this.resId,
						onDrag:function(){
							Bcont.hide();
						},
						onResize:function(){
							Bcont.hide();
						},
						onComplete:$.proxy(function(a,b,c){
							b.css({width:'auto',height:'auto'})
							$('#'+this.BId).css({width:a.width,height:a.height});
							Bcont.show();
						},this)
					});						   
				break;
				case 'ghost':{
					 var wTL = {top: this.options.winTop + 'px',left: this.options.winLeft + 'px'};
					 //if(!$('#'+this.ghostId).length<1)
					 this.gostbox = $('<div>',{'class':'ASD-ghost','id':this.ghostId})
					 .css(this.options.Tocenter ? this.Cpos : wTL).css({'width':Bwin.outerWidth(),'height':Bwin.outerHeight()})
					 .appendTo(this.desk);
						new ZUI.Drag(Bwin, {
						   handle : this.handId,
						   ghost : this.gostbox,
						   container:this.desk,
						   resizer:this.options.Resize,
						   resizeBox:this.resId,
						   onDrag: function(a,b){
							     a.show().css(Bwin.offset());
							},
						   onResize:function(a,b){
							   	a.show().css(Bwin.offset());
								Bcont.hide();
							},		
						   onComplete: $.proxy(function(a,b,c,d){
								 d.css({'left':a.left,'top':a.top,width:'auto',height:'auto'});
								 b.hide();
								$('#'+this.BId).css({width:a.width,height:a.height});
								Bcont.show();
							 },this)
						   });
				break;		
					}
				default:
				hander.hide();
				break;
				}	
		

        if (this.options.dialogWin) {
			$('#'+this.Fsiz).hide();
			$('#'+this.Msiz).hide();
        }else{
			hander.on('dblclick',$.proxy(this.fullSize,this))
		}
		this.winSatus = true;
		
    },
	makePanel: function(options){
			this.options = $.extend({},this.options, options);
			if($('#'+this.panelId)<1){
				this.Panel = $('<div>', {
						'class':'Ypanel',
						'id':this.panelId,
						css: {
							'float':this.options.Pxpos,
							'width': this.options.Pwidth,
							'display':'none'
						}				
					 }).appendTo($('#'+this.BId));
				this.PanResizer = $('<div>', {
                       'class':'Yresizer',
					   'id':this.resizeId,
					   css:{
						    'float':this.options.Pxpos,
							'display':'none'
						}
                     })
					.insertAfter(this.Panel);
				//this.options.panelResize && this.resizePanel(this.Panel,this.PanResizer); //是否允许resizePanel			
			}else{
				
			    $('#'+this.panelId).css({
							'float':this.options.Pxpos,
							'width': this.options.Pwidth,
							'display':'none'
					 });
			}
			switch (this.options.Pdata) {
			case 'frame':{
					if ($('#'+this.PanFId)<1) {
						var frame = $('<iframe>', {
							'src': 'about:blank',
							'id': this.PanFId,
							'class':'YFrame',
							'name': this.PanFId,
							'frameborder': 0,
							'allowTransparency': 'true',
							load: function () {
									Bloading.fadeOut();
									try{
										//frame.contentWindow.document.close();
										window.status='';
										return true;
									}catch(err){}//防止IE下进度条假死且跨域报错
								}
						}).appendTo(this.Panel);
						Bloading.fadeIn();
					}			
				break;
				}
			case 'html':{
				
				break;
				}	
			}

		},	

    clean: function () {
		
        $('#'+this.frameId).attr('src','about:blank').hide();
        $('#'+this.htmlId).empty();
        $('#'+this.htmlboxId).replaceWith($('#'+this.crashId)).attr('id','');
		$('#'+this.ghostId).remove();
		$('#'+this.Id).remove();
		$('#'+this.iconId).remove();
		
		this.winSatus = false;
		this.fullSizeSatus = false;
    },
    fullSize: function () {
		try{
			Zindex = $('#'+this.Id).css('z-index') + 2;
			
			$('#'+this.Id).css({
				top: '2px',
				left: '2px',
				'z-index': Zindex
			});
			
			$('#'+this.BId).css({
				width: $(window).width() - 10,
				height: $(window).height() - 35		
			});
			$('#'+this.Id).siblings('div.Ywin').css({
				'z-index': Zindex - 1
			});
			$('#'+this.handId).hide();
			$('#'+this.Fsiz).addClass('Bsizebtn1');
			this.options.Resize && $('#'+this.resId).hide();
		}catch(err){
			console.log(err)
		}
		this.fullSizeSatus = true;
        return this;

    },
    norSize: function () {
		this.win = (this.win==null) ? $('#'+this.Id) : this.win;
		this.gostbox = (this.gostbox==null) ? $('#'+this.ghostId) : this.gostbox;
        this.win.css({
            top: this.options.winTop,
            left: this.options.winLeft
        }).show();
		$('#'+this.BId).css({
            width: this.options.winWidth,
            height: this.options.winHeight
		});
		
        $('#'+this.handId).show();
        this.minSizeSatus && $('#'+this.iconId).hide();
        this.options.Tocenter && this.tocenter();
        this.PanSatus && this.hidePanel();
		$('#'+this.Fsiz).removeClass('Bsizebtn1');
		this.options.Resize && $('#'+this.resId).show();
		this.options.drag =='ghost' && this.gostbox.css({'width':this.win.outerWidth(),'height':this.win.outerHeight()});
		this.fullSizeSatus = false;
		return this;
    },
    minSize: function () {
        $('#'+this.iconId).length > 0 ? 
		$('#'+this.iconId).css('display','inline-block') :
		this.iconbox = $('<span>', {
			'class': 'taskItem',
			'id': this.iconId,
			'title': this.options.winTitle,
			html:'<em class="icon24 '+this.options.Yicon+'"></em><span class="tasktxt">'+this.options.winTitle+'</span>'
		}).appendTo(this.taskbar);
		
        $('#'+this.Id).hide();
		this.minSizeSatus = true;
		//WinManager.regist(document.id(this.Id),this,true);//为true时最小化时从计数器取消该窗体计数
        $('#'+this.iconId).on('click', $.proxy(function () {
			WinManager.regist(this.Id,this,false,true);//点击还原时在计数器中注册该窗体ID及对象								   
            $('#'+this.Id).show();
            $('#'+this.iconId).hide();
			this.minSizeSatus = false;
        },this));

    },

    tocenter: function () {
		this.Cpos = {
			top:($(window).height() - this.options.winHeight) * 0.5,
			left:($(window).scrollLeft() + ($(window).width() - this.options.winWidth) / 2)
			};	
        $('#'+this.Id).css(this.Cpos);
		return this.Cpos;
    },
	getSatus: function(){
		return this.winSatus
		},
	getPanSatus: function(){
		return this.PanSatus
		},	
	getFrame: function (){
		return this.frame;
	},
	getFrameDoc: function (){
		return this.frame.contents();
	},		
	getPFrame: function(){
		try{
			return this.PanFId;
		}catch(err){
			alert('Panel Undefind')
		}	
    },
	showPanel: function(url){
		url = url || 'about:blank';	
		$('#'+this.panelId).show();
		$('#'+this.resizeId).show();
		this.fullSize();
		$('#'+this.PanFId).attr('src',url);
		this.PanSatus = true;
		return this;
	},
	hidePanel: function(){
	    $('#'+this.panelId).hide();
		$('#'+this.resizeId).hide();
		this.PanSatus = false;
		return this;
	}
});

/*
---
Class:Image zoomer Ver.1.0
date:20140707
description: inline&outline image zoomer
TODO:preload
authors:
- YafullyZhao
...
*/
ZUI.ImgZoom = new $.Class({
	options : {
		zoomBig:null,
		zoomState:null,
		zoom:1.5,
		zoomRange:"1,4",
		zoomStep:0.5,
		zoomClass:'he-view-show',
		zoomOut:false,
		outSize:null,
		skew:{x:0,y:0},
		pos:'east',
		onOpen:$.noop,
		onHide:$.noop
	}, // end defaults
	initialize: function(zoomBox,options) {
		this.options = $.extend({},this.options, options);
		this.zoomBox = typeof zoomBox =='string' ? $('#'+zoomBox) : zoomBox;
		this.zoomBig = this.options.zoomBig ? $('#'+this.options.zoomBig) : this.zoomBox.find("div");
		this.zoomState = this.options.zoomState ? $('#'+this.options.zoomState) : $('<span class="he-zoomstate"></span>').appendTo(this.zoomBig);
		this.zoom = this.options.zoom;
		this.zoomBox.on({
			'mousewheel':$.proxy(function(e,delta, deltaX, deltaY){
				e.preventDefault();
				this.changeZoom(this.zoomBig,e,delta,deltaX,deltaY);
			},this),
			'mouseenter':$.proxy(function(){
				this.zoomBig.addClass(this.options.zoomClass);
				$.fireEvent(this.options.onOpen,[this.zoomBox,this.zoomBig]);
		   },this),
			'mouseleave':$.proxy(function(){
				this.zoomBig.removeClass(this.options.zoomClass);
				$.fireEvent(this.options.onHide,[this.zoomBox,this.zoomBig]);
		   },this)
		
		});
		
		if(this.options.zoomOut){
			this.options.pos && this.zoomBig.flpos(this.zoomBox,this.options.pos,this.options.skew.x,this.options.skew.y);

			this.zoomBox.on('mousemove',$.proxy(function(e){
				this.moveZoom(this.zoomBig,e);
			},this));
			this.zoomBig.css({
				'width':this.options.outSize ? this.options.outSize.width : this.zoomBox.width(),
				'height':this.options.outSize ? this.options.outSize.height : this.zoomBox.height()
			});
		}else{
			this.zoomBig.on('mousemove',$.proxy(function(e){
				this.moveZoom(this.zoomBig,e);
			},this));	
		}
	},
	moveZoom:function(obj,e){

		var h =obj.height(),
		w=obj.width(),
		t= this.options.zoomOut ? e.pageY-this.zoomBox.offset().top : e.pageY-obj.offset().top,
		l= this.options.zoomOut ? e.pageX-this.zoomBox.offset().left: e.pageX-obj.offset().left;
		var $largeImg = obj.find("img");
		if(this.zoom && this.zoom!="auto"){
			var zoomNum = parseFloat(this.zoom);
			$largeImg.css({"width":w*zoomNum,"height":h*zoomNum,"top":-t*(zoomNum-1),"left":-l*(zoomNum-1)});
		}else{
			var zoomNum = $largeImg.width()/w;
			$largeImg.css({"top":-t*(zoomNum-1)+"px","left":-l*(zoomNum-1)+"px"});
		}
	},
	changeZoom:function(obj,e,delta, deltaX, deltaY){
		var $largeImg = obj.find("img");
		var currentZoom = this.zoom=="auto" ? $largeImg.width()/obj.width() : parseFloat(this.zoom);

		var zoomStep = this.options.zoomStep;
		var zoomRange = this.options.zoomRange.split(",");
		var zoomMin = parseFloat(zoomRange[0]),zoomMax = parseFloat(zoomRange[1])>currentZoom ? parseFloat(zoomRange[1]):currentZoom;
		var op = deltaY>0?1:-1;
		var	nextZoom =Math.round((currentZoom+zoomStep*op)*10)/10.0;
		if(nextZoom >=zoomMin && nextZoom <=zoomMax){
			this.zoom = nextZoom;
			this.showZoomState(obj,nextZoom);
			this.moveZoom(obj,e);
		}
		
	},
	showZoomState:function(obj,state){
		this.zoomState.text(state+"X").stop(true,true).fadeIn(300).delay(200).fadeOut(300);
	}
});//!Class
/*
---
ASDUI.Paging Class
author:YafullyZhao
date:2011.06.10
...

*/
ZUI.Paging = new $.Class({

		options:{       
			className:'paging',
			total:'total', //数据源中记录数属性
			limit:10, //每页记录数
			total_records:null,
			curPage:0,
			//el:控件容器,showNumber:是否显示数字按钮,showText:是否显示页码
			gap:3,
			showNumber:true,
			showText:true,
			showGoto:"select",
			filter:[10,20,30,50],
			display:null,
			cookie:null,
			onChange:$.noop,
			onFilter:$.noop,
			onLoad:$.noop
		},
		
		initialize: function(pageBox,options){        
			this.options = $.extend({},this.options, options);
			this.GUID = $.GUID();
			this.pageBox = $('#'+pageBox);
			 //当前页
			this.limit = this.options.limit;      
			this.head = $('<span class="'+this.options.className+'"></span>');
			
			this.pageBox.append(this.head);
			
			
			this.options.filter ? this.creatFilter(this.options.cookie) : this.load();		
		},
		
		load: function(options){ 
			this.options = $.extend({},this.options, options);
			this.index = this.index || 0;
			this.total = this.options.total_records;
			this.limit = this.options.limit;
			this.page = Math.ceil(this.total / this.limit); //总页数
			this.options.showGoto && this.creatGoto();
			
			this.options.curPage>0 ? this.goPage(this.options.curPage) : this.create();
	
		},
	  
		create: function(){
			
			this.head.empty();
			var prev = $('<a href="javascript:void(0)">上一页</a>');
			this.head.prepend(prev);
			      
			if(this.index<1){
				prev.removeClass('Pageprev').addClass('Pagedisprev');
			}else{
				prev.removeClass('Pagedisprev').addClass('Pageprev');	
				prev.bind('click',$.proxy(function(){
					this.goPage(this.index-1);
				},this));
			}  
			
			if(this.options.showNumber){
				
				var beginInx = this.index-this.options.gap<0?0:this.index-this.options.gap;
				var endIdx = this.index+this.options.gap>this.page?this.page:this.index+this.options.gap;

				if(beginInx>0) this.head.append(this.createNumber(0));
				if(beginInx>1) this.head.append(this.createNumber(1));
				if(beginInx>2) this.head.append(this.createSplit());        
				
				for(var i=beginInx;i<endIdx;i++){
					this.head.append(this.createNumber(i));
				}
				
				if(endIdx<this.page-2) this.head.append(this.createSplit());
				if(endIdx<this.page-1) this.head.append(this.createNumber(this.page-2));
				if(endIdx<this.page) this.head.append(this.createNumber(this.page-1));
				
			}   

			var next = $('<a href="javascript:void(0)">下一页</a>');
			this.head.append(next);
			if(this.index<this.page-1){
				next.removeClass('Pagedisnext').addClass('Pagenext');	
				next.bind('click',$.proxy(function(){
					
						this.goPage(this.index+1);
				},this));				
			}else{
				next.removeClass('Pagenext').addClass('Pagedisnext');	
				next.onclick = '';	
			}
			
			if(this.options.showText) this.head.append(this.createText()); 
			
			$.fireEvent(this.options.onLoad,[this.limit,this.page,this.total]);
			
		},
		creatFilter: function(cook){
			this.pgFt = $('<span id="filter'+this.GUID+'" class="pageFilter"></span>');
			var self = this;
			var pgkey = cook ? $.cookie.get(cook.key) : null;
			var ftPlay =pgkey || this.options.display || $.inArray(this.limit, this.options.filter);
			
			var ftNum='每页显示：';
			$.each(this.options.filter,function(i,el){
				ftNum += ftPlay== i ? '<a href="javascript:;" class="ftCurrent" data-num="'+el+'">['+el+']</a>' : '<a href="javascript:;" data-num="'+el+'">['+el+']</a>';
			});
			ftNum +='条';
			this.pgFt.append(ftNum).prependTo(this.pageBox);
			this.pgFt.on('click','a',function(e){
				e.preventDefault();
				var fa = $(this);
				self.index = 0;
				fa.addClass('ftCurrent').siblings().removeClass('ftCurrent');
				self.load({limit:fa.data('num'),curPage:0});
				cook && $.cookie.set(cook.key,fa.index(),{expires:cook.expires});//设置cookies
				$.fireEvent(self.options.onFilter,[self.limit,self.page,self.total]);//callback
			});
			
			this.load({limit:this.options.filter[ftPlay],curPage:0});
		},
		creatGoto:function(){
			if(this.pgGo){
				this.pgGo.empty();
			}else{
				
				this.pgGo = $('<span id="goto'+this.GUID+'" class="pageGoto"></span>').appendTo(this.pageBox);
			}
			var self = this;
			switch(this.options.showGoto){
				case 'input':
					var pageNumID = 'pgNum' + this.GUID;
					var pageBtnID = 'pgBtn' + this.GUID;
					this.pgGo.append('跳转到第 <input type="text" class="input" style="width:40px" id="'+pageNumID+'"/> 页 <input type="button" class="button" value="跳 转" id="'+pageBtnID+'"/>');
					$('#'+pageBtnID).on('click',function(){
							
							var num = $.trim($('#'+pageNumID).val());
							if(num>=1&&num<=self.getTotalPage()){
								self.goPage(num-1);
							}else{
								return false;
							}
					});
				break;
				case 'select':
					var pgSelID = 'pgSel' + this.GUID,pageSelNum = '跳转到第 <select id="'+pgSelID+'">';
					for (var i = 0; i < self.getTotalPage(); i++){
						pageSelNum += '<option value="'+ i +'">'+ (i+1) +'</option>';
					}
					pageSelNum +='</select> 页';
					this.pgGo.on('change','#'+pgSelID,function(){
						self.goPage($(this).val());
					});
					this.pgGo.append(pageSelNum);
				break;
				default:
				break;

			}			
		},
		createNumber: function(i){
			var a = $('<a href="javascript:;">'+(i+1)+'</a>');
			a.bind('click',$.proxy(function(){
				this.goPage(i);
			},this));
  
			if(i==this.index)a.addClass('clicked');
	
	
			if(this.index===this.page && (i==this.index-1))a.addClass('clicked');
			return a;
		},
		
		createSplit: function(){
			return $('<span>...</span>');
		},
		
		createText: function(){
			var nowPage = (this.index==this.page) ? this.index : this.index+1;
			return $('<span>...</span>').html('第'+nowPage+'/'+(this.page)+'页 | 共'+this.total+'条记录 | ');

		},
		goPage: function(num){
			this.index = num;
			this.create();
			$.fireEvent(this.options.onChange,[num,this.limit,this.page]);
		},
		reload: function(){
			this.index = 0;
			this.create();
		},
		getPage: function(){
			return this.index + 1;
		},
		getLastPage: function(){
			return this.total%this.limit;
		},
		getTotalPage:function(){
			return this.page
		}
});
/*
---ZUI.Rate
description: Star Rate Class Ver 1.0
authors:YafullyZhao
Date:20140709
...
*/
ZUI.Rate = new $.Class({
	options : {
		starSize:{x:23,y:20},
		rateBar:'dfn',
		/** Boolean vars **/
		step:false, // if true,  mouseover binded star by star,
		isDisabled:false, // if true, user could not rate
		
		canRateAgain : false, // if true, the user could rates {nbRates} times Default, 1 time
		sendRequest: true, // send values to server
		sendPath : 'php/rating.php', // path of the php file
		/** Integer vars **/
		length:5, // number of star to display
		decimalLength : 0, // number of decimals.
		rateMax : 100, // maximal rate - integer from 0 to 9999 (or more)
		rateInfo:false, // show rates informations when cursor moves onto the plugin
		rateInfoClass:'rateInfo',
		nbRates : 1,

		/** Functions **/
		onSuccess : $.noop, // Fires when the server response is ok
		onError : $.noop, // Fires when the server response is not ok
		onRating: $.noop,
		onClick: $.noop, // Fires when clicking on a star	
		onRerate:$.noop		
	}, // end defaults
	initialize: function(els,options) {
		this.options = $.extend({},this.options, options);
		this.starWidth = this.options.starSize.x;
		this.containerWidth = this.options.starSize.x * this.options.length;
		this.nbOfRates = this.options.nbRates;
		
		
		this.rate = $(els);
		this.rate.length > 1 ?
		this.rate.each($.proxy(function(i,el){
			this.doRate($(el));
		},this)) : this.doRate(this.rate);
		
	},
	reRate:function(el){
		el.removeClass('rateDis');
		el.next('.rateInfo').remove();
		el.find(this.options.rateBar).width(0);
		this.doRate(el);
		$.fireEvent(this.options.onRerate,[el]);
	},
	doRate:function(rateBox){
		var Disabled = (rateBox.hasClass('rateDis') || this.options.isDisabled ) ? true : false;
		
		var average = parseFloat(rateBox.data('average')), // get the average of all rates
		idBox = rateBox.data('id') || rateBox.attr('id'), // get the id of the box
		starWidth = this.starWidth,
		widthRatingContainer = this.containerWidth, // Width of the Container
		widthColor = average/this.options.rateMax * widthRatingContainer,
		globalWidth = 0,
		nbOfRates = this.nbOfRates;
		hasRated = false;
		
		var quotient = rateBox.find('em').width(widthColor);
		if(Disabled) return;
		var average = rateBox.find(this.options.rateBar);
		var jstar = rateBox.find('abbr');
		rateBox.css({width: widthRatingContainer,overflow:'hidden'});
		var infoBox = this.options.rateInfo ? this.rateInfo(rateBox,idBox) : null;
		var self = this;
		
		rateBox.on({
			'mouseover' : function(e){
				$(this).css('cursor','pointer');
			},
			'mouseout' : function(){
				$(this).css('cursor','default');

				if(hasRated) average.width(globalWidth);
				else average.width(0);
			},
			'mousemove' : function(e){
				var realOffsetLeft = self.findRealLeft(this);
				var relativeX = e.pageX - realOffsetLeft;
				if(self.options.step) newWidth = Math.floor(relativeX/starWidth)*starWidth + starWidth;
				else newWidth = relativeX;
				average.width(newWidth);

				$.fireEvent(self.options.onRating,[infoBox,self.getNote(newWidth),self.options.rateMax]);
			},
			'mouseleave' : function(){
				infoBox && infoBox.html(self.options.rateInfo);
			},
			click : function(e){
				var element = this;

				/*set vars*/
				globalWidth = newWidth;
				nbOfRates--;
				if(!self.options.canRateAgain || parseInt(nbOfRates) <= 0) $(this).unbind().css('cursor','default').addClass('rateDis');
				hasRated = true;
				e.preventDefault();
				var rate = self.getNote(newWidth);
				average.width(newWidth);


				$.fireEvent(self.options.onClick,[element,idBox,rate,nbOfRates]);

				if(self.options.sendRequest) {
					$.post(self.options.sendPath,{
							idBox : idBox,
							rate : rate,
							action : 'rating'
						},function(data) {
							data.error ? $.fireEvent(self.options.onError,[element,rate,data.server]) : $.fireEvent(self.options.onSuccess,[element,rate,data.server]);
						},'json');
					}
			}
		});
				
	},
	rateInfo:function(rateBox,idBox){
		$('<dfn>',{'class':''+this.options.rateInfoClass+' info'+idBox+'',html:this.options.rateInfo}).insertAfter(rateBox);
		return $('.info'+idBox);
	},
	findRealLeft:function(obj) {
		  if(!obj) return 0;
		  return obj.offsetLeft + this.findRealLeft(obj.offsetParent);
	},
	getNote:function(relativeX) {
		var widthRatingContainer = this.options.starSize.x * this.options.length;
		var noteBrut = parseFloat((relativeX*100/widthRatingContainer)*parseInt(this.options.rateMax)/100);
		var dec=Math.pow(10,parseInt(this.options.decimalLength));
		var note = Math.round(noteBrut*dec)/dec;
		return note;
	}
});
/*
---
script: PrArea.js
author:YafullyZhao
requires: 
  core:1.3: 
provides: [Print]
...
*/
ZUI.PrArea = new $.Class({				   
	options: {
		 area:null,
		 mode : 'popup',//iframe,popup,edit
		 popHt : 600,
		 popWd : 900,
		 prClass:'prArea',
		 popX : 0,
		 popY : 0,
		 popTitle : '打印预览',
		 Prurl : '',
		 popClose : false,
		 strict:false
		},
	initialize: function (options) {
		this.options = $.extend({},this.options, options);
			this.GID = $.GUID();
			this.Frid = "printArea_" + this.GID;
			this.btnId = "printBtn_" + this.GID;
			this.PrAid = "printBox_" + this.GID;
		
	},
	doPrint: function(element,mode){
			var elmt = element || this.options.area;
			var writeDoc;
			var printWindow;
			var mode = mode || this.options.mode;
			switch (mode){
				case 'iframe' :
					var f = this.Iframe();
					writeDoc = f.doc;
					printWindow = f.contentWindow || f;
					break;
				case 'popup' :
					printWindow = this.Popup();
					writeDoc = printWindow.doc;
					break;
				default:
					break;		
			}
			switch (mode){
				case 'iframe' :
				case 'popup' :
					writeDoc.open();
					writeDoc.write( this.docType() + "<html>" + this.getHead() + "<body>" + this.getBody($('#'+elmt)) + "</body></html>" );
					writeDoc.close();
		
					printWindow.focus();
					printWindow.print();
				break;
				case 'edit' :
					this.buildEdit(this.getBody($('#'+ elmt)),this.btnId,this.PrAid);
				break;		
			}
			
			if ( this.options.mode == 'popup' && this.options.popClose )
			printWindow.close();
			
		},
	docType: function(){
		if ( this.options.mode == "iframe" || !this.options.strict ) return "";

		var standard = this.options.strict == false ? " Trasitional" : "";
		var dtd = this.options.strict == false ? "loose" : "strict";

		return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' + standard + '//EN" "http://www.w3.org/TR/html4/' + dtd +  '.dtd">';
	},

	getHead: function(){
		var head = "<head><title>" + this.options.popTitle + "</title>";
		head += '<link type="text/css" rel="stylesheet" href="' + this.options.Prurl + '" media="all" >';	
		head += "</head>";
		return head;
	},

	getBody: function (printElement){
		return '<div class="' + this.options.prClass + '" id="' + this.PrAid + '">' + printElement.html() + '</div>';
	},

	Iframe: function(){
		var iframeStyle = 'border:0;position:absolute;width:0px;height:0px;left:0px;top:0px;';
		var iframe;

		try
		{
			iframe = document.createElement('iframe');
			document.body.appendChild(iframe);
			$(iframe).attr({ style: iframeStyle, id:this.Frid, src: "" });
			iframe.doc = null;
			iframe.doc = iframe.contentDocument ? iframe.contentDocument : ( iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
		}
		catch( e ) { throw e + ". 您的浏览器不支持iframe."; }

		if ( iframe.doc == null ) throw "找不到document.";

		return iframe;
	},

	Popup: function (){
		var windowAttr = "location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
		windowAttr += ",width=" + this.options.popWd + ",height=" + this.options.popHt;
		windowAttr += ",resizable=yes,screenX=" + this.options.popX + ",screenY=" + this.options.popY + ",personalbar=no,scrollbars=yes";

		var newWin = window.open( "", "_blank",  windowAttr );

		newWin.doc = newWin.document;

		return newWin;
	},
	buildEdit: function(prArea,btnId,element){
		if(!this.editBox)this.editBox = new ZUI.Box();
		this.editBox.myhtml(prArea,{
			mywidth:this.options.popWd,
			myheight:this.options.popHt,
			boxtitle:this.options.popTitle,
			bar:function(){
				$$('.noprint').hide();
				return [
				new Element('input', {
					  'id':btnId,
					  'type':'button',
					  'value':'打 印',
					  'class': 'button'
					})
				]
			}
		});
		$('#'+btnId).bind('click',$.proxy(function(){
			
			this.doPrint(this.options.edit ? this.editBox.getContent() : element,'iframe');//popup
		},this));
		
	}		
});
/*
description: TableHover class v1.2
authors: YafullyZhao
date:2014.06.20

provides: [ZUI.TabelHover]  
*/
ZUI.TabelHover = new $.Class({
	options:{
		allowHead : false,
		allowBody : true,
		allowFoot : false,

		headCols : false,
		bodyCols : true,
		footCols : false,
		spanCols : true,
		ignoreCols : [],

		rowClass : 'hover',
		colClass : null,
		cellClass : null,
		zebraClass:null,
		
		onHover:$.noop
	},
	initialize:function(table,options){
		this.options = $.extend({},this.options, options);
		
		this.table = $(table).get(0);
		if (!this.table.tBodies) return;
		this.loadTB(this.table);
		
	},
	loadTB: function(table){
			var tbl = table ? table : this.table; 
			this.colIndex = [];
			this.fixCellIndexes(tbl);

			//add header cells to index
			if (tbl.tHead){
				this.addToIndex(tbl.tHead.rows, 'THEAD');
			}
			//create index - loop through the bodies
			for ( r = 0; r < tbl.tBodies.length; r++ ){
				this.addToIndex(tbl.tBodies[r].rows, 'TBODY');
			}
			//add footer cells to index
			if ( tbl.tFoot ){
				this.addToIndex(tbl.tFoot.rows, 'TFOOT');
			}
			//$(tbl).bind('mouseover', over).bind('mouseout', out);
			$(tbl).on({
				'mouseover':$.proxy(function(e){
					this.over(e);
				},this),
				'mouseout':$.proxy(function(e){
					this.out(e);
				},this)
			});	
	},
	fixCellIndexes: function(table) {
		var rows = table.rows;
		var len = rows.length;
		var matrix = [];
		for ( var i = 0; i < len; i++ ){
			var cells = rows[i].cells;
			var clen = cells.length;
			
			for ( var j = 0; j < clen; j++ ){
				var c = cells[j];
				var rowSpan = c.rowSpan || 1;
				var colSpan = c.colSpan || 1;
				var firstAvailCol = -1;
				if ( !matrix[i] ){ 
					matrix[i] = []; 
				}
				var m = matrix[i];
				// Find first available column in the first row
				while ( m[++firstAvailCol] ) {}
				c.realIndex = firstAvailCol;
				c.realRow = i;
				for ( var k = i; k < i + rowSpan; k++ ){
					if (!matrix[k])matrix[k] = [];
					var matrixrow = matrix[k];
					for ( var l = firstAvailCol; l < firstAvailCol + colSpan; l++ ){
						matrixrow[l] = 1;
					}
				}
			}
		}
	},	
	addToIndex: function(rows, nodeName){
		var c, row, rowI, cI, rI, s;
		//loop through the rows
		for ( rowI = 0; rowI < rows.length; rowI++){
			row = rows[rowI];
			if($.browser.oldIE && nodeName == 'TBODY' && this.options.zebraClass) $(row)[((rowI % 2) ? 'remove' : 'add')+'Class'](this.options.zebraClass);//Zbra for IE6-8

			//each cell
			for ( cI = 0; cI < row.cells.length; cI++ ){
				c = row.cells[cI];
				//add do colindex
				if ((nodeName == 'TBODY' && this.options.bodyCols) || (nodeName == 'THEAD' && this.options.headCols) || (nodeName == 'TFOOT' && this.options.footCols)){
					s = c.colSpan;
					while ( --s >= 0 ){
						rI = c.realIndex + s;
						if ( $.inArray(rI + 1, this.options.ignoreCols) > -1 ){
							break;//dont highlight the columns in the ignoreCols array
						}
						if (!this.colIndex[rI]) this.colIndex[rI] = [];
						
						this.colIndex[rI].push(c);
					}
				}
				//allow hover for the cell?
				if ( (nodeName == 'TBODY' && this.options.allowBody) || (nodeName == 'THEAD' && this.options.allowHead) || (nodeName == 'TFOOT' && this.options.allowFoot) ){
					c.thover = true;
				}
			}
		}
	},
	over: function(e){
		var p = e.target;
		try{
			while ( p != this && p.thover !== true ){
				p = p.parentNode;
			}
		if (p.thover ===true )this.highlight(p, true);
		$.fireEvent(this.options.onHover,[p,p.realIndex,p.realRow]);
		}catch(err){};
		//because the IE7 8 can't get the thover some times
	},
	out: function(e){
		var p = e.target;
		try{
			while ( p != this && p.thover !== true ){
				p = p.parentNode;
			}
		if (p.thover === true)this.highlight(p, false);
			$.fireEvent(this.options.onOut,[p,p.realIndex,p.realRow]);
		}catch(err){};
	},
	highlight: function(cell, on){

		$.fn.tableHoverHover = on ? $.fn.addClass : $.fn.removeClass;
		//highlight columns
		var h = this.colIndex[cell.realIndex] || [], rH = [], i = 0, rI, nn;
		if (this.options.colClass != ''){
			while (this.options.spanCols && ++i < cell.colSpan && this.colIndex[cell.realIndex + i] ){
				h = h.concat(this.colIndex[cell.realIndex + i]);
			}
			$(h).tableHoverHover(this.options.colClass);
		}
		
		//highlight cell
		if (this.options.cellClass != ''){
			nn = cell.parentNode.parentNode.nodeName.toUpperCase();
			if (nn == 'TBODY')$(cell).tableHoverHover(this.options.cellClass);

		}
	},
	getCol:function(cell){
			var index = cell > -1 ? cell : $(cell).get(0).realIndex;
			var a = this.colIndex[index];
			return a;
	},
	getColNum:function(){
		return this.colIndex.length;
	}		
});//!class
/*
description: title alerm class
authors: YafullyZhao
date:2013.01.16
requires:
- core/1.3.0: '*'
provides: [ZUI.TitAlarm]  
*/
ZUI.TitAlarm=new $.Class({
	options:{
		tim:350,    //闪动频率
		tit:'【新消息】',     //提示的内容
		delay:12, //闪动提示次数
		mess:'',   //全局标识当前闪动的内容
		title:null,  //原始标题
		auto:false
	},
	initialize:function(options){
		this.options = $.extend({},this.options, options);
		this.title=this.options.title ? this.options.title : document.title;
		this.times;
		this.times2;
		this.busy = false;
		this.options.auto && this.run();
		
	},
	run:function(){
		var step=0,self = this;
		$('body').everyTime(this.options.tim+'ms','TA',function(){
			step++;
			if (step==3) step=1;
			if (step==1) document.title = self.title;
			if (step==2) document.title = self.options.tit + self.title;
		},this.options.delay);		  
		  
		this.busy = true;  
	},
	start:function(o){
		if(!o)return false;
		this.busy && $('body').stopTime ('TA');//防止重复
		this.options.tit=(o) ? o : this.options.tit;
		this.run();

	}
});
/**
 * @name		jQuery Countdown Plugin
 * @author		YafullyZhao
 * @version 	1.0
 */
ZUI.Countdown = new $.Class({
	options : {
		date: "June 7, 2087 15:03:25",
		duration: 1000,
		onEnd: $.noop,//el
		render: $.noop//el,date
	}, // end defaults
	initialize: function(el,options) {
		this.options = $.extend({},this.options, options);
		this.timeBox = (typeof el=='string') ? $('#'+el) : el;
		var self =this;
		if (self.options.duration) {
          self.interval = setInterval(function() {
            self.render();
          },self.options.duration);
        }
        self.render();
	},
    render: function(){
		this.getDateData(this.options.date);
    },
    getDateData: function(endDate) {
        var dateData, diff;
        endDate = Date.parse($.isPlainObject(this.options.date) ? this.options.date : new Date(this.options.date));
        diff = (endDate - Date.parse(new Date)) / 1000;
        if (diff <= 0) {
          diff = 0;
          this.interval && this.stopCount();
        }
        dateData = {
          years: 0,
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
          millisec: 0
        };
        if (diff >= (365.25 * 86400)) {
          dateData.years = Math.floor(diff / (365.25 * 86400));
          diff -= dateData.years * 365.25 * 86400;
        }
        if (diff >= 86400) {
          dateData.days = Math.floor(diff / 86400);
          diff -= dateData.days * 86400;
        }
        if (diff >= 3600) {
          dateData.hours = Math.floor(diff / 3600);
          diff -= dateData.hours * 3600;
        }
        if (diff >= 60) {
          dateData.min = Math.floor(diff / 60);
          diff -= dateData.min * 60;
        }
        dateData.sec = diff;
		this.interval && $.fireEvent(this.options.render,[this,this.timeBox,dateData]);
    },
	leadingZeros: function(num, length) {
		if (length == null) {
		  length = 2;
		}
		num = String(num);
		while (num.length < length) {
		  num = "0" + num;
		}
		return num;
	},	
    stopCount: function() {
        this.interval && clearInterval(this.interval);
        this.interval = null;
		$.fireEvent(this.options.onEnd,[this,this.timeBox]);
   	},
	update: function(newDate,duration) {
		this.options.date = newDate;
		if (duration == null) {
		  duration = this.options.duration;
		}
		this.interval && clearInterval(this.interval);

		this.render();
		this.options.duration = duration;
		var self =this;
		this.interval = setInterval(function() {
		  self.render();
		}, this.options.duration);
	}  
});//!Class
/**
 * ASD.CR
 * @version		1.0
 * @author		YafullyZhao
 */
ZUI.CR = new $.Class({
	options: {
		Selector:"span.ASD_check",
		chkClass: "checked",
		chkOne:false,
		chkOneCancle:false,

		onCheck:$.noop,
		onUncheck:$.noop,
		onClick:$.noop
		
	},
	initialize: function(element,options){
		this.options = $.extend({},this.options, options);
		if(!element) return false;
		this.element = (typeof element == 'string') ? $('#'+element) : element;
		
		this.ckAll = false;
		this.master = [];
		this.allBox = [];
		var self = this;
		this.element.on("click", this.options.Selector, function(){
					
				 self.options.chkOne ? self.checkOne($(this),$(this).attr('rel')) : $(this).attr('rel') ? self.check($(this),$(this).attr('rel')) : self.check($(this));
				 self.itemSatus();
				 $.fireEvent(self.options.onClick,[$(this)]);	
		}); 
		this.getSatus();
	},
	check: function (el,mother){
		  var data = el.data('ck');
		  //var m = $(mother) || el.parent();
		
		  var m = mother ? $('#'+mother) : el.parent();
		  var sib = m.find(this.options.Selector);
		  switch(data){
			 case 0:
			 el.data('ck',1).addClass(this.options.chkClass);
			 
			 mother && sib.data('ck',1).addClass(this.options.chkClass);
			 $.fireEvent(this.options.onCheck,[el,m]);
			 break;
			 case 1:
			 el.data('ck',0).removeClass(this.options.chkClass);
			 mother && sib.data('ck',0).removeClass(this.options.chkClass);
			 $.fireEvent(this.options.onUncheck,[el,m]);
			 break;
			 case 2:
			 break;				 				 
		  }
		  
	},

	checkOne: function (el,mother){
		  var data = el.data('ck');
		  var m = mother ? $('#'+mother) : el.parent();

		  switch(data){
			 case 0:
			 el.data('ck',1).addClass(this.options.chkClass).siblings(this.options.Selector).data('ck',0).removeClass(this.options.chkClass);
			 
			 $.fireEvent(this.options.onCheck,[el,m]);	
			 break;
			 case 1:
			 if(this.options.chkOneCancle) {
				 el.data('ck',0).removeClass(this.options.chkClass);
				 
			 	 $.fireEvent(this.options.onUncheck,[el,m]);
			 }
			 break;			 				 
		  }
	},
	getSatus: function(){
		 this.element.find(this.options.Selector).each($.proxy(function(i,item){
			 if($(item).attr('rel')){
				 this.master.push($(item).attr('rel')); 
				 this.allBox.push($(item));
			 };
		 },this));

		 this.itemSatus();
	},//初始化状态获取
	itemSatus: function(){
		 var self = this;
		 $.each(this.master,function(i,m){
			var st = $.array.pick($('#'+m).find(self.options.Selector),function(item,i){
				return !$(item).hasClass('checked');
			});  
			st ? self.allBox[i].data('ck',0).removeClass(self.options.chkClass) : self.allBox[i].data('ck',1).addClass(self.options.chkClass);

		 });		
	},//工作时状态获取
	getChecked: function (box){
		 var Ckbox = box ? $(box) : this.element;
		 var ckitem = [];
		 Ckbox.find('.'+this.options.chkClass).each(function(i,el){
			 
			 if(!$(el).attr('rel'))ckitem.push({name:$(el).text(),value:$(el).data('ck')});
			 
		 });
		 
		 return ckitem;
	},
	checkAll: function (el,mother){
		  var data = el.data('ck');
		  var m = $(mother) || el.parent();
		  var sib = m.fins(this.options.Selector);
		  switch(data){
			 case 0:
			 el.data('ck',1).addClass(this.options.chkClass);
			 sib.data('ck',1).addClass(this.options.chkClass);
			 
			 break;
			 case 1:
			 el.data('ck',0).removeClass(this.options.chkClass);
			 sib.data('ck',0).removeClass(this.options.chkClass);
			 m.data('ck',0);
			 break;
			 case 2:
			 break;				 				 
		  }
		  
	}	
});
//DatePicker Class
// ,Element.measure requerd
ZUI.Dp = new $.Class({
    options: {
		Dparea:null,
        CzIndex: 6000,
        Cwidth: 210,
        Cheight: 'auto',
		hovClass:'dp_roll',
		secClass:'dp_selected',
		dayChars: 2,
		dayNames : ['日', '一', '二', '三', '四', '五', '六'],
		daysInMonth : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		format : 'yyyy-mm-dd',
		monthNames : ['一 月', '二 月', '三 月', '四 月', '五 月', '六 月', '七 月', '八 月', '九 月', '十 月', '十一月', '十二月'],
		mark:[],
		static:false,
		today:false,
		startDay: 7,
		yearOrder: 'asc',
		yearRange: 5,
		yearStart: (new Date().getFullYear()) - 5,
		onSelect:$.noop,
		onChange:$.noop
		
    },
    initialize: function (els, options) {
        this.options = $.extend({},this.options, options);
        this.Boxon = $.GUID();
		this.tags = els;
		this.makeTime = this.options.format.length >10 ? true : false;
		this.month = this.year = null;
		this.Dparea = this.options.Dparea ? $ ('#'+this.options.Dparea) : $('body');
		this.options.monthNames = (this.options.monthNames && this.options.monthNames.length == 12 ? this.options.monthNames : this.options.monthNames) || this.options.monthNames; 
		this.options.daysInMonth = (this.options.daysInMonth && this.options.daysInMonth.length == 12 ? this.options.daysInMonth : this.options.daysInMonth) || this.options.daysInMonth; 
		this.options.dayNames = (this.options.dayNames && this.options.dayNames.length == 7 ? this.options.dayNames : this.options.dayNames) || this.options.dayNames;
        this.dpBox = this.options.static ? $('#'+this.options.static) : $('<div>', {'class': 'ASDBox-Dp'})
		.appendTo('body')
		.on('click',function (e) {
				e.stopPropagation();
				return false;
		});
		var self = this;
		if(!this.options.static)
		$(document).on('click',function(){
			self.hideDp();
		});

		
		this.dpBox.on("mouseover", ".td_calDay", function(){
		  	$(this).addClass(self.options.hovClass);
		})
		.on("mouseout", ".td_calDay",function(){
		  	$(this).removeClass(self.options.hovClass);
		})
		.on("click", ".td_calDay",function(e){
			var tds = $(this);
			if(self.options.static){
				self.dpBox.find('td.td_calDay').removeClass(self.options.secClass);
				tds.addClass(self.options.secClass);
			}
			var ds = tds.attr('axis').split('|');
			var dat = self.formatValue(ds[0], ds[1], ds[2],true);
			self.BoxonEdit.val(dat).focus();
			$.fireEvent(self.options.onSelect,[self.dpBox,tds,dat,self.BoxonEdit]);
			self.hideDp();
		});
		
        
		this.dpEvents = function(e){
			e.stopPropagation();
			var targ = $(e.target);
			targ.attr('readonly', true);
			targ.val() == '' ? self.fixDate(targ) : self.format(targ,targ.val().substring(0,10));			
		};
			
		this.attach();	
    },
    format: function(element,date){
		switch(this.options.format){
			case 'mm/dd/yyyy':
			case 'mm/dd/yyyy/hh:mn:ss':
				var then = date.split('/'),fixM = parseInt(then[0])-1;
				this.fixDate(element,new Date(then[2],fixM,then[1]));
			break;
			case 'yyyy-mm-dd':
			case 'yyyy-mm-dd-hh:mn:ss':
				var then = date.split('-'),fixM = parseInt(then[1])-1;
				this.fixDate(element,new Date(then[0],fixM,then[2]));
			break;
			default:
			break;
		}
	},
	fixDate:function(element,then,today,Uncreat){
		this.then = then ? then : new Date();
		this.today = new Date();
		this.oldYear = this.year = this.then.getFullYear();
		this.oldMonth = this.month = this.then.getMonth();
		this.oldDay = this.then.getDate();
		this.nowYear = this.today.getFullYear();
		this.nowMonth = this.today.getMonth();
		this.nowDay = this.today.getDate();
		this.nowHour = this.today.getHours();
		this.nowMin = this.today.getMinutes();
		this.nowSec = this.today.getSeconds();
		if(!Uncreat)this.create(element);
	},
	attach: function(){
		this.Dparea.on('click',this.tags,this.dpEvents);
	},
	detach: function(){
		this.Dparea.off('click',this.tags,this.dpEvents);
	},	
	create: function(element,empt){		
		this.BoxonEdit = element;
        this.calendar && this.calendar.remove();
		this.calendar = $('<div>', {'class':'dp_cal'}).prependTo(this.dpBox);
		empt && this.fixDate(element,false,false,true);
		var date = this.then,self=this;

			
		if (this.month || this.year) {
			date.setFullYear(this.year, this.month, 1);
		}
		 else {
			this.month = date.getMonth();
			this.year = date.getFullYear();
			date.setDate(1);
		}
		this.year % 4 == 0 ? this.options.daysInMonth[1] = 29 : this.options.daysInMonth[1] = 28;
		var firstDay = (1-(7+date.getDay()-this.options.startDay)%7);
		monthSel = $('<select></select>');
		
		$.each(this.options.monthNames,function(i,item){
			
			monthSel.append($('<option>', { value : i }).text(item));			
			if (self.month == i)monthSel.get(0).options[i].selected = true; 
		});
		
		yearSel = $('<select></select>');
		var years = [];
		if (this.options.yearOrder == 'desc'){
			for (var y = this.options.yearStart; y > (this.options.yearStart - this.options.yearRange - 1);y--){
				
				$.array.include(years,y);
			}
		} else {
			for (var y = this.options.yearStart - this.options.yearRange; y < (this.options.yearStart + this.options.yearRange + 1); y++){
				$.array.include(years,y);
			}
		}
		
		$.each(years,function(i,item){
			yearSel.append($('<option>', { value : item }).text(item));
			
			if (self.year == item)yearSel.get(0).options[i].selected = true; 		
		});
		calTable = $('<table>');
		calTableThead = $('<thead>');
		calSelRow = $('<tr>');
		calSelCell = $('<th>', {'colspan':'7'});
		
		yearSel.appendTo(calSelCell);
		monthSel.appendTo(calSelCell);
		calSelCell.appendTo(calSelRow);
		calSelRow.appendTo(calTableThead);
		calTableTbody = $('<tbody>');
		calDayNameRow = $('<tr>');
		for (var i = 0; i < this.options.dayNames.length; i++) {
			calDayNameCell = $('<th>').html(this.options.dayNames[(this.options.startDay+i)%7].substr(0, this.options.dayChars)).appendTo(calDayNameRow);
		}
		calDayNameRow.appendTo(calTableTbody);
	
		while (firstDay <= this.options.daysInMonth[this.month]){
			calDayRow = $('<tr>');
			for (i = 0; i < 7; i++){
				if ((firstDay <= this.options.daysInMonth[this.month]) && (firstDay > 0)){
					ax = this.year + '|' + (parseInt(this.month)+1) + '|' + firstDay;
					calDayCell = $('<td>', {'class':'td_calDay','axis':ax,html:firstDay}).appendTo(calDayRow);
					if(this.options.mark && $.array.contains(this.options.mark,ax))calDayCell.addClass('dpholiy');
				} else {
					calDayCell = $('<td>', {'class':'dp_empty'}).html(' ').appendTo(calDayRow);
				}
				
				// Show the previous day
				if ( (firstDay == this.oldDay) && (this.month == this.oldMonth ) && (this.year == this.oldYear) ) {
					calDayCell.addClass(this.options.secClass);
				}
				// Show today
				if ( (firstDay == this.nowDay) && (this.month == this.nowMonth ) && (this.year == this.nowYear) ) {
					calDayCell.addClass('dp_today');
				}
				firstDay++;
			}
			calDayRow.appendTo(calTableTbody);
		}
		
		calTableThead.appendTo(calTable);
		calTableTbody.appendTo(calTable);
		calTable.appendTo(this.calendar);
		
		if(this.makeTime){
			//creat time
			this.today = new Date();	
			this.nowHour = this.today.getHours();
			this.nowMin = this.today.getMinutes();
			this.nowSec = this.today.getSeconds();
			var tpTime = this.getTimeHtml('Hour')+'点';    
			tpTime += this.getTimeHtml('Min')+'分';
			tpTime += this.getTimeHtml('Sec')+'秒';		
			calTableFoot = $('<tfoot>');
			calFelRow = $('<tr>');
			calFelCell = $('<td>', {'colspan':'7'}).append(tpTime);
			calFelRow.appendTo(calTableFoot);
			calFelCell.appendTo(calFelRow);
			calTableFoot.appendTo(calTable);
			$('#'+this.Boxon+'Hour').val(this.nowHour);
			$('#'+this.Boxon+'Min').val(this.nowMin);
			$('#'+this.Boxon+'Sec').val(this.nowSec);		
		}//end if			
		
		$(yearSel).on('change',function(){

			self.year = yearSel.val();
			self.create(self.BoxonEdit);
			$.fireEvent(self.options.onChange,[self.dpBox]);
			
		});
		$(monthSel).on('change',function(){
			
			self.month = monthSel.val();
			self.create(self.BoxonEdit);
			$.fireEvent(self.options.onChange,[self.dpBox]);
		});
		
        this.showDp(element);
		
		},
	getTimeHtml: function(types){
		var times = [];
		if(types == "Hour"){
			times.push('<select id="'+(this.Boxon+'Hour')+'">');
			for(var i = 0; i < 24; i++){
				times.push('<option value="'+ i +'">'+ i +'</option>');
			}
			times.push('</select>');
		}else if(types == "Min" || types == "Sec"){
			times.push('<select id="'+this.Boxon + types +'">');
			for(var i = 0; i < 60; i++){
				times.push('<option value="'+ i +'">'+ i +'</option>');
			}
			times.push('</select>');
		}
		return times.join("");
	},		
	formatValue: function(year, month, day,tm){
		//alert(year+'~'+month+'~'+day)
		var dateStr = '';
		this.month = this.oldMonth = '' + (month - 1) + '';
		this.year = this.oldYear = year;
		this.oldDay = day;
		if (day < 10) day = '0' + day;
		if (month < 10) month = '0' + month;
		if(this.makeTime && tm){
		hour = $('#'+this.Boxon+'Hour').val();
		mins = $('#'+this.Boxon+'Min').val();
		sec = $('#'+this.Boxon+'Sec').val();			
		dateStr = this.options.format.replace( /dd/i, day ).replace( /mm/i, month ).replace( /yyyy/i, year ).replace( /hh/i, hour ).replace( /mn/i, mins ).replace( /ss/i, sec );	
			
			}else{
		dateStr = this.options.format.replace( /dd/i, day ).replace( /mm/i, month ).replace( /yyyy/i, year );
				}

		return dateStr;

	},
	getSecMonth: function(){
		return parseInt(this.month) + 1;
	},
	getSecYear: function(){
		return parseInt(this.year) + 1;
	},
	showDp: function (el){
			if(this.options.static)return false;
			this.dpBox.css({
				'top':100,
				'left':100,
				'z-index': this.options.CzIndex,
				'position': 'absolute',
				'height':'auto',
				'width': this.options.Cwidth + 'px',
				'display': 'block'
				//,'background':'#F3FAFF'
			}).flpos(el,'south');	
	},
    hideDp: function () {
		if(this.options.static)return false;
		this.calendar && this.calendar.remove();
        this.dpBox.hide();
    }
});
/*
---
ASDUI.Tab Class
author:YafullyZhao
date:2011.09.20
requires:
    core/
    - Class
    - Class.Extras 
    - Element 
    - Element.Event
    - Selectors 
    - Element.Delegation
provides: [TabPane]
...
*/

ZUI.Tab = new $.Class({
		options: {
			tabSelector: 'tab',
			contentSelector: 'tab-panel',
			activeClass: 'selected',
			hoverTab:false,
			tabSbox:null,//selector 容器
			contentbox:null,//panel 容器
			addTab:'',
			dataType:'frame',
			data:'',
			addMax:6,
			closeBtn:'tabClose',
			rel:'',
			exist:0,
			scrollTab:false,
			leftBtn:null,
			rightBtn:null,
			loading:null,
			loadClass:'',
			skew:[40,4],
			step:200,
			onShow:$.noop
		},
		initialize: function(container, options) {
			this.options = $.extend({},this.options, options);
			this.container = $(container);
			this.tabStack = [];
			this.frameStack=[];
			this.sector = '.'+this.options.tabSelector;
			this.loading = this.options.loading ? $(this.options.loading) :null;
			this.num = 0;
			this.last = 0;
			this.ULwidth = 0;
			var self = this;
			this.options.hoverTab?
			this.container.on('mouseover', this.sector,function(e){
				  self.show($(this).index());
			}) :
			this.container.on('click',this.sector,function(){
				
				  self.show($(this).index());
			});
			
			
			if(this.options.closeBtn){
				this.closeBtn = '.' + this.options.closeBtn;
				this.tabStack = $.array.pluck($(this.closeBtn),'data-rel');//初始化
				this.container.on('click',this.closeBtn,function(e){
					  e.stopPropagation();//阻止冒泡
					  self.delet($(this).parent('li').index());
					  $.array.remove(self.tabStack,$(this).data('rel'));
					  
					 
				});		
			}

				   
			if(this.options.scrollTab){
					self.leftBtn = $(this.options.leftBtn)
									.on('click',function(e){
										self.move(true);
									});
					self.rightBtn = $(this.options.rightBtn)
									.on('click',function(e){
										self.move(false);
									});
								
				}
			this.container.find(this.sector).eq(0).addClass(this.options.activeClass);
			this.container.find('.'+this.options.contentSelector).eq(0).show();

		},
		add:function(options){
			this.options = $.extend({},this.options, options);
			
			if(this.getSecs().length === this.options.addMax) {
				$.fireEvent(this.options.onMax,[this.options.addMax]);
				return false;
			}
			var Id = this.options.rel ? this.options.rel : $.GUID(),
			panId = 'panel'+ Id,
			secId = 'sec' + Id
			loading = this.loading,
			loadClass = this.options.loadClass; 
			
			if($.array.contains(this.tabStack,this.options.rel)) {

				this.show($.array.indexOf(this.tabStack,this.options.rel));
				
			}else{
				this.tabStack.push(this.options.rel);
				
				this.getSecs().removeClass(this.options.activeClass);
				this.container.find('.'+this.options.contentSelector);	
				this.newTselector = $('<li>', {'class': this.options.tabSelector,html:this.options.addTab,'id':secId})
									.appendTo($(this.options.tabSbox))
									.addClass(this.options.activeClass);
				var newContent = this.newContent = $('<div>', {'class': this.options.contentSelector,'id':panId})
									.appendTo($(this.options.contentbox));
									
				switch(this.options.dataType){
					case 'frame':
					$.array.include(this.frameStack,'frame'+Id);
					this.frame = $('<iframe>',{
                        'src': this.options.data,
                        'id': 'frame'+Id,
						'class':'YFrame',
                        'name': 'frame'+Id,
                        'frameborder': 0,
                        load: function () {
                                loading && loading.hide();
								newContent.removeClass(loadClass);
								try{
									//frame.contentWindow.document.close();
									window.status='';
									return true;
								}catch(err){}//防止IE下进度条假死且跨域报错
                            }
                        
                    }).appendTo(this.newContent.addClass(loadClass));
				     
                	loading && loading.show();
					break;
					case 'html':
					default:
						this.newContent.html(this.options.data);
					break;
				}
				this.options.closeBtn && $('<em>', {'class': 'tabClose','data-rel':this.options.rel}).appendTo(this.newTselector);
				
				if(this.options.scrollTab){
					this.fixWidth();
					this.scTo(this.newTselector.index());
				}
				this.show(this.tabStack.length-1,true);
			}

			
		},
		delet: function(index){
				
				var sectsAll = this.getSecs();										
				var content = this.container.find('.'+this.options.contentSelector)[index];
				if(sectsAll.length > 1 && index === 0){
					this.show(index+1)
					}
				else if(sectsAll.length > 1 && $(sectsAll[index]).hasClass(this.options.activeClass)){
					this.show(index-1)
					}
				(this.options.dataType=='frame') && $('#frame'+this.tabStack[index]).attr('src','about:blank').hide();
				
				$(sectsAll[index]).remove();
				$(content).remove();
				this.loading.hide();
				$.array.remove(this.frameStack,'frame'+this.tabStack[index]);
				$.array.removeAt(this.tabStack,index);
				this.options.scrollTab && this.fixWidth();
				//this.fireEvent('change', index);
	
			},
		show: function(index,newPage){
				var sects = this.getSecs()[index];
																
				var content = this.container.find('.'+this.options.contentSelector)[index] || this.container.find('.'+this.options.contentSelector).first();
				
				//只有一个的异常情况
				this.getSecs().removeClass(this.options.activeClass);
				this.container.find('.'+this.options.contentSelector).hide();	
				try {
					
					$(sects).addClass(this.options.activeClass);
					$(content).show();
					this.options.scrollTab && this.scTo(index);
				}catch(e){
					alert('index erro!');
				}
					
				$.fireEvent(this.options.onShow,[sects,content,index,newPage,this.frameStack,this.last]);
				this.last = this.num = index;
			},
		closeById: function(Id){
			var sec = $('#sec' + Id),index = sec.index();
			if(index<0) return;
			this.delet(index);
		},	
		getIndex: function(){
			return this.num;
		},
		getStack: function(){
			return this.tabStack;
		},
		getFrameStack: function(){
			return this.frameStack;
		},
		getTopFrame: function(){
			return this.frameStack[this.num];
		},
		getSecs: function(){
			
			return this.container.find(this.sector);
		},
		
		fixWidth: function(){
			var ulW = 0,fixW,self = this;
			this.getSecs().each(function(i,el){
				  ulW +=$(el).outerWidth() + self.options.skew[1];
			});
			fixW = ulW + self.options.skew[0];
			$(this.options.tabSbox).css('width',fixW);
			this.ULwidth = fixW;
			
		},
		move: function(direc){
			var ulLeft = $(this.options.tabSbox).position().left;
			var atbox = $(this.options.tabSbox).parent();
			var atWidth = atbox.outerWidth();
			var distan,self = this;
			if(direc){//左
				distan = this.ULwidth + ulLeft > atWidth ? ulLeft - this.options.step : 0
				
			}else{
				distan = ulLeft<0 ? Math.min(ulLeft + this.options.step,0) : 0;
			}
			
			var stance = this.options.step;
			$(this.options.tabSbox).animate({left:distan}, 300,function(){
				
				
			});
		},	
		scTo: function(index){
			
			var current = this.getSecs()[index];
			var atbox = $(this.options.tabSbox).parent();
			var atWidth = atbox.outerWidth();
			
			var ulLeft = $(this.options.tabSbox).position().left;
			var curPos = $(current).position().left-20;

			var curLeft;
			if(ulLeft + curPos<0){//目标对象在显示区外左?第一个
				curLeft = curPos>0 ? ulLeft-(ulLeft + curPos) : 0;
			}else if(this.ULwidth + ulLeft >= atWidth){//超出范围
				curLeft = Math.min((-curPos + atWidth - $(current).outerWidth()-this.options.skew[0]-this.options.skew[1]),0);
				
			}
			(curLeft !=null) && $(this.options.tabSbox).animate({left:curLeft}, 300,function(){})
		}	
	});
/*
---
script: Info.js
description: Class to create growl-style popup notifications.
authors: [YafullyZhao]
date:2014.05.09
...
*/
ZUI.Info = new $.Class({
	options: {
		mode: 'top',
		position: 'left',
		elements: {
			wrapper: '<div>',
			alert: '<div>'
		},
		elementOptions: {
			wrapper: {
				css: {
					'position': 'fixed',
					'z-index': '90'
				},
				'class': 'purr-wrapper'
			},
			alert: {
				'class': 'purr-alert',
				css: {
					opacity: '.85'
				}
			}
		},
		clickDismiss: true,
		hoverWait: true,
		hideAfter: 2000,
		duration: 500
		
		
	},
	initialize: function(options){
		this.options = $.extend({},this.options, options);
		this.createWrapper();
		return this;
	},
	createWrapper: function(){
		this.wrapper = $(this.options.elements.wrapper, this.options.elementOptions.wrapper);

		switch (this.options.mode) {
		   case 'top':
		   		this.wrapper.css('top', '0px');
		   break;
		   case 'bottom':
		   		this.wrapper.css('bottom','0px');
		   break;
		   case 'middle':
		   		this.wrapper.css('top','300px');
		   break;	
		   default:
		   break;	
		}
		$('body').append(this.wrapper);
		this.positionWrapper(this.options.position);
	},

	positionWrapper: function(position){
		switch (position) {
		   case 'left':
		   		this.wrapper.css('left', 0);
		   break;
		   case 'right':
		   		this.wrapper.css('right', 0);
		   break;	
		   default:
		   		this.wrapper.css({left: '50%',marginLeft:-this.wrapper.outerWidth()/2});	
		   break;	
		}		
		return this;
	},

	info: function(msg, options){

		var opts = $.extend({},this.options, options);

		var infoDiv = $(opts.elements.alert, opts.elementOptions.alert);
		
		if(typeof msg == 'string'){
			infoDiv.html(msg);
		}
		else if(typeof msg == 'element'){
			infoDiv.append(msg);
		}
		else if($.isArray(msg)){
			var alerts = [];
			$.each(msg,$.proxy(function(i,m){
				alerts.push(this.info(m, opts));
			}, this));
			return alerts;
		}
		infoDiv.addClass(opts.className).appendTo(this.wrapper);

		if(opts.hideAfter > 0){
			infoDiv.oneTime(opts.hideAfter+'ms','TInfo',$.proxy(function(){
				this.runOut(infoDiv);
			},this));			
		}
		opts.clickDismiss && infoDiv.on('click', $.proxy(function(){
				this.holdUp = false;
				this.runOut(infoDiv);
			},this));
		

		opts.hoverWait && infoDiv.on({
				'mouseenter': $.proxy(function(){
					this.holdUp = true;
				},this),
				'mouseout': $.proxy(function(){
					this.holdUp = false;
				},this)
			});
		

		return infoDiv;
	},
	runOut: function(el){
		if(this.holdUp){
			el.stopTime('TInfo');
			el.oneTime(500+'ms','TInfo',$.proxy(function(){
				this.runOut(el);
			},this));			
			return null;
		}

		var to = {
			'opacity': 0
		};
		
		this.options.mode == 'top' ? to['margin-top'] = '-'+el.outerHeight() : to['margin-bottom'] = '-'+el.outerHeight();
		el.animate(to,this.options.duration,function(){
			el.remove();
		});
	}
});

/* ZUI.Rowsort
 * @version		1.0
 * @author		YafullyZhao
 */


ZUI.Rowsort = new $.Class({
	options : {
		handler: "tr",
		sortElemts:"tr",
		tableDragClass: "sorting-table",
		disabledRowClass: "nodrag",
		dragClass: "sorting-row",
		onDragStart:null,
		onDrop:null
	}, // end defaults
	initialize: function(sortbox,options) {
		this.options = $.extend({},this.options, options);
		
		this.sortbox = (typeof sortbox=='string') ? $('#'+sortbox) : sortbox;
		
		this.doc = $(window.document);
		this.spOonselect = !!('onselectstart' in this.doc[0].documentElement);
		this.rows = null;
		this.dragging_row = null;
        this.last_y = 0;
		this.old_index = 0;
		this.dragging = false;

		this.sortbox.unSecable();
		
		
		
		if (this.sortbox.data("ZUIsort") !== true) {
			var self = this;
            this.sortbox.data("ZUIsort", true)
			.on('mousedown', this.options.handler, function(e){
				self.downFunc(e);
			});
        }
		
	},
	downFunc: function(e){
		this.rows = this.sortbox.find(this.options.sortElemts);
		this.dragging_row = $(e.target).closest(this.options.sortElemts);
		
		if (this.rows.length < 2 || this.dragging_row.length == 0 || this.dragging_row.hasClass(this.options.disabledRowClass)) return false;
        this.dragging = true;
		this.old_index = this.rows.index(this.dragging_row[0]);
	
		this.options.dragClass && this.dragging_row.addClass(this.options.dragClass);
		this.options.tableDragClass && this.sortbox.addClass(this.options.tableDragClass);
		
		
		
		$.fireEvent(this.options.onDragStart,[this.sortbox,this.dragging_row[0],this.old_index]);
		
		this.last_y = parseInt(e.pageY, 10);
		var self = this;
        this.rows.not(this.dragging_row[0]).on("mousemove", function(e){
			self.moveFunc(e)
		});
		this.sortbox.on('mouseup', function(){
			self.upFunc();
		});
		return false;
	},
	moveFunc: function (e) {
		
        this.moveFuncCore($(e.target).closest(this.options.sortElemts)[0], e.pageY);
    },
    moveFuncCore: function(element, current_y){
            // if mouse moving to downward and focused element's next sibling is not the dragging row
			
            if (current_y > this.last_y && element.nextSibling !== this.dragging_row[0]) {

                // if current row is not the last child of whole table
                if (element.nextSibling) {
                    //this.sortbox[0].insertBefore(this.dragging_row[0], element.nextSibling);
					this.dragging_row.insertBefore(element.nextSibling);
                } else {
                    this.sortbox[0].appendChild(this.dragging_row[0]);
					
                }

            // if mouse moving to upward and focused element's prev sibling is not the dragging row
            } else if (current_y <= this.last_y && element.previousSibling !== this.dragging_row[0]) {

				this.dragging_row.insertBefore(element);
                //this.sortbox[0].insertBefore(this.dragging_row[0], element);
            }

            // update last position
            this.last_y = current_y;
   },
   upFunc: function() {
	   
            var new_index;
			
			this.rows.off("mousemove");

            // remove up event from document
            this.sortbox.off('mouseup');

            // remove class from sorted row
			
            this.options.dragClass && this.dragging_row.removeClass(this.options.dragClass);


            // remove tableDragClass to table while dragging
            this.options.tableDragClass && this.sortbox.removeClass(this.options.tableDragClass);


            new_index = this.sortbox.find(this.options.sortElemts).index(this.dragging_row[0]);

            if (new_index !== this.old_index) {

				$.fireEvent(this.options.onDrop,[this.sortbox,this.dragging_row[0],new_index,this.old_index]);
            }

            // resetting some variables
            this.dragging_row = null;
            this.dragging = false;
            this.old_index = 0;
        }
});
/*Frozen Table*/
ZUI.Frozen = new $.Class({
	options : {
        width: 'auto',//boolean,auto
        height: 300,
        ignoreCols: [1],
        fixedColumnWidth: 100,
        minColumnWidth: 1
	}, // end defaults
	initialize: function(table,options) {
		this.options = $.extend({},this.options, options);
		this.table = (typeof table=='string') ? $('#'+table) : table;
		//var originalTable = this;
		
        this.layout = this.buildLayout(this.table);


		this.setSize(this.layout, this.table, this.options.width== 'auto'? true : false);
		
		this.options.width=='auto' && $(window).resize($.proxy(function(){
			this.setSize(this.layout, this.table, true);
		},this));
		
        this.adjustSizes(this.layout);
        this.applyScrollHandler(this.layout);

	},
	setSize: function(layout, table, auto){
		var width = auto ? $(window).width() : this.options.width;
        var scrollAreaWidth = width - this.options.fixedColumnWidth;

        // trick to at least TRY to make it normal looking
        // That way 2-column tables don't need horizontal scrolling...
        table.css({ width: scrollAreaWidth});
		layout.width(width-2);
        $(".fixedContainer .fixedHead", layout).css({
            width: (scrollAreaWidth) + "px",
            "float": "left",
            "overflow": "hidden"
			
        });

        $(".fixedContainer .fixedTable", layout).css({
            "float": "left",
            width: (scrollAreaWidth) + "px",
            "overflow": "auto"
        });

        $(".fixedContainer", layout).css({
            width: (scrollAreaWidth-2) + "px",
            "float": "left"
        });

        $(".fixedContainer .fixedFoot", layout).css({
            width: (scrollAreaWidth) + "px",
            "float": "left",
            "overflow": "hidden"
        });

        $(".fixedColumn > .fixedTable", layout).css({
            "width": this.options.fixedColumnWidth + "px",
            "overflow": "hidden"
        });

        $(".fixedColumn .fixedHead", layout).css({
            "width": this.options.fixedColumnWidth + "px"
        });

        $(".fixedColumn .fixedFoot", layout).css({
            "width": this.options.fixedColumnWidth + "px"
        });		
	},
    buildLayout: function(src){
        var fixedArea = $("<div class=\"fixedArea\"></div>").appendTo($(src).parent());

        //fixed column items
        var fixedColumn = $("<div class=\"fixedColumn\" style=\"float: left;\"></div>").appendTo(fixedArea);
        var fixedColumnHead = $("<div class=\"fixedHead\"></div>").appendTo(fixedColumn);
        var fixedColumnBody = $("<div class=\"fixedTable\"></div>").appendTo(fixedColumn);
        var fixedColumnFooter = $("<div class=\"fixedFoot\"></div>").appendTo(fixedColumn);

        //fixed container items
        var contentContainer = $("<div class=\"fixedContainer\"></div>").appendTo(fixedArea);
        var contentContainerHeader = $("<div class=\"fixedHead\"></div>").appendTo(contentContainer);
        var contentContainerBody = $("<div class=\"fixedTable\"></div>").appendTo(contentContainer);
        var contentContainerFooter = $("<div class=\"fixedFoot\"></div>").appendTo(contentContainer);

        //create the fixed column area
        if (this.options.ignoreCols){
            this.buildFixedColumns(src, "thead", fixedColumnHead, this.options.ignoreCols);
            this.buildFixedColumns(src, "tbody", fixedColumnBody, this.options.ignoreCols);
            this.buildFixedColumns(src, "tfoot", fixedColumnFooter, this.options.ignoreCols);
        }

        //Build fixed header / footer rows
		
        this.buildFixedRows(src, "thead", contentContainerHeader);
        this.buildFixedRows(src, "tfoot", contentContainerFooter);

        // Build the main table -- the src table should only be a tbody section with the remaining columns,
        // so we'll just add it to the fixedContainer table area.
        contentContainerBody.append(src);
        return fixedArea;
    },
    buildFixedColumns: function(src, section, target,ignoreCols){
        if ($("> " + section, src).length) {
            var colHead = $('<table class="table02 makelist"></table>').appendTo(target);

            //If we have a thead or tfoot, we're looking for "TH" elements, otherwise we're looking for "TD" elements
            var cellType = "td";
            if ( section.toLowerCase() == "thead" || section.toLowerCase() == "tfoot" )
            {
                cellType = "td";
            }

            //check each of the rows in the thead
            $("> " + section + " > tr", src).each(function() {
				
                var tr = $("<tr></tr>").appendTo(colHead);
                $(cellType, this).each(function(i,el) {
					if ( $.inArray(i + 1, ignoreCols) > -1 ){
                    	$("<td>" + $(this).html() + "</td>").addClass(this.className).attr("id", this.id).appendTo(tr);

                    	$(this).remove();
					}
                });
            });
        }
    },
	buildFixedRows: function(src, section, target) {
		
        if ($(section, src).length) {
            var th = $('<table class="table02 makelist"></table>').appendTo(target);
            var tr = null;

            //This function only manipulates scrollable headers and footers
            var cellType = "td";

            $("> " + section + " > tr", src).each(function() {
				
                var tr = $("<tr></tr>").appendTo(th);
                $(cellType, this).each(function() {
                    $("<td>" + $(this).html() + "</td>").addClass(this.className).attr("id", this.id).appendTo(tr);
                });

            });

            $(section, src).remove();
        }
    },
    applyScrollHandler: function(layout){
        $(".fixedContainer > .fixedTable", layout).scroll(function() {
            var tblarea = $(".fixedContainer > .fixedTable", layout);

            $(".fixedColumn > .fixedTable", layout)[0].scrollTop = tblarea[0].scrollTop;

            var x = tblarea[0].scrollLeft;
            $(".fixedContainer > .fixedHead", layout)[0].scrollLeft = x;
            $(".fixedContainer > .fixedFoot", layout)[0].scrollLeft = x;
        });
    },
    adjustSizes: function (layout){
        this.setScrollingAreaHeights(layout);
        this.setRowHeights(layout);
        this.setColumnWidths(layout);
        this.adjustTablesForScrollBars(layout);
    },
    adjustTablesForScrollBars: function(layout){
        var contentTableHeight = $(".fixedContainer .fixedTable > table", layout).height();

        if ( contentTableHeight < this.options.height ){
			
            $(".fixedColumn .fixedTable", layout).height(contentTableHeight);
            $(".fixedContainer .fixedTable", layout).height(contentTableHeight);

            // add back 16px for lack of scroll bar
            $(".fixedContainer .fixedHead", layout).width($(".fixedContainer .fixedHead", layout).width() + 16);
            $(".fixedContainer .fixedFoot", layout).width($(".fixedContainer .fixedHead", layout).width());
        }else{
            //offset the footer by the height of the scrollbar so that it lines up right.
            $(".fixedColumn > .fixedFoot", layout).css({
                "position": "relative"
            });
        }
    },
    setRowHeights: function(layout){
        // Body
		var trs = $(".fixedColumn .fixedTable > table > tbody > tr", layout);
        trs.each(function(i) {
			
            var fixedColumnHeight = $(this).height();
            var contentColumn = $(".fixedContainer .fixedTable > table > tbody > tr", layout).eq(i);
			var fixH = Math.max(contentColumn.height(), fixedColumnHeight);
            var maxHeight = (i+1<trs.length)? fixH : fixH + 22;

            $(this).children("td").height(maxHeight);
            $(".fixedContainer .fixedTable > table > tbody > tr", layout).eq(i).children("td").height(fixH);
        });

        // Header
        var topLeftCorner = $(".fixedColumn .fixedHead > table > tbody > tr", layout).eq(0);
        var topHeadRow = $(".fixedContainer .fixedHead > table > tbody > tr", layout);

        var maxHeight = Math.max(topLeftCorner.height(), topHeadRow.eq(0).height());

        topLeftCorner.children("td").height(maxHeight);
        topHeadRow.children("td").height(maxHeight);

        // Footer
        var bottomLeftCorner = $(".fixedColumn .fixedFoot > table > tbody > tr", layout).eq(0);
        var bottomFootRow = $(".fixedContainer .fixedFoot > table > tbody > tr", layout);

        maxHeight = Math.max(bottomLeftCorner.height(), bottomFootRow.eq(0).height());

        bottomLeftCorner.children("td").height(maxHeight);
        bottomFootRow.children("td").height(maxHeight);
    },
    setScrollingAreaHeights: function(layout){
        var scrollAreaHeight = this.options.height - $(".fixedContainer > .fixedHead", layout).height()
                - parseInt($(".fixedContainer > .fixedFoot", layout).height());

        $(".fixedContainer > .fixedTable", layout).height(scrollAreaHeight);//滚动区域高度
        // remove 16px for horizontal scrollbar height
        $(".fixedColumn > .fixedTable", layout).height(scrollAreaHeight);
    },
    setColumnWidths: function (layout){
        this.setFixedColumnWidths(layout);

        var widthArray = new Array();
        var totalLength = 0,self=this;

        $(" .fixedContainer .fixedHead > table > tbody > tr:first > td", layout).each(function(pos){
            var headerColumnWidth = $(this).outerWidth();
            var bodyColumn = $(" .fixedContainer .fixedTable > table > tbody > tr:first > td:eq(" + pos + ")", layout);
            var contentWidth = $(bodyColumn).outerWidth();
            headerColumnWidth = Math.max(headerColumnWidth, contentWidth, self.options.minColumnWidth);
            widthArray[pos] = headerColumnWidth;
            totalLength += headerColumnWidth;
        });

        $(".fixedContainer .fixedHead > table", layout).width(totalLength);//偏移值
        $(".fixedContainer .fixedTable > table", layout).width(totalLength);
        $(".fixedContainer .fixedFoot > table", layout).width(totalLength);
		
        for ( var i = 0; i < widthArray.length; i++ ){
			var wd = (i+1<widthArray.length) ? widthArray[i]:widthArray[i]+22;
            this.setFixedWidth($(".fixedContainer .fixedHead > table > tbody > tr > td:eq(" + i + ")", layout), wd);
            this.setFixedWidth($(".fixedContainer .fixedTable > table > tbody > tr > td:eq(" + i + ")", layout), widthArray[i]);
            this.setFixedWidth($(".fixedContainer .fixedFoot > table > tbody > tr > td:eq(" + i + ")", layout), wd);
        }
    },
    setFixedColumnWidths: function(layout){
		var width = this.options.fixedColumnWidth/this.options.ignoreCols.length - 2,self = this;
		
        $(".fixedColumn > .fixedHead > table > tbody > tr:first > td", layout).each(function(pos){
            var tblCell = $(".fixedColumn > .fixedTable > table > tbody > tr:first > td:eq(" + pos + ")", layout);
            var tblFoot = $(".fixedColumn > .fixedFoot > table > tbody > tr:first > td:eq(" + pos + ")", layout);

            //something funky requires the 2 offset. cant place it...
			
            

            // we want fixedColumn widths to be total widths (i.e., include padding in width)
            var headerPadding = $(this).innerWidth() - $(this).width();
            self.setFixedWidth(this, width - headerPadding);

            var colPadding = $(tblCell).innerWidth() - $(tblCell).width();
            self.setFixedWidth(tblCell, width - colPadding);

            var footerPadding = $(tblFoot).innerWidth() - $(tblFoot).width();
            self.setFixedWidth(tblFoot, width - footerPadding);
        });
    },
    setFixedWidth: function (object, width){
		
        $(object).css({
            width: (width) + "px",
            "max-width": (width) + "px",
            "min-width": (width) + "px"
        });
    }										
});//!Class
//PassShark.Class

ZUI.PassShark = new $.Class({
	options: {
		 interval:      200,
		 duration:      3000,
		 replacement:   '%u25CF',
		 prefix:        'password_',
		 onInit:$.noop
	},
	initialize: function(input, options) {
		this.options = $.extend({},this.options, options);
		this.input = $('#'+input);
		this.checker = [];
     	this.timer   = [];
         var name        = this.input.attr('name');
         var id          = this.input.attr('id');
         var cssclass    = this.input.attr('class');
         var style       = this.input.attr('style');
         var size        = this.input.attr('size');
         var maxlength   = this.input.attr('maxlength');
         var disabled    = this.input.attr('disabled');
         var tabindex    = this.input.attr('tabindex');
         var accesskey   = this.input.attr('accesskey');
         var value       = this.input.val();
		 this.input.hide();
		 this.input.after('<input name="' + (this.options.prefix + name) + '" ' +
                                'id="' +  (this.options.prefix + id) + '" ' + 
                                'type="text" ' +
                                'value="' + value + '" ' +
                                (cssclass != undefined ? 'class="' + cssclass + '"' : '') +
                                (style != undefined ? 'style="' + style + '"' : '') +
                                (size != undefined ? 'size="' + size + '"' : '') +
                                (maxlength != -1 ? 'maxlength="' + maxlength + '"' : '') +
                                (disabled != undefined ? 'disabled="' + disabled + '"' : '') +
                                (tabindex != undefined ? 'tabindex="' + tabindex + '"' : '') +
                                (accesskey != undefined ? 'accesskey="' + accesskey + '"' : '') +
                                 'autocomplete="off" />');
         
         // change label
         $('label[for='+id+']').attr('for', this.options.prefix + id);
         // disable tabindex
         this.input.attr({'tabindex': '','accesskey': ''});
         this.finput = $('#' + this.options.prefix + id);
		 // bind event
		 var self = this;
         this.finput.on('focus', function(e){
			var p = self.getId($(this).attr('id')),pt;

			$(this).stopTime('PS');

			$(this).everyTime(self.options.interval+'ms','PS',function(){
				self.check(p,'');
			},0,true);
         });
         this.finput.on('blur', function(e){
            $(this).stopTime('PS');
         });
		 
		 
			this.finput.oneTime(self.options.interval+'ms','PS',function(){
				self.check(id,'', true);
			});
		$.fireEvent(this.options.onInit,[this.input]);			  
	},
	getId : function(id) {
		 var pattern = this.options.prefix+'(.*)';
		 var regex = new RegExp(pattern);
		 regex.exec(id);
		 id = RegExp.$1;
		 
		 return id;
	 },
	
	 setPassword : function(id, str) {
		 var tmp = '';
		 for (i=0; i < str.length; i++) {
			if (str.charAt(i) == unescape(this.options.replacement)) {
			   tmp = tmp + $('#' + id).val().charAt(i);
			}
			else {
			   tmp = tmp + str.charAt(i);
			}
		 }
		 $('#' + id).val(tmp);
	 },
	 check : function(id, oldValue, initialCall) {
		
		 var bullets = this.finput.val();
		
		 if (oldValue != bullets) {
			this.setPassword(id, bullets);
			if (bullets.length > 1) {
			   var tmp = '';
			   for (i=0; i < bullets.length-1; i++) {
				  tmp = tmp + unescape(this.options.replacement);
			   }
			   tmp = tmp + bullets.charAt(bullets.length-1);
	
			   this.finput.val(tmp);
			}

			this.input.stopTime('PSC');
			this.input.oneTime(this.options.duration+'ms','PSC',$.proxy(function(){
				this.convertLastChar(id);
			},this));		
		 }
		 if (!initialCall) this.input.oneTime(this.options.interval+'ms','PSC',$.proxy(function(){
				this.check(id,$(this.finput,false).val());
			},this));

	 },
     convertLastChar : function(id) {
         if (this.finput.val() != '') {
            var tmp = '';
            for (i=0; i < this.finput.val().length; i++) {
               tmp = tmp + unescape(this.options.replacement);
            }
            this.finput.val(tmp);
         }
     }	 	
});

/*图片延迟加载*/
ZUI.Lazyload = new $.Class({
	options : {
		attr: "data-url",
		mouseAttr:null,//'data-original'
		callback: $.noop,
		container:null,
		loaded:$.noop
	}, // end defaults
	initialize: function(ps,options) {
		this.options = $.extend({},this.options, options);
		this.ps = ps;
		this.container = this.options.container ? $('#'+this.options.container) : $(window);
		this.build();
		this.container.on("scroll", $.proxy(this.loading,this));			
	},
	build:function(ps){
		this.cache = [];
		
		$(this.ps).each($.proxy(function(i,el){
			
			
			var node = el.nodeName.toLowerCase(), url = $(el).attr(this.options.attr);
			var orginUrl = this.options.mouseAttr ? $(el).attr(this.options.mouseAttr) : null;
			var orgImg = orginUrl ? new Image() : null;
			//console.log(node);
			var data = {
				obj: $(el),
				tag: node,
				url: url,
				orginUrl:orginUrl,
				orgImg:orgImg
			};
			this.cache.push(data);
			
		},this));
		this.loading();		
	},
	loading: function() {

		var contHeight = this.container.height();
		var contop = this.options.container ? this.container.offset().top : $(window).scrollTop();	
		
		$.each(this.cache, $.proxy(function(i,data){
			
			var o = data.obj, tag = data.tag, url = data.url,orgImg = data.orgImg, orginUrl=data.orginUrl, post, posb,self=this;

			if (o) {
				post = o.offset().top - contop, post + o.height();

				if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
					if (url) {
					
						if (tag === "img") {
							if(orginUrl){
								
								orgImg.onload = function(){
									
									self.callback(o.attr("src", url));
									$.fireEvent(this.options.loaded,[o]);
								}
								orgImg.src = orginUrl;

							}else{
								self.callback(o.attr("src", url));
								$.fireEvent(this.options.loaded,[o]);
							}
						} else {
							o.load(url, {}, function(){
								self.callback(o);
							});
						}		
					} else {
				
						self.callback(o);
					}
					data.obj = null;	
				}
			}
		},this));	
	},
	callback : function(call) {
		$.isFunction(this.options.callback) && this.options.callback.call(call.get(0));
		
	}		
});

ZUI.DropMenu = new $.Class({
	options: {
		container:null,
		mselect:null,
		zIndex:null,
		msHover:true,
		msActiv:'onhover',
		mBody:'div',
		mouseoutDelay:500,
		hideAlways:true,
		makeSelect:false,
		receiver:null,
		sector:null,
		sectorClass:null,
		initialTxt:'显示全部',
		name:'name',
		porps:function(){},
		makeAccord:false,
		duration:500,
		display:null,
		xmode:false,		
		onInit: $.noop,
		onOpen: $.noop,
		onClose: $.noop,
		onSelect: $.noop
//		,
//		onEnter: $.noop,
//		onOut: $.noop
	},
	
	initialize: function(container,options){
		this.options = $.extend({},this.options, options);
		this.container = (typeof container=='string') ? $('#'+container) : container;

		this.menuShow = false;
		var events = this.events = {}, self = this;
			if(this.options.msHover){
				events['mouseenter'] = function(event){
					if(!$(this).find(self.options.mBody) || !$(this).siblings(self.options.mBody))return false;//不在sce内或不与sec并列
					//window.clearTimeout(self.timer);console.log($(this));
					//self.container.stopTime ('Dr');
					$(this).addClass(self.options.msActiv);
					self.drop = self.options.makeAccord ? $(this).next(self.options.mBody) : $(this).find(self.options.mBody).eq(0) || $(this).siblings(self.options.mBody).eq(0);
					self.showTip($(this),self.drop);
					if(self.options.makeSelect && !$(this).children().eq(0).data('IntalTxt')) $(this).children().eq(0).data('IntalTxt',$(this).children().eq(0).text());//如果允许select且选择值默认为空则附加
					//self.fireEvent('enter',this);
				};
				events['mouseleave'] = function(event){
					if(!$(this).find(self.options.mBody) || !$(this).find(self.options.mBody))return false;//不在sce内或不与sec并列

					self.container.oneTime(self.options.mouseoutDelay+'ms','Dr',$.proxy(function() {
						self.hideTip($(this),self.drop)
					},this));
					//self.fireEvent('out',this);
				};
				
			}else{
				events['click'] = function(event){
					if(!$(this).find(self.options.mBody) || !$(this).siblings(self.options.mBody))return false;
				
					$(this).is('a') && event.preventDefault();
					event.stopPropagation();
					self.drop = self.options.makeAccord ? $(this).next(self.options.mBody): $(this).find(self.options.mBody).eq(0) || $(this).siblings(self.options.mBody).eq(0);//drop在seclect内或与select并列

		
					self.options.makeAccord ? self.accord($(this),self.drop):self.showTip($(this),self.drop);
					
					if(self.options.makeSelect && !$(this).children().eq(0).data('IntalTxt')) $(this).children().eq(0).data('IntalTxt',$(this).children().eq(0).text());
				};
				this.options.hideAlways && $(document).on('click',function(){
					if(self.menuShow && !self.options.makeAccord) self.hideAll();
					$.fireEvent(self.options.onClose,[self.container]);
				});			
			}

		this.attach();
		if(this.options.makeAccord	&& this.options.display !== null) this.showIndex(this.options.display);
		$.fireEvent(this.options.onInit,[this.container]);
	},
	attach: function(){
		this.container.on(this.events,this.options.mselect);
		(this.options.makeSelect==2) && this.attDel();
	},
	attDel: function(){
		var self = this;
		this.container.on('click','em.deletbtn', function(e){
			  e.stopPropagation();
			  self.ckList(1,$('#'+$(this).attr('rel')));
			  $(this).closest('span.secNode').remove();		  
		});
	},
	detach: function(){
		this.container.removeEvents(this.events);
	},
	showTip: function(sec,el){
		this.hideAll(sec);
		var showed = el.data('showed');
		el.show();
		this.menuShow = true;
		$.fireEvent(this.options.onOpen,[el,sec]);
		if(showed){
			return
		}else{
			el.data('showed',1);
		}//如果不满足第一次运行标记则跳出
		if(this.options.makeSelect==1){
		  var self = this;	
		  el.on('click',this.options.sector, function(event) {
			  
			 event.stopPropagation();
				 try{													 
					 self.secList(sec,el,this);
				 }catch(err){
					 //alert('非标准结构.');
					 console.log(err);
				 } 	 
		  });
		  
		}
		else if(this.options.makeSelect==2){
		  var self = this;	
		  el.on('click',this.options.sector, function(event) {
			 event.stopPropagation();
				 try{
					 Drlink = self.options.receiver ? sec.find(self.options.receiver).eq(0) : sec.children().eq(0);
					 var flag = $(this).data('clicked');
					 self.ckList(flag,$(this));
					 
				 }catch(err){
					 alert(err);
				 };
			});			
		}
		
	},
	secList: function(sec,el,a){
		var opt = isNaN(a) ? a : el.find(this.options.sector)[a];
		var Drlink = this.options.receiver ? $(sec).find(this.options.receiver).eq(0) : $(sec).children().eq(0);
		Drlink.html($(opt).text() === this.options.initialTxt ? Drlink.data('IntalTxt') : $(opt).data(this.options.name));
		this.options.sectorClass && $(opt).addClass(this.options.sectorClass).siblings().removeClass(this.options.sectorClass);
		$.isFunction(this.options.porps) && $(sec).data('value',this.options.porps($(opt)));
		this.container.stopTime ('Dr');
		this.container.find(this.options.mselect).removeClass(this.options.msActiv);
		el.hide();
	
		$.fireEvent(this.options.onSelect,[$(opt),Drlink,sec]);//回调指向选择项&sec		
	},
	hideTip: function(sec,el){
		el && el.hide();
		sec && sec.removeClass(this.options.msActiv);
		$.fireEvent(this.options.onClose,[el,sec]);
	},
	hideAll: function(sec){
		this.container.stopTime('Dr');//清除定时器ps：JQ的hover事件比较愚蠢！
		this.container.find(this.options.mselect).removeClass(this.options.msActiv);
		sec && sec.addClass(this.options.msActiv);	
		this.container.find(this.options.mBody).hide();
		this.menuShow = false;
		
	},
	accord: function(sec,el){
		
		if(sec.hasClass(this.options.msActiv)){
			return false;
		}else{
			sec.addClass(this.options.msActiv);
		}
		this.hideAll(sec);

		time = this.options.makeAccord ? this.options.duration : false;
		if(time && time>0){
			
			el.stop().slideDown({duration:this.options.duration,easing:'swing'});			
			
			
		}else{
			
			el.show();
			this.menuShow = true;
			//console.log(el.html())
			
		}
		$.fireEvent(this.options.onActive,[sec,el]);
	},
	showIndex: function(num){
		if(num < 0){
			this.hideAll();
			return false
		}
		try{
			var isec = this.container.find(this.options.mselect)[num];
			
			var iel = $(isec).siblings(this.options.mBody).length>0 ? $(isec).siblings(this.options.mBody).eq(0) : $(isec).find(this.options.mBody).eq(0);
			this.accord($(isec),iel);
			$.fireEvent(this.options.onShow,[isec,iel]);
		}catch(err){
			alert(err)
		}
		
	},
	ckList: function(flag,list){
		 var ids = list.attr('id');
		 var ckBox = list.find('input:checkbox');
		 switch(flag){
			case 1 :
				list.data('clicked',2);
				this.container.find('em[rel="'+ids+'"]').closest('span.secNode').remove();
				ckBox.prop('checked', false);
				
			break;
			case 2 :
			default:
				dat = ckBox.data('op');
				list.data('clicked',1);
				ckBox.prop('checked', true);
				Drlink.append('<span class="secNode" data-op="'+dat+'">'+list.text()+'<em class="deletbtn" rel="'+ids+'"></em></span>');
				$.fireEvent(this.options.onSelect,[list,Drlink]);
			break;
		 }	
	}
});

/**
 * ZUI.SL
 * @version		1.3 #20140827
 * @author		YafullyZhao
 */
ZUI.SL = new $.Class({
    options: {
		moveBox: null,
        slides: null,
        slideDuration: null,
        effectDuration: null,
		effect:'linear',
        fadeDist: null,
        fadePosition: null,//'left','top','fade','flowX','flowY','carouselX',carouselY
        stopSlideOnClick: true,
        autoSlide: false,
        navigationNums: true,
		navbox:null,
		nav:'a',
		navOnClass:'active',
		circle:true,
		space:10,//单元间距偏移
		skew:0,
		limit:null,//carousel 显示区最少单元个数
		autoSize:false,
		preload:false,
		nextBtn:null,
		prevBtn:null,
		onInit:$.noop,
		onStart:$.noop,
		onFinish:$.noop,
		onNext:$.noop,
		onPrev:$.noop,
		onPreLoad:$.noop	
    },
    initialize: function (element,options) {
        this.options = $.extend({},this.options, options);
        this.container = (typeof element == 'object') ? element : $('#'+element);
		this.moveBox = $('#'+this.options.moveBox).css('position','relative');
		this.preOver = this.options.preload ? $('#'+this.options.preload) : null;
        this.currentKey = 0;
		this.busy = false;
		this.limit = null;
		
//		this.options.autoSize && $(window).resize($.proxy(function(){
//			this.prepareSlides();
//		},this));
		this.preOver ? this.preload():this.start();
    },
	preload:function(){
		$.fireEvent(this.options.onPreLoad,[this.moveBox,this.preOver,this]);
	},
    start: function () {
        this.prepareSlides();
        this.injectNavigation();
        if (this.options.autoSlide) {
			this.AutoScroll();
			
            this.container.on({
                'mouseenter': $.proxy(function(){
					this.focused = true;
                    this.container.stopTime('SL');
					
                },this),
                'mouseleave': $.proxy(function(){
                    this.focused = false;
					this.AutoScroll();
                },this)
            })
        }
		if(this.options.nextBtn){
			var nextBtn = $('#'+this.options.nextBtn);
			this.options.limit >= this.totalSlides && nextBtn.hide();
			nextBtn.on('click',$.proxy(function(){
				this.next();
			},this));
		}
		if(this.options.prevBtn){ 
			var prevBtn = $('#'+this.options.prevBtn);
			this.options.limit >= this.totalSlides && prevBtn.hide();
			prevBtn.on('click',$.proxy(function(){
				this.prev();
			},this));
		}
    },
    prepareSlides: function (A) {
		this.currentKey = A ? A : 0;
        this.slides = this.container.find('.'+this.options.slides);	
        this.totalSlides = this.slides.length;
		this.buffer = Math.floor((this.totalSlides-1)/2);
		
		this.continued = false;
		this.carousel = false;
		var E = $(this.slides[this.currentKey]);
		if(this.totalSlides < this.limit) return;
		switch(this.options.fadePosition){
			
			case 'left':
				this.depth = this.options.fadeDist ? this.options.fadeDist : this.container.innerWidth();
			break;
			case 'top':
				this.depth = this.options.fadeDist ? this.options.fadeDist : this.container.innerHeight();
			break;

			case 'flowX':
				this.depth = this.options.fadeDist ? this.options.fadeDist : this.container.innerWidth();
				this.moveBox.css({'width':(this.depth+this.options.space)*this.totalSlides,'left':(this.depth+this.options.space)*this.options.skew});
				this.continued = true;
			break;
			case 'flowY':
				this.depth = this.options.fadeDist ? this.options.fadeDist : this.container.innerHeight();
				this.moveBox.css({'height':(this.depth+this.options.space)*this.totalSlides,'top':(this.depth+this.options.space)*this.options.skew});
				this.continued = true;
			break;
			case 'carouselX':
				this.carousel = true;
				this.depth = this.options.fadeDist+this.options.space;
				this.moveBox.css({'width':(this.depth+100)*this.totalSlides,'left':-(this.depth+this.options.space)*this.options.skew});
				this.limit = this.options.limit ? this.options.limit : Math.floor(this.container.innerWidth()/this.depth);
			break;
			case 'carouselY':
				this.carousel = true;
				this.depth = this.options.fadeDist+this.options.space;
				this.moveBox.css({'height':(this.depth+100)*this.totalSlides,'top':-(this.depth+this.options.space)*this.options.skew});
				this.limit = this.options.limit ? this.options.limit : Math.floor(this.container.innerHeight()/this.depth);
			break;
			default:
			break;	
		}
		
        if(this.continued){
			this.selectItem(0,null,this.options.fadePosition=='flowX'?true:false);
		}
		else if(this.carousel){
			this.selectItem(0,null,this.options.fadePosition=='carouselX'?true:false);
		}
		else{
			this.slides.css({
				'left':this.options.fadePosition=='left' ? this.depth : 0,
				'top':this.options.fadePosition=='top' ? this.depth : 0,
				'display':'none'
			});
			E.css({left:0,top:0,'display':'block','zIndex':this.options.fadePosition=='fade' ? 10 : null});
		}
		
		$.fireEvent(this.options.onInit,[E]);
    },
    injectNavigation: function () {
		if(!this.options.navbox)return false;
        this.navLinks = this.options.nav ? $('#'+this.options.navbox).find(this.options.nav) : $('#'+this.options.navbox).children();
        this.slides.each($.proxy(function(B,C){
			var n = $(this.navLinks[B]);
			this.options.navigationNums && n.html(B + 1);
			n.on('click',$.proxy(function(D){
				        D.preventDefault();
                        
						this.container.stopTime('SL');
                        this.goToSlide(B);
                        if (this.options.stopSlideOnClick && this.options.autoSlide) {
                            //this.period = this.next.bind(this).periodical(this.options.slideDuration || 5000)////////
							this.AutoScroll();
                        }	
					},this));
            if (B == this.currentKey) n.addClass(this.options.navOnClass);

        },this));
    },	
	AutoScroll: function () {
			this.container.stopTime('SL');
			if (!this.focused) {
				this.container.everyTime(this.options.slideDuration+'ms','SL',$.proxy(function(){
					this.next();
				},this));
			}
    },
    next: function(){
		if (this.busy) return;
		$.fireEvent(this.options.onNext,[this.currentKey,this.totalSlides,this.moveBox]);
		this.goToSlide(this.currentKey + 1);
		
    },
	prev: function(){
		if (this.busy) return;
		$.fireEvent(this.options.onPrev,[this.currentKey,this.totalSlides,this.moveBox]);
		this.goToSlide(this.currentKey - 1);
		
	},
	selectItem: function(item_index,slOpt,B,derect){
		this.slides.attr('class',this.options.slides);
		this.index = item_index;
		$(this.slides[item_index]).addClass('flow_current');
		//[((rowI % 2) ? 'remove' : 'add')+'Class']
		
		if(this.totalSlides <= this.limit) return;

		var buff = this.buffer;
		$.number.times(this.buffer,$.proxy(function(index){

		  index++;
		  var target_index = item_index+index,slOther,rNum;
		  if(target_index <= (this.totalSlides-1)){
			rNum = target_index;
		  } else {
			var adjusted_index = (target_index-this.totalSlides);
			rNum = adjusted_index;
		  }
		  slOther = this.slides[rNum];
 		  $(slOther).addClass('flowNext flowNext_'+index);

		  if(this.carousel){
			 index > 1 ? $(this.slides[rNum-1]).after(slOther) : this.moveBox.prepend(slOther);
		  }else{
			 B ? $(slOther).animate({left:(this.depth+this.options.space)*index},slOpt): $(slOther).animate({top:(this.depth+this.options.space)*index},slOpt);
		  }
		},this));
		var negative_index = 1;
		$.number.times(this.buffer,$.proxy(function(index){
		  index++;
		  var target_index = item_index-index,slOther,rNum;

		  if(target_index >= 0){
			slOther = this.slides[target_index];
			rNum = target_index;
		  } else {
			var adjusted_index = this.totalSlides-negative_index; 
			negative_index++;
			rNum = adjusted_index;
			 
		  }
		  slOther = this.slides[rNum];

		  $(slOther).addClass('flowPrev flowPrev_'+index);
		  if(this.carousel){
			  index > 1 ? $(this.slides[rNum-1]).after(slOther): this.moveBox.append(slOther);
		  }else{
			  B ? $(slOther).animate({left:-(this.depth+this.options.space)*index},slOpt) : $(slOther).animate({top:-(this.depth+this.options.space)*index},slOpt);
		  }	
		},this));
		if(this.carousel){
			this.moveBox.prepend(this.slides[item_index]);	
		}else{
			B ? $(this.slides[item_index]).animate({left:0},slOpt) : $(this.slides[item_index]).animate({top:0},slOpt);
		}		
	},	
    goToSlide: function (A) {
        if (A == this.currentKey || this.busy) return;
		
		var B = this.options.fadePosition ;
		var derection = (A > this.currentKey) ? 1 : -1;//判断左右
            if (A < 0) {
                A = this.totalSlides-1;
            } else if (A > this.totalSlides-1) {
                A = 0;
            }//异常处理
		var D = $(this.slides[A]);
		var E = $(this.slides[this.currentKey]);
		for(var i=0;i<this.slides.length;i++){
			switch (i){
				case A :
				case this.currentKey:
				break;
				default:
					if(!this.continued&&!this.carousel)$(this.slides[i]).hide();
				break;
			}			
		}
		
		this.slOpt = {
			duration:this.options.effectDuration || 300,
			start:$.proxy(function(){
				D.show().css(B=="fade" ? {'opacity':1,'zIndex':1} : {});
				
			},this),
			complete:$.proxy(function(){
				switch (B) {
					case "left":
					case "top":
						$(this).css(B,null);
						E.hide();
					break;
					case "fade":
						D.css('zIndex',5);
						E.css('zIndex',0).hide();
					break;
				}
				this.busy = false;
				$.fireEvent(this.options.onFinish,[D,E,this.moveBox,A]);
			},this)
		};
		if(B =="left"||B =="top"){
				D.css(B, 0);
				this.options.circle ? E.show().css(B,(-derection)*this.depth) : E.hide();
				this.moveBox.css(B,derection*this.depth);			
		}
		this.busy = true;
		
        switch (B) {
			case "top":
				this.moveBox.css('top',derection*this.depth).animate({top:0},this.slOpt);
				break;
			case "left":
				this.moveBox.css('left',derection*this.depth).animate({left:0},this.slOpt);
				break;	
			case "fade":
				E.animate({opacity:0},this.slOpt);
				break;
			case 'flowX':
			
				//E.animate({width:P?this.depth-20:0},slOpt);
				this.selectItem(A,this.slOpt,B);
				break;
			case 'flowY':
				//E.animate({height:P?this.depth-20:0},slOpt);
				this.selectItem(A,this.slOpt);
				break;
			case 'carouselX':
				this.selectItem(A,this.slOpt,B,derection);
				if(this.totalSlides > this.limit){
					this.moveBox.css('margin-left',derection*this.depth).animate({marginLeft:0},this.slOpt);
				}else {
					this.busy = false;
				}
				break;
			case 'carouselY':
				this.selectItem(A,this.slOpt,derection);
				if(this.totalSlides > this.limit){
					this.moveBox.css('margin-top',derection*this.depth).animate({marginTop:0},this.slOpt);
				}else{
					this.busy = false;
				}
				break;		
        }

		if(this.options.navbox){
			$(this.navLinks[this.currentKey]).removeClass(this.options.navOnClass);
			$(this.navLinks[A]).addClass(this.options.navOnClass);
		}
        this.currentKey = A;
		
		$.fireEvent(this.options.onStart,[D,E,A]);
    },
	getCurrent: function(){
	 	return this.slides[this.currentKey];
	},
	getNum:function(){
	 	return this.currentKey;
	},
	getSliders: function(){
		return $(this.slides);
	}
});
/*
---
description: Element Visibility Watcher class.

authors: YafullyZhao
date:2012.12.26
requires:
- core/1.3.0: '*'

provides: [VisibilityWatcher]

...
*/

ZUI.VsWatcher = new $.Class({
	options: {
		poll_interval: 2000,//轮询时间间隔
		method: null, //poll轮询 or scroll滚动
		delay: 0, //事件触发延迟
		delta_px: 0, //监听区域扩展值
		event_source: null, //滚动事件监听对象
		
		onEnter:$.noop,
		onLeft:$.noop,
		onScroll:$.noop
		
	},

	initialize: function(el,options){
		this.options = $.extend({},this.options, options);
		this.targetElements = [];
		this.evs = this.options.event_source ? $('#'+this.options.event_source) : $(window);
		this.add(el);
		this.visibilityChangedCheck();
		this.startWatching();
		
	},

	getVisibility: function(targetElement){
		if (!targetElement) targetElement = this.targetElements[0].element;

		var elpos = targetElement.offset();
		var elementPosition ={x:elpos.left,y:elpos.top};
		var getScroll = {x:$(window).scrollLeft(),y:$(window).scrollTop()};
		var getSize ={x:$(window).width(),y:$(window).height()};
		var elementSize = {x:targetElement.outerWidth(),y:targetElement.outerHeight()};
		var returned_array = [];

		$.each(['x', 'y'],$.proxy(function(index,el){
			
			if (getScroll[el] > (elementPosition[el] + elementSize[el] + this.options.delta_px)){
				returned_array[el] = 'after'}
			else if ((getScroll[el] + getSize[el]) > (elementPosition[el] - this.options.delta_px)){
				returned_array[el] = 'on'}
			else{
				returned_array[el] = 'before'
				}
		}, this));

		return returned_array;
	},

	startWatching: function() {
		if (this.options.method == 'poll')
		{
			//this.interval_id = this.visibilityChangedCheck.periodical(this.options.poll_interval, this);
			
			this.evs.everyTime(this.options.poll_interval+'ms','VW',$.proxy(function(){
				this.visibilityChangedCheck();
			},this),0,true);
		} else {
			this.evs.on('scroll',$.proxy(function(){
				this.visibilityChangedCheck();
			},this));
			
		}
		return this;
	},

	stopWatching: function() {
		if (this.options.method == 'poll')
		{
			this.evs.stopTime('VW');
		} else {
			this.evs.of('scroll', this.visibilityChangedCheck);
			this.evs.stopTime('VWD');
		}
		return this;
	},

	add: function(targetElement){
		$(targetElement).each($.proxy(function(i,el){
			this.targetElements.push({'element': $(el), 'last_state': []});
			
		},this));
		
		return this;
	},

	remove: function(targetElement){
		targetElement = $(targetElement);
		this.targetElements = $.filter(this.targetElements,function(i,el){
			return (targetElement != el['element']);
		});
		return this;
	},
	visibilityChangedCheck: function(){
		
		var currentTime = Date.now();
		
		$.each(this.targetElements,$.proxy(function(index,targetElement){
			var cur_state = this.getVisibility( targetElement.element );

			var sat = $.grep(['x', 'y'], function(axis,index){return (cur_state[axis] == targetElement.last_state[axis])}).length == 2;
			
			if (!sat){
			
				if (!targetElement.last_state['started']) targetElement.last_state['started'] = currentTime;
				if ((currentTime - targetElement.last_state['started']) >= this.options.delay){
					targetElement.last_state = cur_state;
					//var sat2 = $.array.every(['x', 'y'],function(index,axis){return( cur_state[axis] == 'on')});
					var sat2= $.grep(['x', 'y'], function(axis,index){return (cur_state[axis] == 'on')}).length == 2;
					sat2 ? $.fireEvent(this.options.onEnter, [targetElement.element,cur_state]) : $.fireEvent(this.options.onLeft, [targetElement.element,cur_state]);
				} else {
					if (this.options.delay>0 && this.options.method == 'event'){
						this.evs.stopTime('VWD');
						this.evs.oneTime(this.options.delay+1+'ms','VWD',$.proxy(function(){
								this.visibilityChangedCheck();
						},this));
					}
				}
			} else {
				$.array.remove(targetElement.last_state,'started');
			}
		},this));

		$.fireEvent(this.options.onScroll);
		return this;
	}
});//!Class

/*
*Validate
*/
ZUI.Validator = new $.Class({
		options: {
			ruleTag: ".Vmsg",
			tagClass:"Vmsg",
			passClass:"Vpass",
			erroClass:"Verro",
			styleNeutral: {"background-color": "#fff", "border-color": "#ccc"},//normal style
			styleInvalid: {"background-color": "#FFE0DB", "border-color": "#f90"},//focus style
			required: {type: "required", re: /.+/},
			alpha: {type: "alpha", re: /^[a-z ._-]+$/i},
			alphanum: {type: "alphanum", re: /^[a-z0-9 ._-]+$/i},
			integer: {type: "integer", re: /^[-+]?\d+$/},
			real: {type: "real", re: /^\+?[1-9][0-9]*$/},
			date: {type: "date", re: /^((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/},
			dateISO8601: {type: "dateISO8601", re: /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/},
			dateEu: {type: "dateEU", re: /^(((([1-9])|([0-2][0-9])|(3[01]))[-]((0[13578])|([13578])|(1[02])))|((([1-9])|([0-2][0-9])|(30))[-]((0[469])|([469])|(11)))|((([1-9])|([0-2][0-9])))[-](2|02))[-]\d{4}$|^\d{4}$/},
			email: {type: "email", re: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/},
			phone: {type: "phone", re: /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/},
			moblie: {type: "moblie", re:/^((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(15[012356789]\d{8})|(147\d{8})|(18\d{9}))$/},
			url: {type: "url", re: /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/},
			ip:{type:"ip", re:/^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/},
			qq:{type:"qq", re:/^[1-9]\d{4,8}$/},
			code:{type:"code", re:/^[0-9]\d{5}$/},
			decim : {type:"decim", re:/^-?\d+\.\d+$/},
			zip : {type:"zip", re:/^[1-9]\d{5}$/},
			chinese:{type:"chinese", re:/^[\u4e00-\u9fa5]{0,}$/},
			confirm: {type: "confirm"},
			compare:{type:"compare",re:function(a,b){
				if(a)return a==$('#'+b).val()
				}
			},
			strength:{type:"strength", re:/^(?!\D+$)(?![^a-zA-Z]+$)\S{6,15}$/},
			idCard:{type:"idCard", re:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/},
			range:{type:"range",re:function(a,b,g){
				var ran = b.split(',');
				var ban = g ? a : a.length;
				return ( ban >= ran[0] && ban <= ran[1] )
				}
			},
			includes: {type:"includes",re:function(a,b){
				return $.array.pick(b.split(','),function(item){return new RegExp(item).test(a)});
				}
			},
			excludes: {type:"excludes",re:function(a,b){
				return $.array.pick(b.split(','),function(item){return new RegExp(item).test(a)}) == null;

				}
			},
			autoSbmit:false,
			submitBtn:null,
			restBtn:null,
			valiHide:true,
			infoHide:true,
			onValid: $.noop,
			onSubmit: $.noop,
			onDel: $.noop
		},
	initialize: function(form,options) {
		this.options = $.extend({},this.options, options);
		
		this.form = $('#'+form);
		
		this.validations = [];
		
		this.form.find(this.options.ruleTag).each($.proxy(function(i,el){
			this.options.valiHide ? this.reg($(el)) : $(el).is(':visible') && this.reg($(el));

		},this));//遍历表单
		

		
		this.options.infoHide && this.form.on('click',this.options.ruleTag,function(){
			$(this).data("pos") && $(this).fadeOut();
		});
		if(this.options.autoSbmit){
			this.form.on({
				"submit": $.proxy(function(){
					return this._onSubmit();
				},this),
				"reset": $.proxy(function(){
					this._onReset();
				},this)
			});//给form添加提交、重置事件
			
		}else{
			this.options.submitBtn && $(this.options.submitBtn).on('click',$.proxy(function(){
				
				this._onSubmit();
			},this));
			this.options.restBtn && $(this.options.restBtn).on('click',$.proxy(function(){
				this._onReset();
			},this));
		}
	},
	reg: function(m){
			var tg = m.data("for"),ru = m.data("rule"),rules,maybe = ru.indexOf('|') > 0;
			var elmt = $('#'+tg);
			if(this._isChildType(elmt[0])||!elmt[0])
			elmt = this.form.find('input[name='+tg+']');
			
			var rules = maybe ? ru.split('|') : ru.split(',');
			

			m.data("normal",m.text()).data('maybe',maybe ? 1 : 0);
			var opt=[];
			$.each(rules,$.proxy(function(i,klass) {
				if(this.options[klass]) 
				$.array.include(opt,this.options[klass]);
				//this.validations.include([elmt, opt ,m]);
				
				$.array.include(this.validations,[elmt, opt ,m]);//已存在则不向数组添加
			},this));
			
			//console.log(elmt.type);console.log(elmt.length);
			if(this._isChildType(elmt[0])){
				for(var i = 0; i < elmt.length; i++) {
					$(elmt[i]).on('blur',$.proxy(function(){
						this._validateChild(elmt, opt,m);
						$.fireEvent(this.options.onValid,[elmt,m]);
					},this));				
				}
			}else{
				
				elmt.on("blur", $.proxy(function(){
					if(!$.trim(elmt.val())==''){
						this._validate(elmt, opt, m);
					}
					$.fireEvent(this.options.onValid,[elmt,m]);//失去焦点时触发回调，指向表单元素&验证Tip。
				},this));
			}
			return this;	
	},//读取注册单个表单元素参数
	_isChildType: function(el) {
			if(!el||!el.type) return false;
			var elType = el.type.toLowerCase();
			if((elType == "radio") || (elType == "checkbox")) return true;
			return false;

	},
	_validate: function(field, options , msgbox) {
			var satus,custom,maybe = msgbox.data('maybe');
			for(var i=0;i<options.length;i++){//这里循环单个验证里面的组合条件
				var vType = options[i].type;
	
				switch(vType) {//判断类型
					case "compare":
					case "range":
					case "includes":
					case "excludes":
						satus = options[i].re(field.val(),msgbox.data(vType));
						break;		
					//case "ajax":
//						var ajxv = options[i].re(field,msgbox.data(vType),msgbox);
//						satus = ajxv?ajxv[0]:false;
//						custom = ajxv?ajxv[1]:true;

					//break;	
					case "required":	
					default:
						satus = $.isFunction(options[i].re) ? options[i].re(field.val(),field,msgbox) : options[i].re.test(field.val());
						custom = options[i].custom ? options[i].custom : false;
						break;
				}
				if(maybe){//如果条件为或"|"运算符
					if(satus==true)break;//只要有一个符合则跳出循环
				}else{
					if(satus==false)break;//只要有一个不符合则跳出循环
				}
			}
		this._msgInject(msgbox,options,satus,field,custom);
		return satus;
	},
	_validateChild: function(child, options, msgbox) {
		var nlButtonGroup = child;
		var cbCheckeds = 0;
		var isValid = true;
		for(var i = 0; i < nlButtonGroup.length; i++) {
			nlButtonGroup[i].checked && cbCheckeds++;
		}
		for(var i=0;i<options.length;i++){//这里循环单个验证里面的组合条件
			switch(options[i].type) {//判断类型

				case "range":
					isValid = options[i].re(cbCheckeds,msgbox.data("range"),true);
					break;	
				case "required":
					isValid = (cbCheckeds == 0) ? false : true; 
					break;	
				default:
					break;
			}
			if(isValid==false)break;		
		}		
		this._msgInject(msgbox, options,isValid);
		return isValid;
	},
	_msgInject: function(owner, options, satus , field ,custom) {
		var pos = owner.data("pos"),skew = owner.data("skew");
		var skews = skew ? skew.split(',') : null;
		var x = skews ? skews[0] : 0;
		var y = skews ? skews[1] : 0;
		
		pos && owner.css({'position':'absolute','top':'inherit','left':'inherit','display':this.options.infoHide ? 'inline-block':'inherit','opacity':this.options.infoHide ? 1:'inherit'}).flpos(field,pos,x,y);
		
		if(!custom){
			field && field.css(satus?this.options.styleNeutral:this.options.styleInvalid);
			owner.attr('class',satus ? this.options.tagClass+" "+this.options.passClass : this.options.tagClass+" "+this.options.erroClass);
			var msg = owner.data("warn") ? owner.data("warn"): "验证失败.",mpass=owner.data("pass") ? owner.data("pass"): "验证通过.",passHide = owner.data("passhide") ? true : false,valiHide = owner.data("valihide") ? true : false;
			owner.html(satus ? mpass : msg).css('display',passHide && satus || valiHide && !satus ? 'none': 'inline-block');
		}
	},

	_msgRemove: function(options,owner,isReset,field) {
		var pos = owner.data("pos");
		isReset = isReset || false;
		field && field.css(this.options.styleNeutral);
		owner.html(owner.data("normal")).removeClass().addClass(this.options.tagClass);
		
	},
	_onSubmit: function() {
		var isValid = false;
		var erro = 0;
		$.each(this.validations,$.proxy(function(i,array) {

			isValid =this._isChildType(array[0][0]) ? this._validateChild(array[0], array[1],array[2]) : this._validate(array[0], array[1],array[2]);
			array[2].hasClass(this.options.erroClass) && erro++;
			//console.log(erro);
		},this));
		
		if(erro > 0 || !this.options.autoSbmit)isValid = false;
		$.fireEvent(this.options.onSubmit,[this.form,erro]);//提交表单时触发回调，指向form和全体验证结果。
		return isValid;
	},
	_onReset: function() {
		$.each(this.validations,$.proxy(function(i,array) {
			if(array[0].length && array[0].tagName !="SELECT"){
				array[0].css(this.options.styleNeutral);
				this._msgRemove(array[1], array[2], true,array[0]);
			}else{
				
				this._msgRemove(array[1], array[2], true);
			}
		},this));
	},
	addMethod: function(name,opt){
		this.options.name = name;
		this.options[name] = opt;
		return this;
	},
	del: function(m){//console.log(item);
		var nArray = $.grep(this.validations,function(i){
			return i[2].attr('id') != m.attr('id');
		});
		this.validations = nArray;
		$.fireEvent(this.options.onDel,[m,this.form,this.validations]);
	}				
});//!Class




//Tmpl Plugin
(function( jQuery, undefined ){
	var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
		newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = { key: 0, data: {} }, itemKey = 0, cloneIndex = 0, stack = [];

	function newTmplItem( options, parentItem, fn, data ) {
		// Returns a template item data structure for a new rendered instance of a template (a 'template item').
		// The content field is a hierarchical array of strings and nested items (to be
		// removed and replaced by nodes field of dom elements, once inserted in DOM).
		var newItem = {
			data: data || (data === 0 || data === false) ? data : (parentItem ? parentItem.data : {}),
			_wrap: parentItem ? parentItem._wrap : null,
			tmpl: null,
			parent: parentItem || null,
			nodes: [],
			calls: tiCalls,
			nest: tiNest,
			wrap: tiWrap,
			html: tiHtml,
			update: tiUpdate
		};
		if ( options ) {
			jQuery.extend( newItem, options, { nodes: [], parent: parentItem });
		}
		if ( fn ) {
			// Build the hierarchical content to be used during insertion into DOM
			newItem.tmpl = fn;
			newItem._ctnt = newItem._ctnt || newItem.tmpl( jQuery, newItem );
			newItem.key = ++itemKey;
			// Keep track of new template item, until it is stored as jQuery Data on DOM element
			(stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
		}
		return newItem;
	}

	// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var ret = [], insert = jQuery( selector ), elems, i, l, tmplItems,
				parent = this.length === 1 && this[0].parentNode;

			appendToTmplItems = newTmplItems || {};
			if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
				insert[ original ]( this[0] );
				ret = this;
			} else {
				for ( i = 0, l = insert.length; i < l; i++ ) {
					cloneIndex = i;
					elems = (i > 0 ? this.clone(true) : this).get();
					jQuery( insert[i] )[ original ]( elems );
					ret = ret.concat( elems );
				}
				cloneIndex = 0;
				ret = this.pushStack( ret, name, insert.selector );
			}
			tmplItems = appendToTmplItems;
			appendToTmplItems = null;
			jQuery.tmpl.complete( tmplItems );
			return ret;
		};
	});

	jQuery.fn.extend({
		// Use first wrapped element as template markup.
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( data, options, parentItem ) {
			return jQuery.tmpl( this[0], data, options, parentItem );
		},

		// Find which rendered template item the first wrapped DOM element belongs to
		tmplItem: function() {
			return jQuery.tmplItem( this[0] );
		},

		// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
		template: function( name ) {
			return jQuery.template( name, this[0] );
		},

		domManip: function( args, table, callback, options ) {
			if ( args[0] && jQuery.isArray( args[0] )) {
				var dmArgs = jQuery.makeArray( arguments ), elems = args[0], elemsLength = elems.length, i = 0, tmplItem;
				while ( i < elemsLength && !(tmplItem = jQuery.data( elems[i++], "tmplItem" ))) {}
				if ( tmplItem && cloneIndex ) {
					dmArgs[2] = function( fragClone ) {
						// Handler called by oldManip when rendered template has been inserted into DOM.
						jQuery.tmpl.afterManip( this, fragClone, callback );
					};
				}
				oldManip.apply( this, dmArgs );
			} else {
				oldManip.apply( this, arguments );
			}
			cloneIndex = 0;
			if ( !appendToTmplItems ) {
				jQuery.tmpl.complete( newTmplItems );
			}
			return this;
		}
	});

	jQuery.extend({
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( tmpl, data, options, parentItem ) {
			var ret, topLevel = !parentItem;
			if ( topLevel ) {
				// This is a top-level tmpl call (not from a nested template using {{tmpl}})
				parentItem = topTmplItem;
				tmpl = jQuery.template[tmpl] || jQuery.template( null, tmpl );
				wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
			} else if ( !tmpl ) {
				// The template item is already associated with DOM - this is a refresh.
				// Re-evaluate rendered template for the parentItem
				tmpl = parentItem.tmpl;
				newTmplItems[parentItem.key] = parentItem;
				parentItem.nodes = [];
				if ( parentItem.wrapped ) {
					updateWrapped( parentItem, parentItem.wrapped );
				}
				// Rebuild, without creating a new template item
				return jQuery( build( parentItem, null, parentItem.tmpl( jQuery, parentItem ) ));
			}
			if ( !tmpl ) {
				return []; // Could throw...
			}
			if ( typeof data === "function" ) {
				data = data.call( parentItem || {} );
			}
			if ( options && options.wrapped ) {
				updateWrapped( options, options.wrapped );
			}
			ret = jQuery.isArray( data ) ?
				jQuery.map( data, function( dataItem ) {
					return dataItem ? newTmplItem( options, parentItem, tmpl, dataItem ) : null;
				}) :
				[ newTmplItem( options, parentItem, tmpl, data ) ];
			return topLevel ? jQuery( build( parentItem, null, ret ) ) : ret;
		},

		// Return rendered template item for an element.
		tmplItem: function( elem ) {
			var tmplItem;
			if ( elem instanceof jQuery ) {
				elem = elem[0];
			}
			while ( elem && elem.nodeType === 1 && !(tmplItem = jQuery.data( elem, "tmplItem" )) && (elem = elem.parentNode) ) {}
			return tmplItem || topTmplItem;
		},

		// Set:
		// Use $.template( name, tmpl ) to cache a named template,
		// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
		// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

		// Get:
		// Use $.template( name ) to access a cached template.
		// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
		// will return the compiled template, without adding a name reference.
		// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
		// to $.template( null, templateString )
		template: function( name, tmpl ) {
			if (tmpl) {
				// Compile template and associate with name
				if ( typeof tmpl === "string" ) {
					// This is an HTML string being passed directly in.
					tmpl = buildTmplFn( tmpl );
				} else if ( tmpl instanceof jQuery ) {
					tmpl = tmpl[0] || {};
				}
				if ( tmpl.nodeType ) {
					// If this is a template block, use cached copy, or generate tmpl function and cache.
					tmpl = jQuery.data( tmpl, "tmpl" ) || jQuery.data( tmpl, "tmpl", buildTmplFn( tmpl.innerHTML ));
					// Issue: In IE, if the container element is not a script block, the innerHTML will remove quotes from attribute values whenever the value does not include white space.
					// This means that foo="${x}" will not work if the value of x includes white space: foo="${x}" -> foo=value of x.
					// To correct this, include space in tag: foo="${ x }" -> foo="value of x"
				}
				return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
			}
			// Return named compiled template
			return name ? (typeof name !== "string" ? jQuery.template( null, name ):
				(jQuery.template[name] ||
					// If not in map, and not containing at least on HTML tag, treat as a selector.
					// (If integrated with core, use quickExpr.exec)
					jQuery.template( null, htmlExpr.test( name ) ? name : jQuery( name )))) : null;
		},

		encode: function( text ) {
			// Do HTML encoding replacing < > & and ' and " by corresponding entities.
			return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
		}

	});

	jQuery.extend( jQuery.tmpl, {
		tag: {
			"tmpl": {
				_default: { $2: "null" },
				open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
				// tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
				// This means that {{tmpl foo}} treats foo as a template (which IS a function).
				// Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
			},
			"wrap": {
				_default: { $2: "null" },
				open: "$item.calls(__,$1,$2);__=[];",
				close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
			},
			"each": {
				_default: { $2: "$index, $value" },
				open: "if($notnull_1){$.each($1a,function($2){with(this){",
				close: "}});}"
			},
			"if": {
				open: "if(($notnull_1) && $1a){",
				close: "}"
			},
			"else": {
				_default: { $1: "true" },
				open: "}else if(($notnull_1) && $1a){"
			},
			"html": {
				// Unecoded expression evaluation.
				open: "if($notnull_1){__.push($1a);}"
			},
			"=": {
				// Encoded expression evaluation. Abbreviated form is ${}.
				_default: { $1: "$data" },
				open: "if($notnull_1){__.push($.encode($1a));}"
			},
			"!": {
				// Comment tag. Skipped by parser
				open: ""
			}
		},

		// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
		complete: function( items ) {
			newTmplItems = {};
		},

		// Call this from code which overrides domManip, or equivalent
		// Manage cloning/storing template items etc.
		afterManip: function afterManip( elem, fragClone, callback ) {
			// Provides cloned fragment ready for fixup prior to and after insertion into DOM
			var content = fragClone.nodeType === 11 ?
				jQuery.makeArray(fragClone.childNodes) :
				fragClone.nodeType === 1 ? [fragClone] : [];

			// Return fragment to original caller (e.g. append) for DOM insertion
			callback.call( elem, fragClone );

			// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
			storeTmplItems( content );
			cloneIndex++;
		}
	});

	//========================== Private helper functions, used by code above ==========================

	function build( tmplItem, nested, content ) {
		// Convert hierarchical content into flat string array
		// and finally return array of fragments ready for DOM insertion
		var frag, ret = content ? jQuery.map( content, function( item ) {
			return (typeof item === "string") ?
				// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
				(tmplItem.key ? item.replace( /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2" ) : item) :
				// This is a child template item. Build nested template.
				build( item, tmplItem, item._ctnt );
		}) :
		// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
		tmplItem;
		if ( nested ) {
			return ret;
		}

		// top-level template
		ret = ret.join("");

		// Support templates which have initial or final text nodes, or consist only of text
		// Also support HTML entities within the HTML markup.
		ret.replace( /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function( all, before, middle, after) {
			frag = jQuery( middle ).get();

			storeTmplItems( frag );
			if ( before ) {
				frag = unencode( before ).concat(frag);
			}
			if ( after ) {
				frag = frag.concat(unencode( after ));
			}
		});
		return frag ? frag : unencode( ret );
	}

	function unencode( text ) {
		// Use createElement, since createTextNode will not render HTML entities correctly
		var el = document.createElement( "div" );
		el.innerHTML = text;
		return jQuery.makeArray(el.childNodes);
	}

	// Generate a reusable function that will serve to render a template against data
	function buildTmplFn( markup ) {
		return new Function("jQuery","$item",
			// Use the variable __ to hold a string array while building the compiled template. (See https://github.com/jquery/jquery-tmpl/issues#issue/10).
			"var $=jQuery,call,__=[],$data=$item.data;" +

			// Introduce the data as local variables using with(){}
			"with($data){__.push('" +

			// Convert the template into pure JavaScript
			jQuery.trim(markup)
				.replace( /([\\'])/g, "\\$1" )
				.replace( /[\r\t\n]/g, " " )
				.replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
				.replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
				function( all, slash, type, fnargs, target, parens, args ) {
					var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
					if ( !tag ) {
						throw "Unknown template tag: " + type;
					}
					def = tag._default || [];
					if ( parens && !/\w$/.test(target)) {
						target += parens;
						parens = "";
					}
					if ( target ) {
						target = unescape( target );
						args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
						// Support for target being things like a.toLowerCase();
						// In that case don't call with template item as 'this' pointer. Just evaluate...
						expr = parens ? (target.indexOf(".") > -1 ? target + unescape( parens ) : ("(" + target + ").call($item" + args)) : target;
						exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
					} else {
						exprAutoFnDetect = expr = def.$1 || "null";
					}
					fnargs = unescape( fnargs );
					return "');" +
						tag[ slash ? "close" : "open" ]
							.split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
							.split( "$1a" ).join( exprAutoFnDetect )
							.split( "$1" ).join( expr )
							.split( "$2" ).join( fnargs || def.$2 || "" ) +
						"__.push('";
				}) +
			"');}return __;"
		);
	}
	function updateWrapped( options, wrapped ) {
		// Build the wrapped content.
		options._wrap = build( options, true,
			// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
			jQuery.isArray( wrapped ) ? wrapped : [htmlExpr.test( wrapped ) ? wrapped : jQuery( wrapped ).html()]
		).join("");
	}

	function unescape( args ) {
		return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
	}
	function outerHtml( elem ) {
		var div = document.createElement("div");
		div.appendChild( elem.cloneNode(true) );
		return div.innerHTML;
	}

	// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
	function storeTmplItems( content ) {
		var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
		for ( i = 0, l = content.length; i < l; i++ ) {
			if ( (elem = content[i]).nodeType !== 1 ) {
				continue;
			}
			elems = elem.getElementsByTagName("*");
			for ( m = elems.length - 1; m >= 0; m-- ) {
				processItemKey( elems[m] );
			}
			processItemKey( elem );
		}
		function processItemKey( el ) {
			var pntKey, pntNode = el, pntItem, tmplItem, key;
			// Ensure that each rendered template inserted into the DOM has its own template item,
			if ( (key = el.getAttribute( tmplItmAtt ))) {
				while ( pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute( tmplItmAtt ))) { }
				if ( pntKey !== key ) {
					// The next ancestor with a _tmplitem expando is on a different key than this one.
					// So this is a top-level element within this template item
					// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
					pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute( tmplItmAtt ) || 0)) : 0;
					if ( !(tmplItem = newTmplItems[key]) ) {
						// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
						tmplItem = wrappedItems[key];
						tmplItem = newTmplItem( tmplItem, newTmplItems[pntNode]||wrappedItems[pntNode] );
						tmplItem.key = ++itemKey;
						newTmplItems[itemKey] = tmplItem;
					}
					if ( cloneIndex ) {
						cloneTmplItem( key );
					}
				}
				el.removeAttribute( tmplItmAtt );
			} else if ( cloneIndex && (tmplItem = jQuery.data( el, "tmplItem" )) ) {
				// This was a rendered element, cloned during append or appendTo etc.
				// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
				cloneTmplItem( tmplItem.key );
				newTmplItems[tmplItem.key] = tmplItem;
				pntNode = jQuery.data( el.parentNode, "tmplItem" );
				pntNode = pntNode ? pntNode.key : 0;
			}
			if ( tmplItem ) {
				pntItem = tmplItem;
				// Find the template item of the parent element.
				// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
				while ( pntItem && pntItem.key != pntNode ) {
					// Add this element as a top-level node for this rendered template item, as well as for any
					// ancestor items between this item and the item of its parent element
					pntItem.nodes.push( el );
					pntItem = pntItem.parent;
				}
				// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
				delete tmplItem._ctnt;
				delete tmplItem._wrap;
				// Store template item as jQuery data on the element
				jQuery.data( el, "tmplItem", tmplItem );
			}
			function cloneTmplItem( key ) {
				key = key + keySuffix;
				tmplItem = newClonedItems[key] =
					(newClonedItems[key] || newTmplItem( tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent ));
			}
		}
	}

	//---- Helper functions for template item ----

	function tiCalls( content, tmpl, data, options ) {
		if ( !content ) {
			return stack.pop();
		}
		stack.push({ _: content, tmpl: tmpl, item:this, data: data, options: options });
	}

	function tiNest( tmpl, data, options ) {
		// nested template, using {{tmpl}} tag
		return jQuery.tmpl( jQuery.template( tmpl ), data, options, this );
	}

	function tiWrap( call, wrapped ) {
		// nested template, using {{wrap}} tag
		var options = call.options || {};
		options.wrapped = wrapped;
		// Apply the template, which may incorporate wrapped content,
		return jQuery.tmpl( jQuery.template( call.tmpl ), call.data, options, call.item );
	}

	function tiHtml( filter, textOnly ) {
		var wrapped = this._wrap;
		return jQuery.map(
			jQuery( jQuery.isArray( wrapped ) ? wrapped.join("") : wrapped ).filter( filter || "*" ),
			function(e) {
				return textOnly ?
					e.innerText || e.textContent :
					e.outerHTML || outerHtml(e);
			});
	}

	function tiUpdate() {
		var coll = this.nodes;
		jQuery.tmpl( null, null, null, this).insertBefore( coll[0] );
		jQuery( coll ).remove();
	}
})( jQuery );
/*Data Link*/
(function( $, undefined ){

var oldcleandata = $.cleanData,
	links = [],
	fnSetters = {
		val: "val",
		html: "html",
		text: "text"
	},
	eventNameSetField = "setField",
	eventNameChangeField = "changeField";

function getLinks(obj) {
	var data = $.data( obj ),
		cache,
		fn = data._getLinks || (cache={s:[], t:[]}, data._getLinks = function() { return cache; });
	return fn();
}

function bind(obj, wrapped, handler) {
	wrapped.bind( obj.nodeType ? "change" : eventNameChangeField, handler );
}
function unbind(obj, wrapped, handler) {
	wrapped.unbind( obj.nodeType ? "change" : eventNameChangeField, handler );
}

$.extend({
	cleanData: function( elems ) {
		for ( var j, i = 0, elem; (elem = elems[i]) != null; i++ ) {
			// remove any links with this element as the source
			// or the target.
			var links = $.data( elem, "_getLinks" );
			if ( links ) {
				links = links();
				// links this element is the source of
				var self = $(elem);
				$.each(links.s, function() {
					unbind( elem, self, this.handler );
					if ( this.handlerRev ) {
						unbind( this.target, $(this.target), this.handlerRev );
					}
				});
				// links this element is the target of
				$.each(links.t, function() {
					unbind( this.source, $(this.source), this.handler );
					if ( this.handlerRev ) {
						unbind( elem, self, this.handlerRev );
					}
				});
				links.s = [];
				links.t = [];
			}
		}
		oldcleandata( elems );
	},
	convertFn: {
		"!": function(value) {
			return !value;
		}
	},
	setField: function(target, field, value) {
		if ( target.nodeType ) {
			var setter = fnSetters[ field ] || "attr";
			$(target)[setter](value);
		} else {
			var parts = field.split(".");
			parts[1] = parts[1] ? "." + parts[1] : "";

				var $this = $( target ),
					args = [ parts[0], value ];

			$this.triggerHandler( eventNameSetField + parts[1] + "!", args );
			if ( value !== undefined ) {
				target[ field ] = value;
			}
			$this.triggerHandler( eventNameChangeField + parts[1] + "!", args );
		}
	}
});

function getMapping(ev, changed, newvalue, map) {
	var target = ev.target,
		isSetData = ev.type === eventNameChangeField,
		mappedName,
		convert,
		name;
	if ( isSetData ) {
		name = changed;
		if ( ev.namespace ) {
			name += "." + ev.namespace;
		}
	} else {
		name = (target.name || target.id);
	}

	if ( !map ) {
		mappedName = name;
	} else {
		var m = map[ name ];
		if ( !m ) {
			return null;
		}
		mappedName = m.name;
		convert = m.convert;
		if ( typeof convert === "string" ) {
			convert = $.convertFn[ convert ];
		}
	}
	return {
		name: mappedName,
		convert: convert,
		value: isSetData ? newvalue : $(target).val()
	};
}

$.extend($.fn, {
	link: function(target, mapping) {
		var self = this;
		if ( !target ) {
			return self;
		}
		function matchByName(name) {
			var selector = "[name=" + name + "], [id=" + name +"]";
			// include elements in this set that match as well a child matches
			return self.filter(selector).add(self.find(selector));
		}
		if ( typeof target === "string" ) {
			target = $( target, this.context || null )[ 0 ];
		}
		var hasTwoWay = !mapping,
			map,
			mapRev,
			handler = function(ev, changed, newvalue) {
				// a dom element change event occurred, update the target
				var m = getMapping( ev, changed, newvalue, map );
				if ( m ) {
					var name = m.name,
						value = m.value,
						convert = m.convert;
					if ( convert ) {
						value = convert( value, ev.target, target );
					}
					if ( value !== undefined ) {
						$.setField( target, name, value );
					}
				}
			},
			handlerRev = function(ev, changed, newvalue) {
				// a change or changeData event occurred on the target,
				// update the corresponding source elements
				var m = getMapping( ev, changed, newvalue, mapRev );
				if ( m ) {
					var name = m.name,
						value = m.value,
						convert = m.convert;
					// find elements within the original selector
					// that have the same name or id as the field that updated
					matchByName(name).each(function() {
						newvalue = value;
						if ( convert ) {
							newvalue = convert( newvalue, target, this );
						}
						if ( newvalue !== undefined ) {
							$.setField( this, "val", newvalue );
						}
					});
				}

			};
		if ( mapping ) {
			$.each(mapping, function(n, v) {
				var name = v,
					convert,
					convertBack,
					twoWay;
				if ( $.isPlainObject( v ) ) {
					name = v.name || n;
					convert = v.convert;
					convertBack = v.convertBack;
					twoWay = v.twoWay !== false;
					hasTwoWay |= twoWay;
				} else {
					hasTwoWay = twoWay = true;
				}
				if ( twoWay ) {
					mapRev = mapRev || {};
					mapRev[ n ] = {
						name: name,
						convert: convertBack
					};
				}
				map = map || {};
				map[ name ] = { name: n, convert: convert, twoWay: twoWay };
			});
		}

		// associate the link with each source and target so it can be
		// removed automaticaly when _either_ side is removed.
		self.each(function() {
			bind( this, $(this), handler );
			var link = {
				handler: handler,
				handlerRev: hasTwoWay ? handlerRev : null,
				target: target,
				source: this
			};
			getLinks( this ).s.push( link );
			if ( target.nodeType ) {
				getLinks( target ).t.push( link );
			}
		});
		if ( hasTwoWay ) {
			bind( target, $(target), handlerRev );
		}
		return self;
	},
	unlink: function(target) {
		this.each(function() {
			var self = $(this),
				links = getLinks( this ).s;
			for (var i = links.length-1; i >= 0; i--) {
				var link = links[ i ];
				if ( link.target === target ) {
					// unbind the handlers
					//wrapped.unbind( obj.nodeType ? "change" : "changeData", handler );
					unbind( this, self, link.handler );
					if ( link.handlerRev ) {
						unbind( link.target, $(link.target), link.handlerRev );
					}
					// remove from source links
					links.splice( i, 1 );
					// remove from target links
					var targetLinks = getLinks( link.target ).t,
						index = $.inArray( link, targetLinks );
					if ( index !== -1 ) {
						targetLinks.splice( index, 1 );
					}
				}
			}
		});
	},
	setField: function(field, value) {
		return this.each(function() {
			$.setField( this, field, value );
		});
	}
});

})(jQuery);