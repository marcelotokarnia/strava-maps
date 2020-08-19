#!/bin/bash
set -euv

rm -rf lib/
sh -c "NODE_ENV=production yarn build"
cp -r README.md package.json LICENSE.md lib/
sh -c "cd lib; npm publish"
