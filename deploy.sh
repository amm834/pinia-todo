git checkout deploy
pnpm build
mv dist docs
git commit -m "deploy: deploy website"
git push -u origin deploy
