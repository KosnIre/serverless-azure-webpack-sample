# Serverless Azure Webpack Sample

## Summary
This is a small template project that demonstrates the combined usage of `serverless-azure-functions` with `serverless-webpack`.
[Serverless Azure Functions][sls-azure-github] is a plugin for the [Serverless Framework][sls-github]
that can help you quickly deploy code to [Microsoft Azure Functions][azure-functions].
[Serverless Webpack][sls-webpack-github] will help to bundle that code into a single file for deployment.
If you're new to Serverless Azure Functions, you should look at their [quick start guide][sls-azure-intro].

Webpack is important on the Microsoft Azure platform because Azure Functions can be slow to load many small files (such as the `node_modules` directory).
If you bundle everything with webpack, you can significantly reduce the cold start time.

## How to install
1. Download a copy of this repository
2. If you haven't already, install [Node.js](https://nodejs.org/en/) and [the Serverless Framework][sls-azure-install].
3. Enter the local repository directory and run `npm install` to install the project dependencies.
  - The project dependencies include `serverless-azure-functions` and `serverless-webpack`.
4. If you don't already have one, create a Microsoft Azure account as described in the ["Quick Start" section][sls-azure-quick-start] of the guide.
5. In the local `./credentials` directory, copy the `template.sh` file and fill in the values according to the Azure Credentials guide [found here][sls-azure-credentials].
  - This file will be used to export env vars that allow uploads to your Azure account.
  You will need to run `source credentials/<your-account>.sh` only when you open a new terminal tab.
  - If running Windows, the PowerShell equivalent can be found at the same link above.
6. Now you're all set to deploy.
  - Run `sls deploy` and Serverless will set up the Function App for you.
  - Run `sls invoke -f hello` to make sure it's working.
7. Hack away! Modify and expand the code to suit your needs.

## Architecture
### Folder Structure
The repository contains only one service, with a directory for each function that the service deploys.
The functions do not do much; they are just for demonstration.
There is also a "common" folder for code that can be used by more than one function.

Each function directory has its own `index.js` file, which exports a `handler()` function that is used as an entrypoint
(defined in `serverless.yml`).
By keeping the entrypoints in separate files, Serverless Webpack is able to bundle the code for each function independently, even if it is imported from "common".

This folder structure is relatively simple at the moment,
but it could easily be expanded to support multiple services in the same project.

### Packaging
[Babel](http://babeljs.io/) is used to compile next-generation JavaScript to more broadly compatible code.
[Webpack](https://webpack.js.org/) bundles the code imported from multiple files into a single deployment file.
The source-map is used to keep the line numbers for debugging.
Serverless then uploads the code (in a zip file) to the Azure servers and it is run from there.

### Logging
You can use `sls logs -f <function-name>` to stream the logs of the passed function when it is executed.
Anything logged with `context.log.info()` will show up there.

[azure-functions]: https://azure.microsoft.com/en-us/services/functions/
[sls-github]: https://github.com/serverless/serverless
[sls-webpack-github]: https://github.com/serverless-heaven/serverless-webpack
[sls-azure-github]: https://github.com/serverless/serverless-azure-functions
[sls-azure-pr]: https://github.com/serverless/serverless-azure-functions/pull/105
[sls-azure-intro]: https://serverless.com/framework/docs/providers/azure/guide/intro/
[sls-azure-quick-start]: https://serverless.com/framework/docs/providers/azure/guide/quick-start/
[sls-azure-install]: https://serverless.com/framework/docs/providers/azure/guide/installation/
[sls-azure-credentials]: https://serverless.com/framework/docs/providers/azure/guide/credentials/
