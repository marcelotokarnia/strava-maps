#!/bin/bash

set -e

# Clean frontend/build/
rm -Rf frontend/build

# Install Frontend node_modules
yarn --cwd ./frontend --production=false

# Build Frontend
yarn --cwd ./frontend build 

./scripts/build-back.sh