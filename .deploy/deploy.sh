cd ~/articles-feed
npm run build:prod

rm -rf ~/../var/www/articles-feed/html
mv ~/articles-feed/build ~/../var/www/articles-feed/html