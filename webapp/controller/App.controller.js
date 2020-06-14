sap.ui.define(["sap/ui/core/mvc/Controller", "sap/base/Log"], function (
	Controller,
	Log
) {
	"use strict"
	// TODO #1 test issue created from VS code
	// now working on this issue
	return Controller.extend("yelcho.mydemo.nestcomproute.controller.App", {
		onInit: function () {
			Log.info(this.getView().getControllerName(), "onInit")

			this.getOwnerComponent()
				.getRouter()
				.attachRouteMatched(this._onRouteMatched, this)
		},
		_onRouteMatched: function (oEvent) {
			Log.info(this.getView().getControllerName(), "_onRouteMatched")
		},
		onSideNavButtonPress: function () {
			Log.info(this.getView().getControllerName(), "onSideNavButtonPress")
			var toolPage = this.byId("toolPage")
			toolPage.setSideExpanded(!toolPage.getSideExpanded())
		},
		onUserNamePress: function () {
			Log.info(this.getView().getControllerName(), "onUserNamePress")
		},
		onItemSelect: function (oEvent) {
			const key = oEvent.getParameter("item").getKey()
			Log.info(this.getView().getControllerName(), `onItemSelect Key=${key}`)
			this.getOwnerComponent().getRouter().navTo(key)
		},
	})
})
