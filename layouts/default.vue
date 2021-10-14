<template>
  <Nuxt />
</template>

<script>
export default {
  head() {
    if (!this.$nuxtI18nHead) return {}
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: 'eliut.space',
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Eliut's site" },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link,
      ],
    }
  },
}
</script>
