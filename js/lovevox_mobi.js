//https://github.com/benmajor/jQuery-Touch-Events
!function(e){function t(){var e=c();e!==r&&(r=e,l.trigger("orientationchange"))}function a(t,a,n,o){var i=n.type;n.type=a,e.event.dispatch.call(t,n,o),n.type=i}e.attrFn=e.attrFn||{};var n=navigator.userAgent.toLowerCase(),o=n.indexOf("chrome")>-1&&(n.indexOf("windows")>-1||n.indexOf("macintosh")>-1||n.indexOf("linux")>-1)&&n.indexOf("mobile")<0&&n.indexOf("android")<0,i={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:window.navigator.msPointerEnabled?!1:"ontouchstart"in window&&!o,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:window.navigator.msPointerEnabled?"MSPointerDown":"ontouchstart"in window&&!o?"touchstart":"mousedown",endevent:window.navigator.msPointerEnabled?"MSPointerUp":"ontouchstart"in window&&!o?"touchend":"mouseup",moveevent:window.navigator.msPointerEnabled?"MSPointerMove":"ontouchstart"in window&&!o?"touchmove":"mousemove",tapevent:"ontouchstart"in window&&!o?"tap":"click",scrollevent:"ontouchstart"in window&&!o?"touchmove":"scroll",hold_timer:null,tap_timer:null};e.isTouchCapable=function(){return i.touch_capable},e.getStartEvent=function(){return i.startevent},e.getEndEvent=function(){return i.endevent},e.getMoveEvent=function(){return i.moveevent},e.getTapEvent=function(){return i.tapevent},e.getScrollEvent=function(){return i.scrollevent},e.each(["tapstart","tapend","tapmove","tap","tap2","tap3","tap4","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,a){e.fn[a]=function(e){return e?this.on(a,e):this.trigger(a)},e.attrFn[a]=!0}),e.event.special.tapstart={setup:function(){var t=this,n=e(t);n.on(i.startevent,function(e){if(n.data("callee",arguments.callee),e.which&&1!==e.which)return!1;var o=e.originalEvent,s={position:{x:i.touch_capable?o.touches[0].screenX:e.screenX,y:i.touch_capable?o.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.touches[0].pageX-o.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.touches[0].pageY-o.touches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};return a(t,"tapstart",e,s),!0})},remove:function(){e(this).off(i.startevent,e(this).data.callee)}},e.event.special.tapmove={setup:function(){var t=this,n=e(t);n.on(i.moveevent,function(e){n.data("callee",arguments.callee);var o=e.originalEvent,s={position:{x:i.touch_capable?o.touches[0].screenX:e.screenX,y:i.touch_capable?o.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.touches[0].pageX-o.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.touches[0].pageY-o.touches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};return a(t,"tapmove",e,s),!0})},remove:function(){e(this).off(i.moveevent,e(this).data.callee)}},e.event.special.tapend={setup:function(){var t=this,n=e(t);n.on(i.endevent,function(e){n.data("callee",arguments.callee);var o=e.originalEvent,s={position:{x:i.touch_capable?o.changedTouches[0].screenX:e.screenX,y:i.touch_capable?o.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.changedTouches[0].pageX-o.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.changedTouches[0].pageY-o.changedTouches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};return a(t,"tapend",e,s),!0})},remove:function(){e(this).off(i.endevent,e(this).data.callee)}},e.event.special.taphold={setup:function(){var t,n=this,o=e(n),s={x:0,y:0},c=0,r=0;o.on(i.startevent,function(e){if(e.which&&1!==e.which)return!1;o.data("tapheld",!1),t=e.target;var h=e.originalEvent,u=Date.now(),l={x:i.touch_capable?h.touches[0].screenX:e.screenX,y:i.touch_capable?h.touches[0].screenY:e.screenY},p={x:i.touch_capable?h.touches[0].pageX-h.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?h.touches[0].pageY-h.touches[0].target.offsetTop:e.offsetY};return s.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,s.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,c=s.x,r=s.y,i.hold_timer=window.setTimeout(function(){var g=s.x-c,d=s.y-r;if(e.target==t&&(s.x==c&&s.y==r||g>=-i.tap_pixel_range&&g<=i.tap_pixel_range&&d>=-i.tap_pixel_range&&d<=i.tap_pixel_range)){o.data("tapheld",!0);var f=Date.now(),v={x:i.touch_capable?h.touches[0].screenX:e.screenX,y:i.touch_capable?h.touches[0].screenY:e.screenY},w={x:i.touch_capable?h.touches[0].pageX-h.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?h.touches[0].pageY-h.touches[0].target.offsetTop:e.offsetY};duration=f-u;var _={startTime:u,endTime:f,startPosition:l,startOffset:p,endPosition:v,endOffset:w,duration:duration,target:e.target};o.data("callee1",arguments.callee),a(n,"taphold",e,_)}},i.taphold_threshold),!0}).on(i.endevent,function(){o.data("callee2",arguments.callee),o.data("tapheld",!1),window.clearTimeout(i.hold_timer)}).on(i.moveevent,function(e){o.data("callee3",arguments.callee),c=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,r=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2).off(i.moveevent,e(this).data.callee3)}},e.event.special.doubletap={setup:function(){var t,n,o,s,c,r=this,h=e(r),u=!1;h.on(i.startevent,function(e){return e.which&&1!==e.which?!1:(h.data("doubletapped",!1),t=e.target,h.data("callee1",arguments.callee),s=e.originalEvent,o={position:{x:i.touch_capable?s.touches[0].screenX:e.screenX,y:i.touch_capable?s.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target},!0)}).on(i.endevent,function(e){var s=Date.now(),l=h.data("lastTouch")||s+1,p=s-l;if(window.clearTimeout(n),h.data("callee2",arguments.callee),p<i.doubletap_int&&e.target==t&&p>100){h.data("doubletapped",!0),window.clearTimeout(i.tap_timer);var g={position:{x:i.touch_capable?e.originalEvent.changedTouches[0].screenX:e.screenX,y:i.touch_capable?e.originalEvent.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?e.originalEvent.changedTouches[0].pageX-e.originalEvent.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?e.originalEvent.changedTouches[0].pageY-e.originalEvent.changedTouches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target},d={firstTap:o,secondTap:g,interval:g.time-o.time};u||a(r,"doubletap",e,d),u=!0,c=window.setTimeout(function(){u=!1},i.doubletap_int)}else h.data("lastTouch",s),n=window.setTimeout(function(){window.clearTimeout(n)},i.doubletap_int,[e]);h.data("lastTouch",s)})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.singletap={setup:function(){var t=this,n=e(t),o=null,s=null,c={x:0,y:0};n.on(i.startevent,function(e){return e.which&&1!==e.which?!1:(s=Date.now(),o=e.target,n.data("callee1",arguments.callee),c.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,c.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,!0)}).on(i.endevent,function(e){n.data("callee2",arguments.callee),e.target==o&&(end_pos_x=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,end_pos_y=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageY:e.pageY,i.tap_timer=window.setTimeout(function(){if(!n.data("doubletapped")&&!n.data("tapheld")&&c.x==end_pos_x&&c.y==end_pos_y){var o=e.originalEvent,r={position:{x:i.touch_capable?o.changedTouches[0].screenX:e.screenX,y:i.touch_capable?o.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.changedTouches[0].pageX-o.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.changedTouches[0].pageY-o.changedTouches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};r.time-s<i.taphold_threshold&&a(t,"singletap",e,r)}},i.doubletap_int))})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.tap={setup:function(){var t,n,o=this,s=e(o),c=!1,r=null,h={x:0,y:0};s.on(i.startevent,function(e){return s.data("callee1",arguments.callee),e.which&&1!==e.which?!1:(c=!0,h.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,h.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,t=Date.now(),r=e.target,n=e.originalEvent.targetTouches?e.originalEvent.targetTouches:[e],!0)}).on(i.endevent,function(e){s.data("callee2",arguments.callee);var u,l=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,p=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageY:e.pageY,g=h.x-l,d=h.y-p;if(r==e.target&&c&&Date.now()-t<i.taphold_threshold&&(h.x==l&&h.y==p||g>=-i.tap_pixel_range&&g<=i.tap_pixel_range&&d>=-i.tap_pixel_range&&d<=i.tap_pixel_range)){for(var f=e.originalEvent,v=[],w=0;w<n.length;w++){var _={position:{x:i.touch_capable?f.changedTouches[w].screenX:e.screenX,y:i.touch_capable?f.changedTouches[w].screenY:e.screenY},offset:{x:i.touch_capable?f.changedTouches[w].pageX-f.changedTouches[w].target.offsetLeft:e.offsetX,y:i.touch_capable?f.changedTouches[w].pageY-f.changedTouches[w].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};v.push(_)}switch(n.length){case 1:u="tap";break;case 2:u="tap2";break;case 3:u="tap3";break;case 4:u="tap4"}a(o,u,e,v)}})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.swipe={setup:function(){function t(t){c=e(t.currentTarget),c.data("callee1",arguments.callee),u.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,u.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY,l.x=u.x,l.y=u.y,r=!0;var a=t.originalEvent;o={position:{x:i.touch_capable?a.touches[0].screenX:t.screenX,y:i.touch_capable?a.touches[0].screenY:t.screenY},offset:{x:i.touch_capable?a.touches[0].pageX-a.touches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?a.touches[0].pageY-a.touches[0].target.offsetTop:t.offsetY},time:Date.now(),target:t.target}}function a(t){c=e(t.currentTarget),c.data("callee2",arguments.callee),l.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,l.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;var a,n=c.parent().data("xthreshold")?c.parent().data("xthreshold"):c.data("xthreshold"),s=c.parent().data("ythreshold")?c.parent().data("ythreshold"):c.data("ythreshold"),p="undefined"!=typeof n&&n!==!1&&parseInt(n)?parseInt(n):i.swipe_h_threshold,g="undefined"!=typeof s&&s!==!1&&parseInt(s)?parseInt(s):i.swipe_v_threshold;if(u.y>l.y&&u.y-l.y>g&&(a="swipeup"),u.x<l.x&&l.x-u.x>p&&(a="swiperight"),u.y<l.y&&l.y-u.y>g&&(a="swipedown"),u.x>l.x&&u.x-l.x>p&&(a="swipeleft"),void 0!=a&&r){u.x=0,u.y=0,l.x=0,l.y=0,r=!1;var d=t.originalEvent;endEvnt={position:{x:i.touch_capable?d.touches[0].screenX:t.screenX,y:i.touch_capable?d.touches[0].screenY:t.screenY},offset:{x:i.touch_capable?d.touches[0].pageX-d.touches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?d.touches[0].pageY-d.touches[0].target.offsetTop:t.offsetY},time:Date.now(),target:t.target};var f=Math.abs(o.position.x-endEvnt.position.x),v=Math.abs(o.position.y-endEvnt.position.y),w={startEvnt:o,endEvnt:endEvnt,direction:a.replace("swipe",""),xAmount:f,yAmount:v,duration:endEvnt.time-o.time};h=!0,c.trigger("swipe",w).trigger(a,w)}}function n(t){c=e(t.currentTarget);var a="";if(c.data("callee3",arguments.callee),h){var n=c.data("xthreshold"),s=c.data("ythreshold"),u="undefined"!=typeof n&&n!==!1&&parseInt(n)?parseInt(n):i.swipe_h_threshold,l="undefined"!=typeof s&&s!==!1&&parseInt(s)?parseInt(s):i.swipe_v_threshold,p=t.originalEvent;endEvnt={position:{x:i.touch_capable?p.changedTouches[0].screenX:t.screenX,y:i.touch_capable?p.changedTouches[0].screenY:t.screenY},offset:{x:i.touch_capable?p.changedTouches[0].pageX-p.changedTouches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?p.changedTouches[0].pageY-p.changedTouches[0].target.offsetTop:t.offsetY},time:Date.now(),target:t.target},o.position.y>endEvnt.position.y&&o.position.y-endEvnt.position.y>l&&(a="swipeup"),o.position.x<endEvnt.position.x&&endEvnt.position.x-o.position.x>u&&(a="swiperight"),o.position.y<endEvnt.position.y&&endEvnt.position.y-o.position.y>l&&(a="swipedown"),o.position.x>endEvnt.position.x&&o.position.x-endEvnt.position.x>u&&(a="swipeleft");var g=Math.abs(o.position.x-endEvnt.position.x),d=Math.abs(o.position.y-endEvnt.position.y),f={startEvnt:o,endEvnt:endEvnt,direction:a.replace("swipe",""),xAmount:g,yAmount:d,duration:endEvnt.time-o.time};c.trigger("swipeend",f)}r=!1,h=!1}var o,s=this,c=e(s),r=!1,h=!1,u={x:0,y:0},l={x:0,y:0};c.on(i.startevent,t),c.on(i.moveevent,a),c.on(i.endevent,n)},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.moveevent,e(this).data.callee2).off(i.endevent,e(this).data.callee3)}},e.event.special.scrollstart={setup:function(){function t(e,t){n=t,a(s,n?"scrollstart":"scrollend",e)}var n,o,s=this,c=e(s);c.on(i.scrollevent,function(e){c.data("callee",arguments.callee),n||t(e,!0),clearTimeout(o),o=setTimeout(function(){t(e,!1)},50)})},remove:function(){e(this).off(i.scrollevent,e(this).data.callee)}};var s,c,r,h,u,l=e(window),p={0:!0,180:!0};if(i.orientation_support){var g=window.innerWidth||l.width(),d=window.innerHeight||l.height(),f=50;h=g>d&&g-d>f,u=p[window.orientation],(h&&u||!h&&!u)&&(p={"-90":!0,90:!0})}e.event.special.orientationchange=s={setup:function(){return i.orientation_support?!1:(r=c(),l.on("throttledresize",t),!0)},teardown:function(){return i.orientation_support?!1:(l.off("throttledresize",t),!0)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=c(),t.apply(this,arguments)}}},e.event.special.orientationchange.orientation=c=function(){var e=!0,t=document.documentElement;return e=i.orientation_support?p[window.orientation]:t&&t.clientWidth/t.clientHeight<1.1,e?"portrait":"landscape"},e.event.special.throttledresize={setup:function(){e(this).on("resize",m)},teardown:function(){e(this).off("resize",m)}};var v,w,_,T=250,m=function(){w=Date.now(),_=w-x,_>=T?(x=w,e(this).trigger("throttledresize")):(v&&window.clearTimeout(v),v=window.setTimeout(t,T-_))},x=0;e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap"},function(t,a){e.event.special[t]={setup:function(){e(this).on(a,e.noop)}}})}(jQuery);

//for Conflict mode
//$.noConflict(); 

var ZUI = {
	version: '1.4.6Dev20140722'
};

if (!Date.now) { Date.now = function() { return new Date().valueOf(); } }//ItIE8 bug

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
var whichAnimationEvent = function(trans){
    var t,
      el = document.createElement("fakeelement");
	
	  var transitions = trans?
	  {'transition':'transitionend','OTransition':'oTransitionEnd','MozTransition':'transitionend','WebkitTransition':'webkitTransitionEnd'}:
	  {"animation": "animationend","OAnimation": "oanimationend","MozAnimation": "mozAnimationEnd","webkitAnimation": "webkitAnimationEnd"};
	
	  for (t in transitions){
		if (el.style[t] !== undefined){
			
		  return transitions[t];
		}
	  }
}
$.support.aniEndEvt = whichAnimationEvent();

/*Canvas detect*/
$.support.canvas = function() {
   return !!document.createElement("canvas").getContext;
};

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
;(function($){
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
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
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
    // IE12 disguises itself as Chrome, but adds a new Edge token.
    if ( browser.rv || browser.edge ) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
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

$.hideAddressBar = function(el){
	if($.browser.android){
		if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
			bodyTag = document.getElementsByTagName('body')[0];
			bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';
		}
		setTimeout(function(){
			window.scrollTo(0, 1); 
		}, 100);

	}else{
		var n = navigator.userAgent;
		if(n.match(/UCBrowser/i)){
			//uc浏览器
			hideAddressBar_ios();
			return false;
		}
		var self = document.getElementsByTagName('body')[0];
		
		if (self.requestFullscreen) {
			self.requestFullscreen();
			
		} else if (self.mozRequestFullScreen) {
			self.mozRequestFullScreen();
			
		} else if (self.webkitRequestFullScreen) {
			self.webkitRequestFullScreen();
			
		}

	}
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
			
			$(img_obj).data('loaded', ('error'==e.type)?false:true);
			
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
//$.imgpreload = function(sources,settings){    
//    var loadedImages = 0;    
//    var numImages = 0;
//    for(var i in sources){
//    	numImages++;
//    }
//    var images = {}; 
//    for (var src in sources) {    
//        images[src] = new Image();
//        images[src].onload = function(){ 
//            if (++loadedImages >= numImages) {    
//                //callback(images); 
//				$.fireEvent(settings.all, [sources]);    
//            }    
//        };  
//        images[src].src = sources[src];    
//    }    
//}


// ################String扩展####################//
$.string = $.string || {};

/**
 * 对目标字符串进行html解码
 * 
 * @name $.string.decodeHTML
 * @function
 * @grammar $.string.decodeHTML(source)
 * @param {string}
 *            source 目标字符串
 * @shortcut decodeHTML
 * @meta standard
 * @see $.string.encodeHTML
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
 * @name $.string.encodeHTML
 * @function
 * @grammar $.string.encodeHTML(source)
 * @param {string}
 *            source 目标字符串
 * @remark 编码字符有5个：&<>"'
 * @shortcut encodeHTML
 * @meta standard
 * @see $.string.decodeHTML
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
 * @name $.string.toHalfWidth
 * @function
 * @grammar $.string.toHalfWidth(source)
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
 * @name $.string.escapeReg
 * @function
 * @grammar $.string.escapeReg(source)
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
 * @name $.array.contains
 * @function
 * @grammar $.array.contains(source, obj)
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
 * @name $.array.pick
 * @function
 * @grammar $.array.pick(source, iterator)
 * @param {Array}
 *            source 需要查找的数组
 * @param {Function}
 *            iterator 对每个数组元素进行查找的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function
 *            (item, index)，函数需要返回true或false
 * @see $.array.filter,$.array.indexOf
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
 * @name $.array.indexOf
 * @function
 * @grammar $.array.indexOf(source, match[, fromIndex])
 * @param {Array}
 *            source 需要查询的数组
 * @param {Any}
 *            match 查询项
 * @param {number}
 *            [fromIndex] 查询的起始位索引位置，如果为负数，则从source.length+fromIndex往后开始查找
 * @see $.array.find,$.array.lastIndexOf
 * 
 * @returns {number} 指定元素的索引位置，查询不到时返回-1
 */
$.array.indexOf = function(source, match, fromIndex) {
	return $.inArray(match,source,fromIndex);
};
/**
 * 从后往前，查询数组中指定元素的索引位置
 * 
 * @name $.array.lastIndexOf
 * @function
 * @grammar $.array.lastIndexOf(source, match)
 * @param {Array}
 *            source 需要查询的数组
 * @param {Any}
 *            match 查询项
 * @param {number}
 *            [fromIndex] 查询的起始位索引位置，如果为负数，则从source.length+fromIndex往前开始查找
 * @see $.array.indexOf
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
 * @name $.array.remove
 * @function
 * @grammar $.array.remove(source, match)
 * @param {Array}
 *            source 需要移除项的数组
 * @param {Any}
 *            match 要移除的项
 * @meta standard
 * @see $.array.removeAt
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
 * 过滤数组中的相同项。如果两个元素相同，会删除后一个元素。
 * 
 * @name $.array.unique
 * @function
 * @grammar $.array.unique(source[, compareFn])
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

$.array.insertAt = function(array, index) {
    var arrayToInsert = Array.prototype.splice.apply(arguments, [2]);
    return $.array.insertArrayAt(array, index, arrayToInsert);
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
$.array.every = function(source,fn,bind){
		for (var i = 0, l = source.length >>> 0; i < l; i++){
			if ((i in source) && !fn.call(bind, i, source[i], this)) return false;
		}
		return true;
};

//pluck 返回指定数组里面的某元素的新数组
$.array.pluck = function(source,key) { 
    return $.map(source, function(e) { 
		var arr;
		arr = e.nodeName ? e.getAttribute(key) : e[key];
		return arr; 
	}) 
}

// ###################################number操作相关函数###################################
$.number = $.number || {};
$.number.pad = function(source){
	return source>9?source:'0'+source;  
};
/**
 * 生成随机整数，范围是[min, max]
 * 
 * @name $.number.randomInt
 * @function
 * @grammar $.number.randomInt(min, max)
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


// ###################################date操作相关函数###################################
$.date = $.date || {};
/**
 * 对目标日期对象进行格式化
 * 
 * @name $.date.format
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
 * @name $.date.parse
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
 * @name $.url.getQueryValue
 * @function
 * @grammar $.url.getQueryValue('http://user:password@www.test.com:8383/the/path.html?query=value&page=12','page');
 * @param {string}
 *            url 目标URL
 * @param {string}
 *            key 要获取的参数名
 * @meta standard
 * @see $.url.jsonToQuery
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
 * @name $.url.queryToJson
 * @function
 * @grammar $.url.queryToJson(url)
 * @param {string}
 *            url 目标URL
 * @see $.url.jsonToQuery
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


/*!
 * $ MooTools-like class plugin for Zepto.
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
 
})(window.Zepto || window.jQuery, this);
//for Zepto
//$.fn.extend = function(obj) {
//    $.extend($.fn, obj);
//};


$.timer= {
        guid: 1,
        global: {},
        regex: /^([0-9]+)\s*(.*s)?$/,
        powers: {
            'ms': 1,
            'cs': 10,
            'ds': 100,
            's': 1000,
            'das': 10000,
            'hs': 100000,
            'ks': 1000000
        },
        timeParse: function(value) {
            if (value == undefined || value == null) return null;
            var result = this.regex.exec($.trim(value.toString()));
            if (result[2]) {
                var num = parseInt(result[1], 10);
                var mult = this.powers[result[2]] || 1;
                return num * mult;
            } else {
                return value;
            }
        },
        add: function(element, interval, label, fn, times, belay) {
            var counter = 0;
            if ($.isFunction(label)) {
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
            var handler = function() {
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
        remove: function(element, label, fn) {
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


$.fn.extend({
    everyTime: function(interval, label, fn, times, belay) {
        return this.each(function() {
            $.timer.add(this, interval, label, fn, times, belay);
        });
    },
    oneTime: function(interval, label, fn) {
        return this.each(function() {
            $.timer.add(this, interval, label, fn, 1);
        });
    },
    stopTime: function(label, fn) {
        return this.each(function() {
            $.timer.remove(this, label, fn);
        });
    }
});
//if ($.browser.msie) $(window).one("unload", function() {
//    var global = $.timer.global;
//    for (var label in global) {
//        var els = global[label],
//            i = els.length;
//        while (--i) $.timer.remove(els[i], label);
//    }
//});
// ################Element扩展####################//
	/*
	ASDUI.step
	date:2014.04.22
	*/		
$.fn.extend({
		touchwipe: function(settings) {
			 var config = {
					min_move_x: 20,
					min_move_y: 20,
					wipeLeft: function() { },
					wipeRight: function() { },
					wipeUp: function() { },
					wipeDown: function() { },
					preventDefaultEvents: true
			 };
			 
			 if (settings) $.extend(config, settings);
		 
			 this.each(function() {
				 var startX;
				 var startY;
				 var isMoving = false;
		
				 function cancelTouch() {
					 this.removeEventListener('touchmove', onTouchMove);
					 startX = null;
					 isMoving = false;
				 }	
				 
				 function onTouchMove(e) {
					 if(!e.touches){
							e.touches = e.originalEvent.touches;
					 }
					 if(config.preventDefaultEvents) {
						 e.preventDefault();
					 }
					 if(isMoving) {
						 var x = e.touches[0].pageX;
						 var y = e.touches[0].pageY;
						 var dx = startX - x;
						 var dy = startY - y;
						 if(Math.abs(dx) >= config.min_move_x) {
							cancelTouch();
							if(dx > 0) {
								config.wipeLeft();
							}
							else {
								config.wipeRight();
							}
						 }
						 else if(Math.abs(dy) >= config.min_move_y) {
								cancelTouch();
								if(dy > 0) {
									config.wipeDown();
								}
								else {
									config.wipeUp();
								}
							 }
					 }
				 }
				 
				 function onTouchStart(e){
					 if(!e.touches){
							e.touches = e.originalEvent.touches;
					 }
					 //if (e.touches.length == 1) {
						 startX = e.touches[0].pageX;
						 startY = e.touches[0].pageY;
						 isMoving = true;
						 this.addEventListener('touchmove', onTouchMove, false);
					 //}
				 }    	 
				 if ('ontouchstart' in document.documentElement) {
					 this.addEventListener('touchstart', onTouchStart, false);
				 }
			 });
		 
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

		cmPos: function(){
			var box = $(this);
			if($.support.aniEndEvt&&!$.browser.IE7&&!$.browser.qq){
				box.css({
					left: 0,top: 0,right: 0,bottom: 0,margin: 'auto'
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
			
			Atel.is(':visible') ? $(this).position({my: tipMy,at: tipAt,of: Atel}):$(this).css({left:x+'px',top:y+'px',position:'absolute'});
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
				$(this).on('click',function(){
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
				$(this).on('click',function(){
					
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
                var $select = $(this),
                    customSelectInnerSpan = $('<span />').addClass(getClass('Inner')),
                    customSelectSpan = $('<span />');
//				console.log($select.hasClass('hasCustomSelect'));
//				console.log($select.is(':visible'));
				if(!$select.hasClass('hasCustomSelect') && $select.is(':visible') && $select.is('select')){
					options.absolute ? $select.after(customSelectSpan.append(customSelectInnerSpan)): $select.before(customSelectSpan.append(customSelectInnerSpan));
					
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
							var selectBoxWidth = parseInt($select.outerWidth(), 10) -
									(parseInt(customSelectSpan.outerWidth(), 10) -
										parseInt(customSelectSpan.width(), 10));
							
							// Set to inline-block before calculating outerHeight
							customSelectSpan.css({
								display: 'inline-block',
								position: options.absolute ? 'static' : 'absolute'
							});
							
							var selectBoxHeight = customSelectSpan.outerHeight();
	
							if ($select.attr('disabled')) {
								customSelectSpan.addClass(getClass('Disabled'));
							} else {
								customSelectSpan.removeClass(getClass('Disabled'));
							}
	
							customSelectInnerSpan.css({
								width:   selectBoxWidth,
								display: 'inline-block'
							});
	
							$select.css({
								'-webkit-appearance': 'menulist-button',
								width:                customSelectSpan.outerWidth(),
								position:             options.absolute ? 'absolute' : 'static',
								zIndex:               options.absolute ? null:1,
								opacity:              0,
								height:               selectBoxHeight,
								fontSize:             customSelectSpan.css('font-size')
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

		//img preload element extend
		imgpreload : function(settings){
			$.imgpreload(this,settings);
			return this;
		}
//		,
//		loadBtn :function(){
//			$(this.da)$(this).wrap('<div class="btnLoad"/>');
//		}						
	});
	
	/*
	ASDUI.overlay
	*/
ZUI.Overlay = new $.Class({
	options : {
		color: '#000',
		opacity: 0.5,
		effect: 'ease',
		zIndex:1000,
		container:null,
		closeOnClick: true,
		duration:300,
		clickHide:false,
		monitor:false,//监听容器变化
		onOpen:$.noop,
		onHide:$.noop
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
						position: 'absolute',
						zIndex: this.spa?-1:this.options.zIndex,
						display: this.spa?'':'none',
						visibility:this.spa?'hidden':'visible',
						overflow: 'hidden',
						'-webkit-transition':'opacity '+this.options.duration+'ms '+this.options.effect,
						'transition':'opacity '+this.options.duration+'ms '+this.options.effect
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
				$.fireEvent(self.options.onOpen,[self.overlay])
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
		height: 180,
		Useoverlay: true,
		esc:false,
		aName:'zoomIn',
		//effect:'linear',
		duration: 200,

		onShowStart: function () {},
		onCloseStart: function () {},
		loadTxt:'正在请求数据...',
		errorTxt:'数据请求失败,请稍后再试.',

		properties: {
			mywidth: 400,
			myheight: 360,
			aName:'fadeInTop',
			//effect:'linear',
			duration: 200,
			boxtitle: '',
			textBoxBtnOk: '确 定',
			textBoxBtnCancel: '取 消',
			loadTxt:null,
			chiantrue: '',
			chianfalse: '',
			backinfo: '',
			password: false,
			auto: false,
			autoduration: 0,
			bar:null,
			onShow:$.noop
		}
	},

	initialize: function (options) {
		this.i = 0;
		this.options = $.extend({},this.options, options);
		this.SID = $.GUID();
		this.boxInfo = {};
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
		
		var BoxCd = '<div class="ASDBox-InBoxTop"><div id="'+titleId+'" class="boxtile"></div><a href="javascript:;" class="closebtn iconb-close" id="'+closeId+'"></a></div>';//Top
			BoxCd += '<div class="ASDBox-InBox" id="'+InBoxId+'"><div class="ASDBox-BoxContent" id="'+CondorId+'"><div id="'+InnerId+'"></div></div></div>';//Body
			BoxCd += '<div class="ASDBox-Buttons" id="'+BarId+'"></div>';
			BoxCd +='<div class="ASDloading" id="'+LoadId+'">'+this.options.loadTxt+'</div>';//Other
			
		if(this.options.Useoverlay)this.Overlay = new ZUI.Overlay({Oclass:'overlay',color: '#a1a1a1',duration: 300,zIndex:this.options.zIndex,opacity: 0.4});
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
			self.display(0,self.options.onCloseStart,[$(this)]);
		});
//		$(window).resize($.proxy(function(){
//			this.replaceBox();
//		},this));
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
		evt && $.fireEvent(evt,$.array.combine(target,[this.boxInfo.type,this.boxInfo.message,this.Content]));
	},
	showBox: function(opt){
		this.options.display = opt ? 1 : 0;
		this.Box.css({'zIndex':opt ? this.options.zIndex+2 : -1,'visibility':opt ? 'visible' : 'hidden','display':opt ? 'block':'none','opacity':opt ? 1:0});
		opt && this.replaceBox();
		if(!opt)this.Box.attr('class','ASD_Abox');
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
					this.BtnOk = $('<input/>', {
						'class': 'btn gr',
						type: 'button',
						val:  properties.textBoxBtnOk ? properties.textBoxBtnOk : this.options.properties.textBoxBtnOk
					}).appendTo(this.BtnBox);			
					this.Box.addClass('ASDBox-b');
					break;

				case 'prompt':
				case 'confirm':
				   
						this.BtnOk = $('<input/>', {
							'class': 'btn gr',
							type: 'button',
							val: properties.textBoxBtnOk ? properties.textBoxBtnOk : this.options.properties.textBoxBtnOk
						}).appendTo(this.BtnBox);
						this.BtnCancel = $('<input/>', {
							'class': 'btn ga',
							'type': 'button',
							val: properties.textBoxBtnCancel ? properties.textBoxBtnCancel : this.options.properties.textBoxBtnCancel
						}).appendTo(this.BtnBox);
					this.Box.addClass('ASDBox-b');
				   break;

				default:
				if($.isFunction(properties.bar)){
					this.BtnBox.append(properties.bar.call())
				 	this.Box.addClass(properties.barClass ? properties.barClass : 'ASDBox-b');	
				 }else{
					
				 	this.Box.addClass('ASDBox-bh');
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
	messageBox: function (type, message, properties, input, chiantrue, chianfalse) {
			if(this.options.display==1)return;
			this.boxInfo.type = type;
			this.boxInfo.message = message;
			var time = properties.duration || this.options.duration;

			this.boxtitle.text(properties.boxtitle);
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
					this.display(1,properties.onShow,[this.BtnOk]);
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
						this.display(0,properties.onCancle,[this.BtnOk,this.BtnCancel]);
					},this));
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
					this.display(1,properties.onShow,['#'+htmlId,this.Content]);
					
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
							this.loadbar(1,properties.loadTxt);
						},this),
						success: $.proxy(function(html, other){
							obj02.html(html);
							this.loadbar(0);
						},this),
						error: $.proxy(function(){
							obj02.remove();
							this.loadbar(0);
							this.myMessage('加载出了点问题T T',{mywidth:'400',myheight:'120',Mstyle:'Yerro',boxtitle:'Erro'});
						},this)
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
					obj03.on('click', $.proxy(function(){
						this.options.onReturn = false;
						
						this.Box.stopTime ('D');
						this.display(0);
						
					},this));
					this.display(1,properties.onShow,[obj03]);
					break;
				}
			case 'custom':	
			default:
				{
					this.display(1);
					$.fireEvent(properties.onShow,[this]);
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
	
	myhtml: function (message, properties) {
		this.messageBox('myhtml', message, properties);
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


/**
 * @name		$ Countdown Plugin
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
		 console.log(ckitem);
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
        Cwidth: '90%',
        Cheight: '400px',
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
		yearRange: 31,
		yearRangeLeft:0,
		yearStart: (new Date().getFullYear()) - 31,
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
        this.dpBox = this.options.static ? $('#'+this.options.static) : $('<div>', {'class': 'ASDBox-Dp'}).css({'z-index': this.options.CzIndex,'position': 'fixed','height':this.options.Cheight,'width': this.options.Cwidth,'display': 'block'})
		.appendTo('body')
		.on('click',function (e) {
				e.stopPropagation();
				return false;
		});
		this.Overlay = new ZUI.Overlay({Oclass:'overlay',color: '#a1a1a1',duration: 300,zIndex:this.options.zIndex,opacity: 0.4});
		var self = this;
		if(!this.options.static)
		$(document).on('click',function(){
			self.hideDp();
		});

		
		this.dpBox
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
			calDayRow = $('<tr>');
			for (i = 0; i < 7; i++){
				if(firstDay<self.options.dayStart && self.year == self.options.yearStart && self.month == self.options.monthStart|| firstDay>self.options.dayEnd && self.year == self.options.yearEnd && self.month == self.options.monthEnd){
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
		this.dpBox.css('height',this.calendar.innerHeight());
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
			this.Overlay && this.Overlay.open();
			this.dpBox.show().cmPos();
	},
    hideDp: function () {
		if(this.options.static)return false;
		this.calendar && this.calendar.remove();
        this.dpBox.hide();
	this.Overlay && this.Overlay.close();
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
			onShow:$.noop
		},
		initialize: function(container, options) {
			this.options = $.extend({},this.options, options);
			this.container = $(container);
			this.tabStack = [];
			this.countL = this.countR = 1;
			this.numL = this.numR = 0;
			this.sector = '.'+this.options.tabSelector;
			this.num = 0;
			var self = this;
			
			this.container.on('click',this.sector,function(){
				  self.show($(this).index());
			});
			
			this.sectors = this.container.find(this.sector);
			this.pans = this.container.find('.'+this.options.contentSelector);
			this.toTals = this.container.find(this.sector).length;
			if(this.toTals < 1) return false;//初始化当容器内子元素为空时不执行以下方法
			

		
			this.pans.hide();
			this.sectors.eq(0).addClass(this.options.activeClass);
			this.pans.eq(0).show();

		},
		show: function(index){
			
				var sects = this.sectors[index];
																
				var content = this.pans[index] || this.pans.first();
				
				//只有一个的异常情况
				this.sectors.removeClass(this.options.activeClass);
				this.pans.hide();
				try {
					
					$(sects).addClass(this.options.activeClass);
					$(content).show();
					
				}catch(e){
					alert('index erro!')
				}
				this.num = index;	
				$.fireEvent(this.options.onShow,[sects,content,index]);
		
			},
			
		getIndex: function(){
			return this.num;
		}
});
/*touchMove*/
ZUI.tMove = new $.Class({
		options: {
			moveIn: null,
			contentSelector: 'tab-panel',
			activeClass: 'selected',
			onShow:$.noop,
			duration:200,
			effect: 'ease'
		},
		initialize: function(container, options) {
			this.options = $.extend({},this.options, options);
			this.container = (typeof container == 'object') ? container : $('#'+container);
			this.moveIn = (typeof this.options.moveIn == 'object') ? this.options.moveIn : $('#'+this.options.moveIn);
			this.moveIn.css({
				'-webkit-transition':'all '+this.options.duration+'ms '+this.options.effect,
				'transition':'all '+this.options.duration+'ms '+this.options.effect
			});
			this.contWidth = this.container.innerWidth();
			this.moveWidth = this.moveIn.innerWidth();
			this.dis = this.moveWidth - this.contWidth;
			//console.log(this.contWidth);
			
			this.startPosX = this.startPosY = 0;
			this.left = null;
			var self = this;
			
			this.container.on({
				'tapstart':function(a,b){
					self.startPosX = b.offset.x;
					self.startPosY = b.offset.y;
					self.posX  = parseInt(self.moveIn.css("margin-left").replace("px", ""));
				},
				'tapmove':function(e,b){
					
					self.touchMove(e,b);
				},
				
				'tapend':function(a,b){
					self.endPosX = b.offset.x;
					self.touchEnd(b);
				}
			});
		},

		touchMove:function(e,b){

			this._curX = b.offset.x;
			this._curY = b.offset.y;
			if (Math.abs(this._curY - this.startPosY) < Math.abs(this._curX - this.startPosX)) {
				e.preventDefault();
			}
			

			var f = Math.abs(this._curX - this.startPosX);
			
			var v = (this._curX > this.startPosX) ? (this.posX + f) : (this.posX-f);
			this.moveIn.css("margin-left", v + "px");
			this.left = (this._curX > this.startPosX) ? false : true;

		},
		touchEnd: function(c){
			if(this.endPosX==this.startPosX)return;//只点击无偏移则跳出
			var d = parseInt(this.moveIn.css("margin-left").replace("px", "")),a = Math.abs(this._curX - this.startPosX);
			//console.log(this.startPosX);
				if (a > 0) {
					this.moveIn.css({
						"margin-left": (this.left ? d - a : d + a) + "px"
					})
				}

			var self = this;
			
			if (d > 0) {
				setTimeout(function() {
					self.moveIn.css({
						"margin-left": "0px"
					})
				}, this.options.duration)
			}
			
			
			if (Math.abs(d) > this.dis && this.left) {
				
				setTimeout(function() {
					self.moveIn.css({
						"margin-left": -(self.dis) + "px"
					});
					
				}, this.options.duration)
			}
			this._curX = 0;
			this.startPosX = 0			
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
		this.cache = [];
		this.container = this.options.container ? $('#'+this.options.container) : $('body');
		this.build(this.ps);
		this.container.on("scroll", $.proxy(this.loading,this));
		
	},
	build:function(ps){
		
		var self = this,lodNum=0,
		regAll = function(){
			
			$(ps).each(function(i,el){
				
				if(!$(el).hasClass('ZUISeed')){
					
					$(el).addClass('ZUISeed');
					var node = el.nodeName.toLowerCase(), url = $(el).attr(self.options.attr);
					var orginUrl = self.options.mouseAttr ? $(el).attr(self.options.mouseAttr) : null;
					var orgImg = orginUrl ? new Image() : null;
					//console.log(node);
					var data = {
						obj: $(el),
						tag: node,
						url: url,
						orginUrl:orginUrl,
						orgImg:orgImg
					};
					self.cache.push(data);
				}else{
					lodNum++;
				}
			});
		};
		$.when(regAll()).done(function() {
			if(lodNum<1)self.loading();
		});
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
									$.fireEvent(self.options.loaded,[o]);
								}
								orgImg.src = orginUrl;

							}else{
								self.callback(o.attr("src", url));
								$.fireEvent(self.options.loaded,[o]);
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
		msActiv:'onhover',
		mBody:'div',
		mouseoutDelay:500,
		hideAlways:true,
		makeSelect:false,
		receiver:null,
		sector:null,
		sectorClass:null,
		initialTxt:'显示全部',
		porps:function(){},	
		onInit: $.noop,
		onOpen: $.noop,
		onClose: $.noop,
		onSelect: $.noop
	},
	
	initialize: function(container,options){
		this.options = $.extend({},this.options, options);
		this.container = (typeof container=='string') ? $('#'+container) : container;

		this.menuShow = false;
		var events = this.events = {}, self = this;
		events['click'] = function(event){
			if(!$(this).find(self.options.mBody) || !$(this).siblings(self.options.mBody))return false;
		
			$(this).is('a') && event.preventDefault();
			event.stopPropagation();
			self.drop = $(this).find(self.options.mBody).eq(0) || $(this).siblings(self.options.mBody).eq(0);//drop在seclect内或与select并列


			self.showTip($(this),self.drop);
			
			if(self.options.makeSelect && !$(this).children().eq(0).data('IntalTxt')) $(this).children().eq(0).data('IntalTxt',$(this).children().eq(0).text());
		};
		this.options.hideAlways && $(document).on('click',function(){
			if(self.menuShow) self.hideAll();
			$.fireEvent(self.options.onClose,[self.container]);
		});			


		this.attach();
		if(this.options.display !== null) this.showIndex(this.options.display);
		$.fireEvent(this.options.onInit,[this.container]);
	},
	attach: function(){
		this.container.on(this.events,this.options.mselect);
		
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
		
	},
	secList: function(sec,el,a){
		var opt = isNaN(a) ? a : el.find(this.options.sector)[a];
		var Drlink = this.options.receiver ? $(sec).find(this.options.receiver).eq(0) : $(sec).children().eq(0);
		Drlink.html($(opt).text() === this.options.initialTxt ? Drlink.data('IntalTxt') :$(opt).text());
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

		el.show();
		this.menuShow = true;

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
			console.log(err)
		}
		
	}
});


ZUI.SL = new $.Class({
	options : {
		moveBox: null,
        slides: null,
        slideDuration: null,
        effectDuration: null,
		fadePosition: null,//'left','top','fade','flowX','flowY','carouselX',carouselY
		fadeDist:null,
		circle:true,
		limit:1,
		space:10,
		autoSlide: false,
		autoSize:true,
		navigationNums: true,
		navbox:null,
		nav:'a',
		navBuild:false,
		navOnClass:'active',
		preload:false,
		nextBtn:null,
		prevBtn:null,
		onInit:$.noop,
		onStart:$.noop,
		onFinish:$.noop,
		onNext:$.noop,
		onPrev:$.noop,
		onPreLoad:$.noop	
	}, // end defaults
	initialize: function(element,options) {
        this.options = $.extend({},this.options, options);
        this.container = (typeof element == 'object') ? element : $('#'+element);
		this.moveBox = $('#'+this.options.moveBox).css('position','relative');
		this.preOver = this.options.preload ? $('#'+this.options.preload) : null;
		this._startX = 0;
        this._startY = 0;
        this._moveX = 0;
        this._moveY = 0;
        this._moveDistance = 0;
        this._curX = 0;
        this._curY = 0;
        this._touchDistance = 50;
		this.solo = false;
		
		
		this.preOver ? this.preload():this.prepareSlides();

		
	},
	preload:function(){
		$.fireEvent(this.options.onPreLoad,[this.moveBox,this.preOver,this,this.container]);
	},
	prepareSlides: function (A) {
		this.destroy();
		this.currentKey = A ? A : 0;
		this.slides = this.container.find('.'+this.options.slides);	
		this.totalSlides = this.slides.length;
		
		if(this.totalSlides <= this.options.limit){this.solo = true;return;}
		
		this.options.autoSize && $(window).resize($.proxy(function(){
			this.calcuSize();
		},this));//resiez放这里因为firefox有个很稀烂的bug载入页面自动执行了window.resize!!!
		
		var self = this,rendCircle = function(){
			self.moveBox.prepend(self.slides.last().clone()).append(self.slides.first().clone())
		};
		this.options.circle ? $.when(rendCircle(),$.wait(200)).done(function() {
			self.calcuSize();
		}):
		this.calcuSize();
		
		

		var E = $(this.slides[this.currentKey]);


		this.container.on({
			'tapstart':function(a,b){
				self._startX = b.offset.x;
				self._startY = b.offset.y;
			},
			'tapmove':function(e,b){
				
				self.fnTouchmove(e,b);
			},
			'tapend':function(){
				self.fnTouchend();
			}
		});
		if(this.options.nextBtn){
			var nextBtn = $('#'+this.options.nextBtn);
			this.options.limit >= this.totalSlides ? nextBtn.hide(): nextBtn.show();
			nextBtn.on('click',$.proxy(function(){
				this.next();
			},this));
		}
		if(this.options.prevBtn){ 
			var prevBtn = $('#'+this.options.prevBtn);
			this.options.limit >= this.totalSlides ? prevBtn.hide() : prevBtn.show();
			
			prevBtn.on('click',$.proxy(function(){
				this.prev();
			},this));
		}		
		self.fnAutoSwipe();
		self.injectNavigation();
		$.fireEvent(this.options.onInit,[E]);
    },
	destroy: function(){
		this.container.off();
		$(window).off();
		this.options.nextBtn && $('#'+this.options.nextBtn).off();
		this.options.prevBtn && $('#'+this.options.prevBtn).off();
	},
	calcuSize: function(){
		switch(this.options.fadePosition){
			case 'left':
				this.depth = this.options.fadeDist ? this.options.fadeDist : this.container.width();
				
				if(this.options.circle){
					var newSlids = this.container.find('.'+this.options.slides); 
					this.moveBox.css('width',this.depth*newSlids.length);
					newSlids.css('width',this.depth).first().css('marginLeft',this.solo?0:-this.depth);
				}else{ 
					this.moveBox.css('width',this.depth*this.totalSlides);
					this.slides.css('width',this.depth);
				}
			break;
			case 'top':
				this.depth = this.options.fadeDist ? this.options.fadeDist : this.container.height();
				if(this.options.circle){
					var newSlids = this.container.find('.'+this.options.slides); 
					this.moveBox.css('height',this.depth*newSlids.length);
					newSlids.css('height',this.depth).first().css('marginTop',this.solo?0:-this.depth);
				}else{ 
					this.moveBox.css('height',his.depth*this.totalSlides);
					this.slides.css('height',this.depth);
				}
			break;
			default:
			break;	
		}		
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
			if(B==0)n.addClass(self.options.navOnClass);
			self.options.navigationNums && n.html(B + 1);
			n.on('click',function(D){
				D.preventDefault();
				self.currentKey = B;
				self.fnMove();
			});
		});

    },

    // touchmove
    fnTouchmove: function (e,b){
		
	
		this.options.autoSlide && this.container.stopTime('SL');

		this._curX = b.offset.x;
		this._curY = b.offset.y;
		this._moveX = this._curX - this._startX;
		this._moveY = this._curY - this._startY;
		this.fnTransition(this.moveBox,0);
		if(this.options.fadePosition=='left'){

			if (Math.abs(this._moveX) > Math.abs(this._moveY)) {

				e.preventDefault()
			
			
			
				if(!this.options.circle){
					if(this.currentKey == 0 && this._moveX > 0){
						this._moveX = 0;
						return this.fnAutoSwipe();
					}else if((this.currentKey + 1) >= this.totalSlides && this._moveX < 0){
						this._moveX = 0;
						return this.fnAutoSwipe();
					}
				}
				
				this.fnTranslate(this.moveBox,-(this.depth * (parseInt(this.currentKey)) - this._moveX));
			
			}
		}else{
			if (Math.abs(this._moveY) > Math.abs(this._moveX)) {
				e.preventDefault()
			

				if(!this.options.circle){
					if(this._index == 0 && this._moveY > 0){
						this._moveY = 0;
						return this.fnAutoSwipe();
					}else if((this.currentKey + 1) >= this.totalSlides && this._moveY < 0){
						this._moveY = 0;
						return this.fnAutoSwipe();
					}
				}
				this.fnTranslate(this.moveBox,-(this.depth * (parseInt(this.currentKey)) - this._moveY));
			}
		}
     },
     // touchend
     fnTouchend: function (){
		if(this.options.fadePosition=='left'){
			this._moveDistance = this._moveX;
		}else{
			this._moveDistance = this._moveY;
		}
		// 距离小
		if(Math.abs(this._moveDistance) <= this._touchDistance){
			this.fnScroll(.2);
		// 距离大
		}else{
			// 手指触摸上一屏滚动
			if(this._moveDistance > this._touchDistance){
				this.prev();
				this.fnAutoSwipe();
			// 手指触摸下一屏滚动
			}else if(this._moveDistance < -this._touchDistance){
				this.next();
				this.fnAutoSwipe();
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
    fnTranslate: function (dom,result){
		if(this.options.fadePosition=='left'){
			dom.css({
				'-webkit-transform':'translateX('+result+'px)',
				'transform':'translateX('+result+'px)'
				
			});
		}else{
			dom.css({
				'-webkit-transform':'translateY('+result+'px)',
				'transform':'translateY('+result+'px)'
			});
		}
	},
	fnAutoSwipe: function(){
		this.options.autoSlide && this.container.everyTime(this.options.slideDuration+'ms','SL',$.proxy(function(){
			this.next();
		},this));	
    },
	next: function(){
		this.currentKey++;
		$.fireEvent(this.options.onNext,[this.currentKey,this.totalSlides,this.moveBox]);
		this.fnMove();
    },
	prev: function(){
		this.currentKey--;
		$.fireEvent(this.options.onPrev,[this.currentKey,this.totalSlides,this.moveBox]);
		this.fnMove();
	},
	fnMove: function(){
		if(this.options.circle){
			if(this.currentKey >= this.totalSlides){
				this.fnScroll(.2);
				this.currentKey = 0;

				this.moveBox.oneTime('200ms',$.proxy(function(){
					this.fnScroll(0);
				},this));
			}else if(this.currentKey < 0){
				this.fnScroll(.2);
				this.currentKey = this.totalSlides-1;
				this.moveBox.oneTime('200ms',$.proxy(function(){
					this.fnScroll(0);
				},this));
			}else{
				this.fnScroll(.2);
			}
		}else{
			if(this.currentKey >= this.totalSlides){
				this.currentKey = 0;
			}else if(this.currentKey < 0){
				this.currentKey = this.totalSlides-1;
			}
			this.fnScroll(.2);
		}
		if(this.options.navbox){
			$(this.navLinks).removeClass(this.options.navOnClass);
			$(this.navLinks[this.currentKey]).addClass(this.options.navOnClass);
			
		}
	},
	fnScroll: function (num){
		this.fnTransition(this.moveBox,num);
		this.fnTranslate(this.moveBox,-this.currentKey*this.depth);
		
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
			var sat = $.array.every(['x', 'y'],function(index,axis){return (cur_state[axis] == targetElement.last_state[axis])});
			if (!sat){
			
				if (!targetElement.last_state['started']) targetElement.last_state['started'] = currentTime;
				if ((currentTime - targetElement.last_state['started']) >= this.options.delay){
					targetElement.last_state = cur_state;
					var sat2 = $.array.every(['x', 'y'],function(index,axis){return( cur_state[axis] == 'on')});
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
			//styleNeutral: {"background-color": "#fff", "border-color": "#ccc"},//normal style
			//styleInvalid: {"background-color": "#FFE0DB", "border-color": "#f90"},//focus style
			styleInvalid:"err",
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
			keybord:false,
			locating:false,
			onValid: $.noop,
			onSubmit: $.noop,
			onDel: $.noop
		},
	initialize: function(form,options) {
		this.options = $.extend({},this.options, options);
		
		this.form = $('#'+form);
		
		this.validations = [];
		var self = this;
		this.form.find(this.options.ruleTag).each(function(i,el){
			self.options.valiHide ? self.reg($(el)) : $(el).is(':visible') && self.reg($(el));
			
		});//遍历表单
		

		
		this.options.infoHide && this.form.on('click',this.options.ruleTag,function(){
			$(this).data("pos") && $(this).fadeOut();
		});
		if(this.options.autoSbmit){
			this.form.on({
				"submit": function(){
					return self._onSubmit();
				},
				"reset": function(){
					self._onReset();
				}
			});//给form添加提交、重置事件
			
		}else{
			this.options.submitBtn && $(this.options.submitBtn).on('click',function(){
				self._onSubmit();
			});
			this.options.restBtn && $(this.options.restBtn).on('click',function(){
				self._onReset();
			});
		}
		this.options.keybord && this.form.on('keypress',function(e){
			if(e.which==13) return self._onSubmit();
		});
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
			//field && field.css(satus?this.options.styleNeutral:this.options.styleInvalid);

			field && field[(satus ? 'remove' : 'add')+'Class'](this.options.styleInvalid);
			
			
			
			owner.attr('class',satus ? this.options.tagClass+" "+this.options.passClass : this.options.tagClass+" "+this.options.erroClass);
			var msg = owner.data("warn") ? owner.data("warn"): "验证失败.",mpass=owner.data("pass") ? owner.data("pass"): "验证通过.",passHide = owner.data("passhide") ? true : false,valiHide = owner.data("valihide") ? true : false;
			owner.html(satus ? mpass : msg).css('display',passHide && satus || valiHide && !satus ? 'none': 'inline-block');
		}
	},

	_msgRemove: function(options,owner,isReset,field) {
		var pos = owner.data("pos");
		isReset = isReset || false;
		//field && field.css(this.options.styleNeutral);
		field && field.removeClass(this.options.styleInvalid);
		owner.html(owner.data("normal")).removeClass().addClass(this.options.tagClass);
		
	},
	_onSubmit: function() {
		var isValid = false,erro = 0,self=this,
		
		valiAll = function(){
			
			$.each(self.validations,function(i,array) {

				isValid = self._isChildType(array[0][0]) ? self._validateChild(array[0], array[1],array[2]) : self._validate(array[0], array[1],array[2]);
				
				array[2].hasClass(self.options.erroClass) && erro++;
			
			});
			
		};
		
		$.when(valiAll()).done(function() {
			if(erro > 0 || !self.options.autoSbmit)isValid = false;
			if(self.options.locating && erro > 0)self.form.find('.'+self.options.styleInvalid+':visible').eq(0).focus();
			
			$.fireEvent(self.options.onSubmit,[self.form,erro]);//提交表单时触发回调，指向form和全体验证结果。

		});
		
		return isValid;
	},
	_onReset: function() {
		$.each(this.validations,$.proxy(function(i,array) {
			if(array[0].length && array[0].tagName !="SELECT"){
				//array[0].css(this.options.styleNeutral);
				array[0].removeClass(this.options.styleInvalid);
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

/*History manager*/
ZUI.History = new $.Class({
	options : {

	}, // end defaults
	initialize: function(options) {
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




(function($) {
/**
 *
 * 图片上传前预览
 * 
 */
 $.fn.uploadPreview = function(opts){
	 if (this.length < 1){
		 return this;
	 }
	
	var $this = $(this);
	var msie = $.fn.uploadPreview.msie;// IE版本

	opts = $.extend({
			container: '#preView',
			css:{},		 //设置按钮的样式map类型
			text:'浏览图片', //按钮上的文字
			width: '100%', //图片宽度,如果width和height只设置其中一个,
						 //则没有设置的属性按等比缩放,都为null则显示原始图像大小
						 //可以设置百分比(基于容器的大小按比例进行缩放)
			height: '100%',//图片高度, 数字或string类型
			imgType: ["gif", "jpeg", "jpg", "bmp", "png"]//支持的图片格式
		}, opts || {});

	

	if(msie) { //IE 浏览器
		if(msie == 6) { //IE6
			//<change>
			$.fn.uploadPreview.loopInput($this, opts, function (input) {
				$(input).change({opts:opts}, function() {
					if(!$.fn.uploadPreview.checkFileType(input.value, opts)) {
						input.value = '';
						return false;
					}

					$.fn.uploadPreview.getImage(opts).attr('src', 'file:///' + input.value);
				});
				
			});
			
			//</change>
			return $this;
		}
		
		// 大于IE6
		//<change>
		$.fn.uploadPreview.loopInput($this, opts, function (input) {
			$(input).change({opts:opts}, function() {
				if(!$.fn.uploadPreview.checkFileType(input.value, opts)) {
					input.value = '';
					return false;
				}
				
				var innerDiv = $('<div/>');
				var container = $(opts.container);
				container.empty().prepend(innerDiv);

				input.select();
				input.blur();
				var imgSrc = document.selection.createRange().text;

				try {
						innerDiv.css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)');
						innerDiv[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
						
						innerDiv.css($.fn.uploadPreview.getImageWH($(opts.container), opts.width, opts.height, imgSrc));
					} catch (e) {
						//alert("您上传的图片格式不正确，请重新选择!");
						return false;
					}
					
					$('.upload-pre-view-image', container).hide();
					document.selection.empty();
			});

		});
		
		//</change>

		return $this;
	}

	//非IE浏览器
	//<change>
	$.fn.uploadPreview.loopInput($this, opts, function (input) {
		$(input).change({opts:opts}, function (){
			if(!$.fn.uploadPreview.checkFileType(input.value, opts)) {
				input.value = '';
				return false;
			}

			$.fn.uploadPreview.getImage(opts).attr('src', URL.createObjectURL(input.files[0]));
		});
	});
	
	//</change>
	return $this;
 };

//检测IE版本,不是每次获取,而是在初始化时只执行一次
 $.fn.uploadPreview.msie = (function() {
		var undef,
		v = 3,
		div = document.createElement('div'),
		all = div.getElementsByTagName('i');
		while ( div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
		return v > 4 ? v : undef;
})();

//检测文件类型
$.fn.uploadPreview.checkFileType = function(value, opts){
	if(value) {
		 if (!RegExp('\.(' + opts.imgType.join('|') + ')$', 'i').test(value)) {
			//alert('图片类型必须是' + opts.imgType.join(', ') + '中的一种');
			return false;
		}
		return true;
	}

	return false;
};

//获取图片对象
$.fn.uploadPreview.getImage = function(opts){
	var img = $('.upload-pre-view-image', opts.container); //获取图片
	if(img.length > 0) {
		return img;
	}

	var wh = {};
	var container = $(opts.container);

	if(opts.width) {
		if(isNaN(opts.width)) {
			opts.width = $.trim(opts.width);
			if(opts.width.lastIndexOf('%') != -1) {
				wh.width = ((container.width() * (opts.width.split('%')[0]-0))/100) + 'px';
			} else {
				wh.width = opts.width;
			}
		} else {
			wh.width = opts.width + 'px';
		}
	}

	if(opts.height) {
		if(isNaN(opts.height - 0)) {
			opts.height = $.trim(opts.height);
			if(opts.height.lastIndexOf('%') != -1) {
				wh.height = ((container.height() * (opts.height.split('%')[0]-0))/100) + 'px';
			} else {
				wh.height = opts.height;
			}
		} else {
			wh.height = opts.height + 'px';
		}
	}

	img = $('<img />');
	img.addClass('upload-pre-view-image');
	img.css(wh);//设置高宽

	$(opts.container).empty().prepend(img);
	img = $('.upload-pre-view-image', opts.container); //获取图片
	return img;
};

//获取图片需要缩放的高和宽
$.fn.uploadPreview.getImageWH = function (container, width, height, imgSrc){
	var wh = {}; //存储图片需要缩放的宽和高

	if(width) { //如果width有值

		if(isNaN(width - 0)) {
			width = $.trim(width);
			if(width.lastIndexOf('%') != -1) {
				wh.width = ((container.width() * (width.split('%')[0]-0))/100) + 'px';
			} else {
				wh.width = width;
			}
		} else {
			wh.width = width + 'px';
		}

		if(height) { //高度有值,则直接返回指定值,不需要缩放处理
			if(isNaN(height - 0)) {
				height = $.trim(height);
				if(height.lastIndexOf('%') != -1) {
					wh.height = ((container.height() * (height.split('%')[0]-0))/100) + 'px';
				} else {
					wh.height = height;
				}
			} else {
				wh.height = height + 'px';
			}
			return wh;
		} 

		//计算图片需要缩放的大小
		var img = new Image(); //创建一个对象
		img.src = imgSrc; //图片大小

		var w = wh.width.toLowerCase().split('px')[0] - 0;
		if(w != img.width) {
			wh.height = ((w/img.width) * img.height) + 'px';
		}
		return wh;
	}

	//height
	if(height) {

		if(isNaN(height - 0)) {
			wh.height = height;
		} else {
			wh.height = height + 'px';
		}

		//计算图片需要缩放的大小
		var img = new Image(); //创建一个对象
		img.src = imgSrc; //图片大小

		var h = wh.height.toLowerCase().split('px')[0] - 0;
		if(img.height != h) {
			wh.width = ((h/img.height) * img.width) + 'px';
		}

		return wh;
	}

	//如果宽度和高度都设置为null,则设置为图片的原始大小
	//计算图片需要缩放的大小
	var img = new Image(); //创建一个对象
	img.src = imgSrc; //图片大小
	if(img.width) wh.width = img.width;
	if(img.height) wh.height = img.height;

	return wh;
};

//循环input元素
$.fn.uploadPreview.loopInput = function (obj, opts, callback){
	
	var file;
	for (var i=0; i< obj.length; i++ ) {
		file = obj[i];
		
		if (file.tagName.toLowerCase() == 'input' && $(file).attr('type').toLowerCase() == 'file' ){
			$(file).wrap('<span class="upload-pre-view"></span>').before('<span class="twbtn-grey">' + opts.text + '</span>');
			$(file).parent().css(opts.css);
			callback(file);
		} 
	
	}
};


})(jQuery);

/*Socials*/
window.Socialite = (function(window, document, undefined)
{
    'use strict';

    var uid       = 0,
        instances = [ ],
        networks  = { },
        widgets   = { },
        rstate    = /^($|loaded|complete)/,
        euc       = window.encodeURIComponent;

    var socialite = {

        settings: { },

        trim: function(str)
        {
            return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
        },

        hasClass: function(el, cn)
        {
            return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
        },

        addClass: function(el, cn)
        {
            if (!socialite.hasClass(el, cn)) {
                el.className = (el.className === '') ? cn : el.className + ' ' + cn;
            }
        },

        removeClass: function(el, cn)
        {
            el.className = socialite.trim(' ' + el.className + ' '.replace(' ' + cn + ' ', ' '));
        },

        /**
         * Copy properties of one object to another
         */
        extendObject: function(to, from, overwrite)
        {
            for (var prop in from) {
			

					var hasProp = to[prop] !== undefined;
					if (hasProp && typeof from[prop] === 'object') {
						socialite.extendObject(to[prop], from[prop], overwrite);
					} else if (overwrite || !hasProp) {
						to[prop] = from[prop];
					}

            }
        },

        /**
         * Return elements with a specific class
         *
         * @param context - containing element to search within
         * @param cn      - class name to search for
         *
         */
        getElements: function(context, cn)
        {
            // copy to a new array to avoid a live NodeList
            var i   = 0,
                el  = [ ],
                gcn = !!context.getElementsByClassName,
                all = gcn ? context.getElementsByClassName(cn) : context.getElementsByTagName('*');
            for (; i < all.length; i++) {
                if (gcn || socialite.hasClass(all[i], cn)) {
                    el.push(all[i]);
                }
            }
            return el;
        },

        /**
         * Return data-* attributes of element as a query string (or object)
         *
         * @param el       - the element
         * @param noprefix - (optional) if true, remove "data-" from attribute names
         * @param nostr    - (optional) if true, return attributes in an object
         *
         */
        getDataAttributes: function(el, noprefix, nostr)
        {
            var i    = 0,
                str  = '',
                obj  = { },
                attr = el.attributes;
            for (; i < attr.length; i++) {
                var key = attr[i].name,
                    val = attr[i].value;
                if (val.length && key.indexOf('data-') === 0) {
                    if (noprefix) {
                        key = key.substring(5);
                    }
                    if (nostr) {
                        obj[key] = val;
                    } else {
                        str += euc(key) + '=' + euc(val) + '&';
                    }
                }
            }
            return nostr ? obj : str;
        },

        /**
         * Copy data-* attributes from one element to another
         *
         * @param from     - element to copy from
         * @param to       - element to copy to
         * @param noprefix - (optional) if true, remove "data-" from attribute names
         * @param nohyphen - (optional) if true, convert hyphens to underscores in the attribute names
         *
         */
        copyDataAttributes: function(from, to, noprefix, nohyphen)
        {
            // `nohyphen` was needed for Facebook's <fb:like> elements - remove as no longer used?
            var attr = socialite.getDataAttributes(from, noprefix, true);
            for (var i in attr) {
                to.setAttribute(nohyphen ? i.replace(/-/g, '_') : i, attr[i]);
            }
        },

        /**
         * Create iframe element
         *
         * @param src      - iframe URL (src attribute)
         * @param instance - (optional) socialite instance to activate on iframe load
         *
         */
        createIframe: function(src, instance)
        {
            // Socialite v2 has slashed the amount of manual iframe creation, we should aim to avoid this entirely
            var iframe = document.createElement('iframe');
            iframe.style.cssText = 'overflow: hidden; border: none;';
            socialite.extendObject(iframe, { src: src, allowtransparency: 'true', frameborder: '0', scrolling: 'no' }, true);
            if (instance) {
                iframe.onload = iframe.onreadystatechange = function ()
                {
                    if (rstate.test(iframe.readyState || '')) {
                        iframe.onload = iframe.onreadystatechange = null;
                        socialite.activateInstance(instance);
                    }
                };
            }
            return iframe;
        },

        /**
         * Returns true if network script has loaded
         */
        networkReady: function(name)
        {
            return networks[name] ? networks[name].loaded : undefined;
        },

        /**
         * Append network script to the document
         */
        appendNetwork: function(network)
        {
            // the activation process is getting a little confusing for some networks
            // it would appear a script load event does not mean its global object exists yet
            // therefore the first call to `activateAll` may have no effect whereas the second call does, e.g. via `window.twttr.ready`

            if (!network || network.appended) {
                return;
            }
            // `network.append` and `network.onload` can cancel progress
            if (typeof network.append === 'function' && network.append(network) === false) {
                network.appended = network.loaded = true;
                socialite.activateAll(network);
                return;
            }

            if (network.script) {
                network.el = document.createElement('script');
                socialite.extendObject(network.el, network.script, true);
                network.el.async = true;
                network.el.onload = network.el.onreadystatechange = function()
                {
                    if (rstate.test(network.el.readyState || '')) {
                        network.el.onload = network.el.onreadystatechange = null;
                        network.loaded = true;
                        if (typeof network.onload === 'function' && network.onload(network) === false) {
                            return;
                        }
                        socialite.activateAll(network);
                    }
                };
                document.body.appendChild(network.el);
            }
            network.appended = true;
        },

        /**
         * Remove network script from the document
         */
        removeNetwork: function(network)
        {
            if (!socialite.networkReady(network.name)) {
                return false;
            }
            if (network.el.parentNode) {
                network.el.parentNode.removeChild(network.el);
            }
            return !(network.appended = network.loaded = false);
        },

        /**
         * Remove and re-append network script to the document
         */
        reloadNetwork: function(name)
        {
            // This is a last-ditch effort for half-baked scripts
            var network = networks[name];
            if (network && socialite.removeNetwork(network)) {
                socialite.appendNetwork(network);
            }
        },

        /**
         * Create new Socialite instance
         *
         * @param el     - parent element that will hold the new instance
         * @param widget - widget the instance belongs to
         *
         */
        createInstance: function(el, widget)
        {
            var proceed  = true,
                instance = {
                    el      : el,
                    uid     : uid++,
                    widget  : widget
                };
            instances.push(instance);
            if (widget.process !== undefined) {
                proceed = (typeof widget.process === 'function') ? widget.process(instance) : false;
            }
            if (proceed) {
                socialite.processInstance(instance);
            }
            instance.el.setAttribute('data-socialite', instance.uid);
            instance.el.className = 'socialite ' + widget.name + ' socialite-instance';
            return instance;
        },

        /**
         * Process a socialite instance to an intermediate state prior to load
         */
        processInstance: function(instance)
        {
            var el = instance.el;
            instance.el = document.createElement('div');
            instance.el.className = el.className;
            socialite.copyDataAttributes(el, instance.el);
            // stop over-zealous scripts from activating all instances
            if (el.nodeName.toLowerCase() === 'a' && !el.getAttribute('data-default-href')) {
                instance.el.setAttribute('data-default-href', el.getAttribute('href'));
            }
            var parent = el.parentNode;
            parent.insertBefore(instance.el, el);
            parent.removeChild(el);
        },

        /**
         * Activate a socialite instance
         */
        activateInstance: function(instance)
        {
            if (instance && !instance.loaded) {
                instance.loaded = true;
                if (typeof instance.widget.activate === 'function') {
                    instance.widget.activate(instance);
                }
                socialite.addClass(instance.el, 'socialite-loaded');
                return instance.onload ? instance.onload(instance.el) : null;
            }
        },

        /**
         * Activate all socialite instances belonging to a network
         */
        activateAll: function(network)
        {
            if (typeof network === 'string') {
                network = networks[network];
            }
            for (var i = 0; i < instances.length; i++) {
                var instance = instances[i];
                if (instance.init && instance.widget.network === network) {
                    socialite.activateInstance(instance);
                }
            }
        },

        /**
         * Load socialite instances
         *
         * @param context - (optional) containing element to search within
         * @param el      - (optional) individual or an array of elements to load
         * @param w       - (optional) widget name
         * @param onload  - (optional) function to call after each socialite instance has loaded
         * @param process - (optional) process but don't load network (if true)
         *
         */
        load: function(context, el, w, onload, process)
        {
            // use document as context if unspecified
            context = (context && typeof context === 'object' && context.nodeType === 1) ? context : document;

            // if no elements search within the context and recurse
            if (!el || typeof el !== 'object') {
                socialite.load(context, socialite.getElements(context, 'socialite'), w, onload, process);
                return;
            }

            var i;

            // if array of elements load each one individually
            if (/Array/.test(Object.prototype.toString.call(el))) {
                for (i = 0; i < el.length; i++) {
                    socialite.load(context, el[i], w, onload, process);
                }
                return;
            }

            // nothing was found...
            if (el.nodeType !== 1) {
                return;
            }

            // if widget name not specified search within the element classes
            if (!w || !widgets[w]) {
                w = null;
                var classes = el.className.split(' ');
                for (i = 0; i < classes.length; i++) {
                    if (widgets[classes[i]]) {
                        w = classes[i];
                        break;
                    }
                }
                if (!w) {
                    return;
                }
            }

            // find or create the Socialite instance
            var instance,
                widget = widgets[w],
                sid    = parseInt(el.getAttribute('data-socialite'), 10);
            if (!isNaN(sid)) {
                for (i = 0; i < instances.length; i++) {
                    if (instances[i].uid === sid) {
                        instance = instances[i];
                        break;
                    }
                }
            } else {
                instance = socialite.createInstance(el, widget);
            }

            // return if just processing (or no instance found)
            if (process || !instance) {
                return;
            }

            // initialise the instance
            if (!instance.init) {
                instance.init = true;
                instance.onload = (typeof onload === 'function') ? onload : null;
                widget.init(instance);
            }

            // append the parent network (all instances will be activated onload)
            // or activate immediately if network has already loaded
            if (!widget.network.appended) {
                socialite.appendNetwork(widget.network);
            } else {
                if (socialite.networkReady(widget.network.name)) {
                    socialite.activateInstance(instance);
                }
            }
        },

        /**
         * Load a single element
         *
         * @param el     - an individual element
         * @param w      - (optional) widget for this socialite instance
         * @param onload - (optional) function to call once each instance has loaded
         *
         */
        activate: function(el, w, onload)
        {
            // skip the first few steps
            window.Socialite.load(null, el, w, onload);
        },

        /**
         * Process elements to an intermediate state prior to load
         *
         * @param context - containing element to search within
         * @param el      - (optional) individual or an array of elements to load
         * @param w       - (optional) widget name
         *
         */
        process: function(context, el, w)
        {
            // stop before widget initialises instance
            window.Socialite.load(context, el, w, null, true);
        },

        /**
         * Add a new social network
         *
         * @param name   - unique name for network
         * @param params - additional data and callbacks
         *
         */
        network: function(n, params)
        {
            networks[n] = {
                name     : n,
                el       : null,
                appended : false,
                loaded   : false,
                widgets  : { }
            };
            if (params) {
                socialite.extendObject(networks[n], params);
            }
        },

        /**
         * Add a new social widget
         *
         * @param name   - name of owner network
         * @param w      - unique name for widget
         * @param params - additional data and callbacks
         *
         */
        widget: function(n, w, params)
        {
            params.name = n + '-' + w;
            if (!networks[n] || widgets[params.name]) {
                return;
            }
            params.network = networks[n];
            networks[n].widgets[w] = widgets[params.name] = params;
        },

        /**
         * Change the default Socialite settings for each network
         */
        setup: function(params)
        {
			
            socialite.extendObject(socialite.settings, params, true);
        }

    };

    return socialite;

})(window, window.document);

/**
 * Socialite Extensions - Pick 'n' Mix!
 */
(function(window, document, Socialite, undefined){

    // default to the Queen's English
	
    Socialite.setup({
        facebook: {
            lang: 'en_GB',
            appId: null
        },
		pinterest: {
            lang: 'en'
        },
        twitter: {
            lang: 'en'
        },
        googleplus: {
            lang: 'en-GB'
        }
    });


    // Facebook
    // http://developers.facebook.com/docs/reference/plugins/like/
    // http://developers.facebook.com/docs/reference/javascript/FB.init/

    Socialite.network('facebook', {
        script: {
            src : '//connect.facebook.net/{{language}}/all.js',
            id  : 'facebook-jssdk'
        },
        append: function(network)
        {
            var fb       = document.createElement('div'),
                settings = Socialite.settings.facebook,
                events   = { onlike: 'edge.create', onunlike: 'edge.remove', onsend: 'message.send' };
            fb.id = 'fb-root';
            document.body.appendChild(fb);
            network.script.src = network.script.src.replace('{{language}}', settings.lang);
            window.fbAsyncInit = function() {
                window.FB.init({
                      appId: settings.appId,
                      xfbml: true
                });
                for (var e in events) {
                    if (typeof settings[e] === 'function') {
                        window.FB.Event.subscribe(events[e], settings[e]);
                    }
                }
            };
        }
    });

    var facebookInit = function(instance)
    {
        var el = document.createElement('div');
        el.className = instance.widget.fbtype;
        Socialite.copyDataAttributes(instance.el, el);
        instance.el.appendChild(el);
        if (window.FB && window.FB.XFBML) {
            window.FB.XFBML.parse(instance.el);
        }
    };

    Socialite.widget('facebook', 'like',   { init: facebookInit, fbtype: 'fb-like' });
    Socialite.widget('facebook', 'share',  { init: facebookInit, fbtype: 'fb-share-button' });


    // Twitter
    // https://dev.twitter.com/docs/tweet-button/
    // https://dev.twitter.com/docs/intents/events/
    // https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingSocial#twitter

    Socialite.network('twitter', {
        script: {
            src     : '//platform.twitter.com/widgets.js',
            id      : 'twitter-wjs',
            charset : 'utf-8'
        },
        append: function()
        {
            var notwttr  = (typeof window.twttr !== 'object'),
                settings = Socialite.settings.twitter,
                events   = ['click', 'tweet', 'retweet', 'favorite', 'follow'];
            if (notwttr) {
                window.twttr = (t = { _e: [], ready: function(f) { t._e.push(f); } });
            }
            window.twttr.ready(function(twttr)
            {
                for (var i = 0; i < events.length; i++) {
                    var e = events[i];
                    if (typeof settings['on' + e] === 'function') {
                        twttr.events.bind(e, settings['on' + e]);
                    }
                }
                Socialite.activateAll('twitter');
            });
            return notwttr;
        }
    });

    var twitterInit = function(instance)
    {
        var el = document.createElement('a');
        el.className = instance.widget.name + '-button';
        Socialite.copyDataAttributes(instance.el, el);
        el.setAttribute('href', instance.el.getAttribute('data-default-href'));
        el.setAttribute('data-lang', instance.el.getAttribute('data-lang') || Socialite.settings.twitter.lang);
        instance.el.appendChild(el);
    };

    var twitterActivate = function(instance)
    {
        if (window.twttr && typeof window.twttr.widgets === 'object' && typeof window.twttr.widgets.load === 'function') {
            window.twttr.widgets.load();
        }
    };

    Socialite.widget('twitter', 'share',   { init: twitterInit, activate: twitterActivate });
    Socialite.widget('twitter', 'follow',  { init: twitterInit, activate: twitterActivate });
    Socialite.widget('twitter', 'hashtag', { init: twitterInit, activate: twitterActivate });
    Socialite.widget('twitter', 'mention', { init: twitterInit, activate: twitterActivate });

    Socialite.widget('twitter', 'embed', {
        process: function(instance)
        {
            instance.innerEl = instance.el;
            if (!instance.innerEl.getAttribute('data-lang')) {
                instance.innerEl.setAttribute('data-lang', Socialite.settings.twitter.lang);
            }
            instance.el = document.createElement('div');
            instance.el.className = instance.innerEl.className;
            instance.innerEl.className = '';
            instance.innerEl.parentNode.insertBefore(instance.el, instance.innerEl);
            instance.el.appendChild(instance.innerEl);
        },
        init: function(instance)
        {
            instance.innerEl.className = 'twitter-tweet';
        },
        activate: twitterActivate
    });


    // Google+
    // https://developers.google.com/+/plugins/+1button/
    // Google does not support IE7
	
    Socialite.network('googleplus', {
        script: {
            src: '//apis.google.com/js/plusone.js'
        },
        append: function(network)
        {
            if (window.gapi) {
                return false;
            }
            window.___gcfg = {
                lang: Socialite.settings.googleplus.lang,
                parsetags: 'explicit'
            };
        }
    });

    var googleplusInit = function(instance)
    {
        var el = document.createElement('div');
        el.className = 'g-' + instance.widget.gtype;
        Socialite.copyDataAttributes(instance.el, el);
        instance.el.appendChild(el);
        instance.gplusEl = el;
    };

    var googleplusEvent = function(instance, callback) {
        return (typeof callback !== 'function') ? null : function(data) {
            callback(instance.el, data);
        };
    };

    var googleplusActivate = function(instance)
    {
        var type = instance.widget.gtype;
        if (window.gapi && window.gapi[type]) {
            var settings = Socialite.settings.googleplus,
                params   = Socialite.getDataAttributes(instance.el, true, true),
                events   = ['onstartinteraction', 'onendinteraction', 'callback'];
            for (var i = 0; i < events.length; i++) {
                params[events[i]] = googleplusEvent(instance, settings[events[i]]);
            }
            window.gapi[type].render(instance.gplusEl, params);
        }
    };

    Socialite.widget('googleplus', 'one',    { init: googleplusInit, activate: googleplusActivate, gtype: 'plusone' });
    Socialite.widget('googleplus', 'share',  { init: googleplusInit, activate: googleplusActivate, gtype: 'plus' });
    Socialite.widget('googleplus', 'badge',  { init: googleplusInit, activate: googleplusActivate, gtype: 'plus' });
    Socialite.widget('googleplus', 'follow', { init: googleplusInit, activate: googleplusActivate, gtype: 'follow' });
	
    // pinterest
    // http://developer.linkedin.com/plugins/share-button/
    Socialite.network('pinterest', {
        script: {
            src: '//assets.pinterest.com/js/pinit.js'
        }
    });

    Socialite.widget('pinterest', 'pinit', {
        process: function(instance)
        {
            // Pinterest activates all <a> elements with a href containing share URL
            // so we have to jump through hoops to protect each instance
            if (instance.el.nodeName.toLowerCase() !== 'a') {
                return true;
            }
            var id   = 'socialite-instance-' + instance.uid,
                href = instance.el.getAttribute('href');
            instance.el.id = id;
            instance.el.href = '#' + id;
            instance.el.setAttribute('data-default-href', href);
            instance.el.setAttribute('onclick', '(function(){window.open("' + href + '")})();');
        },
        init: function(instance)
        {
            Socialite.processInstance(instance);
            var el = document.createElement('a');
            el.className = 'pin-it-button';
            Socialite.copyDataAttributes(instance.el, el);
            el.setAttribute('href', instance.el.getAttribute('data-default-href'));
            el.setAttribute('count-layout', instance.el.getAttribute('data-count-layout') || 'horizontal');
            instance.el.appendChild(el);
            if (Socialite.networkReady('pinterest')) {
                Socialite.reloadNetwork('pinterest');
            }
        }
    });
    
})(window, window.document, window.Socialite);

/**
 * Execute any queued functions (don't enqueue before the document has loaded!)
 */
(function() {
    var s = window._socialite;
    if (/Array/.test(Object.prototype.toString.call(s))) {
        for (var i = 0, len = s.length; i < len; i++) {
            if (typeof s[i] === 'function') {
                s[i]();
            }
        }
    }
})();

//Fast Click

//Fast Click
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);


		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());