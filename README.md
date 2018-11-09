WebdriverIO install
```bash
npm init -y
```
```bash
npm install webdriverio
```
```bash
./node_modules/.bin/wdio config
```
```bash
npm install --save-dev babel-register babel-preset-es2015
```
Add .babelrc
```
{
  "presets": ["es2015"],
  "plugins": [
    ["transform-runtime", {
      "polyfill": false
    }]
  ]
}
```
```bash
npm i chai
```
Run tests using the below command

```
./node_modules/.bin/wdio wdio.conf.js
```
