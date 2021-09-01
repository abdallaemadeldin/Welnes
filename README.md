> :warning: **Support Android Only**: unfortunately my mac is dead so i can't handle IOS.

> :heavy_check_mark: App is completely **responsive** and adapts well to all viewports.

## Get Started
To get started you can run the app in development

```
git clone https://github.com/abdallaemadeldin/Welnes.git
cd Welnes
yarn
yarn start
yarn android
```

Launch the test runner

```sh
yarn test
```

## File Structure
```
Welnes
├─ src
│  ├─ assets
│  │  ├─ logo.png
│  │  └─ play.png
│  ├─ hooks
│  │  ├─ home.hook.js
│  │  ├─ index.js
│  │  └─ splash.hook.js
│  ├─ lib
│  │  └─ windowStack.js
│  └─ screens
│     ├─ Home
│     │  ├─ Home.js
│     │  ├─ style.js
│     │  └─ __test__
│     │     ├─ Home.test.js
│     │     └─ __snapshots__
│     │        └─ Home.test.js.snap
│     └─ Splash
│        ├─ Splash.js
│        ├─ style.js
│        └─ __test__
│           ├─ Splash.test.js
│           └─ __snapshots__
│              └─ Splash.test.js.snap
└─ __mocks__
   └─ @react-native-firebase
      ├─ firestore.js
      └─ storage.js

```
- `assets` images, fonts, ...etc
- `hooks` All hooks should be in one folder, with no nesting! Each hook is refered to component or screen.
- `lib`
- `screens` A screen is what simply what get passed to navigator, Each screen has its own folder, it contains the jsx screen itself as well as styles, tests, ...etc.

## Stack
This app is built with react-native cli, `react-navigation`, `react-native-firebase`, `react-native-ffmpeg`, `react-native-fs`, `react-native-image-crop-picker`, React-Testing-Library & Jest for testing.`