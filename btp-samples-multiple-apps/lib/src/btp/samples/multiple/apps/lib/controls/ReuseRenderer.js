/*!
 * ${copyright}
 */

sap.ui.define([],

	function () {
		"use strict";

		/**
		 * Reuse renderer.
		 * @namespace
		 */
		var ReuseRenderer = {};

		/**
		 * Renders the HTML for the given control, using the provided
		 * {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm
		 *            the RenderManager that can be used for writing to
		 *            the Render-Output-Buffer
		 * @param {sap.ui.core.Control} oControl
		 *            the control to be rendered
		 */
		ReuseRenderer.render = function (oRm, oControl) {

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("sapRULTReuse");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write(sap.ui.getCore().getLibraryResourceBundle("btp.samples.multiple.apps.lib").getText("ANY_TEXT"));

			oRm.writeEscaped(oControl.getText());
			oRm.write("</div>");

		};

		return ReuseRenderer;

	}, /* bExport= */ true);