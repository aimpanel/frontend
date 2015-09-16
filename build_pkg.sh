#!/bin/bash
[ -z "$1" ] && echo "Provide version number like 1.0" >&2 && exit 1
set -e

#mod env
echo 'window.baseurl = "";' > src/config.js

#clean
rm -rf build
rm -rf output
rm -rf deb
mkdir -p deb/usr/local/aimpanel/app/public/panel/

#build
npm run build
cp -r assets deb/usr/local/aimpanel/app/public/panel/
cp -r build deb/usr/local/aimpanel/app/public/panel/
cp index.html deb/usr/local/aimpanel/app/public/panel/

#make package
cd deb
fpm -s dir -t deb \
 --version $1 \
 --name "aimpanel-frontend" \
 --description "Easy to use control panel for game servers - frontend" \
 --url "https://lvlup.pro" \
 --vendor "LVL UP" \
 -m "Michał Frąckiewicz <michal@lvlup.pro>" \
 --license "All rights reserved" \
 usr
#sign that package
dpkg-sig --sign builder *.deb

cd -

echo 'window.baseurl = "http://192.168.33.33:3131";' > src/config.js