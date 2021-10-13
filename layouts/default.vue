<template>
  <Nuxt />
</template>

<script>
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: `${this.$t('welcome')} / eliut.space`,
      meta: [...i18nHead.meta],
      link: [...i18nHead.link]
    }
  },
}
</script>
