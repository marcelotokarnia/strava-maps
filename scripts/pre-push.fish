#!/usr/local/bin/fish
git-branch-is master
if test $status -eq 0
    yarn pretest && yarn test:backend && yarn --cwd ./frontend generate:snapshots && CI=true yarn --cwd ./frontend test
end