/*=======MoreExtend=======*/
//图片上传预览
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



/*autocompelete*/
(function ($) {

  'use strict';

  var $window = $(window),
      $document = $(document),
      Completer = function (element, options) {
        this.$element = $(element);
        this.defaults = $.extend({}, Completer.defaults, this.$element.data(), $.isPlainObject(options) ? options : {});
        this.init();
      },

      toRegexp = function (s) {
        if (typeof s === 'string' && s !== '') {
          s = espace(s);

          return new RegExp(s + '+[^' + s + ']*$', 'i');
        }

        return null;
      },

      espace = function (s) {
        return s.replace(/([\.\$\^\{\[\(\|\)\*\+\?\\])/g, '\\$1');
      },

      toArray = function (s) {
        if (typeof s === 'string') {
          s = s.replace(/[\{\}\[\]"']+/g, '').split(/\s*,+\s*/);
        }

        s = $.map(s, function (n) {
          return typeof n !== 'string' ? n.toString() : n;
        });

        return s;
      };

  Completer.prototype = {
    constructor: Completer,

    init: function () {
      var defaults = this.defaults,
          data = toArray(defaults.source);

      if (data.length > 0) {
        this.data = data;
        this.regexp = toRegexp(defaults.separator);
        this.$completer = $(defaults.template);
        this.$completer.hide().appendTo(defaults.container ? $(defaults.container):'body');
        this.place();

        this.$element.attr('autocomplete', 'off').on({
          focus: $.proxy(this.enable, this),
          blur: $.proxy(this.disable, this)
        });

        if (this.$element.is(':focus')) {
          this.enable();
        }
      }
    },

    enable: function () {
      if (!this.active) {
        this.active = true;
        this.$element.on({
          keydown: $.proxy(this.keydown, this),
          keyup: $.proxy(this.keyup, this)
        });
        this.$completer.on({
          mousedown: $.proxy(this.mousedown, this),
          mouseover: $.proxy(this.mouseover, this)
        });
      }
    },

    disable: function () {
      if (this.active) {
        this.active = false;
        this.$element.off({
          keydown: this.keydown,
          keyup: this.keyup
        });
        this.$completer.off({
          mousedown: this.mousedown,
          mouseover: this.mouseover
        });
      }
    },

    attach: function (val) {
      var separator = this.defaults.separator,
          regexp = this.regexp,
          part = regexp ? val.match(regexp) : null,
          matched = [],
          all = [],
          that = this,
          reg,
          item;

      if (part) {
        part = part[0];
        val = val.replace(regexp, '');
        reg = new RegExp('^' +  espace(part), 'i');
      }

      $.each(this.data, function (i, n) {
        n = separator + n;
        item = that.template(val + n);

        if (reg && reg.test(n)) {
          matched.push(item);
        } else {
          all.push(item);
        }
      });

      matched = matched.length ? matched.sort() : all;

      if (this.defaults.position === 'top') {
        matched = matched.reverse();
      }

      this.fill(matched.join(''));
    },

    suggest: function (val) {
      var reg = new RegExp(espace(val), 'i'),
          that = this,
          matched = [];

      $.each(this.data, function (i, n) {
        if (reg.test(n)) {
          matched.push(n);
        }
      });

      matched.sort(function (a, b) {
        return a.indexOf(val) - b.indexOf(val);
      });

      $.each(matched, function (i, n) {
        matched[i] = that.template(n);
      });

      this.fill(matched.join(''));
    },

    template: function (text) {
      var tag = this.defaults.itemTag;

      return ('<' + tag + '>' + text + '</' + tag + '>');
    },

    fill: function (html) {
      var filter;

      this.$completer.empty();

      if (html) {
        filter = this.defaults.position === 'top' ? ':last' : ':first';
        this.$completer.html(html);
        this.$completer.children(filter);//.addClass(this.defaults.selectedClass);
        this.show();
      } else {
        this.hide();
      }
    },

    complete: function () {
      var defaults = this.defaults,
          val = defaults.filter(this.$element.val()).toString();

      if (val === '') {
        this.hide();
        return;
      }

      if (defaults.suggest) {
        this.suggest(val);
      } else {
        this.attach(val);
      }
    },

    keydown: function (e) {
//      if (e.keyCode === 13) {
//        e.stopPropagation();
//        e.preventDefault();
//      }
    },

    keyup: function (e) {
      var keyCode = e.keyCode;
      if (keyCode === 13 || keyCode === 38 || keyCode === 40) {
        this.toggle(keyCode);
      } else {
        this.complete();
      }
    },

    mouseover: function (e) {
      var defaults = this.defaults,
          selectedClass = defaults.selectedClass,
          $target = $(e.target);

      if ($target.is(defaults.itemTag)) {
        $target.addClass(selectedClass).siblings().removeClass(selectedClass);
      }
    },

    mousedown: function (e) {
      e.stopPropagation();
      e.preventDefault();
      this.setValue($(e.target).text());
    },

    setValue: function (val) {
      this.$element.val(val);
      this.defaults.complete();
      this.hide();
    },

    toggle: function (keyCode) {
      var selectedClass = this.defaults.selectedClass,
          $selected = this.$completer.find('.' + selectedClass);

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
          ($selected.length>0) && this.setValue($selected.text());
          break;

        // No default
      }

      if ($selected.length === 0) {
        $selected = this.$completer.children(keyCode === 40 ? ':first' : ':last');
      }

      $selected.addClass(selectedClass);
    },

    place: function () {
      var $element = this.$element,
          offset = $element.offset(),
          left = offset.left,
          top = offset.top,
          height = $element.outerHeight(),
          width = $element.outerWidth(),
          styles = {
            minWidth: width,
            zIndex: this.defaults.zIndex
          };

      switch (this.defaults.position) {
        case 'right':
          styles.left = left + width;
          styles.top = top;
          break;

        case 'left':
          styles.right = $window.innerWidth() - left;
          styles.top = top;
          break;

        case 'top':
          styles.left = left;
          styles.bottom = $window.innerHeight() - top;
          break;
		case 'bottom':
       
          styles.left = left;
          styles.top = top + height;
		  break;
		 default:
		  styles.left = this.defaults.pos.x;
          styles.top = this.defaults.pos.y; 
      }

      this.$completer.css(styles);
    },

    show: function () {
      this.$completer.show();
      $window.on('resize', $.proxy(this.place, this));
      $document.on('mousedown', $.proxy(this.hide, this));
    },

    hide: function () {
      this.$completer.hide();
      $window.off('resize', this.place);
      $document.off('mousedown', this.hide);
    },

    destroy: function () {
      this.hide();
      this.disable();

      this.$element.off({
        focus: this.enable,
        blur: this.disable
      });
    }
  };

  Completer.defaults = {
	container:null,
	pos:{x:0,y:30}, 
    itemTag: 'li',
    position: 'bottom', // or 'right'
    source: [],
    selectedClass: 'completer-selected',
    separator: '',
    suggest: false,
    template: '<ul class="completer-container"></ul>',
    zIndex: 20,

    complete: $.noop,

    filter: function (val) {
      return val;
    }
  };

  Completer.setDefaults = function (options) {
    $.extend(Completer.defaults, options);
  };

  // Register as jQuery plugin
  $.fn.completer = function (options) {
    var args = [].slice.call(arguments, 1),
        result;

    this.each(function () {
      var $this = $(this),
          data = $this.data('completer'),
          fn;

      if (!data) {
        $this.data('completer', (data = new Completer(this, options)));
      }

      if (typeof options === 'string' && $.isFunction((fn = data[options]))) {
        result = fn.apply(data, args);
      }
    });

    return (typeof result !== 'undefined' ? result : this);
  };

  $.fn.completer.Constructor = Completer;
  $.fn.completer.setDefaults = Completer.setDefaults;

  $(function () {
    $('[data-toggle="completer"],[completer]').completer();
  });

})( jQuery );