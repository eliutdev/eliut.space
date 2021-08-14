<template>
  <h1>{{ $t('welcome') }}</h1>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
body {
  margin: 0;
  display: grid;
  place-content: center;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #fff;
  }
}
</style>
