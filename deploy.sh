set -e
npm run build
cd dist
git init
git add .
git commit -m 'new deployment'
git push -f git@github.com:salahudheen007/notifications-page-main.git master:gh-pages
cd -
