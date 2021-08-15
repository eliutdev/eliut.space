<template>
  <Nuxt />
</template>

<script>
export default {
  head() {
    return {
      ...this.$nuxtI18nHead({ addSeoAttributes: true }),
      title: `${this.$t('welcome')} / eliut.space`,
    }
  },
}
</script>
