document.getElementById('year').textContent = new Date().getFullYear()

const link = document.getElementById('emailLink')
const hint = document.getElementById('emailHint')

// Email kept out of the markup to avoid scraping; decoded only on demand.
const encodedEmail = 'YWJkZWxyaG1hbnNhaWR6YWtpQGhvdG1haWwuY29t'

link.addEventListener('click', (event) => {
  event.preventDefault()

  const email = atob(encodedEmail)

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
