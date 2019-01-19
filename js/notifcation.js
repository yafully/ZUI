/*
**ZUI.Notification
**Author:YafullyZhao
**Date:20160816
**version:v1.0
**Need:JQ+ZUI.Core
**/
ZUI.Notification = new $.Class({
	Extends: [Events],
	options : {
		message:{
			title:'',
			main:'',
			icon:''
		}
	},
	initialize: function(options) {
		this.options = $.extend({},this.options, options);
		
		if (!window.Notification) {
			throw 'Not support!';
			return;
		}
		
	},
	popNotice: function(message){
		if (Notification.permission == "granted") {
			var notification = new Notification(message.title, {
				body: message.main,
				icon: message.icon
			}),self = this;
			
			notification.onclick = function() {
				self.trigger('clicked', [message]);
				notification.close();    
			};
		}
	},
	notice:function(message){
		if(!message) return;

		var self = this;
		if (Notification.permission == "granted") {
			self.popNotice(message);
		} else if (Notification.permission != "denied") {
			Notification.requestPermission(function (permission) {
				self.popNotice(message);
			});
		}
	}
});