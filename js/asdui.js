//for Conflict mode
//jQuery.noConflict(); 

var ZUI = {
	version: '1.9.0Dev20150911'
};

if (!Date.now) { Date.now = function() { return new Date().valueOf(); } }//ItIE8 bug
//object keys
if (!Object.keys) {
	Object.keys = function(o) {
		if (o !== Object(o)) {
			throw new TypeError('Object.keys called on a non-object');
		}
		var k=[], p;
		for (p in o) {
			if (Object.prototype.hasOwnProperty.call(o,p)) {
				k.push(p);
			}
		}
		return k;
	};
}



//Mobile Evt 1.0.5  
(function(a){function F(){var a=D();a!==G&&(G=a,C.trigger("orientationchange"))}function w(d,c,x,l){var t=x.type;x.type=c;a.event.dispatch.call(d,x,l);x.type=t}a.attrFn=a.attrFn||{};var f=navigator.userAgent.toLowerCase(),f=-1<f.indexOf("chrome")&&(-1<f.indexOf("windows")||-1<f.indexOf("macintosh")||-1<f.indexOf("linux"))&&0>f.indexOf("mobile")&&0>f.indexOf("android"),d="ontouchstart"in window&&!f,E="orientation"in window&&"onorientationchange"in window,m="ontouchstart"in window&&!f?"touchstart":
"mousedown",v="ontouchstart"in window&&!f?"touchend":"mouseup",A="ontouchstart"in window&&!f?"touchmove":"mousemove",P="ontouchstart"in window&&!f?"tap":"click",H="ontouchstart"in window&&!f?"touchmove":"scroll";a.isTouchCapable=function(){return d};a.getStartEvent=function(){return m};a.getEndEvent=function(){return v};a.getMoveEvent=function(){return A};a.getTapEvent=function(){return P};a.getScrollEvent=function(){return H};var q=function(){return a(this).offset()?$this.offset().top:0},r=function(){return a(this).offset()?
$this.offset().left:0};a.each("tapstart tapend tapmove tap tap2 tap3 tap4 singletap doubletap taphold swipe swipeup swiperight swipedown swipeleft swipeend scrollstart scrollend orientationchange".split(" "),function(d,c){a.fn[c]=function(a){return a?this.on(c,a):this.trigger(c)};a.attrFn[c]=!0});a.event.special.tapstart={setup:function(){var g=this,c=a(g);c.on(m,function l(a){c.data("callee",l);if(a.which&&1!==a.which)return!1;var e=a.originalEvent,e={position:{x:d?e.touches[0].screenX:a.screenX,
y:d?e.touches[0].screenY:a.screenY},offset:{x:d?Math.round(e.changedTouches[0].pageX-r()):Math.round(a.pageX-r()),y:d?Math.round(e.changedTouches[0].pageY-q()):Math.round(a.pageY-q())},time:Date.now(),target:a.target};w(g,"tapstart",a,e);return!0})},remove:function(){a(this).off(m,a(this).data.callee)}};a.event.special.tapmove={setup:function(){var g=this,c=a(g);c.on(A,function l(a){c.data("callee",l);var e=a.originalEvent,e={position:{x:d?e.touches[0].screenX:a.screenX,y:d?e.touches[0].screenY:a.screenY},
offset:{x:d?Math.round(e.changedTouches[0].pageX-r()):Math.round(a.pageX-r()),y:d?Math.round(e.changedTouches[0].pageY-q()):Math.round(a.pageY-q())},time:Date.now(),target:a.target};w(g,"tapmove",a,e);return!0})},remove:function(){a(this).off(A,a(this).data.callee)}};a.event.special.tapend={setup:function(){var g=this,c=a(g);c.on(v,function l(a){c.data("callee",l);var e=a.originalEvent,e={position:{x:d?e.changedTouches[0].screenX:a.screenX,y:d?e.changedTouches[0].screenY:a.screenY},offset:{x:d?Math.round(e.changedTouches[0].pageX-
r()):Math.round(a.pageX-r()),y:d?Math.round(e.changedTouches[0].pageY-q()):Math.round(a.pageY-q())},time:Date.now(),target:a.target};w(g,"tapend",a,e);return!0})},remove:function(){a(this).off(v,a(this).data.callee)}};a.event.special.taphold={setup:function(){var g=this,c=a(g),x,l=0,t=0,e=0,f=0,k;c.on(m,function y(a){if(a.which&&1!==a.which)return!1;c.data("tapheld",!1);x=a.target;var b=a.originalEvent,h=Date.now(),u={x:d?b.touches[0].screenX:a.screenX,y:d?b.touches[0].screenY:a.screenY},n={x:d?b.touches[0].pageX-
b.touches[0].target.offsetLeft:a.offsetX,y:d?b.touches[0].pageY-b.touches[0].target.offsetTop:a.offsetY};l=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX;t=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY;e=l;f=t;k=window.setTimeout(function(){var k=l-e,m=t-f;if(a.target==x&&(l==e&&t==f||-5<=k&&5>=k&&-5<=m&&5>=m)){c.data("tapheld",!0);var k=Date.now(),m={x:d?b.touches[0].screenX:a.screenX,y:d?b.touches[0].screenY:a.screenY},v={x:d?Math.round(b.changedTouches[0].pageX-
r()):Math.round(a.pageX-r()),y:d?Math.round(b.changedTouches[0].pageY-q()):Math.round(a.pageY-q())},k={startTime:h,endTime:k,startPosition:u,startOffset:n,endPosition:m,endOffset:v,duration:k-h,target:a.target};c.data("callee1",y);w(g,"taphold",a,k)}},750);return!0}).on(v,function p(){c.data("callee2",p);c.data("tapheld",!1);window.clearTimeout(k)}).on(A,function b(a){c.data("callee3",b);e=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX;f=a.originalEvent.targetTouches?
a.originalEvent.targetTouches[0].pageY:a.pageY})},remove:function(){a(this).off(m,a(this).data.callee1).off(v,a(this).data.callee2).off(A,a(this).data.callee3)}};a.event.special.doubletap={setup:function(){var g=this,c=a(g),x,l,t=null,e,f=!1;c.on(m,function I(a){if(a.which&&1!==a.which)return!1;c.data("doubletapped",!1);c.data("callee1",I);e=a.originalEvent;t||(t={position:{x:d?e.touches[0].screenX:a.screenX,y:d?e.touches[0].screenY:a.screenY},offset:{x:d?Math.round(e.changedTouches[0].pageX-r()):
Math.round(a.pageX-r()),y:d?Math.round(e.changedTouches[0].pageY-q()):Math.round(a.pageY-q())},time:Date.now(),target:a.target});return!0}).on(v,function y(a){var b=Date.now(),h=c.data("lastTouch")||b+1,h=b-h;window.clearTimeout(l);c.data("callee2",y);500>h&&a.target==x&&100<h?(c.data("doubletapped",!0),window.clearTimeout(void 0),h={position:{x:d?a.originalEvent.changedTouches[0].screenX:a.screenX,y:d?a.originalEvent.changedTouches[0].screenY:a.screenY},offset:{x:d?Math.round(e.changedTouches[0].pageX-
r()):Math.round(a.pageX-r()),y:d?Math.round(e.changedTouches[0].pageY-q()):Math.round(a.pageY-q())},time:Date.now(),target:a.target},h={firstTap:t,secondTap:h,interval:h.time-t.time},f||(w(g,"doubletap",a,h),t=null),f=!0,window.setTimeout(function(){f=!1},500)):(c.data("lastTouch",b),l=window.setTimeout(function(){t=null;window.clearTimeout(l)},500,[a]));x=a.target;c.data("lastTouch",b)})},remove:function(){a(this).off(m,a(this).data.callee1).off(v,a(this).data.callee2)}};a.event.special.singletap=
{setup:function(){var g=this,c=a(g),x=null,l=null,f=0,e=0;c.on(m,function k(a){if(a.which&&1!==a.which)return!1;l=Date.now();x=a.target;c.data("callee1",k);f=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX;e=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY;return!0}).on(v,function I(a){c.data("callee2",I);if(a.target==x){var p=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageX:a.pageX,b=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageY:
a.pageY;window.setTimeout(function(){if(!c.data("doubletapped")&&!c.data("tapheld")&&f==p&&e==b){var h=a.originalEvent,h={position:{x:d?h.changedTouches[0].screenX:a.screenX,y:d?h.changedTouches[0].screenY:a.screenY},offset:{x:d?Math.round(h.changedTouches[0].pageX-r()):Math.round(a.pageX-r()),y:d?Math.round(h.changedTouches[0].pageY-q()):Math.round(a.pageY-q())},time:Date.now(),target:a.target};750>h.time-l&&w(g,"singletap",a,h)}},500)}})},remove:function(){a(this).off(m,a(this).data.callee1).off(v,
a(this).data.callee2)}};a.event.special.tap={setup:function(){var g=this,c=a(g),f=!1,l=null,t,e=0,z=0,k;c.on(m,function y(a){c.data("callee1",y);if(a.which&&1!==a.which)return!1;f=!0;e=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX;z=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY;t=Date.now();l=a.target;k=a.originalEvent.targetTouches?a.originalEvent.targetTouches:[a];return!0}).on(v,function p(a){c.data("callee2",p);var h=a.originalEvent.targetTouches?
a.originalEvent.changedTouches[0].pageX:a.pageX,u=a.originalEvent.targetTouches?a.originalEvent.changedTouches[0].pageY:a.pageY,n=e-h,m=z-u;if(l==a.target&&f&&750>Date.now()-t&&(e==h&&z==u||-5<=n&&5>=n&&-5<=m&&5>=m)){h=a.originalEvent;u=[];for(n=0;n<k.length;n++)m={position:{x:d?h.changedTouches[n].screenX:a.screenX,y:d?h.changedTouches[n].screenY:a.screenY},offset:{x:d?Math.round(h.changedTouches[n].pageX-r()):Math.round(a.pageX-r()),y:d?Math.round(h.changedTouches[n].pageY-q()):Math.round(a.pageY-
q())},time:Date.now(),target:a.target},u.push(m);w(g,"tap",a,u)}})},remove:function(){a(this).off(m,a(this).data.callee1).off(v,a(this).data.callee2)}};a.event.special.swipe={setup:function(){var g,c,f,l;function t(b){k=a(b.currentTarget);k.data("callee1",t);f=b.originalEvent.targetTouches?b.originalEvent.targetTouches[0].pageX:b.pageX;l=b.originalEvent.targetTouches?b.originalEvent.targetTouches[0].pageY:b.pageY;g=f;c=l;w=!0;var h=b.originalEvent;p={position:{x:d?h.touches[0].screenX:b.screenX,y:d?
h.touches[0].screenY:b.screenY},offset:{x:d?Math.round(h.changedTouches[0].pageX-r()):Math.round(b.pageX-r()),y:d?Math.round(h.changedTouches[0].pageY-q()):Math.round(b.pageY-q())},time:Date.now(),target:b.target}}function e(b){k=a(b.currentTarget);k.data("callee2",e);g=b.originalEvent.targetTouches?b.originalEvent.targetTouches[0].pageX:b.pageX;c=b.originalEvent.targetTouches?b.originalEvent.targetTouches[0].pageY:b.pageY;var h,u=k.parent().data("xthreshold")?k.parent().data("xthreshold"):k.data("xthreshold"),
n=k.parent().data("ythreshold")?k.parent().data("ythreshold"):k.data("ythreshold"),u="undefined"!==typeof u&&!1!==u&&parseInt(u)?parseInt(u):50,n="undefined"!==typeof n&&!1!==n&&parseInt(n)?parseInt(n):50;l>c&&l-c>n&&(h="swipeup");f<g&&g-f>u&&(h="swiperight");l<c&&c-l>n&&(h="swipedown");f>g&&f-g>u&&(h="swipeleft");void 0!=h&&w&&(c=g=l=f=0,w=!1,n=b.originalEvent,b={position:{x:d?n.touches[0].screenX:b.screenX,y:d?n.touches[0].screenY:b.screenY},offset:{x:d?Math.round(n.changedTouches[0].pageX-r()):
Math.round(b.pageX-r()),y:d?Math.round(n.changedTouches[0].pageY-q()):Math.round(b.pageY-q())},time:Date.now(),target:b.target},n=Math.abs(p.position.x-b.position.x),u=Math.abs(p.position.y-b.position.y),b={startEvnt:p,endEvnt:b,direction:h.replace("swipe",""),xAmount:n,yAmount:u,duration:b.time-p.time},y=!0,k.trigger("swipe",b).trigger(h,b))}function z(b){k=a(b.currentTarget);var c="";k.data("callee3",z);if(y){var e=k.data("xthreshold"),g=k.data("ythreshold"),e="undefined"!==typeof e&&!1!==e&&parseInt(e)?
parseInt(e):50,g="undefined"!==typeof g&&!1!==g&&parseInt(g)?parseInt(g):50,f=b.originalEvent;b={position:{x:d?f.changedTouches[0].screenX:b.screenX,y:d?f.changedTouches[0].screenY:b.screenY},offset:{x:d?Math.round(f.changedTouches[0].pageX-r()):Math.round(b.pageX-r()),y:d?Math.round(f.changedTouches[0].pageY-q()):Math.round(b.pageY-q())},time:Date.now(),target:b.target};p.position.y>b.position.y&&p.position.y-b.position.y>g&&(c="swipeup");p.position.x<b.position.x&&b.position.x-p.position.x>e&&(c=
"swiperight");p.position.y<b.position.y&&b.position.y-p.position.y>g&&(c="swipedown");p.position.x>b.position.x&&p.position.x-b.position.x>e&&(c="swipeleft");e=Math.abs(p.position.x-b.position.x);g=Math.abs(p.position.y-b.position.y);c={startEvnt:p,endEvnt:b,direction:c.replace("swipe",""),xAmount:e,yAmount:g,duration:b.time-p.time};k.trigger("swipeend",c)}y=w=!1}var k=a(this),w=!1,y=!1;c=g=l=f=0;var p;k.on(m,t);k.on(A,e);k.on(v,z)},remove:function(){a(this).off(m,a(this).data.callee1).off(A,a(this).data.callee2).off(v,
a(this).data.callee3)}};a.event.special.scrollstart={setup:function(){function g(a,d){f=d;w(c,f?"scrollstart":"scrollend",a)}var c=this,d=a(c),f,m;d.on(H,function z(a){d.data("callee",z);f||g(a,!0);clearTimeout(m);m=setTimeout(function(){g(a,!1)},50)})},remove:function(){a(this).off(H,a(this).data.callee)}};var C=a(window),D,G,B,J={0:!0,180:!0};E&&(f=window.innerWidth||C.width(),B=window.innerHeight||C.height(),f=f>B&&50<f-B,B=J[window.orientation],f&&B||!f&&!B)&&(J={"-90":!0,90:!0});a.event.special.orientationchange=
{setup:function(){if(E)return!1;G=D();C.on("throttledresize",F);return!0},teardown:function(){if(E)return!1;C.off("throttledresize",F);return!0},add:function(a){var c=a.handler;a.handler=function(a){a.orientation=D();return c.apply(this,arguments)}}};a.event.special.orientationchange.orientation=D=function(){var a=!0,a=document.documentElement;return(a=E?J[window.orientation]:a&&1.1>a.clientWidth/a.clientHeight)?"portrait":"landscape"};a.event.special.throttledresize={setup:function(){a(this).on("resize",
N)},teardown:function(){a(this).off("resize",N)}};var N=function(){K=Date.now();L=K-O;250<=L?(O=K,a(this).trigger("throttledresize")):(M&&window.clearTimeout(M),M=window.setTimeout(F,250-L))},O=0,M,K,L;a.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap"},function(d,c){a.event.special[d]={setup:function(){a(this).on(c,a.noop)}}})})(jQuery);    


/*
ZUI.Browser.fn
*/
/****Browser****
     $.browser.msie
	 $.browser.webkit
	 $.browser.version
	 $.browser.desktop
	 $.browser.mobile
 	$.browser.android
    $.browser.blackberry
    $.browser.cros
    $.browser.ipad
    $.browser.iphone
    $.browser.ipod
    $.browser.kindle
    $.browser.linux
    $.browser.mac
    $.browser.playbook
    $.browser.silk
    $.browser.win
    $.browser["windows phone"]
**/	
(function($){
  "use strict";

  function uaMatch( ua ) {
    // If an UA is not provided, default to the current browser UA.
    if ( ua === undefined ) {
      ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();

    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
		///ucweb/i.exec(ua) || 
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		ua.match(/MicroMessenger/i)=="micromessenger" ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
	/(windows phone)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];

    var browser = {},
        matched = {
          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
          version: match[ 2 ] || match[ 4 ] || "0",
          versionNumber: match[ 4 ] || match[ 2 ] || "0",
          platform: platform_match[ 0 ] || ""
        };

    if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
      browser[ matched.platform ] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
      browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
      browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
      browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    if ( browser.rv || browser.iemobile) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
    }

    // Edge is officially known as Microsoft Edge, so rewrite the key to match
    if ( browser.edge ) {
      delete browser.edge;
      var msedge = "msedge";

      matched.browser = msedge;
      browser[msedge] = true;
    }

    // Blackberry browsers are marked as Safari on BlackBerry
    if ( browser.safari && browser.blackberry ) {
      var blackberry = "blackberry";

      matched.browser = blackberry;
      browser[blackberry] = true;
    }

    // Playbook browsers are marked as Safari on Playbook
    if ( browser.safari && browser.playbook ) {
      var playbook = "playbook";

      matched.browser = playbook;
      browser[playbook] = true;
    }

    // BB10 is a newer OS version of BlackBerry
    if ( browser.bb ) {
      var bb = "blackberry";

      matched.browser = bb;
      browser[bb] = true;
    }

    // Opera 15+ are identified as opr
    if ( browser.opr ) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android ) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
    }

    // Kindle browsers are marked as Safari on Kindle
    if ( browser.safari && browser.kindle ) {
      var kindle = "kindle";

      matched.browser = kindle;
      browser[kindle] = true;
    }

     // Kindle Silk browsers are marked as Safari on Kindle
    if ( browser.safari && browser.silk ) {
      var silk = "silk";

      matched.browser = silk;
      browser[silk] = true;
    }

    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
  }

  // Run the matching process, also assign the function to the returned object
  // for manual, jQuery-free use if desired
  window.jQBrowser = uaMatch( window.navigator.userAgent );
  window.jQBrowser.uaMatch = uaMatch;

  // Only assign to jQuery.browser if jQuery is loaded
  if ( jQuery ) {
    jQuery.browser = window.jQBrowser;
  }

  return window.jQBrowser;
})(jQuery);
//mouse wheel
(function($){
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
})(jQuery);
//mouse wheel
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.
(function($){

    var // Number of pixels a pressed pointer travels before movestart
        // event is fired.
        threshold = 8,
    
        add = jQuery.event.add,
    
        remove = jQuery.event.remove,

        // Just sugar, so we can have arguments in the same order as
        // add and remove.
        trigger = function(node, type, data) {
            jQuery.event.trigger(type, data, node);
        },

        // Shim for requestAnimationFrame, falling back to timer. See:
        // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        requestFrame = (function(){
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(fn, element){
                    return window.setTimeout(function(){
                        fn();
                    }, 25);
                }
            );
        })(),
        
        ignoreTags = {
            textarea: true,
            input: true,
            select: true,
            button: true
        },
        
        mouseevents = {
            move: 'mousemove',
            cancel: 'mouseup dragstart',
            end: 'mouseup'
        },
        
        touchevents = {
            move: 'touchmove',
            cancel: 'touchend',
            end: 'touchend'
        };


    // Constructors
    
    function Timer(fn){
        var callback = fn,
            active = false,
            running = false;
        
        function trigger(time) {
            if (active){
                callback();
                requestFrame(trigger);
                running = true;
                active = false;
            }
            else {
                running = false;
            }
        }
        
        this.kick = function(fn) {
            active = true;
            if (!running) { trigger(); }
        };
        
        this.end = function(fn) {
            var cb = callback;
            
            if (!fn) { return; }
            
            // If the timer is not running, simply call the end callback.
            if (!running) {
                fn();
            }
            // If the timer is running, and has been kicked lately, then
            // queue up the current callback and the end callback, otherwise
            // just the end callback.
            else {
                callback = active ?
                    function(){ cb(); fn(); } : 
                    fn ;
                
                active = true;
            }
        };
    }


    // Functions
    
    function returnTrue() {
        return true;
    }
    
    function returnFalse() {
        return false;
    }
    
    function preventDefault(e) {
        e.preventDefault();
    }
    
    function preventIgnoreTags(e) {
        // Don't prevent interaction with form elements.
        if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }
        
        e.preventDefault();
    }

    function isLeftButton(e) {
        // Ignore mousedowns on any button other than the left (or primary)
        // mouse button, or when a modifier key is pressed.
        return (e.which === 1 && !e.ctrlKey && !e.altKey);
    }

    function identifiedTouch(touchList, id) {
        var i, l;

        if (touchList.identifiedTouch) {
            return touchList.identifiedTouch(id);
        }
        
        // touchList.identifiedTouch() does not exist in
        // webkit yet… we must do the search ourselves...
        
        i = -1;
        l = touchList.length;
        
        while (++i < l) {
            if (touchList[i].identifier === id) {
                return touchList[i];
            }
        }
    }

    function changedTouch(e, event) {
        var touch = identifiedTouch(e.changedTouches, event.identifier);

        // This isn't the touch you're looking for.
        if (!touch) { return; }

        // Chrome Android (at least) includes touches that have not
        // changed in e.changedTouches. That's a bit annoying. Check
        // that this touch has changed.
        if (touch.pageX === event.pageX && touch.pageY === event.pageY) { return; }

        return touch;
    }


    // Handlers that decide when the first movestart is triggered
    
    function mousedown(e){
        var data;

        if (!isLeftButton(e)) { return; }

        data = {
            target: e.target,
            startX: e.pageX,
            startY: e.pageY,
            timeStamp: e.timeStamp
        };

        add(document, mouseevents.move, mousemove, data);
        add(document, mouseevents.cancel, mouseend, data);
    }

    function mousemove(e){
        var data = e.data;

        checkThreshold(e, data, e, removeMouse);
    }

    function mouseend(e) {
        removeMouse();
    }

    function removeMouse() {
        remove(document, mouseevents.move, mousemove);
        remove(document, mouseevents.cancel, mouseend);
    }

    function touchstart(e) {
        var touch, template;

        // Don't get in the way of interaction with form elements.
        if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }

        touch = e.changedTouches[0];
        
        // iOS live updates the touch objects whereas Android gives us copies.
        // That means we can't trust the touchstart object to stay the same,
        // so we must copy the data. This object acts as a template for
        // movestart, move and moveend event objects.
        template = {
            target: touch.target,
            startX: touch.pageX,
            startY: touch.pageY,
            timeStamp: e.timeStamp,
            identifier: touch.identifier
        };

        // Use the touch identifier as a namespace, so that we can later
        // remove handlers pertaining only to this touch.
        add(document, touchevents.move + '.' + touch.identifier, touchmove, template);
        add(document, touchevents.cancel + '.' + touch.identifier, touchend, template);
    }

    function touchmove(e){
        var data = e.data,
            touch = changedTouch(e, data);

        if (!touch) { return; }

        checkThreshold(e, data, touch, removeTouch);
    }

    function touchend(e) {
        var template = e.data,
            touch = identifiedTouch(e.changedTouches, template.identifier);

        if (!touch) { return; }

        removeTouch(template.identifier);
    }

    function removeTouch(identifier) {
        remove(document, '.' + identifier, touchmove);
        remove(document, '.' + identifier, touchend);
    }


    // Logic for deciding when to trigger a movestart.

    function checkThreshold(e, template, touch, fn) {
        var distX = touch.pageX - template.startX,
            distY = touch.pageY - template.startY;

        // Do nothing if the threshold has not been crossed.
        if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

        triggerStart(e, template, touch, distX, distY, fn);
    }

    function handled() {
        // this._handled should return false once, and after return true.
        this._handled = returnTrue;
        return false;
    }

    function flagAsHandled(e) {
        e._handled();
    }

    function triggerStart(e, template, touch, distX, distY, fn) {
        var node = template.target,
            touches, time;

        touches = e.targetTouches;
        time = e.timeStamp - template.timeStamp;

        // Create a movestart object with some special properties that
        // are passed only to the movestart handlers.
        template.type = 'movestart';
        template.distX = distX;
        template.distY = distY;
        template.deltaX = distX;
        template.deltaY = distY;
        template.pageX = touch.pageX;
        template.pageY = touch.pageY;
        template.velocityX = distX / time;
        template.velocityY = distY / time;
        template.targetTouches = touches;
        template.finger = touches ?
            touches.length :
            1 ;

        // The _handled method is fired to tell the default movestart
        // handler that one of the move events is bound.
        template._handled = handled;
            
        // Pass the touchmove event so it can be prevented if or when
        // movestart is handled.
        template._preventTouchmoveDefault = function() {
            e.preventDefault();
        };

        // Trigger the movestart event.
        trigger(template.target, template);

        // Unbind handlers that tracked the touch or mouse up till now.
        fn(template.identifier);
    }


    // Handlers that control what happens following a movestart

    function activeMousemove(e) {
        var timer = e.data.timer;

        e.data.touch = e;
        e.data.timeStamp = e.timeStamp;
        timer.kick();
    }

    function activeMouseend(e) {
        var event = e.data.event,
            timer = e.data.timer;
        
        removeActiveMouse();

        endEvent(event, timer, function() {
            // Unbind the click suppressor, waiting until after mouseup
            // has been handled.
            setTimeout(function(){
                remove(event.target, 'click', returnFalse);
            }, 0);
        });
    }

    function removeActiveMouse(event) {
        remove(document, mouseevents.move, activeMousemove);
        remove(document, mouseevents.end, activeMouseend);
    }

    function activeTouchmove(e) {
        var event = e.data.event,
            timer = e.data.timer,
            touch = changedTouch(e, event);

        if (!touch) { return; }

        // Stop the interface from gesturing
        e.preventDefault();

        event.targetTouches = e.targetTouches;
        e.data.touch = touch;
        e.data.timeStamp = e.timeStamp;
        timer.kick();
    }

    function activeTouchend(e) {
        var event = e.data.event,
            timer = e.data.timer,
            touch = identifiedTouch(e.changedTouches, event.identifier);

        // This isn't the touch you're looking for.
        if (!touch) { return; }

        removeActiveTouch(event);
        endEvent(event, timer);
    }

    function removeActiveTouch(event) {
        remove(document, '.' + event.identifier, activeTouchmove);
        remove(document, '.' + event.identifier, activeTouchend);
    }


    // Logic for triggering move and moveend events

    function updateEvent(event, touch, timeStamp, timer) {
        var time = timeStamp - event.timeStamp;

        event.type = 'move';
        event.distX =  touch.pageX - event.startX;
        event.distY =  touch.pageY - event.startY;
        event.deltaX = touch.pageX - event.pageX;
        event.deltaY = touch.pageY - event.pageY;
        
        // Average the velocity of the last few events using a decay
        // curve to even out spurious jumps in values.
        event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
        event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
        event.pageX =  touch.pageX;
        event.pageY =  touch.pageY;
    }

    function endEvent(event, timer, fn) {
        timer.end(function(){
            event.type = 'moveend';

            trigger(event.target, event);
            
            return fn && fn();
        });
    }


    // jQuery special event definition

    function setup(data, namespaces, eventHandle) {
        // Stop the node from being dragged
        //add(this, 'dragstart.move drag.move', preventDefault);
        
        // Prevent text selection and touch interface scrolling
        //add(this, 'mousedown.move', preventIgnoreTags);
        
        // Tell movestart default handler that we've handled this
        add(this, 'movestart.move', flagAsHandled);

        // Don't bind to the DOM. For speed.
        return true;
    }
    
    function teardown(namespaces) {
        remove(this, 'dragstart drag', preventDefault);
        remove(this, 'mousedown touchstart', preventIgnoreTags);
        remove(this, 'movestart', flagAsHandled);
        
        // Don't bind to the DOM. For speed.
        return true;
    }
    
    function addMethod(handleObj) {
        // We're not interested in preventing defaults for handlers that
        // come from internal move or moveend bindings
        if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
            return;
        }
        
        // Stop the node from being dragged
        add(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid, preventDefault, undefined, handleObj.selector);
        
        // Prevent text selection and touch interface scrolling
        add(this, 'mousedown.' + handleObj.guid, preventIgnoreTags, undefined, handleObj.selector);
    }
    
    function removeMethod(handleObj) {
        if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
            return;
        }
        
        remove(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid);
        remove(this, 'mousedown.' + handleObj.guid);
    }
    
    jQuery.event.special.movestart = {
        setup: setup,
        teardown: teardown,
        add: addMethod,
        remove: removeMethod,

        _default: function(e) {
            var event, data;
            
            // If no move events were bound to any ancestors of this
            // target, high tail it out of here.
            if (!e._handled()) { return; }

            function update(time) {
                updateEvent(event, data.touch, data.timeStamp);
                trigger(e.target, event);
            }

            event = {
                target: e.target,
                startX: e.startX,
                startY: e.startY,
                pageX: e.pageX,
                pageY: e.pageY,
                distX: e.distX,
                distY: e.distY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                velocityX: e.velocityX,
                velocityY: e.velocityY,
                timeStamp: e.timeStamp,
                identifier: e.identifier,
                targetTouches: e.targetTouches,
                finger: e.finger
            };

            data = {
                event: event,
                timer: new Timer(update),
                touch: undefined,
                timeStamp: undefined
            };
            
            if (e.identifier === undefined) {
                // We're dealing with a mouse
                // Stop clicks from propagating during a move
                add(e.target, 'click', returnFalse);
                add(document, mouseevents.move, activeMousemove, data);
                add(document, mouseevents.end, activeMouseend, data);
            }
            else {
                // We're dealing with a touch. Stop touchmove doing
                // anything defaulty.
                e._preventTouchmoveDefault();
                add(document, touchevents.move + '.' + e.identifier, activeTouchmove, data);
                add(document, touchevents.end + '.' + e.identifier, activeTouchend, data);
            }
        }
    };

    jQuery.event.special.move = {
        setup: function() {
            // Bind a noop to movestart. Why? It's the movestart
            // setup that decides whether other move events are fired.
            add(this, 'movestart.move', jQuery.noop);
        },
        
        teardown: function() {
            remove(this, 'movestart.move', jQuery.noop);
        }
    };
    
    jQuery.event.special.moveend = {
        setup: function() {
            // Bind a noop to movestart. Why? It's the movestart
            // setup that decides whether other move events are fired.
            add(this, 'movestart.moveend', jQuery.noop);
        },
        
        teardown: function() {
            remove(this, 'movestart.moveend', jQuery.noop);
        }
    };

    add(document, 'mousedown.move', mousedown);
    add(document, 'touchstart.move', touchstart);

    // Make jQuery copy touch event properties over to the jQuery event
    // object, if they are not already listed. But only do the ones we
    // really need. IE7/8 do not have Array#indexOf(), but nor do they
    // have touch events, so let's assume we can ignore them.
    if (typeof Array.prototype.indexOf === 'function') {
        (function(jQuery, undefined){
            var props = ["changedTouches", "targetTouches"],
                l = props.length;
            
            while (l--) {
                if (jQuery.event.props.indexOf(props[l]) === -1) {
                    jQuery.event.props.push(props[l]);
                }
            }
        })(jQuery);
    };
})(jQuery);
//touch move mix
(function($){
	
	
$.browser.IE7 = $.browser.msie && $.browser.version ==7;
$.browser.oldIE = $.browser.msie && $.browser.version <=8;
$.browser.qq = $.browser.android && $.browser.safari && !$.browser.chrome;

/*====Utility====*/
/*
ASDUI.GUID.Fn
*/
$.parseId = function(myid) {
	return myid.replace( /(:|\.|\[|\]|,)/g, "\\$1" );
}
$.GUID = function () {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});		
}

$.UUID = function() {
	var d = new Date().getTime();
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
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
var whichAnimationEvent = function(trans){
    var t,
      el = document.createElement("fakeelement");
	
	  var transitions = trans?
	  {'transition':'transitionend','OTransition':'oTransitionEnd','MozTransition':'transitionend','WebkitTransition':'webkitTransitionEnd'}:
	  {"animation": "animationend","OAnimation": "oanimationend","MozAnimation": "mozAnimationEnd","webkitAnimation": "webkitAnimationEnd"}
//animationstart webkitAnimationStart MSAnimationStart oanimationstart	
	  for (t in transitions){
		if (el.style[t] !== undefined){
		  return transitions[t];
		}
	  }
}
$.support.aniEndEvt = whichAnimationEvent();
$.support.TranEndEvt = whichAnimationEvent(1);
/*Canvas detect*/
$.support.canvas = function() {
   return !!document.createElement("canvas").getContext;
};
/*Svg detect*/
$.support.svg = function() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0");
}
//终端
$.device = $.device || {};
$.device.PixelRatio = window.devicePixelRatio || 1;
//preload Imgs
$.imgpreload = function (imgs,settings){
	settings = $.extend({},$.fn.imgpreload.defaults,(settings instanceof Function)?{all:settings}:settings);
	// use of typeof required
	if ('string' == typeof imgs) { imgs = new Array(imgs); }
	var loaded = new Array(),baseUrl = settings.baseUrl ? settings.baseUrl : '',backUrls=[];
	$.each(imgs,function(i,elem){
		var img = new Image();
		
		var url = baseUrl+elem;
		
		var img_obj = img;
		
		if ('string' != typeof elem){
			url = $(elem).attr('src') || $(elem).css('background-image').replace(/^url\((.*)?\)$/mg, "$1").replace(/(\"|\'|\ )/g, "");
			img_obj = elem;
		}
		backUrls.push(url);
		$(img).bind('load error', function(e){
			loaded.push(img_obj);

			$.data(img_obj, 'loaded', ('error'==e.type)?false:true);
			
			
			$.fireEvent(settings.each, [i,url,backUrls]);//each
			if (loaded.length>=imgs.length)$.fireEvent(settings.all, [loaded,backUrls]);//all

			$(this).unbind('load error');
		});

		img.src = url;
	});
};
/*====Utility====*/
// Wrap setTimeout in a Deferred
$.wait = function(delay, context){
  var deferred = $.Deferred();
  var timer = setTimeout(function(){
    deferred.resolveWith(context || deferred);
  }, delay);
  deferred.fail(function(){
    clearTimeout(timer);
  });
  return deferred;
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
//user$.when($.afterDOMReady(3000)).done(function() {
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


// ###################################cookie操作相关函数###################################
    /**
     * @function jQuery.cookie jQuery.cookie
     * @parent jquerypp
     * @plugin jquerypp/dom/cookie
     * @author Klaus Hartl/klaus.hartl@stilbuero.de
     *
     * @signature `jQuery.cookie(name, [value, ] [options])`
     * @param {String} [name] The name of the cookie.
     * @param {String} [value] The value of the cookie.
     * @param {{}} [options] An object literal containing key/value pairs to provide optional cookie attributes. Values can be:
     * @option {Integer|Date} expires Either an integer specifying the expiration date from now on in days or a Date object. If a negative value is specified (e.g. a date in the past), the cookie will be deleted. If set to null or omitted, the cookie will be a session cookie and will not be retained when the the browser exits.
     * @option {String} domain The domain name
     * @option {String} path The value of the path atribute of the cookie (default: path of page that created the cookie).
     * @option {Boolean} secure If true, the secure attribute of the cookie will be set and the cookie transmission will require a secure protocol (like HTTPS).
     *
     * @return {String} the value of the cookie or {undefined} when setting the cookie.
     *
     * @body
     *
     * `jQuery.cookie(name, [value], [options])` lets you create, read and remove cookies. It is the
     * [jQuery cookie plugin](https://github.com/carhartl/jquery-cookie) written by [Klaus Hartl](http://www.dasstilbuero.de/)
     * and dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php)
     * and [GPL](http://www.gnu.org/licenses/gpl.html) licenses.
     *
	 * ## Examples
	 *
	 * Set the value of a cookie.
	 *
	 *      $.cookie('the_cookie', 'the_value');
	 *
	 * Create a cookie with all available options.
	 *
     *      $.cookie('the_cookie', 'the_value', {
     *          expires: 7,
     *          path: '/',
     *          domain: 'jquery.com',
     *          secure: true
     *      });
	 *
	 * Create a session cookie.
	 *
     *      $.cookie('the_cookie', 'the_value');
	 *
	 * Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
	 * used when the cookie was set.
	 *
     *      $.cookie('the_cookie', null);
	 *
	 * Get the value of a cookie.
     *
	 *      $.cookie('the_cookie');
     *
     */
    $.cookie = function(name, value, options) {
        if (typeof value != 'undefined') {
            // name and value given, set cookie
            options = options ||
            {};
            if (value === null) {
                value = '';
                options.expires = -1;
            }
	        // convert value to JSON string
            if (typeof value == 'object' && JSON.stringify) {
                value = JSON.stringify(value);
            }
            var expires = '';
	        // Set expiry
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                }
                else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
            }
            // CAUTION: Needed to parenthesize options.path and options.domain
            // in the following expressions, otherwise they evaluate to undefined
            // in the packed version for some reason...
            var path = options.path ? '; path=' + (options.path) : '';
            var domain = options.domain ? '; domain=' + (options.domain) : '';
            var secure = options.secure ? '; secure' : '';
	        // Set the cookie name=value;expires=;path=;domain=;secure-
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        }
        else { // only name given, get cookie
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = $.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                    // Get the cookie value
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
	        // Parse JSON from the cookie into an object
            if (cookieValue && cookieValue.match(/^\s*\{/)) {
                try {
                    cookieValue = JSON.parse(cookieValue);
                }
                catch (e) {
                }
            }
            return cookieValue;
        }
    };
/*======Object======*/
$.object = $.object || {};

//序列化Object为String
$.object.toQueryString = function(object, base, onlyValue){
		var queryString = [];
		$.each(object, function(key, value){
			if (base) key = base + '[' + key + ']';
			var result;
			
			switch (typeof(value)){
				case 'object': result = $.object.toQueryString(value, key); break;
				case 'array':
					var qs = {};
					value.each(function(val, i){
						qs[i] = val;
					});
					result = $.object.toQueryString(qs, key);
				break;
				
				default: result = onlyValue ? encodeURIComponent(value) : key + '=' + encodeURIComponent(value);
			}
			if (value != null && typeof(value)!='function') queryString.push(result);
		});
		return queryString.join('&');	
}
//返回所有对象值
$.object.values = function(object){
		var values = [];
		for (var key in object){
			if (object.hasOwnProperty(key)) values.push(object[key]);
		}
		return values;	
}
//检测是否含有某值不存在返回null
$.object.keyOf = function(object, value){
		for (var key in object){
			if (object.hasOwnProperty(key) && object[key] === value) return key;
		}
		return null;	
}
$.object.size = function(object) {
    var size = 0;
    for (var key in object) {
        if (object.hasOwnProperty(key)) size++;
    }
    return size;
};
//获取对象子集
$.object.subset = function(object, keys){
		var results = {};
		for (var i = 0, l = keys.length; i < l; i++){
			var k = keys[i];
			if (k in object) results[k] = object[k];
		}
		return results;	
}
//删除对象指定键
$.object.erase = function(object, key){
		if (object.hasOwnProperty(key)) delete object[key];
		return object;
}
//删除对象指定键值
$.object.cleanValues = function(object, method){
		method = method || function(value){return value != null};
		for (var key in object) 
		//console.log();
		if (!method(object[key]) && typeof object[key] !='function'){
			
			delete object[key];
		}
		
		return object;
}
// ################String扩展####################//
$.string = $.string || {};
/**
 * Parses to number the current string value
 *
 * @function toNumber
 * @memberof String
 * @global
 * @returns {number} number value - string is a number
 * 					 			0 - string is empty
 * 					 		   -1 - string is a not a number
 */
$.string.toNumber = function(source) {
	return source.length ? !isNaN(source) ? parseFloat(source) : -1 : 0;
};

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

//替换所有
$.string.replaceAll = function(source,s1,s2,ignore) {
	return source.replace(new RegExp(s1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function(c){return "\\" + c;}), "g"+(ignore?"i":"")), s2);
};
// 从左截取指定长度的字串
$.string.left = function(source,n){
	return source.slice(0, n);
};
// 从右截取指定长度的字串
$.string.right = function(source,n){ 
	return source.slice(source.length - n);
};

$.string.interpret = function(value) {
	return value == null ? '' : value;
};
$.string.gsub = function(s,pattern, replacement) {
	 var result = '',
		 source = s,
		 match;
	 //replacement = arguments.callee.prepareReplacement(replacement);

	 while (source.length > 0) {
		 if (match = source.match(pattern)) {
			 result += source.slice(0, match.index);
			 result += $.string.interpret(replacement(match));
			 // pass match (object) to replacement(function),
			 // return value replace match[0]...
			 // origin Template.evaluate function recursive invoke String.gsub function
			 source = source.slice(match.index + match[0].length);
		 } else {
			 result += source, source = '';
		 }
	 }
	 
	 return result;
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
  array.push.apply(array, rest); 
  return array;
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


//在指定位置插入项
$.array.insert = function(source,index, item){
	if(index < 0) index = 0;
	if(index > source.length) index = source.length;
	source.length++;
	for(var i = source.length - 1; i > index; i--) {
		source[i] = source[i - 1];
	}
	source[index] = item;
	return source;
};

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

$.array.reduce = function(source, fn, initialValue){
    if (typeof Array.prototype.reduce != "function") {
      Array.prototype.reduce = function (callback, initialValue ) {
         var previous = initialValue, k = 0, length = this.length;
         if (typeof initialValue === "undefined") {
            previous = this[0];
            k = 1;
         }
         
        if (typeof callback === "function") {
          for (k; k < length; k++) {
             this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
          }
        }
        return previous;
      };
    }
    
    return source.reduce(fn);
    
}

//桶排序算法
//1. 对 0~10 内的一组数字进行排序，比如 9,4,1,6,8；
//2. 声明一个长度为 11 的数组，并且在数组的每一位上填上0，得到结果 [0,0,0,0,0,0,0,0,0,0,0]；
//3. 遍历这组数字，在数字出现的位置执行+1操作，比如该例子，在数组的 1,4,6,8,9 这几个位置各自出现了一次，所以就在这几个位置上各自执行+1操作；得到结果[0,1,0,0,1,0,1,0,1,1,0]；
//4. 最后遍历输出该数组即可达到 从小到大排列的效果了。
//5. 如果想从大到小排列，只需要对数组进行倒序输出即可。
//eg:var a = [1,4,6,8,9,16,29]; 
//var b = $.array.setline(a,30); 
//$.array.setline = function(arr,num) {
//
//  var index; 
//  var resultArr = []; 
//  var j = num+1; 
//  var ruleArr = new Array(j).join(0).split(''); 
//  //数组对应位置，执行+1操作 
//  for(var i in arr) { 
// 	index = parseInt(arr[i]), 
// 	ruleArr[index] ++; 
//  } 
//  //倒叙输出 
//  for(j;j>0;j--) { 
// 	ruleArr[j] == 1 && resultArr.push(j); 
//  } 
//  return resultArr; 
//} 

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
// ###################################date操作相关函数###################################
$.date = $.date || {};
	$.date.now = function (date) {
		return !date ? new Date() : new Date(date.replace(/-/g, "\/"));
	};
	//获取日期差
	$.date.compare = function (startTime, endTime, diffType) {
		var timet = { day: 86400000, hour: 3600000, minute: 60000, seconds: 1000 };
		if (typeof startTime == "string")
			startTime = $.date.now(startTime);
		if (typeof endTime == "string")
			endTime = $.date.now(endTime);
		diffType = diffType || "day";
		return parseInt((endTime.getTime() - startTime.getTime()) / parseInt(timet[diffType]));
	};
	//星期几
	$.date.getWeek = function(source, type) {
        var i = source.getDay();
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
    };
	//是否是闰年
	$.date.isLeapYear = function(source) {
        var year = source.getFullYear();
        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
    };
	//该月有多少天
	$.date.daysInMonth = function(source) {
        var month = source.getMonth() + 1;
        if (month != 2)
            return ((month <= 7 && month % 2 == 1) || (month > 7 && month % 2 == 0)) ? 31 : 30;
        else return $.date.isLeapYear(source) ? 29 : 28;
    };
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
  var url = decodeURI(url);
  try{
  	var url_data = url.match(/\?([^#]*)/i)[1];          // gets the string between '?' and '#'
  }catch(e){
  	var url_data = url;
  }
  // separate the data into an array, in case the are multiple pairs name=value
  var ar_url_data = url_data.split('&');

  // traverse the array, and adds into an object elements name:value
  var data_url = {};
  for(var i=0; i<ar_url_data.length; i++) {
    	var ar_val = ar_url_data[i].split('=');
    	data_url[ar_val[0]] = ar_val[1];
  }

  return data_url;
};


})(jQuery);

  	
/*!
 * jQuery MooTools-like class plugin.
 * Licence fall under Mootools's.
 * https://github.com/frankdekker/JQuery.Class
 */
(function($, window) {

	$.Class = function(classDefinition)
    {
        classDefinition = classDefinition || {};

        // create class structure
        var newClass = function()
        {
            // reset class variables. Clone arrays and objects
            reset(this);

            // run constructor
            return (this.initialize) ? this.initialize.apply(this, arguments) : this;
        };

        // store class definition
        newClass.$definition = classDefinition;

        // apply params to class
        extend(newClass.prototype, classDefinition);

        // parent function
        newClass.prototype.parentMethod = function() {
            try {
                if (arguments.callee.caller === this.$parent) {
                    if (window.console) {
                        console.error('This function has no parent.');
                    }
                    return false;
                }
            }catch(O_o) {}

            return this.$parent.apply(this, arguments);
        };

        return newClass;
    };

    var reset = function(object){
        for (var key in object){
            var value = object[key];
            switch ($.type(value)) {
                case 'object': object[key] = $.extend(true, {}, value); break;
                case 'array':  object[key] = $.extend(true, [], value); break;
            }
        }
        return object;
    };

    var extend = function(target, object) {
        var key, value;

        for (key in object) {

            if (object.hasOwnProperty(key) === false || object[key] === undefined ) {
                continue;
            }

            if (key === 'Extends') {
                // class overloading
                $.each($.type(object.Extends) === 'array' ? object.Extends : [object.Extends], function() {
                    extend(target, this.$definition);
                });

            } else if ($.isFunction(target[key]) && $.isFunction(object[key])) {
                // function overloading
                target[key] = overload(object[key], target[key]);
            } else {
                // regular assigning
                target[key] = object[key];
            }
        }
    };

    var overload = function(overloadFunction, parentFunction) {
        return function() {
            var oldParent = this.$parent;
            this.$parent = parentFunction;
            var result = overloadFunction.apply(this, arguments);
            this.$parent = oldParent;
            return result;
        };
    };

	/**
	 * @param string
	 * @returns {XML|string|void}
	 * @private
	 */
	var removeOn = function(string){
		return string.replace(/^on([A-Z])/, function(full, first){
			return first.toLowerCase();
		});
	};

	/**
	 * Class to send and receive events
	 *
	 * @class Events
	 */
	
	this.Events = new $.Class({

		$events: {},

		/**
		 * Add an event
		 *
		 * @param {String} type - the name of the event
		 * @param {Function} fn - the function to call
		 * @returns {*}
		 * @public
		 */
		on: function(type, fn){
			type = removeOn(type);
			var events = this.$events[type] || [];
			if ($.inArray(events, fn) < 0) {
				events.push(fn);
				this.$events[type] = events;
			}
			return this;
		},

		/**
		 * Remove an event
		 * @param {String} type - the name of the event
		 * @param {Function} [fn] - optional the function to be removed. Otherwise all listeners
		 * @returns {*}
		 * @public
		 */
		off: function(type, fn){
			type = removeOn(type);
			var events = this.$events[type];
			if (events){
				if (fn == undefined) {
					delete this.$events[type];
				} else {
					var index = events.indexOf(fn);
					if (index != -1) delete events[index];
				}
			}
			return this;
		},

		/**
		 * Fire an event
		 * @param {String} type the event name
		 * @param {Array}  args an array of arguments to send to the event function
		 * @returns {*}
		 * @public
		 */
		trigger: function(type, args){
			var events, i;
			type = removeOn(type);
			events = this.$events[type];
			if (!events) return this;
			args = $.isArray(args) ? args : [args];
			for (i = 0; i < events.length; i++) {
				if (events[i]) {
					events[i].apply(this, args);
				}
			}
			return this;
		}
	});
    /**
     * Class to handle asynchronous callbacks
     *
     * @class Chain
     */
    this.Chain = new $.Class({

        $chains: [],

        /**
         * Add functions to the call chain
         *
         * @param {Function} fn the function to call
         * @returns {*}
         * @public
         */
        chain: function(fn) {
            this.$chains.push(fn);

            return this;
        },

        /**
         * call the oldest function on the chain
         *
         * @param {...*} args one or more arguments
         * @returns {*}
         * @public
         */
        callChain: function(args) {
            if (this.$chains.length == 0) {
                return this;
            }

            var fn = this.$chains.shift();
            if (typeof fn == 'function') {
                fn.apply(this, arguments);
            }

            return this;
        },

        /**
         * Clear all functions from the chain
         *
         * @returns {*}
         * @public
         */
        clearChain: function() {
            this.$chains = [];

            return this;
        }
    });

})(jQuery, this);



(function($){
// ################Element扩展####################//
	/*
	ASDUI.step
	date:2014.04.22
	*/		
	$.fn.extend({
		/*Get plugin opts from elemnt data-option or merge width default options*/
		getDataOptions: function (properties) {
			if(!properties)return;
			var options = {};
			//第一步：首先从data-options属性中取opts去掉空格（注：data-options暂支持单引号或_ZUI_区分string
			var props = $(this).attr(properties);
			if(props){
				s = props.replace(/^s+|s+$/g, '').replace(/\_ZUI_/g, '"');
			}else{
				throw 'Properties undefined.'
			}
			//if (s) {
				//兼容写大括号和不写大括号的写法
				if (s.substring(0, 1) != '{') {
					s = '{' + s + '}';
				}
				//利用Function函数将字符串转为化对象
				options = (new Function('return ' + s))();
			//}
			//第二步：如果properties不为空的话，则将properties中定义的属性增加或者覆盖到“第一步”中取到的属性列表中
			//    if (properties) {
			//		
			//	}
			return options;
		},
		unSecable: function(){
			try{
				$.browser.msie ? $(this).on('selectstart',function() { return false; }) : $(this).addClass('unSecable');
			}catch(err){
				
			}
			
			return this;
		},
		/*eg:
		 	$el.hasEvent('click');                  // true
			$el.hasEvent('dblclick');               // true
			$el.hasEvent('mouseover');              // true
			$el.hasEvent('trippleclick');           // false
		
			$el.hasEvent('click', fnClick);         // true
			$el.hasEvent('click', function() {});   // false
		
			$el.hasEvent('mouseover', fnMouseover); // true
		
			$el.hasEvent(fnClick);                  // true
			$el.hasEvent(fnMouseover);              // true
		*/
		hasEvent: function(evt, namespace) {
			var element = this.get(0);
			if(element.nodeType === 1 && typeof evt == "string") {
				var events = $._data(element, "events");
				if(typeof events !== "undefined") {
					if(typeof events[evt] !== "undefined") {
						var evts = events[evt];
						for(var i = 0; i < evts.length; i++) {
							if(typeof namespace === "string") {
								if(evts[i].type === evt && evts[i].namespace === namespace)return true;
							} else {
								if(evts[i].type === evt)return true;
							}
						}
					}
				}
			}
			return false;
		},
		addList: function(options){
				var defaults = {
						name: 'groupname',
						addTar:'.ai',
						delTar:'.di',
						temp:'<div class="ASDaddItem"><input id="{#myName}" name="{#myName}" type="text" class="input" value="{#myVal}"/><em class="icon24 icon di">-</em></div>',
						defVal:'www.xxx.com',
						maxium:false,
						onDel:$.noop,
						onAdd:$.noop,
						onMax:$.noop
				},
				opt = $.extend(defaults, options);
				$(this).each(function(i,el){
					var i= opt.startInx ? opt.startInx : 0,box = $(el),name = $(el).data(opt.name),va = opt.defVal;
					box.on('click',opt.addTar,function(){
						if(i >= opt.maxium){
							$.fireEvent(opt.onMax, [opt.maxium]);
							return
						}
						i++;
						var row = opt.temp.replace(/{#([^{}]+)}/g,function(a,b){
							var v;
							switch(b){
								case 'myRule':
								case 'myName':
								v = name+i;
								break;
								case 'myVal':
								v = va;
								break;
								case 'myId':
								v = 'Ru'+name+i;
								break;
								
							}
							
							return v;
						});
						box.append(row);
						
						$.fireEvent(opt.onAdd, [name+i]);
					});
					box.on('click',opt.delTar,function(){
						i--;
						$.fireEvent(opt.onDel, [name+i,$(this)]);
	
					});
					
				});
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
		/*
		eg:滚动条距离底部50以内contentH - viewH - scrollTop <=50
		滚动条距离底部5%以内scrollTop/(contentH - viewH)>=0.95
		*/
		scrollBottom: function(options){ 
			var Opt=$.extend({skew:150,callBack:$.noop},options);
			
			$(this).on('scroll',function(){
				
				var viewH = $(this).height(),contentH = typeof(this.tagName)=='undefined' ? $('body').get(0).scrollHeight : this.scrollHeight,scrollTop = $(this).scrollTop();
				if(Opt.skew<1){//百分比
					if(scrollTop/(contentH - viewH)>= Opt.skew)$.fireEvent(Opt.callBack,[$(this)]);
				}else{//像素值
					if(contentH - viewH - scrollTop <= Opt.skew)$.fireEvent(Opt.callBack,[$(this)]);	
				}
			});
		},
		cmPos: function(s){
			var box = $(this);
			if($.support.aniEndEvt&&!$.browser.IE7&&!$.browser.qq&&!s){
				box.css({
					left: 0,top: 0,right: 0,bottom: 0,margin: 'auto'
				});
				
			}else if($.browser.qq&&!s){//QQ
				
				box.css({
					top: '50%',
					left:'50%',
					'-webkit-transform': 'translate(-50%,-50%)',
					'transform': 'translate(-50%,-50%)'
				});
			}else{
				box.css({
					top: '50%',
					left:'50%',
					marginTop:-box.outerHeight()/2,
					marginLeft:-box.outerWidth()/2
				}); 
				
			}
			return this;	
		},
		flpos:function(Atel,pos,skewX,skewY){
			var tipMy,tipAt,cust=false;
			var x = skewX ? skewX : 0;
			var y = skewY ? skewY : 0;
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
					tipMy = 'right-'+x+' top';
					tipAt = 'left top+'+y+'';
				break;
				case 'nc':
					tipMy = 'center+'+x+' bottom';
					tipAt = 'center top-'+y+'';
				break;
				case 'sc':
					tipMy = 'center+'+x+' top';
					tipAt = 'center bottom+'+y+'';
				break;
				case 'wc':
					tipMy = 'right-'+x+' center';
					tipAt = 'left center+'+y+'';
				break;
				case 'ec':
					tipMy = 'left+'+x+' center';
					tipAt = 'right center+'+y+'';
				break;
				case 'custom':
				default:
					cust = true;
				break;
			}
			
			(!cust && Atel.is(':visible')) ? $(this).position({my: tipMy,at: tipAt,of: Atel}) : $(this).css({left:x+'px',top:y+'px',position:'absolute'});
			
			return this;		
		},		
		ie7font: function(st){
			$(this).find(st ? st : '*').each(function(i,item){
				icon = $(item).data('icon');
				(icon && !$(item).hasClass('ieIcons')) && $(item).append('<bdo style="font-family: \'icomoon\'">' + icon + '</bdo>').addClass('ieIcons');
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
			$(this).each(function(){
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
			});
		},//input & textarea hint

        customSelect: function (options) {
            // filter out <= IE6
            if (typeof document.body.style.maxHeight === 'undefined') {
                return this;
            }
            var defaults = {
                    customClass: 'ZUIcustomSelect',
					width:null,
					skew:21,
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

				if(!$select.hasClass('hasCustomSelect') && $select.is(':visible') && $select.is('select')){
					options.absolute ? $select.wrap(gapSpan).after(customSelectSpan.append(customSelectInnerSpan)): $select.wrap(gapSpan).before(customSelectSpan.append(customSelectInnerSpan));;

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
							var selectBoxWidth = $select.data('width')?$select.data('width'):(options.width||parseInt($select.outerWidth(), 10));
							var selectBoxHeight = $select.data('height')?$select.data('height'):(options.height||$select.outerHeight());
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
		serializeHash: function(elements){
			var hash = {};
			function stringKey(key, value) {
			  var beginBracket = key.lastIndexOf('[');
			  if (beginBracket == -1) {
				var hash = {};
				hash[key] = value;
				return hash;
			  }
			  var newKey = key.substr(0, beginBracket);
			  var newValue = {};
			  newValue[key.substring(beginBracket + 1, key.length - 1)] = value;
			  return stringKey(newKey, newValue);
			}
		
			var els = elements ? $(this).find(elements).get() : $(this).find(':input').get();
			$.each(els, function() {
				if (this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /hidden|text|search|tel|url|email|password|datetime|date|month|week|time|datetime-local|number|range|color/i.test(this.type))) {
					var val = $(this).val();
					$.extend(true, hash, stringKey(this.name, val));
				}
			});
			return hash;			
		},
		//Fill form with serialize
		deserialize: function(data, clearForm){
			this.each(function(){
				deser(this, data, !!clearForm);
			});
		
			function deser(element, data, clearForm){
				var splits = decodeURIComponent(data).split('&'),
					i = 0,
					split = null,
					key = null,
					value = null,
					splitParts = null;
		
				if (clearForm)
				{
					$('input[type="checkbox"],input[type="radio"]', element).removeAttr('checked');
					$('select,input[type="text"],input[type="password"],input[type="hidden"],textarea', element).val('');
				}
		
				var kv = {};
				while(split = splits[i++]){
					splitParts = split.split('=');
					key = splitParts[0] || '';
					value = (splitParts[1] || '').replace(/\+/g, ' ');
					
					if (key != ''){
						if( key in kv ){
							if( $.type(kv[key]) !== 'array' )
								kv[key] = [kv[key]];
							
							kv[key].push(value);
						}else
							kv[key] = value;				
					}
				}
				
				for( key in kv ){
					value = kv[key];
					
					$('input[type="checkbox"][name="'+ key +'"][value="'+ value +'"],input[type="radio"][name="'+ key +'"][value="'+ value +'"]', element).prop('checked', true);
					$('select[name="'+ key +'"],input[type="text"][name="'+ key +'"],input[type="password"][name="'+ key +'"],input[type="hidden"][name="'+ key +'"],textarea[name="'+ key +'"]', element).val(value);
				}
			}
		 },
		 
		//img preload element extend
		imgpreload : function(settings){
			$.imgpreload(this,settings);
			return this;
		},	
		//Timers
		everyTime: function (interval, label, fn, times, belay) {
			return this.each(function () {
				$.timer.add(this, interval, label, fn, times, belay);
			});
		},
		oneTime: function (interval, label, fn) {
			return this.each(function () {
				$.timer.add(this, interval, label, fn, 1);
			});
		},
		stopTime: function (label, fn) {
			return this.each(function () {
				$.timer.remove(this, label, fn);
			});
		}								
	});
/*Timers*/
$.timer = {
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
		interval = $.timer.timeParse(interval);
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
			if ((++counter > times && times !== 0) || fn.call(element, counter) === false) $.timer.remove(element, label, fn);
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
};

$.extend({
	//联动菜单
	linkage:function(opts){
        var set = $.extend({
            'target':['J_grade','J_subject','J_version','J_book'], //需要做联动处理的元素id
            'url':['test/grade.php','test/subject.php','test/version.php','test/book.php'], //每项查询的url
            'defValues':[], //第一次加载完后设置的默认值
            'selectIndex':[], //第一次加载完后设置的默认选中项
            'relate':['J_relate1','J_relate2']||'', //可以为字符串或元素id组成的数组，默认不设置时是前面每项select拼接的查询字符串
            'type':'get', //ajax请求的方式get, post
            'loadIndex':-1, //自动加载第几项，设置-1时无加载
            'cache':false, //是否缓存ajax
            'error':[], //ajax错误时的回调
            'change':[], //值被更改后的回调，可以是函数组成的数组可以是函数，在加载数据之前执行
            'callback':[], //自定义ajax返回数据处理函数，若提供了回调函数，则不会执行添加option的操作
            'beforeAdd':[], //ajax数据加载完后(添加option之前)的回调，回调函数执行后还会有添加option的操作
            'afterAdd':[], //往select里添加option后的回调
            'afterSetVal':[] //js设置默认值之后的回调
        },opts||{});
        var undefineds,
        	ajax = null, //对应联动的全局ajax
        	defaultOps = [], //下拉框第一选择项
        	targets = set.target, //设置的联动元素id组
        	els = [], //联动元素集合els[i]为push进去的dom原生对象
        	t1 = $('#'+targets[1]), //获取到第一个元素，便于后续绑定click事件
        	type = set.type, //请求方式
        	rel = set.relate, //关联元素id
        	defValues = set.defValues,
        	selectIndex = set.selectIndex,
        	relEls = [], //存放关联元素
        	change = set.change, //当值被手动修改后的回调，可为函数组成的数组或者函数
        	cache = set.cahce,
        	loadIndex = set.loadIndex,
        	error = set.error,
        	callback = set.callback,
        	beforeAdd = set.beforeAdd,
        	afterAdd = set.afterAdd,
        	afterSetVal = set.afterSetVal;
        if(typeof rel == 'string'){
        	relEls.push(rel);
        }else{
        	for(var i=0, il=rel.length; i<il; i++){
        		var r = rel[i];
	        	//关联元素数组压入元素
	        	relEls.push(r.nodeType == 1 ? r : document.getElementById(r));
	        }
        }
        var len = set.target.length,
            loadData = function(oi, setDef){
            	var url = set.url[oi],
            		qsString = [], //ajax查询字符串数组
            		el = els[oi], //从保存的元素数组中取出需要添加新option的select元素
            		prev = els[oi-1], //获取前一个
            		relate = els.slice(0, oi).concat(relEls); //合并需要关联的元素到已绑定联动的元素上
            	if(!el) return false;
            	//排除前一个
            	if(prev){
					ajax && ajax.abort();
            		for(var i=oi;iel=els[i];){
            			//还原后续select中option的默认文字并选中，当前加载的显示加载中
            			iel.length = 1;
            			iel.options[0].value = '';
            			iel.options[0].text = prev.value === '' ? defaultOps[i] : (el === iel ? '\u52a0\u8f7d\u4e2d...' : defaultOps[i]);
            			i++;
            			iel.selectedIndex = 0;
            		}
            		if(prev.value === '') return;
            	}else if(!prev){
            		el.length = 1;
            		el.options[0].value = '';
            		el.options[0].text = '\u52a0\u8f7d\u4e2d...';
            	}
				for(var i=0, il=relate.length; i<il; i++){
					var _el = relate[i];
					if(_el.name)
						//若该项为元素节点
						qsString.push(encodeURIComponent(_el.name) +'='+ encodeURIComponent(_el.value));
					else
						//字符串时
						qsString.push(_el);
				}
            	ajax = $.ajax({
					url: url,
					data: qsString.join('&'),
					type: type,
					dataType: 'json',
					cache: cache,
					error:function(XMLHttpRequest, textStatus, errorThrown){
						el.options[0].text = defaultOps[oi];
						var cerror = error[oi];
						//避免click单击重复加载
						t1.data('loading', false);
						if(cerror){
							cerror.apply(el, [undefineds, els, oi, XMLHttpRequest, textStatus, errorThrown]);
						}else if(typeof error == 'function'){
							error.apply(el, [undefineds, els, oi, XMLHttpRequest, textStatus, errorThrown]);
						}
					},
					success: function(D){
						//D格式为[{id: "1", name: "人教版"}]
						//还原第一个option的默认文字
            			el.options[0].text = defaultOps[oi];
            			var cback = callback[oi];
            			if(D && $.isArray(D) && D.length){
            				//避免click单击重复加载
            				t1.data('loading', false).off('click.linkage');
            				if(cback){
								//自定义ajax返回数据处理函数
								cback.apply(el, [D, els, oi]);
							}else if(typeof callback == 'function'){
								callback.apply(el, [D, els, oi]);
							}else{
								//自定义数据加载完后的回调与callback的区别是它执行后还会继续往select添加option
								var bAdd = beforeAdd[oi], inValues = false, v = defValues[oi];
								
								if(bAdd){
									bAdd.apply(el, [D, els, oi]);
								}else if(typeof beforeAdd == 'function'){
									beforeAdd.apply(el, [D, els, oi]);
								}
								for(var i=0, il=D.length; i<il; i++){
									/*使用原生方法添加option比用jquery更快，jquery添加select在IE6下会有bug
									*确保每一项的id都有值，便于后台数据处理
									* 如果后台输出的数据为[[id,name],[123,'语文']]这种形式的话
									* 后台就会有更大的灵活性，他们不需要考虑key名是什么，
									* 只要按键,值对的顺序输出就行
									*/
									var di = D[i], did = di.id;
									//console.log(did+'---------', typeof did + '---------', v+'---------', typeof v+di.name)
									if(did === v) inValues = true;
									if(did === '') continue;
									el.add((new Option(di.name, did)), el.options.length);
								}
								//添加完option之后的回调
								var afAdd = afterAdd[oi], slctIndex = selectIndex[oi];
								if(afAdd){
									afAdd.apply(el, [D, els, oi, setDef]);
								}else if(typeof afterAdd == 'function'){
									afterAdd.apply(el, [D, els, oi, setDef]);
								}
								//获取设置的回调函数
								var afsetV = afterSetVal[oi];
								if(setDef){
									if(defValues.length){
										if(inValues){
											el.value = v;
											loadData(++oi, true);
										}
									}else if(typeof slctIndex == 'number' && slctIndex > -1){
										//el.selectedIndex = slctIndex; //不知为何不可行了
										el.options[slctIndex].selected = 'selected';
										loadData(++oi, true);
									}
									//设置默认值后的回调
									if(afsetV){
										afsetV.apply(el, [v || slctIndex, els, oi-1, D]);
									}else if(typeof afterSetVal == 'function'){
										afterSetVal.apply(el, [v || slctIndex, els, oi-1, D]);
									}
								}
							}
            			}else{
							var cerror = error[oi];
            				if(cerror){
								cerror.apply(el, [D, els, oi]);
							}else if(typeof error == 'function'){
								error.apply(el, [D, els, oi]);
							}
            			}
					}
				});
            };
        $(targets).each(function(i) {
            var el = document.getElementById(this);
            els.push(el);
            defaultOps.push(el.getAttribute('title') || '\u8bf7\u9009\u62e9');
			if(i === 1){
				//此时是编辑状态
				t1.on('click.linkage',function(e){
					if(t1.data('loading')) return;
					t1.data('loading', true);
					loadData(i, true);
					this.blur();
				});
			}
			var $el = $('#'+this).on('change.linkagemenu',function(e){
				//以下判断专为IE6准备
				if(!window.XMLHttpRequest && this.selectIndex===parseInt(this.getAttribute("unselectIndex"))) return;
				if(!i){
					t1.off('click.linkage');
				}
				//查看是否有值被更改后的回调
				var changefun = change[i];
				if(changefun){
					//change为数组形式
					changefun.apply(this,[els,i]);
				}else if(typeof change == 'function'){
					//change为函数形式
					change.apply(this,[els,i]);
				}
				if(i<len-1){
					loadData(i+1);
				}
			});
        });
        if(defValues.length>0 || selectIndex.length>0){
        	if(loadIndex > -1) loadData(loadIndex, true);
        }else if(loadIndex > -1){
        	loadData(loadIndex);
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


})(jQuery);
/*! jQuery UI - v1.10.4 - 2014-05-08
* http://jqueryui.com
* Includes: jquery.ui.position.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);



(function($){
ZUI.Hash = new $.Class({
	options:{
	},

	initialize: function(data,options) {
		this.options = $.extend({},this.options, options);
		var data = data||{};
		this.hash = $.isPlainObject(data) ? data : $.parseJSON(data);
		//return this.hash;
	},
	exists: function(key){
	   return this.hash.hasOwnProperty(key);
	},
	get: function(key){
		return this.exists(key)?this.hash[key]:null;
	},
	set: function(key, value){
		this.hash[key] = value;
	},
	keys:function(){
		
	}

});	
ZUI.Template = new $.Class({

	Pattern: /(^|.|\r|\n)(#\{(.*?)\})/,
	initialize: function(template, pattern) {
		this.template = template.toString();
		this.pattern = pattern || this.Pattern;
		
	},

	evaluate: function(object) {
		if (object && $.isFunction(object.toTemplateReplacements))
		  object = object.toTemplateReplacements();
	
		return $.string.gsub(this.template,this.pattern, function(match) {
		  if (object == null) return (match[1] + '');
	
		  var before = match[1] || '';
		  if (before == '\\') return match[2];
	
		  var ctx = object, expr = match[3],
			  pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
	
		  match = pattern.exec(expr);
		  if (match == null) return before;
	
		  while (match != null) {
			var comp = match[1].startsWith('[') ? match[2].replace(/\\\\]/g, ']') : match[1];
			ctx = ctx[comp];
			if (null == ctx || '' == match[3]) break;
			expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
			match = pattern.exec(expr);
		  }
	
		  return before + $.string.interpret(ctx);
		});
	}
});
	
ZUI.Overlay = new $.Class({
	options : {
		color: '#000',
		opacity: 0.5,
		effect: 'ease',
		zIndex:1000,
		container:null,
		closeOnClick: true,
		duration:300,
		monitor:false,//监听容器变化
		onOpen:$.noop,
		onHide:$.noop,
		onClick:$.noop
	}, // end defaults
	initialize: function(options) {
		this.options = $.extend({},this.options, options);

		this.container = this.options.container ? $('#'+this.options.container) : 'body';
		var GID = 'over' + $.GUID();
		this.ovOpen = false;
		this.spa = $.support.aniEndEvt;
		//Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);


		var overlay = $('<div class="overlay" id='+GID+'></div>')
					  .css({
						background: this.options.color,
						opacity: 0,
						position: 'fixed',
						zIndex: this.spa?-1:this.options.zIndex,
						display: this.spa?'':'none',
						visibility:this.spa?'hidden':'visible',
						overflow: 'hidden',
						top:0,left:0,width:'100%',height:'100%',
						'-webkit-transition':'opacity '+this.options.duration+'ms '+this.options.effect,
						'transition':'opacity '+this.options.duration+'ms '+this.options.effect
					  });
				  
		$('body').append(overlay);
		this.overlay = $(overlay);
		this.fixSize();
		var self = this;
		this.overlay.on('click tap',function(){
      $.fireEvent(self.options.onClick,[self.overlay]);
    });

    $(window).on('resize',function(){
      self.ovOpen && self.fixSize();
    });
	},
	fixSize: function(){
		this.overlay.css({
			top: this.container == 'body' ? 0 : this.container.offset().top ,
			left: this.container == 'body' ? 0 : this.container.offset().left ,
			width: this.container == 'body' ? '100%' : this.container.outerWidth(),
			height: this.container == 'body' ?  Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) : this.container.outerHeight()
		});
	},
	open : function(){
		var self = this;
		
		if(!this.ovOpen){
			this.options.monitor && this.fixSize();
			
			this.spa ?
			this.overlay.css({zIndex: this.options.zIndex,opacity: this.options.opacity,'-webkit-transform': 'translateY(0)',
						'transform': 'translateY(0)',visibility:'visible'})
			.one(self.spa,function(){
				self.ovOpen = true;
				$.fireEvent(self.options.onOpen,[self.overlay]);
			}):
			this.overlay.show().fadeTo(this.options.duration,this.options.opacity,function(){
				self.ovOpen = true;
				$.fireEvent(self.options.onOpen,[self.overlay]);
			});
			
		}
	}, 
	close : function(){
			var self = this;
			this.spa ?
			this.overlay.css({zIndex: -1,opacity: 0,'-webkit-transform': 'translateY(-100%)',
						'transform': 'translateY(-100%)',visibility:'hidden'})
			.one(self.spa,function(){
				self.ovOpen = false;
				$.fireEvent(self.options.onHide,[self.overlay])
			}):
			this.overlay.fadeOut(this.options.duration, function(){
				self.ovOpen = false;
				self.overlay.hide();
				$.fireEvent(self.options.onHide,[self.overlay]);
			});

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
last:2015.07.20
version:1.9
*/
ZUI.Box = new $.Class({
	Extends: [Events],//继承Event类
	options: {
		zIndex: 30,
		onReturn: false,
		display: 0,
		width: 280,
		height: 180,
		Useoverlay: true,
		esc:false,
		aName:'zoomIn',
		//effect:'linear',
		duration: 300,

		onShowStart: function () {},
		onCloseStart: function () {},
		loadTxt:'正在请求数据...',
		errorTxt:'数据请求失败,请稍后再试.',

		properties: {
			mywidth: 300,
			myheight: 220,
			boxtitle: '',
			textBoxBtnOk: '确 定',
			textBoxBtnCancel: '取 消',
			classBoxBtnOk:'button',
			classBoxBtnCancel:'button',
			loadTxt:null,
			clickHide:true,
			backinfo: '',
			password: false,
			auto: false,
			autoduration: 0,
			bar:null,
			onShow:'onShow',
			onClose:'onClose'
		}
	},
	initialize: function (options) {
		this.i = 0;
		this.options = $.extend({},this.options, options);
		this.SID = $.GUID();
		this.boxInfo = {};
		this.closeCall = null;
		this.clase = null;
		this.ani = $.support.ani;
		var boxId = 'Box' + this.SID,
			titleId = 'Btit' + this.SID,//标题ID
			closeId = 'Close' + this.SID,//关闭ID
			CondorId = 'Condor' + this.SID,
			InBoxId = 'Inbox' + this.SID,//Box主体ID
			InnerId = 'Inner' + this.SID,//内容容器ID
			BarId = 'Bar' + this.SID,//内容容器ID
			LoadId = 'Load' + this.SID;//loading ID
		
		var BoxCd = '<div class="ASDBox-InBoxTop"><div id="'+titleId+'" class="boxtile"></div></div><em class="closebtn" id="'+closeId+'"></em>';//Top
			BoxCd += '<div class="ASDBox-InBox" id="'+InBoxId+'"><div class="ASDBox-BoxContent" id="'+CondorId+'"><div id="'+InnerId+'"></div></div></div>';//Body
			BoxCd += '<div class="ASDBox-Buttons" id="'+BarId+'"></div>';
			BoxCd +='<div class="ASDloading" id="'+LoadId+'">'+this.options.loadTxt+'</div>';//Other
		
		this.Box = $("<div>",{
			'class': 'ASD_Abox',
			id: boxId,
			html: BoxCd,
			css:{
				'visibility':'hidden',
				'display':this.ani ? null : 'none',
				'zIndex': -1,
				'opacity':0,
				'position': 'fixed'				
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
		.on('click',function(){
			self.options.onReturn = false;
			self.display(0,self.closeCall,[$(this)]);
		});
		//$(window).resize($.proxy(function(){
			//this.replaceBox();
		//},this));
		this.options.esc && $(document).keydown(function(e){
			if (e.keyCode == 27) {
				self.Box.stopTime ('D');
				self.options.display == 1 && self.display(0);
				
			}
		});

		if(this.options.Useoverlay)
		this.Overlay = new ZUI.Overlay({
			Oclass:'overlay',
			color: '#a1a1a1',
			duration: 300,
			zIndex:this.options.zIndex,
			opacity: 0.4,
			onClick: function(){
				self.clickHide && self.display(0);
			}
		});		
	},
	display: function (option,evt,target) {
		
		// Show Box	
		if (this.options.display == 0 && option != 0 || option == 1) {
			this.Overlay && this.Overlay.open();
			this.showBox(true);
			//this.fireEvent('onShowStart', [this.Overlay]);
		}
		// Close Box
		else {
			//$.fireEvent(this.options.onCloseStart, [this.boxInfo.type,this.boxInfo.message,this.Content]);
			this.showBox(false);
			this.clearBox();
			this.Overlay && this.Overlay.close();
			
			$.fireEvent(this.closeCall,[this.Box,this.boxInfo.type,this.boxInfo.message,this.Content]);
			//this.trigger('close', [this.Box,this.boxInfo.type,this.boxInfo.message,this.Content]);
		}
		
		//evt && this.trigger('show', $.array.combine(target,[this.Box,this.boxInfo.type,this.boxInfo.message,this.Content]));
		
		evt && $.fireEvent(evt,$.array.combine(target,[this.Box,this.boxInfo.type,this.boxInfo.message,this.Content]));
	},
	clearBox:function(depth){
		var p = this.boxInfo.prop,barSty = p.barClass ? p.barClass:'';
		if(depth)this.options.display = 2;

		switch(this.boxInfo.type){
			case 'myframe':
				this.ifram.attr({src: 'about:blank'}).remove();
			break;
			case 'myhtml':

            var tar = this.boxInfo.message;
            if(typeof tar=="string"){
              var isId = tar.match(/^#/)==null ? false : true;
              if(isId){
                $(tar).appendTo($(tar+'_back'));
              }
          }
			break;
		}
		this.Content.empty();
		this.BtnBox && this.BtnBox.empty();
		this.loadbar(0);
		this.Box.removeClass('ASDBox-bh ASDBox-b '+barSty);
		
	},
	showBox: function(opt){
		this.options.display = opt ? 1 : 0;
		this.Box.css({'zIndex':opt ? this.options.zIndex+2 : -1,'visibility':opt ? 'visible' : 'hidden','display':opt ? 'block':'none','opacity':opt ? 1:0});
		opt && this.replaceBox();
		
	},
	loadbar: function (option,txt) {
		option ? this.loadBg.show().html(txt ? txt : this.options.loadTxt) : this.loadBg.hide();
	},
	replaceBox: function () {
		if(this.options.display != 1) return;
		this.Box.cmPos();
	},

	toolBar: function(type,properties){
		
			
			switch (type) {
				case 'alert':
					this.BtnOk = $('<button/>', {
						'class': properties.classBoxBtnOk,
						type: 'button',
						html:  properties.textBoxBtnOk ? properties.textBoxBtnOk : this.options.properties.textBoxBtnOk
					}).appendTo(this.BtnBox);			
					this.Box.addClass('ASDBox-b');
					break;

				case 'prompt':
				case 'confirm':

					this.BtnOk = $('<button/>', {
						'class': properties.classBoxBtnOk,
						type: 'button',
						html: properties.textBoxBtnOk ? properties.textBoxBtnOk : this.options.properties.textBoxBtnOk
					}).appendTo(this.BtnBox);
					this.BtnCancel = $('<button/>', {
						'class': properties.classBoxBtnCancel,
						'type': 'button',
						html: properties.textBoxBtnCancel ? properties.textBoxBtnCancel : this.options.properties.textBoxBtnCancel
					}).appendTo(this.BtnBox);
					this.Box.addClass('ASDBox-b');
				   break;

				default:
				 if($.isFunction(properties.bar)){
					this.BtnBox.append(properties.bar.apply(this,[this.Content]));
				 	this.Box.addClass(properties.barClass ? properties.barClass : 'ASDBox-b');	
				 }else{
					
				 	this.Box.addClass(properties.barClass ? properties.barClass : 'ASDBox-bh');
				 }

				 
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
	messageBox: function (type, message, properties) {
			var properties = $.extend({},this.options.properties, properties);
			if(this.options.display==1 && !properties.depth)return;
			properties.depth && this.clearBox(properties.depth);
			this.boxInfo.type = type;
			this.boxInfo.message = message;
			this.boxInfo.prop = properties;
			this.closeCall = properties.onClose;
			this.clickHide = properties.clickHide;
			var time = properties.duration || this.options.duration,self = this;
			
			
			this.boxtitle.html(properties.boxtitle);
			this.toolBar(type,properties);//创建底部toolbar
			this.Box.css({
				width: properties.mywidth ? properties.mywidth : this.options.width,
				height: properties.myheight ? properties.myheight : this.options.height,
				'-webkit-animation-duration':this.ani ? time+'ms':null,
				'animation-duration':this.ani ? time+'ms':null
				
			}).addClass(properties.aName||this.options.aName);
			this.Content.attr('class', type);
			if (properties.autoduration > 0 && this.options.display !== 0 || properties.autoduration > 0 && this.options.display == 0) {
				this.options.onReturn = true;

				
				this.Box.oneTime(properties.autoduration+'ms','D',function() {
					self.display(0);
				});
			}
			properties.auto ? this.closebtn.hide() : this.closebtn.show();
			//\\toolbar	 
			switch (type) {
			case 'alert':
				{
					this.BtnOk.on('click',function(){
						self.options.onReturn = true;
						self.display(0,properties.callback,[this.BtnOk]);
					});
					this.Content.html(message);
					this.display(1,properties.onShow,[this.BtnOk]);
					
					break;
				}
			case 'confirm':{
					this.BtnOk.on('click', function(){
						self.options.onReturn = true;
						self.display(0,properties.callback,[self.BtnOk,self.BtnCancel]);
					});

					this.BtnCancel.on('click', function(){
						self.options.onReturn = false;
						self.display(0,properties.onCancel,[self.BtnOk,self.BtnCancel]);
					});
					this.Content.html(message);
					this.display(1,properties.onShow,[this.BtnOk,this.BtnCancel]);
					
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

					this.BtnOk.on('click',function(){
						self.options.onReturn = true;
						$.fireEvent(properties.callback,[self.PromptInput.val(),self]);
					});

					this.BtnCancel.on('click',function(){
						self.options.onReturn = false;
						self.display(0);
					});

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
          if(typeof message=="string"){
            var isId = message.match(/^#/)==null ? false : true;
            if(isId){
              $(message).parent().attr('id',message.replace('#','')+'_back').end().appendTo(this.Content);
            }else{
              this.Content.append(message);
            }
          }else{
            this.Content.append(message);
          }
          this.display(1,properties.onShow,[this.Content]);
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
					   load: function(){
						   self.loadbar(0);
						   
					   }
					}).appendTo(this.Content);
					this.display(1, properties.onShow, [this.ifram]);
					
					this.loadbar(1,properties.loadTxt);
					break;
				}
			case 'myAjax':
				{
					var obj02 = $('<div>', {
						'class': properties.inClass
					}).appendTo(this.Content);
					
					$.ajax({
						url: message,
						data: properties.params || {},
						method: properties.method || "GET",
						beforeSend:function(){
							self.loadbar(1,properties.loadTxt);
						}
					})
					.done(function(){ })
					.fail(function(){
						obj02.remove();
						self.loadbar(0);
						//self.myMessage('加载出了点问题T T',{mywidth:'400',myheight:'120',Mstyle:'Yerro',boxtitle:'Erro'});
						$.fireEvent(properties.onErro,[data,obj02,self]);
					})
					.always(function(data){ 
						
						$.fireEvent(properties.onSuccess,[data,obj02,self]);
						self.loadbar(0);
					});
					this.display(1,properties.onShow,[obj02]);
					
					break;
				}
			case 'myMessage':
				{
					var obj03 = $('<div>', {
						'class': properties.Mstyle,
						html:'<div>'+message+'</div>'
					}).appendTo(this.Content);
					$.fireEvent(properties.callback,[obj03,this.Content]);
					obj03.on('click',function(){
						self.options.onReturn = false;
						
						self.Box.stopTime ('D');
						self.display(0);
						
					});
					this.display(1,properties.onShow,[obj03]);
					break;
				}
			case 'custom':	
			default:
				{
					this.display(1,properties.onShow,[this]);
				}

			}

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
	},
	custom: function (message, properties) {
		this.messageBox('custom', message, properties);
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
		imgToolbar:false,
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
                'position':'fixed'
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
                'position': 'fixed'
				
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

		var thumbH = this.options.thumbs ? 60 : 0, wSizex = $(window).width(),wSizey = $(window).height(),scrollT = $(window).scrollTop(),scrollL = $(window).scrollLeft(),imgMaxW = wSizex - 50,imgMaxH = wSizey - 100 - thumbH,nw=false,nh=false;
		
		if (this.image.width > imgMaxW && this.image.height > imgMaxH || this.image.width <= imgMaxW && this.image.height > imgMaxH) {//宽高都超过 || 高过宽不过
			this.imgWidth = this.image.width * (imgMaxH / this.image.height);
			this.imgHeight = imgMaxH;
			nw=false;
			nh=false;
		}else if(this.image.width > imgMaxW && this.image.height <= imgMaxH){//宽过高不过
			this.imgWidth = imgMaxW;
			this.imgHeight = this.image.height * (imgMaxW / this.image.width);
			nw=false;
			nh=false;
			
		}else if(this.image.width > 200 && this.image.width <= imgMaxW && this.image.height <= imgMaxH&&this.image.height >= 200){//宽高都合适
			this.imgWidth = this.image.width;
			this.imgHeight = this.image.height;
			nw=true;
			nh=true;
		}else if(this.image.width < 200&&this.image.height < 200){//宽高都小于最小
			this.imgWidth = 200;
			this.imgHeight = 200;
			nw=true;
			nh=true;
		}else if(this.image.width < 200&&this.image.height >= 200 && this.image.height<imgMaxH){//宽小高适合
			this.imgWidth = 200;
			this.imgHeight = this.image.height;
			nw=true;
			nh=false;
		}else if(this.image.width > 200 && this.image.width <= imgMaxW && this.image.height < 200){//宽适合高小
			this.imgWidth = this.image.width;
			this.imgHeight = 200;
			nw=false;
			nh=true;
		}

        ie6y = (scrollT + (wSizey - this.imgHeight-30 - thumbH) * 0.5);
        posy = (wSizey - this.imgHeight-30 - thumbH) * 0.5;
        fixWidth = this.imgWidth;
        fixHeight = this.imgHeight;

		this.Box.animate({
			'width': fixWidth + this.options.skew.w,
            'height': fixHeight + this.options.skew.h,
            'left': (scrollL + (wSizex - fixWidth) / 2),
            'top':posy
			},{
			duration:this.options.moveDuration,
			easing:this.options.moveEffect,
			start:$.proxy(function(){
				this.closebtn.hide();
			},this),
			complete: $.proxy(function(){
				this.imgbox.css({
					width: nw?'auto':fixWidth,
					height: nh?'auto':fixHeight
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
			var WinCd = '<div class="ASDWin-InBoxTop" id="'+this.TId+'"><div class="handle" id="'+this.handId+'"></div><div id="'+this.TitId+'" class="boxtile"></div><a href="javascript:;" class="closebtn" id="'+this.closeId+'"></a><a href="javascript:;" class="Msizebtn" id="'+this.Msiz+'"></a><a href="javascript:;" class="Bsizebtn" id="'+this.Fsiz+'"></a></div>';//Top
				WinCd += '<div class="ASDWin-InBox" id="'+this.BId+'"><div class="ASDWin-BoxContent" id="'+this.BBId+'"><div class="myhtmls" id="'+this.CId+'"></div></div></div>';//Body	
				WinCd +='<div class="ASDloading" id="'+this.loadId+'">正在请求数据...</div><div class="frameOL" id="'+this.OLId+'"></div><div id="'+this.resId+'"></div>';//Other
		
			this.win = $('<div>', {
                        'class': 'ASDWin-Box Ywin',
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
			var pgkey = cook ? $.cookie(cook.key) : null;
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
				cook && $.cookie(cook.key, fa.index(), {expires: cook.expires});//设置cookies
				
	
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
	Extends: [Events],//继承Event类
	options:{
		tim:350,    //闪动频率
		tit:'_(:3」∠)_',     //提示的内容
		circle:true,
		delay:12, //闪动提示次数
		mess:'',   //全局标识当前闪动的内容
		title:null,  //原始标题
		auto:false,
		start:$.noop
	},
	initialize:function(options){

		this.options = $.extend({},this.options, options);
		this.title=this.options.title ? this.options.title : document.title;
		this.times;
		this.times2;
		this.busy = false;
		this.tit = this.getCircle(this.options.tit);
		this.on('start',this.options.start);

		this.options.auto && this.run();
		
	},
	getCircle: function(t){
		if(this.options.circle){
			var arr = t.split('');
			var a =[];
			for(i=0;i<arr.length;i++){
				//console.log(arr.slice());
				var newArr =[];
				newArr = (1>0) ? arr.slice(i,arr.length).concat(arr.slice(0,i)) : arr.slice(i,arr.length);
				a[i]=newArr.join('');
			}		
		
		}else{
			a = t;	
		}

		return a;
	},
	run:function(){
		var step=0,self = this;
		$('body').everyTime(this.options.tim+'ms','TA',function(){

			step++;
			if(self.options.circle){
				if(step==self.tit.length) step=0;
				document.title = self.tit[step];
			}else{
				if (step==3) step=1;
				if (step==1) document.title = self.title;
				if (step==2) document.title = self.options.tit + self.title;				
			}
		},this.options.delay);		  
		  
		this.busy = true; 
		$.fireEvent(this.options.onStart,[this]);
	},
	start:function(o){
		if(!o)return false;
		this.busy && $('body').stopTime ('TA');//防止重复
		this.tit=this.getCircle(o);
		this.run();

	},
	test:function(a){
		console.log(a);
	}
});
/**
 * @name		jQuery Countdown Plugin
 * @author		YafullyZhao
 * @version 	1.0
 */
ZUI.Countdown = new $.Class({
	options : {
		parsed:false,//if true the date below must be eg:1445324605000
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
        endDate = this.options.parsed ? this.options.date : Date.parse($.isPlainObject(this.options.date) ? this.options.date : new Date(this.options.date));
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
		groupTag:'data-group',
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
		this.element.on("click", this.options.Selector, function(e){
				 e.stopPropagation();
				 var group = $(this).data('group');
				 
				 self.options.chkOne ? self.checkOne($(this)) : group ? self.check($(this),group) : self.check($(this));
				 
				 group && self.groupSatus(group);
				 $.fireEvent(self.options.onClick,[$(this)]);	
		}); 
		//this.getSatus();
	},
	check: function (el,gp){
		  
		  var data = el.data('ck'),mother = el.attr('rel'),g = gp||mother,sib = this.element.find("["+this.options.groupTag+"='" + g + "']"),m = this.element.find("[rel='" + gp + "']");
		  
		  switch(data){
			 case 0:
			 el.data('ck',1).addClass(this.options.chkClass);
			 
			 mother && sib.data('ck',1).addClass(this.options.chkClass);
			 
			 $.fireEvent(this.options.onCheck,[el,m,sib,g,mother]);
			 break;
			 case 1:
			 el.data('ck',0).removeClass(this.options.chkClass);
			 
			 mother && sib.data('ck',0).removeClass(this.options.chkClass);
			 $.fireEvent(this.options.onUncheck,[el,m,sib,g,mother]);
			 break;
			 case 2:
			 break;				 				 
		  }
		  
	},

	checkOne: function (el,gp){
		  var data = el.data('ck');
		 
		  switch(data){
			 case 0:

			 el.data('ck',1).addClass(this.options.chkClass).siblings(this.options.Selector).data('ck',0).removeClass(this.options.chkClass);

			 $.fireEvent(this.options.onCheck,[el]);	
			 break;
			 case 1:
			 if(this.options.chkOneCancle) {
				 el.data('ck',0).removeClass(this.options.chkClass);
				 
			 	 $.fireEvent(this.options.onUncheck,[el]);
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

		 this.groupSatus();
	},//初始化状态获取
	groupSatus: function(gp){
		 
		 var self = this,OneGroup = this.element.find("["+this.options.groupTag+"='" + gp + "']"),OneMother = this.element.find("[rel='" + gp + "']");
		
		 var st = $.array.pick(OneGroup,function(item,i){
			 	
				return !$(item).hasClass('checked');
			});  
	     st ? OneMother.data('ck',0).removeClass(self.options.chkClass) : OneMother.data('ck',1).addClass(self.options.chkClass);
		 
		 $.fireEvent(this.options.onAll,[OneMother,st]);
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
        CzIndex: 5,
        Cwidth: 242,
        Cheight: 'auto',
		hovClass:'dp_roll',
		secClass:'dp_selected',
		dayChars: 2,
		dayNames : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysInMonth : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		format:'mm/dd/yyyy',
		monthNames : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		mark:[],
		static:false,
		today:false,
		startDay: 7,
		yearOrder: 'asc',
		yearRange: 54,
		yearRangeLeft:0,
		yearStart: (new Date().getFullYear()) - 54,
		yearEnd:null,
		monthStart:null,
		monthEnd:null,
		dayStart:null,
		dayEnd:null,
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
		this.Dparea.on('focus click',this.tags,this.dpEvents);
	},
	detach: function(){
		this.Dparea.off('focus click',this.tags,this.dpEvents);
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
		var firstDay = (1-(7+date.getDay()-this.options.startDay)%7),
		yearSel = $('<select></select>'),years = [],monthSel = $('<select></select>');
		
		$.each(this.options.monthNames,function(i,item){
			if(i < self.options.monthStart && self.year == self.options.yearStart || i > self.options.monthEnd && self.year == self.options.yearEnd) return;
			var mops = $('<option>', { value : i }).text(item);

			monthSel.append(self.month == i ? mops.prop("selected",true) : mops);
		});
		
		if (this.options.yearOrder == 'desc'){
			for (var y = this.options.yearStart; y > (this.options.yearStart - this.options.yearRange - 1);y--){
				$.array.include(years,y);
			}
		} else {
			for (var y = this.options.yearStart - this.options.yearRange; y < (this.options.yearStart + this.options.yearRange +1+this.options.yearRangeLeft); y++){

				$.array.include(years,y);
			}
		}
		
		$.each(years,function(i,item){
			var yops = $('<option>', { value : item }).text(item);
			yearSel.append(self.year == item ? yops.prop("selected",true) : yops);
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
			calDayRow = $('<tr>'),disDay = firstDay<self.options.dayStart && self.year == self.options.yearStart && self.month == self.options.monthStart|| firstDay>self.options.dayEnd && self.year == self.options.yearEnd && self.month == self.options.monthEnd;
			for (i = 0; i < 7; i++){
				if(disDay){
					calDayCell = $('<td>', {'class':'dp_empty'}).html(' ').appendTo(calDayRow);
				}
				else if ((firstDay <= this.options.daysInMonth[this.month]) && (firstDay > 0)){
					ax = this.year + '|' + (parseInt(this.month)+1) + '|' + firstDay;
					calDayCell = $('<td>', {'class':'td_calDay','axis':ax,html:firstDay}).appendTo(calDayRow);
					if(this.options.mark && $.array.contains(this.options.mark,ax))calDayCell.addClass('dpholiy');
				}else {
					calDayCell = $('<td>', {'class':'dp_empty'}).html(' ').appendTo(calDayRow);
				}
				
				// Show the previous day
				if ( (firstDay == this.oldDay) && (this.month == this.oldMonth ) && (this.year == this.oldYear) && !disDay) {
					calDayCell.addClass(this.options.secClass);
				}
				// Show today
				if ( (firstDay == this.nowDay) && (this.month == this.nowMonth ) && (this.year == this.nowYear) && !disDay) {
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
			special:false,
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

				this.show($.array.indexOf(this.tabStack,this.options.rel)+this.options.exist);
				
			}else{
				this.tabStack.push(this.options.rel);
				
				this.getSecs().removeClass(this.options.activeClass);
				this.container.find('.'+this.options.contentSelector);	
				this.newTselector = $('<li>', {'class': this.options.tabSelector,html:this.options.addTab,'id':secId})
									.appendTo($(this.options.tabSbox))
									.addClass(this.options.activeClass);
									this.options.special &&this.newTselector.addClass(this.options.special);
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
				this.show(this.tabStack.length+this.options.exist-1,true);
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
				this.loading&&this.loading.hide();
				$.array.remove(this.frameStack,'frame'+this.tabStack[index-this.options.exist]);
				$.array.removeAt(this.tabStack,index-this.options.exist);
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
					
				$.fireEvent(this.options.onShow,[sects,content,index,newPage,this.frameStack,this.last,this]);
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
        minColumnWidth: 1,
		cloneClass:'table02 makelist'
	}, // end defaults
	initialize: function(table,options) {
		this.options = $.extend({},this.options, options);
		this.table = (typeof table=='string') ? $('#'+table) : table;
		//var originalTable = this;
		
        this.layout = this.buildLayout(this.table);


		this.setSize(this.layout, this.table, this.options.width== 'auto'? true : false);
		
		this.options.width=='auto' && $(window).resize($.proxy(function(){
			this.setSize(true);
			this.setColumnWidths();
		},this));
		
        this.adjustSizes();
        this.applyScrollHandler(this.layout);

	},
	resize:function(){
		
	},
	setSize: function(auto){
		
		var width = auto ? $(window).width() : this.options.width;
        var scrollAreaWidth = width - this.options.fixedColumnWidth;

        // trick to at least TRY to make it normal looking
        // That way 2-column tables don't need horizontal scrolling...
        this.table.css({ width: scrollAreaWidth});
		this.layout.width(width-2);
        $(".fixedContainer .fixedHead", this.layout).css({
            width: (scrollAreaWidth) + "px",
            "float": "left",
            "overflow": "hidden"
			
        });

        $(".fixedContainer .fixedTable", this.layout).css({
            "float": "left",
            width: (scrollAreaWidth) + "px",
            "overflow": "auto"
        });

        $(".fixedContainer", this.layout).css({
            width: (scrollAreaWidth-2) + "px",
            "float": "left"
        });

        $(".fixedContainer .fixedFoot", this.layout).css({
            width: (scrollAreaWidth) + "px",
            "float": "left",
            "overflow": "hidden"
        });

        $(".fixedColumn > .fixedTable", this.layout).css({
            "width": this.options.fixedColumnWidth + "px",
            "overflow": "hidden"
        });

        $(".fixedColumn .fixedHead", this.layout).css({
            "width": this.options.fixedColumnWidth + "px"
        });

        $(".fixedColumn .fixedFoot", this.layout).css({
            "width": this.options.fixedColumnWidth + "px"
        });		
	},
    buildLayout: function(src){
        var fixedArea = $("<div class=\"fixedArea\"></div>").appendTo($(src).parent());

        //fixed column items
        var fixedColumn = $("<div class=\"fixedColumn\" style=\"float: left;\"></div>").appendTo(fixedArea);
        var fixedColumnHead = $("<div class=\"fixedHead\"></div>").appendTo(fixedColumn);
        this.fixedColumnBody = $("<div class=\"fixedTable\"></div>").appendTo(fixedColumn);
        var fixedColumnFooter = $("<div class=\"fixedFoot\"></div>").appendTo(fixedColumn);

        //fixed container items
        var contentContainer = $("<div class=\"fixedContainer\"></div>").appendTo(fixedArea);
        this.contentContainerHeader = $("<div class=\"fixedHead\"></div>").appendTo(contentContainer);
        this.contentContainerBody = $("<div class=\"fixedTable\"></div>").appendTo(contentContainer);
        var contentContainerFooter = $("<div class=\"fixedFoot\"></div>").appendTo(contentContainer);

        //create the fixed column area
        if (this.options.ignoreCols){
            this.buildFixedColumns(src, "thead", fixedColumnHead, this.options.ignoreCols);
            this.buildFixedColumns(src, "tbody", this.fixedColumnBody, this.options.ignoreCols);
            this.buildFixedColumns(src, "tfoot", fixedColumnFooter, this.options.ignoreCols);
        }

        //Build fixed header / footer rows
		
        this.buildFixedRows(src, "thead", this.contentContainerHeader);
        this.buildFixedRows(src, "tfoot", contentContainerFooter);

        // Build the main table -- the src table should only be a tbody section with the remaining columns,
        // so we'll just add it to the fixedContainer table area.
        this.contentContainerBody.append(src);
        return fixedArea;
    },
    buildFixedColumns: function(src, section, target,ignoreCols){
        if ($("> " + section, src).length) {
            var colHead = $('<table class="'+this.options.cloneClass+'"></table>').appendTo(target);

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
            var th = $('<table class="'+this.options.cloneClass+'"></table>').appendTo(target);
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
    adjustSizes: function (){
        this.setScrollingAreaHeights(this.layout);
        this.setRowHeights(this.layout);
        this.setColumnWidths(this.layout);
        this.adjustTablesForScrollBars(this.layout);
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
    setColumnWidths: function (width){
		var layout = this.layout;
        this.setFixedColumnWidths(layout);

        var widthArray = new Array();
        var totalLength = 0,self=this;

        $(" .fixedContainer .fixedHead > table > tbody > tr:first > td", layout).each(function(pos){
            var headerColumnWidth = $(this).outerWidth();
            var bodyColumn = $(" .fixedContainer .fixedTable > table > tbody > tr:first > td:eq(" + pos + ")", layout);
            var contentWidth = $(bodyColumn).outerWidth();
            headerColumnWidth = Math.max(headerColumnWidth, contentWidth, self.options.minColumnWidth);
            widthArray[pos] = width?width:headerColumnWidth;
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
    },
	getColBody: function(){
		return $("table", this.fixedColumnBody);
	},
	getmainHead: function(){
		return $("table", this.contentContainerHeader);
	},
	getmainBody: function(){
		return $("table", this.contentContainerBody);
	}
	
											
});//!Class

//PassShark.Class

ZUI.PassShark = new $.Class({
	options: {
		 interval:      200,
		 duration:      3000,
		 replacement:   '%u25CF',
		 prefix:        'password_',
		 spBtn:null,
		 onInit:$.noop,
		 onFocus:$.noop,
		 onBlur:$.noop
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
			$.fireEvent(self.options.onFocus,[self.input,self.finput]);
         });
         this.finput.on('blur', function(e){
            $(this).stopTime('PS');
			$.fireEvent(self.options.onBlur,[self.input,self.finput]);
         });
		 
		 
			this.finput.oneTime(self.options.interval+'ms','PS',function(){
				self.check(id,'', true, true);
			});
			
		this.options.spBtn && $(this.options.spBtn).on('click',function(){
		 	self.finput.val(self.input.val());
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


ZUI.Lazyload = new $.Class({
	options : {
		attr: "data-url",
		mouseAttr:null,//'data-original'
		paramAttr:null,
		loadClass:'ZUISeed',
		loadHide:false,
		verticalOnly:true,
		threshold:100,//偏移阀值-距离可视区域
		pixelRatio:[],//[2,3]根据屏幕分辨率加载不同尺寸不指定则加载默认
		callback: $.noop,
		container:false,
		loaded:$.noop
	}, // end defaults
	initialize: function(ps,options) {
		this.options = $.extend({},this.options, options);
		this.ps = ps;
		this.cache = [];
		this.doc = $.browser.desktop ? $(window) : $('body');
		this.container = this.options.container ? $(this.options.container) : this.doc;
		this.isWin = this.options.container ? false : true;
		
		this.build(this.ps);
		
		
		this.container.on("scroll", $.proxy(this.checkAppear,this));

	},
	build:function(ps){
		
		var self = this,loaded ='.'+this.options.loadClass, ptargs = self.options.loadHide ? $(ps) : $(ps+':visible'), 
		regAll = function(){
			
			ptargs.not(loaded).each(function(i,el){
				
				//if(!$(el).hasClass(self.options.loadClass)){

					var node = el.nodeName.toLowerCase(), 
					url = self.getUrl($(el).attr(self.options.attr)),
					orginUrl = self.options.mouseAttr ? $(el).attr(self.options.mouseAttr) : null,
					orgImg = orginUrl ? new Image() : null,
					param =  $(el).data('options') ? $.getDataOptions(el) : false;


					//console.log(node);
					var data = {
						obj: $(el),
						tag: node,
						url: url,
						orginUrl:orginUrl,
						orgImg:orgImg,
						param:param
					};
					self.cache.push(data);
					
					
				//}
				
			});
		};
		
		$.when(regAll()).done(function() {
			if($(ps).length>$('.'+self.options.loadClass).length)self.checkAppear();
		});
	},
	getUrl: function(url){
		var suffix = '',device = parseFloat($.device.PixelRatio),pixel = this.options.pixelRatio;
		if(pixel.length){
			$.each(pixel,function(){
				if (device >= this) {
					suffix = '-' + this;
				}
			});
			return url.replace(/.(jpg|gif|png)$/i, suffix + '.$1');
		}else{
			return url;
		}
	},
    belowthefold: function (elmt){
        var fold = this.isWin ? ('innerHeight' in window ? window.innerHeight : this.container.height()) + this.container.scrollTop() : this.container.offset().top + this.container.height();
        return fold <= elmt.offset().top - this.options.threshold;
    },

    rightoffold: function (elmt){
        var fold = this.container.width() + (this.isWin ? this.container.scrollLeft() : this.container.offset().left);
        return fold <= elmt.offset().left - this.options.threshold;
    },

    abovethetop: function (elmt){
        var fold = this.isWin ? this.container.scrollTop() : this.container.offset().top;
        return fold >= elmt.offset().top + this.options.threshold  + elmt.height();
    },
    leftofbegin:function (elmt){
        var fold = this.isWin ? this.container.scrollLeft() : this.container.offset().left;
        return fold >= elmt.offset().left + this.options.threshold + elmt.width();
    },
    checkAppear:function (){
        var self = this;
        $.each(this.cache, function(i,data){
            var o = data.obj;

			if(!o.hasClass(self.options.loadClass)){//若元素没有加载完成则执行下面的运算

				
				if(self.abovethetop(o)){//滚到上面了
					
				}else if(!self.belowthefold(o)){//刚好在区域内
					self.loading(data,i);
				}else{
					
				}
				
				if(!self.options.verticalOnly){
					
					if(self.abovethetop(o) || self.leftofbegin(o)){
	
					}
					else if(!self.belowthefold(o) && !self.rightoffold(o)){
						self.loading(data,i);
					}else{
	
					}
				}
			}
        })
    },
	loading:function(data,i){
		var o = data.obj, tag = data.tag, url = data.url,orgImg = data.orgImg, orginUrl=data.orginUrl,param = data.param?data.param:{},self = this;
		if (tag === "img") {
			if(orginUrl){
				orgImg.onload = function(){
					self.callback(o.attr("src", url));
				}
				orgImg.src = orginUrl;
			}
			self.callback(o.attr("src", url));


			$.fireEvent(self.options.loaded,[o,url,tag,i+1,self.cache.length]);

			o.addClass(self.options.loadClass);
			
		} else {
			$.ajax(url,param).done(function(data){
				o.addClass(self.options.loadClass);
				
				$.fireEvent(self.options.loaded,[o,data,tag,i+1,self.cache.length]);
			});
			
		}
		$.fireEvent(this.options.onEnter,[o]);	
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
		effects:{
			dEf:null,
			cEf:null,
			duration:250
		},
		//makeAccord:false,
		makeTip:false,
		tipOpts:{
			title:null,
			content:null,
			maxW:400,
			pos:'south',
			arrow:true,
			skew:[0,10]
		},
		
		display:null,

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
		this.E = this.options.effects;
		this.Ed = (typeof (this.E.dEf)=='function' && this.E.duration) ? true : false;
		this.Ec = (typeof (this.E.cEf)=='function' && this.E.duration) ? true : false;
		this.menuShow = false;
		if(this.options.makeTip){
			this.GD = $.GUID();
			this.to = this.options.tipOpts;
			this.TID = 'ZUITip' + this.GD;
			this.TITD = 'ZUITip_tt' + this.GD;
			this.TICD = 'ZUITip_c' + this.GD;
			this.TIAD = 'ZUITip_a' + this.GD;
			$('body').append('<div class="ZUITip" id="'+this.TID+'"><div class="ZUITip_t" id="'+this.TITD+'"></div><div class="ZUITip_c" id="'+this.TICD+'"></div><div class="ZUITip_a" id="'+this.TIAD+'"></div></div>');
			this.tip = $('#'+ this.TID).css('max-width', this.to.maxW);
			this.tiptt = $('#'+ this.TITD);
			this.tipc = $('#'+ this.TICD);
			this.arr = $('#'+ this.TIAD);
			
		}
		
		var events = this.events = {}, self = this;
		
			if(this.options.msHover){
				events['mouseover'] = function(event){
					if(!$(this).find(self.options.mBody) || !$(this).siblings(self.options.mBody) && !self.options.makeTip)return false;//不在sce内或不与sec并列
					//window.clearTimeout(self.timer);console.log($(this));
					self.container.stopTime ('Dr');
					self.drop = self.options.makeTip ? self.tip: self.findDrop($(this));
					
					
					self.showTip($(this),self.drop);
					if(self.options.makeSelect && !$(this).children().eq(0).data('IntalTxt')) $(this).children().eq(0).data('IntalTxt',$(this).children().eq(0).text());//如果允许select且选择值默认为空则附加
					//self.fireEvent('enter',this);
				};
				events['mouseout'] = function(event){
					var sec = $(this),tag = event.target;;
					
					if(!sec.find(self.options.mBody) || !sec.find(self.options.mBody) && !this.options.makeTip)return false;//不在sce内或不与sec并列
					if (tag.tagName != 'SELECT' && tag.tagName != 'INPUT' && tag.tagName != 'TEXTAREA'){
						self.options.mouseoutDelay ? self.container.oneTime(self.options.mouseoutDelay+'ms','Dr',function() {
							self.hideTip(sec,self.drop);
							
						}):self.hideTip(sec,self.drop);
					}
					
				};
				events['click'] = function(event){
					event.stopPropagation();
				};

				$(document).on('click',function(){
					self.menuShow && self.hideAll();
					$.fireEvent(self.options.onClose,[self.container]);
				});
			}else{
				events['click'] = function(event){
					if(!$(this).find(self.options.mBody) || !$(this).siblings(self.options.mBody))return false;
				
					$(this).is('a') && event.preventDefault();
					event.stopPropagation();
					self.drop = self.options.makeTip ? self.tip: self.findDrop($(this));
					self.showTip($(this),self.drop);
					
					if(self.options.makeSelect && !$(this).children().eq(0).data('IntalTxt')) $(this).children().eq(0).data('IntalTxt',$(this).children().eq(0).text());
				};
				this.options.hideAlways && $(document).on('click',function(){
					self.menuShow && self.hideAll();
					$.fireEvent(self.options.onClose,[self.container]);
				});			
			}

		this.attach();
		if(this.options.display !== null) this.showIndex(this.options.display);
		$.fireEvent(this.options.onInit,[this.container]);
	},
	findDrop:function(tagt){
		return tagt.find(this.options.mBody).eq(0).length ? tagt.find(this.options.mBody).eq(0) : tagt.siblings(this.options.mBody).eq(0);//drop在seclect内或与select并列
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
		if(sec.hasClass(this.options.msActiv))return;
		this.hideAll(sec);
		var showed = el.data('showed'),self = this;
		
		this.Ed ? $.fireEvent(this.E.dEf,[el,sec,this.E.duration]) : el.show();
		this.menuShow = true;
		
		//如果不满足第一次运行标记则跳出
		if(this.options.makeSelect==1&&!showed){
		 	
		  el.on('click',this.options.sector, function(event) {
			  
			 $(this).is('a') && event.preventDefault();
			 event.stopPropagation();
			 
				 try{
															 
					 self.secList(sec,el,this);
				 }catch(err){
					 //alert('非标准结构.');
					 console.log(err);
				 } 	 
		  });
		  
		}
		else if(this.options.makeSelect==2&&!showed){
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
		if(this.options.makeTip){
			
			var cont = this.to.content ? this.to.content : sec.data('title'),tit = this.to.title ? this.to.title : sec.data('tit'),
			pos = sec.data('pos') ? sec.data('pos') : this.to.pos,skew = sec.data("skew"),skews = (skew != null) ? skew.split(',') : null,
			x = skews ? skews[0] : this.to.skew[0].toString(), y = skews ? skews[1] : this.to.skew[1].toString();
			this.to.arrow && this.arr.addClass(pos).data('pos',pos);
			
			tit ? this.tiptt.html(tit).show() :this.tiptt.hide();
			
			this.tipc.html(cont ? cont : 'empty content!');
			
			el.css({top:'',left:''}).flpos(sec,pos,x,y);
			
		}
		el.data('showed',1);	
		$.fireEvent(this.options.onOpen,[el,sec]);
	},
	secList: function(sec,el,a){
		var opt = isNaN(a) ? a : el.find(this.options.sector)[a];
		var Drlink = this.options.receiver ? $(sec).find(this.options.receiver).eq(0) : $(sec).children().eq(0);
		//Drlink.html($(opt).html() === this.options.initialTxt ? Drlink.data('IntalTxt') : $(opt).data(this.options.name));
		this.options.sectorClass && $(opt).addClass(this.options.sectorClass).siblings().removeClass(this.options.sectorClass);
		$.isFunction(this.options.porps) && $(sec).data('value',this.options.porps($(opt)));
		this.container.stopTime ('Dr');
		this.container.find(this.options.mselect).removeClass(this.options.msActiv);
		el.hide();
		$.fireEvent(this.options.onSelect,[$(opt),Drlink,sec,this]);//回调指向选择项&sec		
	},
	hideTip: function(sec,el){
		
		this.Ec ? $.fireEvent(this.E.cEf,[el,sec,this.E.duration]) : el && el.stop(true,true).hide();
		sec && sec.removeClass(this.options.msActiv);
		$.fireEvent(this.options.onClose,[el,sec]);
	},
	hideAll: function(sec){
		
		this.container.stopTime('Dr');//清除定时器ps：JQ的hover事件比较愚蠢！

		(this.to && this.to.arrow) && this.arr.removeClass(this.arr.data('pos'));
		var other = this.container.find('.'+this.options.msActiv),otherDrop = other.find(this.options.mBody);
		
		if(this.options.makeTip){
			this.tip.hide()
		}else{
			this.Ed ? $.fireEvent(this.E.cEf,[otherDrop,other,this.E.duration]) : otherDrop.stop(true,true).hide();
		}
		other.removeClass(this.options.msActiv);

		sec && sec.addClass(this.options.msActiv);
		this.menuShow = false;
		
	},
	accord: function(sec,el,timeout){
		
		if(sec.hasClass(this.options.msActiv)){
			return false;
		}else{
			sec.addClass(this.options.msActiv);
		}
		this.hideAll(sec);
		this.Ed ? $.fireEvent(this.E.dEf,[el,sec,this.E.duration]) : el.show();
		this.menuShow = true;
		var self = this;
		timeout && self.container.oneTime(timeout+'ms','Dr',function() {
			self.hideTip(sec,el);
		});
		$.fireEvent(this.options.onActive,[sec,el]);
	},
	showIndex: function(num,timeout){
		if(num < 0){
			this.hideAll();
			return false
		}
		try{
			var isec = this.container.find(this.options.mselect)[num];
			var iel = this.options.makeTip ? this.tip: this.findDrop($(isec));
			//$(isec).siblings(this.options.mBody).length>0 ? $(isec).siblings(this.options.mBody).eq(0) : $(isec).find(this.options.mBody).eq(0);
			this.accord($(isec),iel,timeout);
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
 * @version		1.5 #20160808
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
        fadePosition: null,//'horizontal','fade','carousel'
        stopSlideOnClick: true,
        autoSlide: false,
    navBuild:false,
        navigationNums: true,
    navbox:null,
    nav:'a',
    navOnClass:'active',
    circle:true,
    vertical:false,
    page:0,//默认显示第几页
    gap:0,
    
    limit:null,//carousel 显示区最少单元个数
    autoSize:false,
    
    amount:1,//滚动个数
    visual:1,//可视个数
    touch:true,
    threshold:20,
    mouseWheel:false,
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
        this.container = (typeof element == 'object') ? element : $(element);
    this.moveBox = (typeof this.options.moveBox == 'object') ? this.options.moveBox : $(this.options.moveBox);
    this.moveBox.css('position','relative');
    this.preOver = this.options.preload ? $('#'+this.options.preload) : null;
    this.page = this.options.page;
        this.currentKey = this.page;
    this.busy = false;
    this.limit = this.options.limit;
    this.animCss = this.options.vertical ? "top" : "left";
        this.sizeCss = this.options.vertical ? "height" : "width";
    this.numVisible = this.totalSlides < this.options.visual ? this.totalSlides : this.options.visual;
    
    this.mobi = $.browser.mobile;
    this.towMode = false;
    this.solo = false;

    this.spTran = $.support.TranEndEvt;
    //touch
    this._startX = 0;

        this._moveX = 0;

        this._moveDistance = 0;
        this._curX = 0;

        this._touchDistance = 50;

    this.preOver ? this.preload() : this.start();
    var self  = this;
    this.options.autoSize && $(window).on(this.mobi ? "orientationchange" : "resize", function () {
      self.calcuSize();
    });

    },
  preload:function(){
    $.fireEvent(this.options.onPreLoad,[this.moveBox,this.preOver,this,this.container]);
  },
    start: function () {
    this.container.data('run') && this.destroy();
        this.prepareSlides(this.page);

      $(this.options.nextBtn).on('click',$.proxy(function(){
        
        this.next();
      },this));
  
      $(this.options.prevBtn).on('click',$.proxy(function(){
        
        this.prev();
      },this));

    this.container.data('run',1);
    },
  destroy: function(){
    this.options.nextBtn && $(this.options.nextBtn).off();
    this.options.prevBtn && $(this.options.prevBtn).off();
    this.container.off();
    
  },
  calcuSize: function(E){
    
    switch(this.options.fadePosition){
      
      case 'horizontal':
        this.depth = this.options.fadeDist ? this.options.fadeDist : this.container.innerWidth();
        if(this.mobi){
          if(this.options.circle){
            var newSlids = this.container.find(this.options.slides); 
            this.moveBox.css('width',this.depth*newSlids.length);
            newSlids.css('width',this.depth).first().css({'marginLeft':this.solo?0:-this.depth,'float':'left'});
          }else{ 
            this.moveBox.css('width',this.depth*this.totalSlides);
            this.slides.css('width',this.depth);
          }
          this.slides.css({'float':'left'});
          this.towMode = false;         
        }else{
          this.towMode = true;
        }
      break;
      case 'fade':
        this.towMode = true;
      break;  

      case 'carousel':
        this.page = this.options.page;
    
        this.towMode = false;
        if(this.options.circle) this.page += this.numVisible;
        
        this.cItems = this.container.find(this.options.slides);
                this.cLen = this.cItems.size();
                this.gapTotal = this.cLen>1 ? (this.cLen-1)*this.options.gap : 0,
                this.gapvisble = (this.options.amount -1)*this.options.gap;
                this.depth = parseInt((this.container.width() - this.gapvisble)/this.options.amount);
        this.currentKey = this.page;
          
                this.cItems.css({overflow: "hidden","float": this.options.vertical ? "none" : "left"}).css(this.sizeCss,this.depth);
                this.moveBox.css({position: "relative","z-index": 1}).css(this.sizeCss,this.cLen*this.depth + this.gapTotal).css({height:this.cItems.innerHeight()});
        
        if(this.mobi){

          this.moveBox.css({
            
            '-webkit-transform':'translateX('+-(this.currentKey * this.depth)+'px)',
            'transform':'translateX('+-(this.currentKey * this.depth)+'px)'
            
          });
        }else{
          
          this.moveBox.css(this.animCss, -(this.currentKey * this.depth));
        }
                // For a non-circular carousel, if the start is 0 and btnPrev is supplied, disable the prev button
                if(!this.options.circle){
          if(this.options.prevBtn && this.page == 0) {
                      $(this.options.prevBtn).addClass("disabled");
          }
          if(this.options.nextBtn && this.totalSlides <= this.options.amount) {
            $(this.options.nextBtn).addClass("disabled");
          }
                }

      break;  
      default:
      break;  
    }
    this.container.data('height',this.container.height());
    if(this.towMode){
      this.slides.css({
        'position':'absolute',
        'left':this.options.fadePosition=='horizontal' ? this.depth : 0,
        'top':this.options.fadePosition=='vertical' ? this.depth : 0,
        'display':'none'
      });
      E.css({left:0,top:0,'display':'block','zIndex':this.options.fadePosition=='fade' ? 10 : 1});
    }
  },
  rendCircle:function(E){
    
    if(this.mobi && this.options.fadePosition == 'horizontal' || this.options.fadePosition == 'carousel'){
      var dh = this.container.data('height') ? this.container.data('height') : $(E).height();
      this.container.css('height',dh);
      var $lastItemSet = this.slides.slice(this.totalSlides-this.numVisible).clone();
      var $firstItemSet = this.slides.slice(0,this.numVisible).clone();
      this.moveBox.prepend($lastItemSet).append($firstItemSet); 
    }
  },
    prepareSlides: function (A) {
    
    this.destroy();
    this.currentKey = A ? A : 0;
        this.slides = this.container.find(this.options.slides);
        this.totalSlides = this.slides.length;

    var E = $(this.slides[this.currentKey]),self = this;

    this.options.circle ? 
    $.when(self.rendCircle(E),$.wait(100)).done(function() {
      self.calcuSize(E);
      
    }):
    this.calcuSize(E);


    if(this.totalSlides >= this.limit) {
      this.options.prevBtn && $(this.options.prevBtn).show();
      this.options.nextBtn && $(this.options.nextBtn).show();
    }else{
      this.options.prevBtn && $(this.options.prevBtn).hide();
      this.options.nextBtn && $(this.options.nextBtn).hide();
      return;
    }

    if (this.options.autoSlide) {
      this.AutoScroll();
            this.container.on({
                'mouseenter': function(){
          self.focused = true;
                    self.container.stopTime('SL');
          
                },
                'mouseleave': function(){
                    self.focused = false;
          self.AutoScroll();
                }
            });
        }
    
    if(this.options.mouseWheel){
      this.container.on('mousewheel',function(e, d){
        self.goToSlide(d > 0 ? self.currentKey-self.options.amount : self.currentKey+self.options.amount);
      });
    }
    
    if(!this.towMode && this.options.touch){
      this.container.on({
        'movestart':function(e){
          self._startX = e.startX;
          
        },
        'move':function(e){
          self.fnTouchmove(e);
        },
        'moveend':function(){
          self.fnTouchend(self.options.fadePosition);
        }
      });
    }
    
    this.injectNavigation();
    
    $.fireEvent(this.options.onInit,[E]);
    },
    injectNavigation: function () {
    if(!this.options.navbox)return false;
    var self = this,NavBox = $('#'+this.options.navbox);
    if(this.options.navBuild){
      NavBox.empty();
      var navs = '';
      for(var i=0;i<this.totalSlides;i++){
        navs += self.options.navBuild;
      };
      NavBox.append(navs);
    }
    
        this.navLinks = this.options.nav ? NavBox.find(this.options.nav) : NavBox.children();
        this.navLinks.each(function(B,C){
      var n = $(self.navLinks[B]);
      self.options.navigationNums && n.html(B + 1);
      n.on('click',function(D){
        D.preventDefault();
        self.goToSlide(B);
        if (self.options.autoSlide) {
          self.container.stopTime('SL');
          self.AutoScroll();
        } 
      });
        });
    this.navStatus();
    },  
  AutoScroll: function () {
      var self = this;
      this.container.stopTime('SL');
      if (!this.focused) {
        this.container.everyTime(this.options.slideDuration+'ms','SL',function(){
          self.next();
          
        });
      }
    },
    next: function(){
    if (this.busy) return;
    $.fireEvent(this.options.onNext,[this.currentKey,this.totalSlides,this.moveBox]);
    this.goToSlide(this.currentKey+this.options.amount);
    
    },
  prev: function(){
    if (this.busy) return;
    $.fireEvent(this.options.onPrev,[this.currentKey,this.totalSlides,this.moveBox]);
    this.goToSlide(this.currentKey-this.options.amount,true);
  },

    goToSlide: function (A,dir) {
    //console.log('传入'+A);
        if (A == this.currentKey || this.busy) return;

    
    var B,self = this;
    switch(this.options.fadePosition){
      case "horizontal":
        B = dir ? "right":"left";
      break;
      default:
        B = this.options.fadePosition;
      break;
    }
    var derection = (A > this.currentKey) ? 1 : -1;//判断左右
    
    if(this.towMode){
      if (A < 0) {
        A = this.totalSlides-1;
      } else if (A > this.totalSlides-1) {
        A = 0;
      }//异常处理
    }else{
      this.currentKey = A;
      if(this.options.circle) {      // If circular, and "to" is going OOB, adjust it
        this.adjustOobForCircular(A);
        this.inNum = A;
        
      } else {                    // If non-circular and "to" is going OOB, adjust it.
        this.adjustOobForNonCircular(A);
        this.arrowStatus();
      }

    }
    if(!this.towMode && this.mobi || !this.towMode && this.options.touch){

      this.fnMove();
      return;
    }
    
    var D = $(this.slides[A]);
    var E = $(this.slides[this.currentKey]);

    
    this.slOpt = {
      duration:this.options.effectDuration || 300,
      start:function(){
        D.show().css(B=="fade" ? {'opacity':1,'zIndex':1} : {});
      },
      done:function(){
        switch (B) {
          case "left":
          case "right":
            $(this).css(B,null);
            E.hide();
          break;
          case "fade":
            D.css('zIndex',5);
            E.css('zIndex',0).hide();
          break;
        }
        self.busy = false;
        $.fireEvent(self.options.onFinish,[D,E,self.moveBox,self]);
      }
    };

    this.busy = true;
    
        switch (B) {
      case "right":
        D.css({'right': 0,'left':'auto'});
        this.options.circle ? E.show().css({'right':derection*this.depth,'left':'auto'}) : E.hide();
        this.moveBox.css({'right':(-derection)*this.depth,'left':'auto'}).stop(true,true).animate({right:0},this.slOpt);
        break;  
      case "left":
        D.css({'left': 0,'right':'auto'});
        this.options.circle ? E.show().css({'left':(-derection)*this.depth,'right':'auto'}) : E.hide();
        this.moveBox.css({'left':derection*this.depth,'right':'auto'}).stop(true,true).animate({left:0},this.slOpt);
        break;  
      case "fade":
        E.animate({opacity:0},this.slOpt);
        break;
      case "carousel":
        this.moveBox.stop(true,true).animate({left:-((this.depth+this.options.gap)*this.currentKey)},this.slOpt);
      break;  
        }

        if(B!="carousel")this.currentKey = A;


    this.navStatus(); 
    $.fireEvent(this.options.onStart,[D,E,this.moveBox]);
    },
  navStatus: function(){
    if(!this.options.navbox) return;
    $(this.navLinks).removeClass(this.options.navOnClass);
    this.options.fadePosition == 'carousel' ? this.navLinks.slice(this.currentKey).slice(0,this.numVisible).addClass(this.options.navOnClass) : $(this.navLinks[this.currentKey]).addClass(this.options.navOnClass);
  },
  visibleItems: function(A) {
    return this.cItems.slice(this.currentKey).slice(0,this.numVisible);
  },
  arrowStatus: function(){

    $(this.options.prevBtn + "," + this.options.nextBtn).removeClass("disabled");
        if(this.currentKey == 0) $(this.options.prevBtn).addClass("disabled");
  if(this.currentKey == this.cLen - this.numVisible)$(this.options.nextBtn).addClass("disabled");
  },
  adjustOobForCircular: function (to) {
    var newPosition;
    // If first, then goto last
    if(to <= this.page - this.numVisible - 1) {
      newPosition = to + this.totalSlides + this.options.amount;
      this.moveBox.css(this.animCss, -(newPosition * this.depth) + "px");
      this.currentKey = newPosition - this.options.amount;
      
    }
    // If last, then goto first
    else if(to >= this.cLen - this.numVisible + 1) {
      newPosition = to - this.totalSlides - this.options.amount;
      this.moveBox.css(this.animCss, -(newPosition * this.depth) + "px");
      this.currentKey = newPosition + this.options.amount;
      
    }

    
  },
  
  adjustOobForNonCircular: function (to) {

    if(to < 0 || this.cLen <= this.options.amount) {
      this.currentKey = 0;
    }
    // If "to" is greater than the max index that we can use to show another set of elements
    // it means that we will have to reset "to" to a smallest possible index that can show it
    else if(to > this.cLen - this.numVisible) {
      this.currentKey = this.cLen - this.numVisible;
    }
  },
  //mobi move
    fnTouchmove: function (e,b){
    $.fireEvent(this.options.onStart,[false,false,this.moveBox]);
  
    this.options.autoSlide && this.container.stopTime('SL');

    this._moveX = e.distX;
    this._moveY = e.distY;
    
    this.fnTransition(this.moveBox,0);
    if(this.options.fadePosition=='horizontal' || this.options.fadePosition=='carousel'){
      if (Math.abs(this._moveX) > Math.abs(this._moveY) && Math.abs(this._moveX)>= this.options.threshold) {
        e.preventDefault()
        edgeMove = 0;
        
        this.fnTranslate(this.moveBox,-(this.depth * (parseInt(this.currentKey)) - this._moveX));
        if(this.options.autoSlide) return this.AutoScroll();
      }
    }
     },
     // touchend
     fnTouchend: function (fp){
    if(fp=='horizontal' || fp =='carousel'){
      this._moveDistance = this._moveX;

    }

    
    // 距离小
    if(Math.abs(this._moveDistance) <= this._touchDistance){
      this.fnScroll(.3);
    // 距离大
    }else{
      // 手指触摸上一屏滚动
      if(this._moveDistance > this._touchDistance){

        this.prev();
        if(this.options.autoSlide) this.AutoScroll();
      // 手指触摸下一屏滚动
      }else if(this._moveDistance < -this._touchDistance){

        this.next();
        if(this.options.autoSlide) this.AutoScroll();
      }
    }
    this._moveX = 0,this._moveY = 0;
    },
  fnTransition: function(dom,num){
    dom.css({
      '-webkit-transition':'all '+num+'s '+this.options.effect,
      'transition':'all '+num+'s '+this.options.effect
    });
  },
    fnTranslate: function (dom,result,num){
    if(this.spTran){//支持css3
      switch(this.options.fadePosition){
        case "horizontal":
        case "carousel":
        dom.css({
          '-webkit-transform':'translateX('+result+'px)',
          'transform':'translateX('+result+'px)'
          
        });
        break;
      }
      var self = this;
      dom.off(this.spTran).one(this.spTran,function(){
        $.fireEvent(self.options.onFinish,[false,false,self.moveBox,self]);
        
      });
    }else{
      dom.stop().animate({"left": result + "px"}, this.options.effectDuration || 300);
    }
  },  
  fnMove: function(){
    
    if(this.options.circle && this.options.fadePosition !='carousel'){
      if(this.currentKey >= this.totalSlides){
        this.fnScroll(.3);
        this.currentKey = 0;

        this.moveBox.oneTime('200ms',$.proxy(function(){
          this.fnScroll(0);
        },this));
      }else if(this.currentKey < 0){
        this.fnScroll(.3);
        this.currentKey = this.totalSlides-1;
        this.moveBox.oneTime('200ms',$.proxy(function(){
          this.fnScroll(0);
        },this));
      }else{
        this.fnScroll(.3);
      }
    }else{
      this.fnScroll(.3);
    }
    this.navStatus();
  },
  fnScroll: function (num){
      this.spTran && this.fnTransition(this.moveBox,num);
    this.fnTranslate(this.moveBox,-(this.currentKey)*(this.depth+this.options.gap),num);
    
  },
  //mobi move
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
		if (this.options.method == 'poll'){
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
*Author：Yafullyzhao
*Date:20161017
*Ver:2.1.1
*/
ZUI.Validator = new $.Class({
        Extends: Chain,//继承chain类
		options: {
			ruleTag: ".validate",
			ruleProp:"data-valid",
			tagClass:"Vmsg",
            regedClass:"Vreged",
			passClass:"Vpass",
			erroClass:"Verro",
			//styleNeutral: {"background-color": "#fff", "border-color": "#ccc"},//normal style
			//styleInvalid: {"background-color": "#FFE0DB", "border-color": "#f90"},//focus style
			styleInvalid:"err",
			tarInvalid:"TarErr",
			styleProcess:"proce",
			//Qmode:false,
			required: {type: "required", re: /.+/},
			alpha: {type: "alpha", re: /^[a-z ._-]+$/i},
			alphanum: {type: "alphanum", re: /^\w+$/},
			integer: {type: "integer", re: /^[-+]?\d+$/},
			real: {type: "real", re: /^\+?[1-9][0-9]*$/},
			date: {type: "date", re: /^((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/},
			dateEn:{type: "dateEn", re: /^((0?\d)|(1[012]))[\/-]([012]?\d|30|31)[\/-]\d{1,4}$/},
			dateISO8601: {type: "dateISO8601", re: /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/},
			dateEu: {type: "dateEU", re: /^(((([1-9])|([0-2][0-9])|(3[01]))[-]((0[13578])|([13578])|(1[02])))|((([1-9])|([0-2][0-9])|(30))[-]((0[469])|([469])|(11)))|((([1-9])|([0-2][0-9])))[-](2|02))[-]\d{4}$|^\d{4}$/},
			email: {type: "email", re: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/},
			phone: {type: "phone", re: /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/},
			moblie: {type: "moblie", re:/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/},
			url: {type: "url", re: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},
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
					var ran = b.split(','),n = ran[0]||'',m = ran[1]||'';

					if(g){//若是对象
						return parseInt(n) <= parseInt(a) && parseInt(m) >= parseInt(a);
					}else{//若是文本
						return new RegExp("^.{" +n+","+m+ "}$").test(a);
					}
				}
			},
			includes: {type:"includes",re:function(a,b){
                    var inc = $.array.pick(b.split(','),function(item){return new RegExp(item).test(a)});
                    if(inc == null){
                        return false;
                    }else{
                        return true;
                    };
				}
			},
			excludes: {type:"excludes",re:function(a,b){
				
				return $.array.pick(b.split(','),function(item){return new RegExp(item).test(a)}) == null;

				}
			},
			empty:{type:"empty",re:function(a,b){
					return (a == '' || (a == null) || (a.length == 0) || /^\s+$/.test(a));		
				}
			},
			autoSbmit:false,
			submitBtn:null,
			restBtn:null,
			valiHide:true,
			validDisabled:false,
			infoHide:true,
			keybord:false,
			locating:true,
			onValid: $.noop,
			onSubmit: $.noop,
			onDel: $.noop
		},
	initialize: function(form,options) {
		this.options = $.extend({},this.options, options);
		
		this.form = (typeof form =='string') ? $('#'+form) : form;
		this.busy = false;
		
		this.regForm();
		
		var self = this,doc = $('body');
		
		this.options.infoHide && this.form.on('click','.'+this.options.tagClass,function(){
			$(this).fadeOut();
		});
		if(this.options.autoSbmit){
			this.form.on({
				"submit": function(e){
					//var self._onSubmit()[0]);
					return self._onSubmit()[0];
				},
				"reset": function(){
					self._onReset();
				}
			});//给form添加提交、重置事件

			
		}else{
			this.options.submitBtn && doc.on('click',this.options.submitBtn,function(e){
				e.stopPropagation();
				self._onSubmit(this);
				
			});
			this.options.restBtn && doc.on('click',this.options.restBtn,function(e){
				e.stopPropagation();
				self._onReset();
			});
		}
		
		this.options.keybord ? 
		this.form.on('keypress',function(e){
			
			if(e.which==13) {
				e.preventDefault();
				$(this).oneTime('100ms',function(){

					if(self.options.autoSbmit){
						return self._onSubmit()[0];
					}else{
						$(self.options.submitBtn).click();
					}
					
				});
			}
		}):
		this.form.on('keypress',function(e){
			
			if(e.which==13 && self.options.autoSbmit) {
				e.preventDefault();
			}
		});
		
		this.form.on("blur",'.' + this.options.regedClass,function(e){
			var input = $(this);
            
			if(self._isChildType(this)){
				var iptName = $.parseId(this.name);
                var opt = self.validations[iptName];
                
                if(!opt) return;
				self._validateChild(opt);

			}else{
				var iptId = $.parseId(this.id);
				//console.log(self.validations[iptId]);
				if(!$.trim($(this).val())==''|| this.tagName == "SELECT" && $(this).val()==''){
					var opt = self.validations[iptId];

                    if(!opt) return;
					self._validate(input,opt);

				}
				//失去焦点时触发回调，指向表单元素&验证Tip。
			}

			$.fireEvent(self.options.onValid,[this]);			
		});
        this.form.on("input change",'.' + this.options.regedClass, function(){
            // m.removeClass(self.options.passClass);
            // m.removeClass(self.options.erroClass);
            // ElOpt.passhide && m.hide();
            var input = $(this),iptId = $.parseId(this.id);
            if(!self._isChildType(this)){
                self.validations[iptId].passed = false;
            }
        });
	},
	regForm: function(){
		this.validEls = 0;
		this.erros = 0;
		this.validations = {};
		var self = this,vis = this.options.valiHide ? '' : ':visible';
        this.tags = this.options.ruleTag + vis;
		
		this.validEls = this.form.find(this.tags);
		this.validEls.each(function(i,el){
            
			self.reg($(el));
		});//遍历表单
		this.regItems();
		
	},
    regItems: function(t){
        var tg = t ? t : this.options.ruleTag,tags = tg + ':not(.'+this.options.regedClass+')';
        console.log(tags);
        //this.form.find(t)
    },
	reg: function(ipt,afterAdd){
		
			
		var iptOpts = ipt.getDataOptions(this.options.ruleProp);

		if(iptOpts.noreginit && !afterAdd) return;
		var iptId = $.parseId(iptOpts.elemt),iptName = iptId.replace(/^#/,'');
			tipId = iptOpts.tip ? $.parseId(iptOpts.tip) : false,
			ru = iptOpts.rule,
			maybe = ru.indexOf('|') > 0 ? true: false,
			rules = maybe ? ru.split('|') : ru.split(','),
			regs = [];
		var self = this;
		//遍历rule
		$.each(rules,function(i,klass) {
			if(self.options[klass]) 
			$.array.include(regs,self.options[klass]);
		});
		//把rule并入对象

        isnotChild = iptId.match(/^#/)==null ? false : true;
        
		iptOpts.el = isnotChild ? $(iptId) : this.form.find('input[name='+iptId+']');//注入对象并赋予委托事件
		iptOpts.el.addClass(this.options.regedClass);
        iptOpts.tipel = iptOpts.tip ? $(tipId) : false;
		iptOpts.elemt = iptId;
		iptOpts.tip = tipId;
		iptOpts.regexps = regs;
		iptOpts.maybe = maybe;
        iptOpts.isChildType = !isnotChild;
        iptOpts.normal = iptOpts.tip ? iptOpts.tipel.html() : '';
		iptOpts.passed = false;
		
		// if(this._isChildType(ipt[0])){
			
		// }
		
		this.validations[iptName] = iptOpts;

		
	},//读取注册单个表单元素参数
	_isChildType: function(el) {
			if(!el||!el.type) return false;
			var elType = el.type.toLowerCase();
			if((elType == "radio") || (elType == "checkbox")) return true;
			return false;

	},
	_validate: function(ipt, opts) {
            var field = ipt;
        	if(!opts){//验证单个
                var psId = $.parseId(ipt);
                opts = this.validations[psId];
                field = opts.el;
            }
            var satus,
				custom,
				ru = opts.rule,
				rules = opts.regexps,
				v = $.trim(field.val())
				tipBox = opts.tipel;
            
            for(var i=0;i<rules.length;i++){//这里循环单个验证里面的组合条件
                var vType = rules[i].type;
                

                switch(vType) {//判断类型
                    case "compare":
                    case "range":
                    case "includes":
                    case "excludes":
                        satus = rules[i].re(v,opts[vType]);
                        break;      
                    //case "ajax":
//                      var ajxv = options[i].re(field,msgbox.data(vType),msgbox);
//                      satus = ajxv?ajxv[0]:false;
//                      custom = ajxv?ajxv[1]:true;

                    //break;    
                    case "required":    
                    default:

                        satus = $.isFunction(rules[i].re) ? rules[i].re(v,field,tipBox,this) : rules[i].re.test(v);
                        custom = rules[i].custom ? rules[i].custom : false;
                        break;
                }
                if(opts.maybe){//如果条件为或"|"运算符
                    if(satus==true)break;//只要有一个符合则跳出循环
                }else{
                    if(satus==false)break;//只要有一个不符合则跳出循环
                }
            }
    
        if(!this.options.validDisabled && $(opts.elemt).is(':disabled')){
            satus = true;
           //break;
        }  
                 
		opts.passed  = satus; 	

        this._msgInject(tipBox,opts,satus,field,custom);
        return satus;
    },
	_validateChild: function(opts) {
		var nlButtonGroup = opts.el;
		
		var cbCheckeds = 0,
			isValid = true,
			ru = opts.rule,
			rules = opts.regexps;
		for(var i = 0; i < nlButtonGroup.length; i++) {
			nlButtonGroup[i].checked && cbCheckeds++;
		}
		
		for(var i=0;i<rules.length;i++){//这里循环单个验证里面的组合条件
			switch(rules[i].type) {//判断类型

				case "range":
					isValid = rules[i].re(cbCheckeds,opts.range,true);
					break;	
				case "required":
					isValid = (cbCheckeds == 0) ? false : true; 
					break;	
				default:
					break;
			}
			if(isValid==false)break;		
		}
        
		opts.passed  = isValid; 	
		this._msgInject(opts.tipel,opts,isValid,nlButtonGroup);
		return isValid;
	},
	_msgInject: function(tipBox, opts, satus , field ,custom) {
		if(tipBox){
			var pos = opts.pos,skew = opts.skew,
				skews = skew ? skew.split(',') : null,
				x = skews ? skews[0] : 0,
				y = skews ? skews[1] : 0;
			
			pos && tipBox.css({'position':'absolute','top':'inherit','left':'inherit','display':this.options.infoHide ? 'inline-block':'inherit','opacity':this.options.infoHide ? 1:'inherit'}).flpos(field,pos,x,y);
			
			if(!custom){
				field && field[(satus ? 'remove' : 'add')+'Class'](this.options.styleInvalid);
				tipBox.attr('class',satus ? this.options.tagClass+" "+this.options.passClass : this.options.tagClass+" "+this.options.erroClass);
				var msg = opts.warn ? opts.warn : "验证失败.",mpass = opts.pass ? opts.pass : "验证通过.",passHide = opts.passhide ? true : false,valiHide = opts.valihide ? true : false,tar = opts.tar;
				tipBox.html(satus ? mpass : msg).css('display',passHide && satus || valiHide && !satus ? 'none': 'inline-block');
				tar && $(tar)[(satus ? 'remove':'add')+'Class'](this.options.tarInvalid);
			}
		}else{
			field && field[(satus ? 'remove' : 'add')+'Class'](this.options.styleInvalid);
		}
	},

	_msgRemove: function(options,owner,isReset,field) {
		//var pos = owner.data("pos");
		
		isReset = isReset || false;
		//field && field.css(this.options.styleNeutral);
		field && field.removeClass(this.options.styleInvalid);
		owner.html(owner.data("normal")).removeClass().addClass(this.options.tagClass);
		owner.valiOpts.pos && owner.attr('style','');
	},
	_onSubmit: function(onlyv) {
		
		if(this.busy) return ;
		this.busy = true;
		var isValid = false,erro = 0,self=this,onlyVali = (typeof onlyv =='object') ? false :true,def = $.Deferred(),
		valiAll = function(){

			$.each(self.validations,function(i,vobj) {
				
				var input = vobj.el,vItem = !self.options.validDisabled;

                if(!self.options.validDisabled && !input.is(':disabled')){
                    vItem = vobj.isChildType ? self._validateChild(vobj) : self._validate(input,vobj);
                }

				if(!vItem)erro++;
      
			});
			
		};
		$.when(valiAll()).done(function() {
           
			//if(erro > 0 || !self.options.autoSbmit)isValid = false;
			isValid = (erro > 0 || !self.options.autoSbmit) ? false : true;
			if(!onlyVali){//如果不是单纯验证则执行回调
				$.fireEvent(self.options.onSubmit,[self.form,erro,self.options.submitBtn]);
			}//提交表单时触发回调，指向form和全体验证结果。
			if(self.options.locating && erro > 0)self.form.find('.'+self.options.styleInvalid+':visible').eq(0).focus();
			self.busy = false;

		});
		return [isValid,erro];
		
		
	},
    resetItem: function(vobj){
        vobj.el.removeClass(this.options.styleInvalid);
        vobj.tipel && vobj.tipel.html(vobj.normal).removeClass().addClass(this.options.tagClass);
        vobj.pos && vobj.tipel.attr('style','');
        vobj.passed = false;
    },
	_onReset: function() {
        var self = this;
        
		$.each(this.validations,function(i,vobj) {
            self.resetItem(vobj);
		});
        this.callChain('done');
	},
	addMethod: function(name,opt){
		this.options.name = name;

		this.options[name] = opt;
		return this;
	},
	del: function(rulenmae,t){//console.log(item);
        var rule = $.parseId(rulenmae),vobj = this.validations[rule];
        if(!vobj)return;
        vobj.el.removeClass(this.options.regedClass);
        this.resetItem(vobj);
        $.object.erase(this.validations,rule);
		$.fireEvent(this.options.onDel,[rule,t,this.form,this.validations]);
	}		
});//!Class


/*History manager*/
/*IE8+*/
ZUI.History = new $.Class({
	options : {

	}, // end defaults
	initialize: function(options) {
		this.options = $.extend({},this.options, options);
		var self = this;
		this.supportHistory = !!(window.history && window.history.pushState && window.history.replaceState);
		
		//'onhashchange' in window && ( document.documentMode === 'undefined' || document.documentMode > 7 );
		//this.makeIEHistory();
		if(this.supportHistory){
			$(window).on("hashchange", function(e){
				var hash = self.getHash();
				$(self).trigger("popstate", [hash]);
			});
		}else{
			this.makeIEHistory();
			window.onhashchange = function(e) {
				
				var hash = self.getHash();
				$(self).trigger("popstate", [hash]);
			};
		}
		
	},
	getHash: function(url) {
        url = url || window.location.href;
        return window.location.hash.substr(1); // url.replace( /^[^#]*#?(.*)$/, '$1' )
    },
    setHash: function(newHash) {
        window.location.hash = newHash;
    },
	pushState: function(newHash) {
		
		if(this.supportHistory){
			window.history.pushState(null, null, "#"+newHash);
			$(this).trigger("popstate", [newHash]); // callback(newHash);
		}else{
			this.setHash(newHash); // trigger hashchange event
		}
	},
	makeIEHistory: function(){
			var location = window.location,
			oldURL = location.href,
			oldHash = location.hash;
		
			// check the location hash on a 100ms interval
			setInterval(function() {
				var newURL = location.href,
				  newHash = location.hash;
			
				// if the hash has changed and a handler has been bound...
				if ( newHash != oldHash && typeof window.onhashchange === "function" ) {
				  // execute the handler
				  window.onhashchange({
					type: "hashchange",
					oldURL: oldURL,
					newURL: newURL
				  });
			
				  oldURL = newURL;
				  oldHash = newHash;
				}
			 }, 100);
	}

});

/*
---
description: A cross browser persistent storgae API
requires:
- core/1.9.1+
provides: [LocalStorage]
...
*/
/*!
IE8+, FF3.5+, Safari 4+ : use the HTML5 localStorage API
=======注意=======
IE5.5-IE7使用User Data ,是微软专门为IE在系统中开辟的一块存储空间。单个文件的大小限制128KB。一个域名下总共可以保存1024KB的文件，文件个数没有限制。
在受限站点里单个文件大小限制64KB，一个域名下共可以保存640KB,所以单个文件最好的是控制在64KB下,其他浏览器则沿用COOKIES.userData是一种持久化存储方式，而不是驻留在内存中，因此关闭浏览器并不会删除这些数据。当使用userData 存储体积较大的数据结构时，开发人员需要格外小心。因为这些数据结构中可能会存有身份认证这样的敏感数据，如果被持久保存在客户端很可能被攻击者所利用。由于名/值对是作为XML节点的属性存储在userData的XML文档中，因此Internet Explorer可以自动将某些特殊字符转义为XML中的对应字符。例如，双引号（"）会被替换为&quot;，而连字符（&）会被替换 为&amp;。由于这些自动转义的字符会增加实际存储的数据大小，因此开发人员必须确保有足够的空间来存储转义后的数据。  
*/

ZUI.Storage = new $.Class({
    
	options : {
		sessionMod:false,
		encode:false
    }, 

	initialize : function(options){
         this.options = $.extend({},this.options, options);
		 
		 var self = this;
		 this.drivers= {
				// Firefox 3.5, Safari 4.0, Chrome 5, Opera 10.5, IE8
				'localStorage': {
					// see https://developer.mozilla.org/en/dom/storage#localStorage
					available: function(){
						try{
							// Firefox won't allow localStorage if cookies are disabled
							if (!!window.localStorage) {
								// Safari's "Private" mode throws a QUOTA_EXCEEDED_ERR on setItem
								window.localStorage.setItem("jQuery Store Availability test", true);
								window.localStorage.removeItem("jQuery Store Availability test");
								return true;
							};
							return false;
						}catch(e){
							return false;
						}
					},
					init: $.noop,
					
					get: function(key){
						 var v = self.options.sessionMod ? window.sessionStorage.getItem(key) : window.localStorage.getItem(key),
						 vl = self.options.encode ? v : JSON.parse(v),lastv;
						 if(vl && vl.time){
						 	var date = new Date().getTime();
	
							console.log(vl.time);
							console.log(date);
							if(vl.time - date > 0){
								//console.log('未过期');
								lastv = vl.val;
							}else{
								//console.log('过期');
								self.del(key);
								lastv = null;
							};
							
						 }
						 return lastv;
					},
					set: function(key, value, expires){
						var v = {}; 
						if (typeof expires == 'number'){
							var date = new Date().getTime() + (expires * 24 * 60 * 60 * 1000);
							v.time = date;
							
						}
						v.val = value;
						var vl = self.options.encode ? v : JSON.stringify(v);
						self.options.sessionMod ? window.sessionStorage.setItem(key, vl) : window.localStorage.setItem(key, vl);
					},
					del: function(key){
						self.options.sessionMod ? window.sessionStorage.removeItem(key) : window.localStorage.removeItem(key);
					},
					flush: function(){
						self.options.sessionMod ? window.sessionStorage.clear() : window.localStorage.clear();
					}
				},
				
				// IE6, IE7
				'userData': {
					// see http://msdn.microsoft.com/en-us/library/ms531424.aspx
					element: null,
					nodeName: 'userdatadriver',
					initialized: false,
					available: function(){
						try{
							return !!(document.documentElement && document.documentElement.addBehavior);
						}catch(e){
							return false;
						}
					},
					init: function(){
						// $.store can only utilize one userData store at a time, thus avoid duplicate initialization
						if(this.initialized)
							return;
						
						try{
							// Create a non-existing element and append it to the root element (html)
							this.element = document.createElement(this.nodeName);
							document.documentElement.insertBefore(this.element, document.getElementsByTagName('title')[0]);
							// Apply userData behavior
							this.element.addBehavior("#default#userData");
							this.initialized = true;
						}catch(e){
							return false; 
						}
					},
					get: function(key){
						this.element.load(this.nodeName);
						return this.element.getAttribute(key);
					},
					set: function(key, value){
						this.element.setAttribute(key, value);
						this.element.save(this.nodeName);
					},
					del: function(key){
						this.element.removeAttribute(key);
						this.element.save(this.nodeName );
						
					},
					flush: function(){
						// flush by expiration
						var attrs = this.element.xmlDocument.firstChild.attributes;
						for (var i = attrs.length - 1; i >= 0; i--){
							this.element.removeAttribute(attrs[i].nodeName);
						}
							this.element.save(this.nodeName);
					}
				}
			};
         var self = this;
		 
		 $.each(this.drivers, function(){
			// skip unavailable drivers
			if(!$.isFunction( this.available ) || !this.available())
				return true; // continue;
			
			self.driver = this;
			if(self.driver.init() === false){
				self.driver = null;
				return true; // continue;
			}
			
			return false; // break;
		});

    },
    get:function(key){
		var value = this.driver.get(key);
		return value;
	},
	set: function(key, value, expires){

		this.driver.set(key, value, expires);
	},
	del: function(key){
		this.hour && this.doExp(key,true);
		this.driver.del(key);
	},
	flush: function(){
		this.driver.flush();
	}
});

/*
Form keeper
ZUI.Storage required
*/
ZUI.FormKeeper = new $.Class({
	options : {
		restoreAtInit: false,//初始化是否自动填充表单
		backupAtLeave: true,//离开页面时是否存储数据
		clearOnSubmit: false//表单提交时是否清除数据
	}, // end defaults
	initialize: function(form,options) {
		this.options = $.extend({},this.options, options);
		this.form = (typeof form == 'object') ? form : $('#'+form);
		this.storePool = new ZUI.Storage();
		var self = this;
		if ("string" === typeof this.options.formId) {
			this.formId = this.options.formId;
		} else if ("string" === typeof $(this.form).data("formid")) {
			
			this.formId =  $(this.form).data("formid");
		} else {
			this.formId = location.pathname.replace(/\//g, "_");
		}
		this.namespace = "FormKeeper_" + this.formId;
		this.data = this.restoreData(this.formId);
		
		
		this.options.restoreAtInit && this.restore();
		
		this.options.backupAtLeave &&
		$(window).on("beforeunload." + this.namespace, function () {
			self.backup();
			//self.backupData(self.formId, self.backupForm(self.element));
		});
		
		this.options.clearOnSubmit &&
		this.form.on("submit." + this.namespace, function () {
			self.clear();
		});
		
		$.fireEvent(this.options.onInit,[this.form,this.data,this]);

	},
	backup: function () {
			this.backupData(this.formId, this.backupForm(this.form));
	},
	restore: function () {
		
		if (!!this.data) {
			this.restoreForm(this.form, this.data);
		}
	},
	clear: function () {
		this.clearData(this.formId);
	},
	backupData: function (formId, data) {
		this.storePool.set("FormKeeper_" + formId, JSON.stringify(data));
	},
	restoreData:function(formId){
		return JSON.parse(this.storePool.get("FormKeeper_" + formId));
	},
	clearData: function (formId) {
		
		this.storePool.del("FormKeeper_" + formId);
		
	},
	backupForm: function (form) {//获取form
		var data = {};

		$(form).find(":input").each(function () {
			var input = $(this), name = input.prop("name");
			if (!name) {
				return;
			}

			if (input.is(":radio")) {
				if (!input.prop("checked")) {
					return;
				}

				data[name] = input.val();
			} else if (input.is(":checkbox")) {
				if (!input.prop("checked")) {
					return;
				}

				if (!data[name]) {
					data[name] = [];
				}
				data[name].push(input.val());
			} else {
				data[name] = input.val();
			}
		});

		return data;
	},
	restoreForm: function (form, data) {//填充form
		$(form).find(":input").each(function () {
			var input = $(this), name = input.prop("name");
			if (!name || !data[name]) {
				return;
			}

			if (input.is(":radio")) {
				if (data[name] === input.val()) {
					input.prop("checked", true);
				}
			} else if (input.is(":checkbox")) {
				if (-1 !== data[name].indexOf(input.val())) {
					input.prop("checked", true);
				}
			} else {
				input.val(data[name]);
			}
		});
	},
	destroy: function () {
		this.options.backupAtLeave && $(window).off("beforeunload." + this.namespace);
		this.options.clearOnSubmit && this.form.off("submit." + this.namespace);
	}
});
/*Ajax form*/
ZUI.AjaxForm = new $.Class({
	options : {
		onBefore: $.noop,
		onSuccess: $.noop,
		onError: $.noop,
		onAjaxError:$.noop,
		onInvalid: $.noop,
		feedBack:null,
		ErrorClass: '',
		reader:{
			"status":"status",//状态
			"feedback":"feedback",//返回文本
			"data":"data",//返回数据
			"invalid":"invalid"//返回错误对象
		}
	}, // end defaults
	initialize: function(form,options) {
		this.options = $.extend({},this.options, options);
		this.form = (typeof form == 'object') ? form : $('#'+form);
		this.xhr = null;
		this.busy = false;
		var self = this,
		status = this.options.reader.status,
		feedback = this.options.reader.feedback,
		data = this.options.reader.data,
		invalid = this.options.reader.invalid;
		
		this.form.on('submit', function(event) {
			event.preventDefault();
			// Don't submit if already busy
			if(self.busy) return;

			// Clear invalids and feedback
			self.options.feedBack && $(self.options.feedBack).hide();
			self.options.ErrorClass && self.hideInvalid();

			$.fireEvent(self.options.onBefore,[self.form,self]);

			// Submit it
			self.xhr = $.ajax({
				url: self.form.attr('action'),
				type: self.form.attr('method'),
				data: self.form.serialize(),
				dataType: 'json',
				beforeSend: function() {
					self.busy = true;
				}
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				// Handle AJAX errors
				$.fireEvent(self.options.onAjaxError,[self.form,textStatus, errorThrown]);
			})
			.always(function(response) {
				// Show form field invalid
				(response.invalid && self.options.ErrorClass) && self.showInvalid(response.invalid);
				// Callbacks
				if( response.status === 'success')$.fireEvent(self.options.onSuccess,[self.form,response.data]);
				if( response.status === 'error')$.fireEvent(self.options.onError,[self.form,response.data]);
				self.options.feedBack && $(self.options.feedBack).html(response.feedback).show();
				self.busy = false;
			});

		});
	},
	showInvalid: function(invalid) {
		var i,self = this;
		for( i in invalid ) {
			this.form.find('[name=' + invalid[i] + ']').each(function(){
				$(this).addClass(self.options.ErrorClass);
				$.fireEvent(self.options.onInvalid,[this,self.form,invalid]);
			});
		}
	},
	hideInvalid: function () {
		var self = this;
		this.form.find('.'+this.options.ErrorClass).each( function() {
			$(this).removeClass(self.options.ErrorClass);
		});
	}
});

/*Completer*/
ZUI.Completer = new $.Class({
	options : {		
		container:null,
		template: '<ul class="completer-container"></ul>',
		itemTag: 'li',
		position: 'south', // or 'custom'
		skew:{x:0,y:30},
		
		url:null,
		reader:{
			"cat":0,
			"key":"key",
			"status":"status",
			"data":"data"
		},
		selectedClass: 'completer-selected',
		loadClass:'ckLoad',
		separator: '',
		sugType: 'custom',//ajax,normal,custom
		source: [],//Array or url
		dataAttr:'data-val',
		queryMinChars:1,
		delay:0,
		highlight:false,
		zIndex: 20,
	
		onComplete: $.noop,
		onFocus: $.noop,
		onBlur: $.noop,
		filter: function (val) {
		  return val;
		},
		dataRender:$.noop,
		ItemClick:$.noop
	}, // end defaults
	initialize: function(element, options) {
		this.options = $.extend({},this.options, options);
		this.element = (typeof element == 'object') ? element : $('#'+element);
		this.regexp = this.toRegexp(this.options.separator);
        this.compBox = $(this.options.template);
		this.container = this.options.container ? $(this.options.container):'body';
        this.compBox.hide().appendTo(this.container);
        this.typing = false;
        this.active = false;
        this.parm = {};
		var self = this;
		this.element.attr('autocomplete', 'off');
		this.enable();
        //this.element.is(':focus') && this.enable();
        
		$(document).on('click',function(){
			self.hideComp();
		});
		
	},
	enable: function () {
      if (!this.active) {
		var self = this;  
        this.active = true;
        this.element.on({
        	click:function(e){e.stopPropagation()},
			focus: function(){
				//console.log($(this).val());
				if($(this).val() ==self.parm[self.options.reader.key]){
					self.place();
				}else if($(this).val() !=''){
					self.complete();
				}	
				$.fireEvent(self.options.onFocus,[self.container,self.element]);
			},
		    blur: function(){
				//self.disable();
				$.fireEvent(self.options.onBlur,[self.container,self.element]);
		    },
            keydown: function(e){self.keydown(e);},
            keyup: function(e){self.keyup(e)}
        });
        this.compBox.on({
		  click:function(e){
		  	e.stopPropagation();
		  },	
          mousedown: function(e){
          	if(!$.isFunction(self.options.ItemClick))self.mousedown(e);
          },
          mouseover: function(e){
          	self.mouseover(e)
          }
        })
        .on('click',this.options.itemTag,function(e){
        	e.stopPropagation();
        	$.fireEvent(self.options.ItemClick,[$(this),self]);
        	
        });
		
      }
    },
	disable: function () {
      if (this.active) {
		var self = this;  
        this.active = false;
        this.element.off('keydown');
		this.element.off('keyup');
		this.compBox.off('mousedown');
		this.compBox.off('mouseover');

      }
    },
	keydown: function (e) {
     if (e.keyCode === 13) {
       e.stopPropagation();
       e.preventDefault();
	 }else{
	 	this.typing = true;
	 }

    },

    keyup: function (e) {

      var keyCode = e.keyCode,self = this;
	 
      if (keyCode === 13 || keyCode === 38 || keyCode === 40) {
        this.toggle(keyCode);
      } else {
		clearTimeout(this.processTimer);
	  	this.processTimer = window.setTimeout(function() {
		    self.complete();
		    
		}, this.options.delay);
        
        
      }
	  
    },
	
	mouseover: function (e) {

      var selectedClass = this.options.selectedClass,$target = $(e.target);
      $target.is(this.options.itemTag) && $target.addClass(selectedClass).siblings().removeClass(selectedClass);
      
    },

    mousedown: function (e) {
      e.stopPropagation();
      e.preventDefault();

      this.setValue(this.options.dataAttr ? $(e.target).attr(this.options.dataAttr) : $(e.target).text());
    },
    setValue: function (val) {
      this.element.val(val);
	  $.fireEvent(this.options.onComplete,[this.element,val]);
      this.compBox.hide();
    },
	toggle: function (keyCode) {
      var selectedClass = this.options.selectedClass,$selected = this.compBox.find('.' + selectedClass);

      switch (keyCode) {

        // Down
        case 40:
          $selected.removeClass(selectedClass);
          $selected = $selected.next();
          break;

        // Up
        case 38:
          $selected.removeClass(selectedClass);
          $selected = $selected.prev();
          break;

        // Enter
        case 13:
        	
          if($selected.length>0) { 
          	$.isFunction(this.options.ItemClick) ? $.fireEvent(this.options.ItemClick,[$selected,this]) :
          	this.setValue($selected.text());
          }
          break;

        // No default
      }

      if ($selected.length === 0) {
        $selected = this.compBox.children(keyCode === 40 ? ':first' : ':last');
      }

      $selected.addClass(selectedClass);
    },
	complete: function () {
		
	  
      var val = this.options.filter(this.element.val()).toString();

      if (val === '') {
        this.compBox.hide();
        return;
      }
      this.typing = false;
	  if(val.length >= this.options.queryMinChars) this.suggest(val);

      
    },
	suggest:function(v){

		switch(this.options.sugType){
			case 'ajax':
				if(this.typing) return;
				var opt = this.options, 
				container = $(opt.container),
				loadClass = opt.loadClass,
				
				reader = opt.reader,

          		
				self = this;
				
          		this.parm[reader.cat] = $('#searchCat').val();
          		this.parm[reader.key] = this.espace(v);

          		var url = opt.source + '?' + $.object.toQueryString(this.parm);
				container.addClass(loadClass);
				$.ajax({
					dataType : 'json',
            		type : 'GET',
					url: url,
					data: self.parm
				})
				.done(function() { })
				.always(function(data) { 
					container.removeClass(loadClass);
					//var dat = $.parseJSON(data).data;
					//self.norMod(v,dat);
					
					$.isFunction(self.options.dataRender) ? $.fireEvent(self.options.dataRender,[data,self]) : self.fill(data,v);	
			   		self.typing = false;
			   	});
			break;
			case 'normal':
				this.norMod(v,this.toArray(this.options.source));
				
			break;
			case 'custom':
				this.custMod(v,this.toArray(this.options.source));
				
			break;
		}
	},
	norMod: function(val,datas){
		var reg = new RegExp(this.espace(val), 'i'), self = this,matched = [];
		$.each(datas, function (i, n) {
			reg.test(n) && matched.push(n);
		});
		
		matched.sort(function (a, b) {
			return a.indexOf(val) - b.indexOf(val);
		});
		
		$.each(matched, function (i, n) {
			matched[i] = self.template(n);
		});
		
		this.fill(matched.join(''),val);
	},
	custMod: function(val,datas){
		var separator = this.options.separator,
          regexp = this.regexp,
          part = regexp ? val.match(regexp) : null,
          matched = [],
          all = [],
          self = this,
          reg,
          item;

      if (part) {
        part = part[0];
        val = val.replace(regexp, '');
        reg = new RegExp('^' +  espace(part), 'i');
      }

      $.each(datas, function (i, n) {
        n = separator + n;
        item = self.template(val + n);

        if (reg && reg.test(n)) {
          matched.push(item);
        } else {
          all.push(item);
        }
      });

      matched = matched.length ? matched.sort() : all;

      if (this.options.position === 'top') {
        matched = matched.reverse();
      }

      this.fill(matched.join(''),val);
	},
	template: function (text) {
      var tag = this.options.itemTag,vttr = this.options.dataAttr ?' '+this.options.dataAttr+'='+text:'';
		
      return ('<'+tag+vttr+'>' + text + '</' + tag + '>');
    },
	fill: function (html,pat) {
      var filter;

      this.compBox.empty();
	
      if (html) {
		  
        filter = this.options.position === 'top' ? ':last' : ':first';
        this.compBox.html(html);
		
		this.options.highlight && this.compBox.highlight(pat);
        this.compBox.children(filter);//.addClass(this.defaults.selectedClass);
        this.place();
      } else {
        this.hideComp();
      }
    },
	hideComp:function(){
		this.compBox.hide();
		
	},
	place: function () {

		this.compBox.css({'width':this.element.outerWidth(),'display':'block'}).flpos(this.element,this.options.position,this.options.skew.x,this.options.skew.y);

	},
	toRegexp: function (s) {
		if (typeof s === 'string' && s !== '') {
		  s = this.espace(s);
	
		  return new RegExp(s + '+[^' + s + ']*$', 'i');
		}
	
		return null;
	 },
	
	 espace: function (s) {
		return s.replace(/([\.\$\^\{\[\(\|\)\*\+\?\\])/g, '\\$1');
	 },
	
	 toArray: function (s) {
		if (typeof s === 'string') {
		  s = s.replace(/[\{\}\[\]"']+/g, '').split(/\s*,+\s*/);
		}
	
		s = $.map(s, function (n) {
		  return typeof n !== 'string' ? n.toString() : n;
		});
	
		return s;
	 }

});

ZUI.Upload = new $.Class({
	options : {
		url:'upload_do.php',//接收地址
		reader:{//基本接收参数
			"fileObjName":"file",//在后端接受文件的参数名称，如PHP中的$_FILES['file']
			"fileExt":"extension",
			"filename":"filename"
		},
		SizeLimit:2048,//允许上传的文件大小，单位KB
		allow:['.jpg','.png','.gif'],//允许上传的图片类型,数组：['.jpg','.png','.gif']
		imgOpt:{
			imgCompress:false,
			imgMaxSize:null//图片允许最大高度或宽度			
		},
		multi:true,//是否允许多选文件
		queueLimit:5, //一个队列上传文件数限制 
		inputClass:'selectInput',
		buttonClass:'fileUploadBtn',
		buttonBack:{
			Class:'fileUploadBtnback',
			workClass:'fileUploading',
			startTxt:'开始上传...',
			upingTxt:'当前进度',
			compTxt:'上传完毕'
			
		},
		buttonText:'请选择文件+',
		maxFileSize:0,
		postData:false,
		onInit:$.noop,
		onSelect:$.noop,
		onfileErro:$.noop,
		onProgress:$.noop,
		onUpstart:$.noop,
		onUpone:$.noop,
		onUpall:$.noop
	}, // end defaults
	initialize: function(element ,options) {
		this.options = $.extend({},this.options, options);

		this.abortFlag = false;
		this.element = $(element);
		this.list = null;
		this.url = this.options.url;
		this.img = $('<img/>');
		this.GID = $.GUID(),
		this.inputId = 'fileInput_'+this.GID,
		this.btnId = 'fileBtn_'+this.GID,
		this.btnBackId = 'fileBtnBack_'+this.GID,
		this.paraId = 'para_'+this.GID,
		this.extId = 'ext_'+this.GID,
		this.backOpt = this.options.buttonBack,
		this.frameId = 'fileFrame_'+this.GID,
		this.formId = 'fileForm_'+this.GID;
		this.testImgId = 'testImg_'+this.GID;
		this.canvas = document.createElement('canvas');
		this.picReg = /^.+[\.jpg|\.png|\.gif|\.bmp|\.jpeg]$/;//判断是否为图片
		// The FileReader API is not actually used, but works as feature detection,
		// as some Safari versions (5?) support XHR file uploads via the FormData API,
		// but not non-multipart XHR file uploads.
		// window.XMLHttpRequestUpload is not available on IE10, so we check for
		// window.ProgressEvent instead to detect XHR2 file upload capability:
		this.spMulinput = $("<input type=file>")[0].files;
		this.spXhrFileUpload = !!(window.ProgressEvent && window.FileReader && this.spMulinput);//for safari
		
		this.spXhrFormDataFileUpload = !!window.FormData;//for itie10 !!window.FormData
		//console.log(this.spXhrFileUpload);
		var self = this;
		if(this.spXhrFormDataFileUpload){
			var temp = '<input id="'+this.inputId+'" class="'+this.options.inputClass+'" type="file" name="fileselect[]"';
				temp += (this.options.multi && this.spXhrFileUpload ) ? 'multiple' : '';
				temp += '/>';
				temp += '<span id="'+this.btnId+'" class="'+this.options.buttonClass+'">'+this.options.buttonText+'</span>';
				temp += this.backOpt ? '<span id="'+this.btnBackId+'" class="'+this.backOpt.Class+'">'+this.backOpt.startTxt+'</span>' : '';
				this.element.append(temp);
			
			this.element.on('change','.'+this.options.inputClass,function(){
				
				self.filterList(this.files);
				//self.bulid(self.list);
				$.fireEvent(self.options.onSelect,[this.files,this]);
			});
		}else{
			
			var temp = '<form enctype="multipart/form-data" method="post" id="'+this.formId+'" target="'+this.frameId+'" action="'+this.url+'" >'
				temp += '<input id="'+this.inputId+'" class="'+this.options.inputClass+'" type="file" name="'+this.options.reader.fileObjName+'"';
				temp += (this.options.multi && this.spXhrFileUpload ) ? 'multiple' : '';
				temp += '/>';
				temp += '<input type="hidden" id="'+this.extId+'" name="extension" value=""/><input type="hidden" id="'+this.paraId+'" name="data"/><input type="submit" class="uploadSub" /><form/>';
				temp += '<span id="'+this.btnId+'" class="'+this.options.buttonClass+'">'+this.options.buttonText+'</span>';
				temp += '<img id="'+this.testImgId+'" dynsrc="" src="about:blank" style="display:none"/>';
			this.element.append(temp);
			$('#'+this.inputId).on('change',function(event){
				event.preventDefault();

				self.filterList($(this).val());
				//self.bulid(self.list);
				$.fireEvent(self.options.onSelect,[this.files,this]);
			});
			this.buildFrame();

				
		}
		$.fireEvent(this.options.onInit,[this.element]);

	},
	bulid: function(list){
		this.idx = 0;
		this.fileNum = list.length;
		this.list = list;
		this.start();
		
	},

	buildFrame: function(){//
		var fra = '<iframe style="position:absolute;top:100px;left:200px;" id="'+this.frameId+'" name="'+this.frameId+'" src="about:blank"></iframe>';
			var self = this;
			//$('body').append(fra);
			$('#'+this.formId).append(fra);

			var iframe = $('#'+this.frameId);

			iframe.on('load',function(){
				if(iframe[0].readyState === "complete" || iframe[0].readyState == "loaded"){
					try{
						var data = $(this).contents().find('body').html();
						self.element.removeClass(self.backOpt.workClass);
						$('#'+self.btnBackId).html(self.backOpt.compTxt);
						$.fireEvent(self.options.onUpone,[data]);
						$.fireEvent(self.options.onUpall,[self.element]);
					}catch(e){
						//console.log(e);
					}
				}
			}).bind('error', function () {
			   throw 'Upload failed.'
			});
			
//			setTimeout(function(){
//				
//				//self.element.empty();
//				$('#'+this.frameId).remove();
//			},300);
	},
	filterList: function (list){

		var ret=[],filename,size,err = 0;
		if(this.spMulinput){//若是现代浏览器支持多文件但是safari不支持fileReader!
			if(list.length>this.options.queueLimit){err = 3;}//上传队列文件个数超过
			for(var i=0,len=list.length;i<len;i++){
				filename = list[i].name,filesize = list[i].size;
				
				this.ext = /\.[^\.]+$/.exec(filename.toLowerCase()).join(',');
				
				//console.log(this.ext);
				if($.inArray(this.ext,this.options.allow)<0 && this.options.allow !='*'){//若文件格式在允许范围内且不为全体文件
					err = 1;//文件不允许
				}
				if(this.options.SizeLimit && parseInt(filesize) > this.options.SizeLimit)err = 2;//文件大小超过
			}
		}else{//垃圾浏览器

				filename = list.replace(/^.*[\\\/]/, '')
				//取得所选文件的扩展名
				this.ext = /\.[a-zA-Z]+$/.exec(filename)[0];
				if($.inArray(this.ext,this.options.allow)<0 && this.options.allow !='*'){//若文件格式在允许范围内且不为全体文件
					err = 1;//文件不允许
					//console.log(err)
				}
				
				var myFSO = new ActiveXObject("Scripting.FileSystemObject");
				var thefile = myFSO.getFile(list);
				var size = thefile.size;
				console.log(size);
	
				if(!err){
					var reader = this.options.reader,
					parm = this.options.postData ? this.options.postData:{};
					parm[reader.filename] = filename;
					parm[reader.fileExt] = this.ext;//获取文件扩展名
					$('#'+this.paraId).val();
					$('#'+this.extId).val(this.ext);
				}
		}
		
		if(err){
			$.fireEvent(this.options.onfileErro,[err,filename,this.ext]);
		}else{
			this.bulid(list);
			
		}
	},
	

	start: function(){
		
		if(this.list.length){
			this.uploadOne(this.url);
			if(this.backOpt){
				this.element.addClass(this.backOpt.workClass);
				$('#'+this.btnBackId).html(this.backOpt.startTxt);
			}
			$.fireEvent(this.options.onUpstart,[this.element]);
			
		}
		
	},


	uploadOne: function (url){
		var self = this;		
		if(self.abortFlag) return;
		
		if(this.spXhrFileUpload){//判断是否支持FileReader(safari,oldie不支持)
			this.compress(this.list[this.idx],this.options.imgOpt.imgMaxSize,function(img_data){
				if(self.abortFlag) return;
				self.post(url,img_data,self.list[self.idx],function(ret){
				//self.post(url,false,self.list[self.idx],function(ret){	
					if(self.abortFlag) return;
					
					self.idx++;
					
					if(self.idx<self.fileNum) {
						self.uploadOne(url);
					}else{
						if(self.backOpt){
							self.element.removeClass(self.backOpt.workClass);
							$('#'+self.btnBackId).html(self.backOpt.compTxt);
						}
						$.fireEvent(self.options.onUpall,[self.element]);
					}
					$.fireEvent(self.options.onUpone,[ret]);
				});
			},this.options.imgOpt.imgCompress);
		}else if(this.spXhrFormDataFileUpload){//是否支持formdata

			self.post(url,false,self.list[self.idx],function(ret){
				if(self.abortFlag) return;
				
				self.idx++;
				if(self.idx<self.fileNum) {
					self.uploadOne(url);
				}else{
					if(self.backOpt){
						self.element.removeClass(self.backOpt.workClass);
						$('#'+self.btnBackId).html(self.backOpt.compTxt);
					}
					$.fireEvent(self.options.onUpall,[self.element]);
				}
				$.fireEvent(self.options.onUpone,[ret]);
			});

		}else{//iframe 提交
			try{
				$('#'+this.formId).submit();
				//$.fireEvent(self.options.onProgress,[percentComplete*100,self.fileNum,self.idx]);
			}catch(e){throw(e)}
		}
	},

	compress: function (file, maxSize, callback, img_compress){
		
		var slef = this,reader = new FileReader(),isPic = this.picReg.test(file.name.toLowerCase());
			
		reader.onload = function (e) {
			
			if(img_compress && isPic){
				var image = slef.img;
				image.one('load', function () {
					if(!maxSize||isNaN(maxSize)) maxSize=1600;
					var imageWidth=100,imageHeight=100;
					//计算缩放后的长和宽
					if (this.width > this.height) {//横向
						  if(this.width>maxSize){
							imageWidth = maxSize;
							imageHeight = Math.round(maxSize/this.width*this.height);
						  }else{
							imageWidth=this.width;
							imageHeight=this.height;
						  }
				   } else {//纵向
						  if(this.height>maxSize){
							imageHeight = maxSize;
							imageWidth = Math.round(maxSize/this.height*this.width);
						  }else{
							imageWidth=this.width;
							imageHeight=this.height;
						  }
				   }
					 var canvas = slef.canvas;
	
					 canvas.width = imageWidth;
					 canvas.height = imageHeight;
	
					 var context = canvas.getContext('2d');
					 context.clearRect(0, 0, imageWidth, imageHeight);
	
					context.drawImage(this, 0, 0, imageWidth, imageHeight);
					window.URL.revokeObjectURL(this.src); // 释放内存资源
					var data = canvas.toDataURL('image/jpeg');
					if(callback) callback(data);
					
				 });
	
				  image.attr('src', e.target.result);
			}else{
				if(callback) callback(e.target.result);
			}
			reader=null;
		   };
	 
		 reader.readAsDataURL(file);
	},
	post: function (url,data,file,callback){
		var self = this,parm,reader = this.options.reader;
		if(data){
			var temp = data.split(',');
			var jpg_data=temp[1];
			parm = this.options.postData ? this.options.postData:{};
				parm[reader.fileObjName] = jpg_data;
				parm[reader.filename] = file.name;
				parm[reader.fileExt] = this.ext;//获取文件扩展名
		}else{
			parm = new FormData();
			parm.append(reader.fileObjName,file);
			parm.append(reader.fileExt,this.ext);

			if(this.options.postData){
				for(key in this.options.postData){
					parm.append(key,this.options.postData[key]);
				}
			}
		}
		$.ajax({
		  xhr: function(){
				var xhr = $.ajaxSettings.xhr();
				xhr.upload.onprogress = function(evt){
					if (evt.lengthComputable) {
						var percentComplete = evt.loaded / evt.total;				
						self.backOpt && $('#'+self.btnBackId).html(self.backOpt.upingTxt+percentComplete*100);
						$.fireEvent(self.options.onProgress,[percentComplete*100,self.fileNum,self.idx]);
						//self.setProgess.call(self,percentComplete*100,self.file_num,self.idx);
					  }
				};
				xhr.upload.onload = function(){};
				return xhr;
		  },
		  type: 'POST',
		  //dataType: 'json',
		  processData : data?true:false,//必须false才会避开jQuery对 formdata 的默认处理 XMLHttpRequest会对 formdata 进行正确的处理   
		  contentType : data?'application/x-www-form-urlencoded; charset=UTF-8':false,//必须false才会自动加上正确的Content-Type  
		  url: url,
		  data: parm,
		  success: function(data){
			
			callback(data);
		  }
		}).fail(function(){
			throw 'Upload failed.'		
		});											
	}
});

	/*Progress*/
	ZUI.Progress = new $.Class({
		options : {
			minimum: 0.08,
			easing: 'linear',
			positionUsing: '',
			speed: 350,
			trickle: true,
			trickleSpeed: 250,
			showSpinner: false,
			barSelector: '[role="bar"]',
			spinnerSelector: '[role="spinner"]',
			parent: 'body',
			template: '<div class="bar" role="bar"><div class="peg"></div></div>',
			templateSp:'<div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
		}, // end defaults
		initialize: function(options) {
			this.options = $.extend({},this.options, options);
			//this.form = (typeof form == 'object') ? form : $('#'+form);
			this.status = null;
			this.barID = 'progress_'+$.GUID();
			  /**
			   * (Internal) Queues a function to be executed.
			   */
			this.queue = (function() {
				var pending = [];
				
				function next() {
				  var fn = pending.shift();
				  if (fn) {
					fn(next);
				  }
				}
				
				return function(fn) {
				  pending.push(fn);
				  if (pending.length == 1) next();
				};
				
			})();
			
		},
		set : function(n) {
			var started = this.isStarted();
		
			n = this.clamp(n, this.options.minimum, 1);
			this.status = (n === 1 ? null : n);
		
			var progress = this.render(!started),
				bar = progress.find(this.options.barSelector),
				speed = this.options.speed,
				ease = this.options.easing,
				self = this;
		
			progress.offset().width; /* Repaint */
		
			this.queue(function(next) {
			  // Set positionUsing if it hasn't already been set
			  if (self.options.positionUsing === '') self.options.positionUsing = self.getPositioningCSS();
		
			  // Add transition
			  bar.css(self.barPositionCSS(n, speed, ease));
		
			  if (n === 1) {
				// Fade out
				progress.css({
				  transition: 'none',
				  opacity: 1
				});
				progress.offset().width; /* Repaint */
		
				setTimeout(function() {
				  progress.css({
					transition: 'all ' + speed + 'ms linear',
					opacity: 0
				  });
				  setTimeout(function() {
					self.removeBar();
					next();
				  }, speed);
				}, speed);
			  } else {
				setTimeout(next, speed);
			  }
			});
		
		},
		render : function(fromStart) {
			if (this.isRendered()) return $('#' + this.barID);
		
			$('html').addClass('ZuiProgress_busy');

			var progress = $('<div>',{
				id : this.barID,
				'class':'ZuiProgress',
				html : this.options.template
			});
		
			var bar = progress.find(this.options.barSelector),
				perc = fromStart ? '-100' : this.toBarPerc(this.status || 0),
				parent = $(this.options.parent),
				spinner;
		
			bar.css({
			  transition: 'all 0 linear',
			  transform: 'translate3d(' + perc + '%,0,0)'
			});
		
			this.options.showSpinner && $(progress).append(this.options.templateSp);

		
			if (parent.get(0) != document.body) {
			  parent.addClass('ZuiProgress_parent');
			}
		
			parent.append(progress);
			return progress;
		},
		start : function() {
			if (!this.status) this.set(0);
		
			var self = this, work = function() {
			  setTimeout(function() {
				if (!self.status) return;
				self.trickle();
				work();
			  }, self.options.trickleSpeed);
			};
		
			if (self.options.trickle) work();
		},
		  /**
		   * Hides the progress bar.
		   * This is the *sort of* the same as setting the status to 100%, with the
		   * difference being `done()` makes some placebo effect of some realistic motion.
		   *
		   *     NProgress.done();
		   *
		   * If `true` is passed, it will show the progress bar even if its hidden.
		   *
		   *     NProgress.done(true);
		   */
		
		done : function(force) {
			if (!force && !this.status) return this;
		
			this.inc(0.3 + 0.5 * Math.random());
			this.set(1);
		},
		inc : function(amount) {
			var n = this.status;
		
			if (!n) {
			  return this.start();
			} else if(n > 1) {
			  return;
			} else {
			  if (typeof amount !== 'number') {
				if (n >= 0 && n < 0.25) {
				  // Start out between 3 - 6% increments
				  amount = (Math.random() * (5 - 3 + 1) + 3) / 100;
				} else if (n >= 0.25 && n < 0.65) {
				  // increment between 0 - 3%
				  amount = (Math.random() * 3) / 100;
				} else if (n >= 0.65 && n < 0.9) {
				  // increment between 0 - 2%
				  amount = (Math.random() * 2) / 100;
				} else if (n >= 0.9 && n < 0.99) {
				  // finally, increment it .5 %
				  amount = 0.005;
				} else {
				  // after 99%, don't increment:
				  amount = 0;
				}
			  }
		
			  n = this.clamp(n + amount, 0, 0.994);
			  return this.set(n);
			}
		},
		trickle : function() {
			return this.inc();
		},
		isStarted : function() {
			return typeof this.status === 'number';
		},
		isRendered : function() {
			return $('#'+this.barID).length > 0; 
			
		},
		clamp: function (n, min, max) {
			if (n < min) return min;
			if (n > max) return max;
			return n;
		},
		toBarPerc: function(n) {
			return (-1 + n) * 100;
		},
		getPositioningCSS : function() {
			// Sniff on document.body.style
			var bodyStyle = document.body.style;
		
			// Sniff prefixes
			var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
							   ('MozTransform' in bodyStyle) ? 'Moz' :
							   ('msTransform' in bodyStyle) ? 'ms' :
							   ('OTransform' in bodyStyle) ? 'O' : '';
		
			if (vendorPrefix + 'Perspective' in bodyStyle) {
			  // Modern browsers with 3D support, e.g. Webkit, IE10
			  return 'translate3d';
			} else if (vendorPrefix + 'Transform' in bodyStyle) {
			  // Browsers without 3D support, e.g. IE9
			  return 'translate';
			} else {
			  // Browsers without translate() support, e.g. IE7-8
			  return 'margin';
			}
		},
		barPositionCSS : function(n, speed, ease) {
			var barCSS;
		
			if (this.options.positionUsing === 'translate3d') {
			  barCSS = { transform: 'translate3d('+this.toBarPerc(n)+'%,0,0)' };
			} else if (this.options.positionUsing === 'translate') {
			  barCSS = { transform: 'translate('+this.toBarPerc(n)+'%,0)' };
			} else {
			  barCSS = { 'margin-left': this.toBarPerc(n)+'%' };
			}
		
			barCSS.transition = 'all '+speed+'ms '+ease;
		
			return barCSS;
		},
		removeBar : function() {
			$('html').removeClass('ZuiProgress_busy');
			$(this.options.parent).removeClass('ZuiProgress_parent');
			var progress = $('#'+this.barID);
			$('#'+this.barID).length > 0 && progress.remove();
		}		
	});

})(jQuery);
/*
    json2.js
    2013-05-26
	
	JSON.parse()
	JSON.stringify()
    For Ie 7 Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';
    function f(n) {
        return n < 10 ? '0' + n : n;
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function () {
            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };
        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;

    function quote(string) {

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    function str(key, holder) {

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
        case 'string':
            return quote(value);
        case 'number':
            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':
            return String(value);

        case 'object':

            if (!value) {
                return 'null';
            }

            gap += indent;
            partial = [];

            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }


            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

            var i;
            gap = '';
            indent = '';

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

            } else if (typeof space === 'string') {
                indent = space;
            }

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

            return str('', {'': value});
        };
    }

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                j = eval('(' + text + ')');

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

            throw new SyntaxError('JSON.parse');
        };
    }
}());

