#!/usr/bin/env bash
dist=dist/ipr-report
branch_name=dist

ng build ipr-report
git add ${dist}
git commit -m "$(date)"
git subtree push --prefix=${dist} origin ${branch_name}
if [[ $? != 0 ]]
then
   git push origin --delete ${branch_name}
   git subtree push --prefix=${dist} origin ${branch_name}
fi
