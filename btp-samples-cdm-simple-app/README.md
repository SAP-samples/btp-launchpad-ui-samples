# BTPSamples for business solution in SAP Build Work Zone - Simple App
This repository contains the first sample project which is discussed in my blog ...

To deploy this sample to your space
- In the mta.yaml file replace the placeholder {YOURDOMAIN} with the subdomain of the target subaccount
- Login to cf cli
- npm install
- npm run build:mta
- npm run deploy
- Subscribe the Launchpad service to your sub account
- Go to Launchpad Site Manager ->  Channel Manager create a new content provider
- Provide the Design-Time and Runtime destinations that have been created during deployment
- The CDM content should now appear in Content Manager
- Go to the Site Settings of your Site and add the role to the site
- In the sub account trust configuration add the corresponding role collection to your user
