#!/bin/bash

set -e

# Clean dist/
rm -Rf dist

# Compile TypeScript
yarn build:ts

mv dist/src/* dist/.
rm -Rf dist/frontend dist/src