pushd ../../..

# Build core
pushd core
npm run build
npm link
popd

# Build angular
pushd angular
npm link @nfdoom/ionic-core
npm run build
npm link
popd

# Build angular-server
pushd packages/angular-server
npm link @nfdoom/ionic-core
npm link @ionic/angular
npm run build
popd

popd
