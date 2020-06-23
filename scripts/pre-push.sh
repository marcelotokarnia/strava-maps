#!/bin/bash

if git-branch-is master; then yarn pretest && yarn test:backend && yarn --cwd ./frontend generate:snapshots && CI=true yarn --cwd ./frontend test; fi