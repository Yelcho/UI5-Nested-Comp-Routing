sap.ui.define(
	["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
	function(UIComponent, JSONModel) {
		"use strict"
		return UIComponent.extend("yelcho.mydemo.nestcomproute.Component", {
			metadata: {
				manifest: "json"
			},
			init: function() {
				// call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments)

				// create the views based on the url/hash
				this.getRouter().initialize()
			}
		})
	}
)
