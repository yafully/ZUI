
ZUI.ScrollPin = new $.Class({
	options : {
        class_name: "Lovevox_Pin",
        contain: !1,
        hard: !1,
        top_spacing: 0,
        bottom_spacing: 0,
        z_index: 9999,
        onPin: $.noop,
        onUnpin: $.noop,
        onScrollEnd: $.noop
	}, // end defaults
	initialize: function(els,options) {
		this.options = $.extend({},this.options, options);
		this.els = $(els);
		this.code = this.options.class_name + "_" + (Math.random() + 1).toString(36).substring(2, 7) + "_";
		this.dataName = this.options.class_name + "_Position";
		this.lastScroll = 0;
		this.derection = '';
		this.update();
		var self = this;
		$(window).on("resize", function() {
            self.update();
        });
	},
	update: function() {
		var self = this;
        this.els.each(function(i,el) {

            var elmt = $(el),
                elOffset = elmt.offset(),
                elPos = elmt.position(),
                elOutH = elmt.outerHeight(),//h
                elML = parseInt(elmt.css("marginLeft"), 10) || 0,//i
                elMT = parseInt(elmt.css("marginTop"), 10) || 0;//j
            if(!$(el).data(self.dataName)){
				$(el).data('top', elOffset.top).data('left', elOffset.left);
            }                
            if (elOffset.left -= elML, elOffset.top -= elMT, self.options.contain) {
            	var pat = $(self.options.contain) || elmt.parent(),
                patH = pat.height(),
                patOffset = pat.offset();
            }
            if (self.options.hard){ 
            	elmt.css({
	                position: "fixed",
	                left: elOffset.left,
	                top: elOffset.top,
	                zIndex: self.options.z_index
	            }).addClass(self.options.class_name);

            }else {
                elmt.css({
                	left: self.options.contain ? patOffset.left : elOffset.left,
                    zIndex: self.options.z_index
                }).removeClass(self.options.class_name);
                var n = '.'+self.code + i;
                $(window).unbind("scroll" + n).bind("scroll"+n, function() {
                    var st = $(window).scrollTop();

                    if (st > 0 && self.lastScroll <= st){
				        self.lastScroll = st;
				        self.derection = 'down';
				    }else{
				        self.lastScroll = st;
				        self.derection = 'up';
				    }
                    if(st >= elOffset.top - self.options.top_spacing && (!self.options.contain || st <= patOffset.top + patH - elOutH - self.options.bottom_spacing) && "fixed" != elmt.css("position")){
                    	
                    	elmt.css({
	                        position: "fixed",
	                        left: self.options.contain ? patOffset.left : elOffset.left,
	                        top: self.options.top_spacing
                    	}).addClass(self.options.class_name);
                    	$.fireEvent(self.options.onPin,[self.options.top_spacing,elmt]);
                    }else{

                    	if(st < elOffset.top - self.options.top_spacing && "absolute" != elmt.css("position")){
		                    elmt.css({
		                        position: "absolute",
		                        left: self.options.contain ? patOffset.left : elPos.left,
		                        top: self.options.contain ? patOffset.top : elPos.top
		                    }).removeClass(self.options.class_name);
                    		$.fireEvent(self.options.onUnpin,[self.options.contain ? patOffset.top : elPos.top,elmt]);
                    	}else{
                    		if(self.options.contain && st >= patOffset.top + patH - elOutH - self.options.bottom_spacing && "absolute" != elmt.css("position")){
	                    		elmt.css({
			                        position: "absolute",
			                        left: self.options.contain ? patOffset.left : elPos.left,
			                        top: patOffset.top + patH - elOutH - self.options.bottom_spacing
			                    }).removeClass(self.options.class_name);
                    			$.fireEvent(self.options.onUnpin,[patOffset.top + patH - elOutH - self.options.bottom_spacing,elmt]);
                    		}
                    	}

                    }
                });
                $(window).trigger("scroll" + n);

                $(window).on('scrollend', function() {
				    $.fireEvent(self.options.onScrollEnd,[self.derection,elmt]);
				});
            }
        })
    }
});	