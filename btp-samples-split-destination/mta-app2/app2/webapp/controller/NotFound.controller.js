sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("btp.samples.split.destination.app2.controller.NotFound", {

		onInit: function () {
			this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
		},

		_onNotFoundDisplayed : function () {
			this.getModel("appView").setProperty("/layout", "OneColumn");
		}
	});
});