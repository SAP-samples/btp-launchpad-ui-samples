# SAP BTP Launchpad Service Samples
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/btp-launchpad-ui-samples)](https://api.reuse.software/info/github.com/SAP-samples/btp-launchpad-ui-samples)

This repository contains the sample projects which are discussed in blog [Designing UI5 Apps for SAP Launchpad Service – Part 1](https://blogs.sap.com/2022/01/14/designing-ui5-apps-for-sap-launchpad-service-part-1/).

# Requirements
- An [SAP BTP account](https://developers.sap.com/tutorials/hcp-create-trial-account.html) with a Cloud Foundry space
- A subscription of SAP Launchpad Service
- A Node.js installation
- [CF CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)
- MBT build tool requires "make", which is only available on Linux or in SAP Business Application Studio. When running on Windows you need to install "make" as described [here](https://github.com/SAP/cloud-mta-build-tool/blob/master/docs/docs/makefile.md)
- Multi-Target Application Cloud Foundry CLI Plugin (CF MTA Plugin) from [SAP Development Tools](https://tools.hana.ondemand.com/#cloud)

# Download and Installation
To deploy the consumed sample service (required for split destination scenario):
- Login to cf cli
- Go to the btp-samples-consumed-service directory
- npm install
- npm run build:mta
- npm run deploy
- cf create-service-broker btp-samples-consumed-service brokerUser business_service_broker_password https://btp-samples-consumed-service-broker.cfapps.<Your Landscape domain\>.hana.ondemand.com --space-scoped 

To deploy one of the samples to your space:
- Login to cf cli
- Go to a samples directory
- If the mta.yaml file contains a placeholder {YOURDOMAIN}, replace it with the subdomain of the subaccount where you deploy to
- npm install
- npm run build:mta
- npm run deploy
- Subscribe the Launchpad service to your sub account
- Go to Launchpad configuration -> Content Providers and sync the HTML5 Apps provider
- Configure the app for your site

# How to obtain support
In case you need any support, please create a GitHub issue or post a comment on the [blog post](https://blogs.sap.com/2022/01/14/designing-ui5-apps-for-sap-launchpad-service-part-1/).

# License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
