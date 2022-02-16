/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library btp.samples.split.xsuaa.lib.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name btp.samples.split.xsuaa.lib
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "btp.samples.split.xsuaa.lib",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"btp.samples.split.xsuaa.lib.controls.Reuse"
			],
			elements: []
		});

		/* eslint-disable */
		return btp.samples.split.xsuaa.lib;
		/* eslint-enable */

	}, /* bExport= */ false);