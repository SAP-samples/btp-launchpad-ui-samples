sap.ui.define([
	"sap/ui/core/UIComponent",
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("btp.samples.multiple.apps.lib.comp.reuse.Component", {

		metadata : {
			manifest : "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * In this method, the device models are set and the router is initialized.
		 * @public
		 * @override
		 */
		init : function () {
			// call the base component's init function and create the App view
			UIComponent.prototype.init.apply(this, arguments);

		},

		/**
		 * The component is destroyed by UI5 automatically.
		 * In this method, the ListSelector and ErrorHandler are destroyed.
		 * @public
		 * @override
		 */
		destroy : function () {
			// call the base component's destroy function
			UIComponent.prototype.destroy.apply(this, arguments);
		}
	});
});