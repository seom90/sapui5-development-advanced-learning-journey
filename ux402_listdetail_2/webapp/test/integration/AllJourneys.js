sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "studentse2.com.sap.training.ux402.listdetail.ux402listdetail2.view.",
		autoWait: true
	});
});
