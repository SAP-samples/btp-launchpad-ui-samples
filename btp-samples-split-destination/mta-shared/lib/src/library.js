/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library btp.samples.split.destination.lib.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name btp.samples.split.destination.lib
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "btp.samples.split.destination.lib",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"btp.samples.split.destination.lib.controls.Reuse"
			],
			elements: []
		});

		/* eslint-disable */
		return btp.samples.split.destination.lib;
		/* eslint-enable */

	}, /* bExport= */ false);