sap.ui.define(["sap/ui/core/mvc/Controller", "sap/base/Log"], function(
	Controller,
	Log
) {
	"use strict"
	return Controller.extend("yelcho.mydemo.nestcomproute.controller.Home", {
		onInit: function() {
			Log.info(this.getView().getControllerName(), "onInit")

			this.getOwnerComponent()
				.getRouter()
				.getRoute("home")
				.attachPatternMatched(this._onPatternMatched, this)

			this.getOwnerComponent()
				.getRouter()
				.attachRouteMatched(this._onRouteMatched, this)

			this.getOwnerComponent()
				.getRouter()
				.attachBypassed(this._onBypassed, this)
		},
		_onPatternMatched: function() {
			Log.info(this.getView().getControllerName(), "_onPatternMatched")
		},
		_onRouteMatched: function(oEvent) {
			Log.info(
				this.getView().getControllerName(),
				`_onRouteMatched Hash="${oEvent.getParameter("hash")}"`
			)
		},
		_onBypassed: function(oEvent) {
			Log.info(
				this.getView().getControllerName(),
				`_onBypassed Hash="${oEvent.getParameter("hash")}"`
			)
		}
	})
})
