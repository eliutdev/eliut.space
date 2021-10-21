const list = document.querySelector('.projects-list')

const projects = [
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
]

projects.forEach((project) => {
  const element = document.createElement('div')
  element.classList.add('card')

  element.innerHTML = `
        <a href="https://github.com/eliutgon/${project.name}" target="_blank">
          <h3>${project.name}</h3>
          <p class="card__description">${project.description}</p>
          <p class="card__keywords">
              <small>${project.keywords.join(', ')}</small>
          </p>
        </a>
    `
  list.appendChild(element)
})
