/*global QUnit*/

sap.ui.define([
	"studentse2comsaptrainingux402listdetail/ux402_listdetail_2/controller/List.controller"
], function (Controller) {
	"use strict";

	QUnit.module("List Controller");

	QUnit.test("I should test the List controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
