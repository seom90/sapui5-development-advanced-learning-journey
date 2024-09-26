/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"studentse2comsaptrainingux402listdetail/ux402_listdetail_2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
