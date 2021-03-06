# :iphone: Blocks' Storybook App
Sample App for Loadsmart's React Native Components. If you're looking for the library itself, you can find it [here](https://github.com/loadsmart/blocks).

## Installation

First, make sure you have a local copy of [blocks](https://github.com/loadsmart/blocks) in the same directory level that you cloned this repo. The sample app will use this local version to render the components, making the process of editing or creating new ones easier for you.

Then install the other dependencies:

```
brew install yarn watchman
yarn install
```

## Running

### iOS Simulator

Make sure you have Xcode and Command Line Tools installed:

```
xcode-select --install
xcodebuild -license accept
```

Then run:

```
yarn ios
```

First time you run this command, it may take a while to finish. This is because RN has to initially build the native side and then inject the JS bundle into it.

To speed things up development wise, keep Metro Bundler running and enable `Hot Reloading` in the Developer Menu by pressing <kbd>COMMAND</kbd>+<kbd>D</kbd>. Navigate to the screen you're editing on the app and edit it's TS file. App should refresh right after you save the file. If you need to reload the whole JS bundle, you can do that by pressing <kbd>COMMAND</kbd>+<kbd>R</kbd> on simulator window.

### iOS device

Download and install the development certificates and provisioning profiles by running:

```
cd ios/
bundle install
bundle exec fastlane match
cd -
```

Make sure you have `ios-deploy` installed globally:

```
npm install -g ios-deploy
```

Then execute:

```
yarn ios --device
```

### Android Emulator

Make sure you have the Android SDK installed and a virtual device to run the app. You can follow the instructions in Google's [official website](https://developer.android.com/studio/install).

Then run:

```
yarn android
```

First time you run this command, it may take a while to finish. This is because RN has to initially build the native side and then inject the JS bundle into it.

To speed things up development wise, keep Metro Bundler running and enable `Hot Reloading` in the Developer Menu by pressing <kbd>COMMAND</kbd>+<kbd>M</kbd>. Navigate to the screen you're editing on the app and edit it's TS file. App should refresh right after you save the file. If you need to reload the whole JS bundle, you can do that by double pressing <kbd>R</kbd> on simulator window.

### Android device

To run the app in a real device first make sure you have enabled the developers options in your Android device and activated the ADB Debugging. After that you can follow the same procedure.

```
yarn android
```

However, make sure that you have only one device or emulator connected to your computer. React Native won't be able to install the app if more then one source is detected.
