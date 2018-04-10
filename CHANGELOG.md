# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- `serverless.yml` file explicitly excludes the `credentials` directory.
With `serverless-webpack`, the directory is ignored anyway, so the setting does nothing.
But the setting _is_ needed if the sample code is used for a project _without_ `serverless-webpack`,
so it's there as a precaution.

### Changed
- `serverless-azure-functions` dependency changed to 0.5.0 in upstream repository, as that release contains the webpack fixes.

## [0.1.0] - 2018-01-10
### Added
- Basic file setup for the project
- Configuration for Babel, Webpack, eslint
- LICENSE, THIRD_PARTY_NOTICES, CHANGELOG, and README files

[Unreleased]: https://github.com/KosnIre/serverless-azure-webpack-sample/compare/master...develop
[0.1.0]: https://github.com/KosnIre/serverless-azure-webpack-sample/releases/tag/v0.1.0
