# how to install react-native:
```
$ npm install -g react-native-cli
```

```
$ react-native init Name_Of_Project
```

```
$ cd Name_Of_Project
$ mkdir android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
```
$ react-native run-android
```

### go to Name_Of_Project Directory:
- #### install eslint
```
$ npm install -g eslint
```
- #### in vscode : go to extentions and install eslint 
- #### make .eslintrc file in project directory and add this to it :
- #### {"extends":"rallycoding"}
- #### run this code in place of project
```
$ npm install --save-dev eslint-config-rallycoding
```
- #### restart vsCode


 
# how to kill process on special port:
#### this code show the process on 8081 port:
```
$ sudo lsof -i :8081
```

#### to kill that:
```
kill -p P_ID
```

# npm install is important

this site is important:
emulator connecting
https://stackoverflow.com/questions/45618802/unable-to-connect-development-server-ensure-that-the-packager-server-is-running

ENOCPC: ERROR in :
https://stackoverflow.com/questions/22475849/node-js-what-is-enospc-error-and-how-to-solve

```
npm install --save firebase
npm install --save react-redux redux
npm install --save react-native-router-flux@4.0.6
3.35.0
npm i --save react-native-document-picker
