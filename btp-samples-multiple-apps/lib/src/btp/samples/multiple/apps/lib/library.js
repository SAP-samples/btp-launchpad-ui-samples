/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library btp.samples.multiple.apps.lib.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name btp.samples.multiple.apps.lib
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "btp.samples.multiple.apps.lib",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"btp.samples.multiple.apps.lib.controls.Reuse"
			],
			elements: []
		});

		/* eslint-disable */
		return btp.samples.multiple.apps.lib;
		/* eslint-enable */

	}, /* bExport= */ false);