/*Respond for fliud 
 *Vaersion:v1.0
 *Author:YafullyZhao
 *Date:20160809
**/

ZUI.Range = new $.Class({
	Extends: [Events],
	options:{
		
		drag: true,// can the slider be dragged
		click: true,// can it be clicked to slide
		value: 0,// value for the slider on init
		min: 0,// min + max states (inclusive)
		max: 10,
		step: 1,// step interval
		animate: 250,// animation time (ms)
		easing: 'swing',// animation transition,
		width: 50,// width used if not set in css
		height: 20,// height if not set in css
		changeEvent: 'change',// the event to fire once we've finished changing (e.g. click or drag released)
		valueEvent: 'value',// the event to fire whilst we're moving between values (e.g. dragging through multiple bounds)
		input: false,// input element to set the value of and inherit values off		
		onChange:$.noop
	},

	initialize: function(el,options) {
		
		this.EL = typeof el =='string' ? $(el) : el;
		
		var dataOpts = {};
		for (var i in this.options) {
		var opt = this.EL.data('slider-' + i);
		if (typeof opt !== 'undefined') dataOpts[i] = opt;
		}
		
		// extend default opts with the users options
		this.options = $.extend(this.options, options || {}, dataOpts);
		
		this.input = this.options.input ? $(this.options.input) : false;
		
		if (this.EL.get(0).tagName === 'INPUT') {
			this.input = this.EL.hide();
			this.EL = $('<div>');
			this.EL.insertAfter(this.input);
		}
		if (this.input) {
			var inputAttrs = [ 'max', 'min', 'step', 'value' ];
			var inputOpts = {};
			for (var i = 0; i < inputAttrs.length; i++) {
			  var opt = this.input.attr(inputAttrs[i]);
			  if (typeof opt !== 'undefined') inputOpts[i] = opt;
			}
			this.options = $.extend(this.options, inputOpts);
		}
		this.value = this.options.value;
		this.step = this.options['step'];
		this.id = Math.random().toString(36).slice(1);
		this.createEl();
		this.bindEvents();
		this.setRange(this.options['min'], this.options['max'], true);
	},
	createEl : function() {
	 
	  var height = this.EL.height();
	  var width = this.EL.width();
	
	  // if the element doesnt have an explicit height/width in css, set them
	  if (!height) this.EL.height(height = this.options['height']);
	  if (!width) this.EL.width(width = this.options['width']);
	
	  this.h = height;
	  this.w = width;
	
	  var div = function(name) {
		return $('<div class="slider-' + name +'">');
	  };
	
	  this.els = {
		// wrapper inside toggle
		inner: div('inner'),
	
		// inside slide, this bit moves
		knob: div('knob'),
	
		// the track that the knob slides along
		track: div('track'),
	
		// the active part of the track, allowing for styling
		activeTrack: div('activeTrack')
	  };
	
	  this.els.activeKnob = this.els.activeTrack.add(this.els.knob);
	
	  // construct the toggle
	  this.els.track.html(this.els.activeTrack);
	  this.els.inner.append(this.els.knob, this.els.track);
	  this.EL.html(this.els.inner);
	},
	bindEvents : function() {
	  var self  = this;
	  if (this.options['click']) {
		this.EL.on('click', function(e) {
		  var off = self.EL.offset();
		  self.move((e.pageX - off.left) / self.w * 100);
		  self.bound();
		});
	  }
	
	  // bind up dragging stuff
	  this.options.drag && this.bindDrag();
	},
	bindDrag : function() {
	  var self = this;
	
	  this.els.knob.on('mousedown', function(e) {
		var off = self.EL.offset();
	
		// TODO is there any way we can set the dragging cursor everywhere here,
		// short of creating a fake overlay element that stays under the mouse?
	
		$(document).on('mousemove' + self.id, function(e) {
		  self.move((e.pageX - off.left) / self.w * 100, true);
		});
	
		$(document).on('mouseup' + self.id, function() {
		  $(document).unbind('mousemove' + self.id);
		  $(document).unbind('mouseup' + self.id);
		  self.bound();
		});
	  });
	
	  this.els.knob.on('touchstart', function(e) {
		var off = self.EL.offset();
	
		self.els.knob.on('touchmove' + self.id, function(e) {
		  var newX = e.originalEvent.touches[0].clientX;
		  self.move((newX - off.left) / self.w * 100, true);
		});
	
		self.els.knob.on('touchend' + self.id, function(e) {
		  self.els.knob.unbind('touchmove' + self.id);
		  self.els.knob.unbind('touchend' + self.id);
		  self.bound()
		});
	  });
	},
	move : function(across, noAnimate) {

	  if (across > 100) across = 100;
	  if (across < 0) across = 0;
	
	  // percentage across that we are
	  this.across = across;
	
	  var css = {
		'marginLeft': across * this.w / 100
	  };
	
	  if (!noAnimate) {
		this.els.activeKnob.stop().animate(css);
	  } else {
		this.els.activeKnob.stop().css(css);
	  }
	
	  if (this.getBound() !== this['value']) this.trigger(this.options['valueEvent'], this['value'] = this.getBound());
	},
	getBound : function() {
	  var bound = Math.round(this.across / (100 / (this.max - this.min)) / this.step) * this.step + this.min;
	  if (bound < this.min) bound = this.min;
	  if (bound > this.max) bound = this.max;
	  return bound;
	},
	bound : function() {
	  this.setValue(this.getBound());
	},
	setValue : function(lvl, noAnimate) {
	  this.move((lvl - this.min) * 100 / (this.max - this.min), noAnimate);
	
	  if (lvl !== this.changeState) this.trigger(this.options['changeEvent'], lvl);
	  this['value'] = this.changeState = lvl;
	  if (this.input) this.input.val(lvl);
	  $.fireEvent(this.options.onChange,[lvl,this]);
	},
	setRange : function(min, max, noAnimate,step) {
	  if (typeof min !== 'undefined') this.min = min;
	  if (typeof max !== 'undefined') this.max = max;
	  if (typeof step !== 'undefined') this.step = step;
	  if (this.input) {
		this.input.attr('min', this.min).attr('max', this.max);
	  }
	
	  this.setValue(this['value'], noAnimate);
	},
	getValue : function(){
		return this['value'];
	}
});