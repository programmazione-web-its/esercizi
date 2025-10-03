// 🔢 Counter
const countEl = document.getElementById('count')
const incBtn = document.getElementById('increment')
const decBtn = document.getElementById('decrement')

let count = 0
incBtn.addEventListener('click', () => {
  count++
  countEl.textContent = count
})
decBtn.addEventListener('click', () => {
  count--
  countEl.textContent = count
})

// 📂 Accordion
const headers = document.querySelectorAll('.accordion-header')
headers.forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling

    // Chiude tutti
    document
      .querySelectorAll('.accordion-content')
      .forEach((c) => c.classList.remove('open'))

    // Apre solo quello cliccato
    content.classList.add('open')
  })
})

// 🗂️ Tabs
const tabBtns = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab

    // reset
    tabBtns.forEach((b) => b.classList.remove('active'))
    tabContents.forEach((c) => c.classList.remove('active'))

    // attiva solo quello cliccato
    btn.classList.add('active')
    document.getElementById(`tab-${tabId}`).classList.add('active')
  })
})

// 💬 Modale
const openModalBtn = document.getElementById('openModal')
const closeModalBtn = document.getElementById('closeModal')
const modal = document.getElementById('modal')

openModalBtn.addEventListener('click', () => {
  modal.classList.add('open')
})

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('open')
})

// chiudi cliccando sullo sfondo
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open')
  }
})
