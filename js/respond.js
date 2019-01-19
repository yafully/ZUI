/*Respond for fliud 
 *Vaersion:v1.0
 *Author:YafullyZhao
 *Date:20160809
**/

ZUI.Respond = new $.Class({
	options:{
		variables: {
			key: '',
			is: '',
			sizes: {
				xs: {
					min: null,
					max: 767
				},
				sm: {
					min: 768,
					max: 991
				},
				md: {
					min: 992,
					max: 1199
				},
				lg: {
					min: 1200,
					max: null
				}
			},
			timer: 0,
			timeout: 250,
			viewport: {
				height: 0,
				width: 0
			},
			was: ''
		},
		switches: {
			debug: false,
			is: {},
			loaded: false,
			was: {}
		},
		functions: {
			on: {
				is: {},
				was: {}
			}
		}		
	},

	initialize: function(options) {
		this.options = $.extend({},this.options, options);
		this.cache = {};
		var Respond = this;

		this.cacheReInit();
		this.objectLength( this.options.switches.is ) === 0 && this.sizes();
		this.respond();
		this.cache.$window.on('resize orientationchange',this.timeoutRespond.bind(this));
		
		if (this.cache.$window.addEventListener !== undefined) {
			this.cache.$window.addEventListener("orientationchange", function() {
				Respond.respond();
				Respond.cache.$body.hide().show(0);
			}, false);
		}
		this.options.switches.loaded = true;
	},
	cacheReInit: function () {
		this.cache = $.extend( {}, this.cache,{ $window: $( window ), $body: $( 'body' ), document: document, window: window});
	},
	callOnFunction: function ( type, fn, fnOptions ) {
		return this.options.functions.on[ type ][ fn ] ( fnOptions || {} ) || false;
	},
	sizes: function () {
		for ( var size in this.options.variables.sizes ){
			this.options.variables.key = size;
			this.options.switches.is[ this.options.variables.key ] = false;
			this.options.switches.was[ this.options.variables.key ] = false;
		}
	},
	viewport: function () {
		var e = this.cache.window, a = 'inner';
		if (!(a+'Width' in this.cache.window )) {
			a = 'client';
			e = this.cache.document.documentElement || this.cache.document.body;
		}
		this.options.variables.viewport.height = e [ a + 'Height' ];
		this.options.variables.viewport.width = e [ a + 'Width' ];
	},
	respond: function () {
		this.viewport();
		for ( var size in this.options.variables.sizes ){
			this.options.variables.key = size;
			this.options.switches.is[ this.options.variables.key ] = ( this.options.variables.sizes[ this.options.variables.key ].min === null || this.options.variables.viewport.width >= this.options.variables.sizes[ this.options.variables.key ].min ) && ( this.options.variables.sizes[ this.options.variables.key ].max === null || this.options.variables.viewport.width <= this.options.variables.sizes[ this.options.variables.key ].max );
			if ( this.options.variables.is !== '' ) { this.options.variables.was = this.options.variables.is; }
			if ( this.options.switches.is[ this.options.variables.key ] ) {
				if ( size != this.options.variables.was && this.options.variables.was !== '' ) {
					this.cache.$body.removeClass(this.options.variables.was);
					this.callOnFunction( 'was', this.options.variables.was );
				}
				this.options.variables.is = size;
				if ( this.options.variables.is != this.options.variables.was ) {
					this.cache.$body.addClass(this.options.variables.is);
					this.callOnFunction( 'is', this.options.variables.is );
				}
			}
		}
	},
	timeoutRespond: function () {
		clearTimeout( this.options.variables.timer );
		return this.options.variables.timer = setTimeout(this.respond.bind(this),this.options.variables.timeout);
	},
	objectLength: function(obj) {
		var intLength = 0;
		if( typeof obj === "object" ) {
			for( var key in obj ) {
				if( ( Object.prototype.hasOwnProperty.call( obj, key ) ) || obj.hasOwnProperty( key ) ) {
					intLength++;
				}
			}
		}
		return intLength;
	}

});