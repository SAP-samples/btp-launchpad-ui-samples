/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library btp.samples.split.mta.lib.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name btp.samples.split.mta.lib
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "btp.samples.split.mta.lib",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"btp.samples.split.mta.lib.controls.Reuse"
			],
			elements: []
		});

		/* eslint-disable */
		return btp.samples.split.mta.lib;
		/* eslint-enable */

	}, /* bExport= */ false);