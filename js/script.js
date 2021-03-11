function toggleMeny() {
    document.querySelector('.burgerLinks').classList.toggle('burgerActive')
    document.querySelector('.burger').classList.toggle('toggle')
}

document.querySelector('.burger').addEventListener('click', toggleMeny)