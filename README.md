[![NPM version][npm-image]][npm-url]

# lazy-image for Vue
a lazy-image module for Vue 1.0+ & 2.0+

## npm package
[vue-lazy-image](https://www.npmjs.com/package/vue-lazy-image)

## demo
[vue-lazy-image-demo](http://zhihu.ccforward.net)

## usage

```js
const lazy = require('vue-lazy-image')
// or use ES2015
//import lazy from 'vue-lazy-image'

Vue.use(lazy);

```

```js
// or with options
Vue.use(lazy, {
    error: 'http://xxx.com/error.png', //error image
    loading: 'http://xxx.com/loading.png', //loading image
    try: 2, // the count of try to load one image
});

```


```html
<img v-lazy="item.image">
<div class="img" v-lazy:background-image="item.image"></div>
```


## build

```js

npm run build

```

[downloads-image]: https://img.shields.io/npm/dm/vue-lazy-image.svg
[npm-url]: https://www.npmjs.com/package/vue-lazy-image
[npm-image]: https://img.shields.io/npm/v/vue-lazy-image.svg