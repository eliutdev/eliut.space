import './projects'
import './packages'

const currentYear = new Date().getFullYear()
const footer = document.querySelector('footer')

footer.innerHTML = `
    <p>
       <a
        href="https://github.com/eliutgon/eliut.space/blob/main/LICENSE"
        target="_blank"
        ><small>${currentYear} © Eliut González</small></a
      >
      </p>
      `
