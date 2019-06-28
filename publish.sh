#!/usr/bin/env bash
dist=dist/ipr-report
branch_name=dist

ng build ipr-report
git push origin --delete ${branch_name}
git add ${dist}
git commit -m "$(date)"
git subtree push --prefix=${dist} origin ${branch_name}
