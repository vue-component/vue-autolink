# vue-autolink

It's not just link, it's everything link-able in text.

## Installation

```bash
npm i -D vue-autolink
```

## Example

**app.js**

```javascript
// locally
// `l` is lowercase
import autoLink from 'vue-autolink/autolink'
new Vue({
  components: { autoLink }
})
// globally
import autoLink from 'vue-autolink'
Vue.use(autoLink)
```

**template**

```html
<!-- enable all embed and escape html -->
<auto-link :content="content_variable" embed safe></auto-link>
<!-- enable specific embed-able links -->
<auto-link :content="content_variable" embed="youtube,youku"></auto-link>
<!-- custom attributes -->
<auto-link :content="content_variable" :link-attr="{'data-link': true}" :image-attr="{'data-image': true}"></auto-link>
<!-- it's sure that you can still use :style :class on component -->
<auto-link :class="{myStyle: true}" :style="{textAlign: 'center'}"></auto-link>
```

For more usages, check out [autolink.js](https://github.com/egoist/autolink.js)

## License

MIT &copy; [EGOIST](https://github.com/egoist)
