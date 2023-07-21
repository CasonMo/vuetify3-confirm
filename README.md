# Vuetify3 Vue3 confirm dialog

This module extends vuetify3 confirm dialog.

![Demo](images/img.png?raw=true)

## Setup

Install the package from npm

```npm
npm install vuetify3-confirm
```

```npm
yarn add vuetify3-confirm
```


## vuetify 3

> Important: since vuetify3 you should put instance of vuetify into config

```javascript
import vuetify from ***
import confirm from "vuetify3-confirm"
app.use(confirm,{vuetify})
```
....

## Installation options

```javascript
import confirm from "vuetify3-confirm"
app.use(confirm, {
  vuetify,
  buttonTrueText: 'Accept',
  buttonFalseText: 'Discard',
  buttonTrueColor: 'primary',
  buttonFalseColor: 'grey',
  buttonTrueFlat: false,
  buttonFalseFlat: true,
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 350,
  property: '$confirm'
})
```

property: '$confirm' will create property with this name in Vue prototype

## Params
- message: String, required
- options: Object
    - buttonTrueText: String, default: 'Yes'
    - buttonFalseText: String, default: 'No'
    - buttonTrueColor: String, default: 'primary'
    - buttonFalseColor: String, default: 'grey'
    - buttonTrueFlat: Boolean, default: true
    - buttonFalseFlat: Boolean, default: true
    - color: String
    - icon: String
    - title: String
    - width: Number
    - persistent: Boolean
## Usage

```js
this.$confirm('Do you really want to exit?').then(res => {
})
```

```js
const res = await this.$confirm('Do you really want to exit?', { title: 'Warning' })
if (res) {
  ...
}
```
*res* will be true or false

You can format your message with arbitrary HTML - make sure you don't include any user-provided content here:

```js
const res = await this.$confirm('Please do not do this.<br>Do you really want to exit?')
console.log(res)
```

Also you can press Enter or Esc keys for choose confirm result

[npm-url]: https://www.npmjs.com/package/vuetify3-confirm
