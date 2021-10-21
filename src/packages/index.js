const list = document.querySelector('.packages-list')

const packages = [
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
    keywords: ['database', 'localStorage', 'storage', 'store', 'persistence'],
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
]

packages.forEach((pckg) => {
  const element = document.createElement('div')
  element.classList.add('card')

  element.innerHTML = `
        <a href="https://www.npmjs.com/package/${pckg.name}" target="_blank">
          <h3>${pckg.name}</h3>
          <p class="card__description">${pckg.description}</p>
          <p class="card__keywords">
              <small>${pckg.keywords.join(', ')}</small>
          </p>
        </a>
    `
  list.appendChild(element)
})
