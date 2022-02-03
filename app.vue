<template>
  <main>
    <h1>Eliut González</h1>
    <section>
      <h2>Projects</h2>
      <div class="projects-list">
        <Card
          v-for="pjt in projects"
          :key="pjt.name"
          v-bind="pjt"
          type="project"
        />
      </div>
    </section>
    <section>
      <h2>Packages</h2>
      <div class="packages-list">
        <Card
          v-for="pckg in packages"
          :key="pckg.name"
          v-bind="pckg"
          type="package"
        />
      </div>
    </section>
  </main>
  <footer class="footer">
    <p>
      <a
        href="https://github.com/eliut505/eliut.space/blob/main/LICENSE"
        target="_blank"
        ><small>{{ currentYear }} © Eliut González</small></a
      >
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      packages: [
        {
          name: '@reliutg/buzz-notify',
          description: 'Small and Clean JavaScript Toast Notifications',
          keywords: [
            'notification',
            'toast',
            'prompt',
            'alert',
            'accessible',
            'small',
            'tiny',
          ],
        },
        {
          name: '@reliutg/lsdb',
          description: '✨Database powered by localStorage',
          keywords: [
            'database',
            'localStorage',
            'storage',
            'store',
            'persistence',
          ],
        },
        {
          name: '@reliutg/vprops',
          description: 'Object property async validation',
          keywords: ['validation', 'validate', 'validator', 'validate-props'],
        },
        {
          name: 'svg-contributors',
          description: 'Generate contributors svg from github repository',
          keywords: ['contributors', 'svg', 'github', 'repository'],
        },
        {
          name: 'cimple-data',
          description: '📝Data structure and utilities',
          keywords: ['data', 'structure', 'utilities'],
        },
        {
          name: 'exchangerate-javascript-sdk',
          description: 'Unofficial JavaScript SDK for Exchange rates API',
          keywords: ['exchange', 'rates', 'api', 'sdk'],
        },
      ],
      projects: [
        {
          name: 'tailwind-gradient-generator ',
          description: 'Tailwind Gradient Generator',
          keywords: ['tailwind', 'tailwindcss', 'vue'],
        },
        {
          name: 'bulma-css-class-completion ',
          description:
            'Visual Studio Code extension that provides CSS class name completion for the HTML class attribute based on Bulma CSS classes.',
          keywords: ['vscode', 'bulma', 'css', 'class', 'completion'],
        },
        {
          name: 'visual-regex',
          description:
            'Visual Studio Code extension to get detailed and visual information about the pattern you make.',
          keywords: ['vscode', 'regex', 'visual', 'detailed'],
        },
        {
          name: 'grain',
          description: 'A collection of amazing ideas to improve your skills.',
          keywords: ['ideas', 'skills', 'improvement', 'cummunity'],
        },
        {
          name: 'color-palette',
          description: 'Color Palette Generator',
          keywords: ['color', 'palette', 'generator'],
        },
        {
          name: 'my-github-profile-readme',
          description: 'Share your GitHub profile README on any website',
          keywords: ['github', 'profile', 'readme', 'share'],
        },
      ],
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --color: #333;
  --color-muted: #999;
  --link-color: #00f;
  --bg: #f0f0f0;
  --bg-alt: #f5f5f5;
  --bg-alt-hover: #e5e5e5;
  --border-radius: 4px;
  --font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color: #f0f0f0;
    --color-muted: #999;
    --bg: #333;
    --bg-alt: #444;
    --bg-alt-hover: #555;
  }
}

body {
  background: var(--bg);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: var(--font-size);
  color: var(--color);
}

a {
  color: var(--link-color);
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: inline-block;
  margin: 0;
  padding: 0;
}

main,
footer {
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 2rem;
}

.projects-list,
.packages-list {
  display: grid;
  grid-gap: 0.5rem;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.footer {
  margin-top: 1rem;
  font-size: 0.875rem;
  text-align: center;
}

.footer p {
  margin: auto;
}

.footer a {
  color: var(--color-muted);
}
</style>
