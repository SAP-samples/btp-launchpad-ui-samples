/*!
 * ${copyright}
 */
// Provides control btp.samples.split.xsuaa.lib.conrols.Reuse.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./ReuseRenderer"
], function (library, Control, ReuseRenderer) {
	"use strict";

	/**
	 * Constructor for a new Reuse control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author SAP SE
	 * @version 1.0.0
	 *
	 * @constructor
	 * @public
	 * @alias btp.samples.split.xsuaa.lib.controls.Reuse
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var Reuse = Control.extend("btp.samples.split.xsuaa.lib.controls.Reuse", {
		metadata: {
			library: "btp.samples.split.xsuaa.lib",
			properties: {
				/**
				 * text
				 */
				text: {
					type: "string",
					defaultValue: null
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks on the control.
				 */
				press: {}
			}
		},
		renderer: ReuseRenderer
	});
	return Reuse;
}, /* bExport= */ true);