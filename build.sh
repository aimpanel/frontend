mkdir -p output
rm -rf output/*

npm run build
cp -r assets output
cp -r build output
cp index.html output

rsync -rvz --delete output/ ../aimpanel/public/panel/
