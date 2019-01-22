#! /usr/bin/env sh

npm run build

cd docs/.vuepress/dist

git init
git config user.name 'jkchao'
git config user.email 'jkchaom@gmail.com'
git add -A
git commit -m 'deploy'

git push -f git@github.com:jkchao/typescript-book-chinese.git master:gh-pages

open https://jkchao.github.io/typescript-book-chinese/
