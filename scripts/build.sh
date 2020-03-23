#!/bin/bash

set -e

# Clean dist/
rm -Rf dist

# Clean frontend/build/
rm -Rf frontend/build

# Install Frontend node_modules
yarn --cwd ./frontend

# Build Frontend
yarn --cwd ./frontend build 

# Compile TypeScript
yarn build:ts
