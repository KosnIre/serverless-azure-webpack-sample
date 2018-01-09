#!/bin/bash

###
# This file makes it easy to set bash env vars that allow uploads to Azure under your account.
# Copy this template file and name it <your-account>.sh
# See https://serverless.com/framework/docs/providers/azure/guide/credentials/
#   for how to fill in the variables.
# Then just run `source credentials/<your-account>.sh` and you'll be all set to run sls deploy
#   and upload to Azure as many times as you want!
###

export azureSubId=''
export azureServicePrincipalTenantId=''
export azureServicePrincipalClientId=''
export azureServicePrincipalPassword=''

# Turn SLS debug logging on (optional)
export SLS_DEBUG=true

echo "Azure env vars set for <your-account>"
