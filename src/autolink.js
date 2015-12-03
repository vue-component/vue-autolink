import autoLink from 'autolink.js'

function defaultFalse (val) {
  if (typeof val === 'undefined') {
    return false
  }
  if (val === false || val == 'false') {
    return false
  }
  return true
}

function defaultTrue (val) {
  if (typeof val === 'undefined') {
    return true
  }
  if (val === false || val == 'false') {
    return false
  }
  return true
}

function parseEmbed (opts, embed) {
  if (typeof embed !== 'undefined') {
    if (embed === 'false') {
      opts.embed = false
    } else {
      if (embed.length === 0 || embed === 'true') {
        opts.embed = true
      } else {
        embed.split(',').forEach(e => {
          opts[e.trim()] = true
        })
      }
    }
  }
  return opts
}

export default {
  props: ['class', 'style', 'content', 'embed', 'image', 'link-attr', 'image-attr', 'safe'],
  template: '<div :class="class" :style="style">{{{ content | autolink }}}</div>',
  filters: {
    autolink (val) {
      let opts = {}
      opts.image = defaultTrue(this.image)
      opts = parseEmbed(opts, this.embed)
      opts.linkAttr = this.linkAttr
      opts.imageAttr = this.imageAttr
      opts.safe = defaultFalse(this.safe)
      console.log(opts)
      return autoLink(val, opts)
    }
  }
}
