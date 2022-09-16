const panels = document.querySelectorAll('.panel')

panels.forEach(panel => panel.addEventListener('click', (e) => {
    if (e.target.className !== 'panel active') {
        removeActiveclass()
        e.target.classList.add('active')
    } else if (e.target.className === 'panel active') {
        e.target.classList.remove('active')
    }
}))

function removeActiveclass() {
    panels.forEach(panel => panel.classList.remove('active'))
}