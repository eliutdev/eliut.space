<template>
  <div class="card">
    <a
      :href="`${baseUrl}/${name}`"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <h3 class="card__name">{{ name }}</h3>
      <p class="card__description">{{ description }}</p>
      <p class="card__keywords">
        <small>{{ keywords.join(', ') }}</small>
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ['project', 'package'].includes(value),
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keywords: {
      type: Array,
      required: true,
    },
  },
  computed: {
    baseUrl() {
      return this.type === 'project'
        ? 'https://github.com/eliut505'
        : 'https://www.npmjs.com/package'
    },
  },
}
</script>

<style scoped>
.card {
  color: var(--color);
  padding: 0.8em 1em;
  border-radius: 0.2em;
  background-color: var(--bg-alt);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.card:hover {
  background-color: var(--bg-alt-hover);
}

.card p {
  margin: 0;
}

.card a {
  color: var(--color);
  text-decoration: none;
}

.card__name {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.4em;
}

.card__description {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--color-muted);
}

.card__keywords {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--color-muted);
}
</style>
