#!/usr/local/bin/fish
if test -n "git-branch-is master"
    yarn pretest && yarn test:backend && yarn --cwd ./frontend generate:snapshots && CI=true yarn --cwd ./frontend test
end