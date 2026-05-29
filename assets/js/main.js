document.getElementById('year').textContent = new Date().getFullYear()

const link = document.getElementById('emailLink')
const hint = document.getElementById('emailHint')
const email = 'abdelrhmansaidzaki@hotmail.com'

link.addEventListener('click', (event) => {
  if (event.metaKey || event.ctrlKey) {
    return
  }

  event.preventDefault()

  if (!navigator.clipboard) {
    return
  }

  navigator.clipboard.writeText(email).then(() => {
    hint.textContent = '— copied'
    setTimeout(() => {
      hint.textContent = '— click to copy'
    }, 1400)
  })
})
