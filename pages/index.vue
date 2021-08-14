<template>
  <section class="home">
    <h1>{{ $t('welcome') }}</h1>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
    <div class="alien">👽</div>
  </section>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
body {
  margin: 0;
  display: grid;
  place-content: center;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  overflow: hidden;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #fff;
  }
}
.alien {
  --size: 1vw;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: absolute;
  top: -5vh;
}
@keyframes snowfall {
  0% {
    transform: translate3d(var(--left-ini), 0, 0);
  }
  100% {
    transform: translate3d(var(--left-end), 110vh, 0);
  }
}
.alien:nth-child(1) {
  --size: 1vw;
  --left-ini: 8vw;
  --left-end: -7vw;

  left: 90vw;
  animation: snowfall 15s linear infinite;
  animation-delay: -3s;
}
.alien:nth-child(2) {
  --size: 0.4vw;
  --left-ini: -5vw;
  --left-end: -6vw;

  left: 71vw;
  animation: snowfall 10s linear infinite;
  animation-delay: -10s;
}
.alien:nth-child(3) {
  --size: 0.8vw;
  --left-ini: 9vw;
  --left-end: 2vw;

  left: 83vw;
  animation: snowfall 6s linear infinite;
  animation-delay: -7s;
}
.alien:nth-child(4) {
  --size: 0.6vw;
  --left-ini: -4vw;
  --left-end: -8vw;

  left: 100vw;
  animation: snowfall 10s linear infinite;
  animation-delay: -2s;
}
.alien:nth-child(5) {
  --size: 0.8vw;
  --left-ini: 0;
  --left-end: 4vw;

  left: 25vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -3s;
}
.alien:nth-child(6) {
  --size: 0.6vw;
  --left-ini: 3vw;
  --left-end: 7vw;

  left: 68vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -9s;
}
.alien:nth-child(7) {
  --size: 0.6vw;
  --left-ini: 2vw;
  --left-end: -8vw;

  left: 32vw;
  animation: snowfall 10s linear infinite;
  animation-delay: -10s;
}
.alien:nth-child(8) {
  --size: 0.8vw;
  --left-ini: -4vw;
  --left-end: -2vw;

  left: 19vw;
  animation: snowfall 7s linear infinite;
  animation-delay: -2s;
}
.alien:nth-child(9) {
  --size: 0.2vw;
  --left-ini: 2vw;
  --left-end: -6vw;

  left: 51vw;
  animation: snowfall 14s linear infinite;
  animation-delay: -10s;
}
.alien:nth-child(10) {
  --size: 1vw;
  --left-ini: -3vw;
  --left-end: 0;

  left: 35vw;
  animation: snowfall 13s linear infinite;
  animation-delay: -4s;
}
.alien:nth-child(2n) {
  filter: blur(1px);
}
</style>
