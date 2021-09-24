let adultos = document.getElementById('txta')
let crianças = document.getElementById('txtc')
let horas = document.getElementById('txth')
let container = document.getElementById('box')


function calcular() {
    if (adultos.value.length === 0 || crianças.value.length === 0 || horas.value.length === 0) {
        alert('Por favor, preencha todos os campos')
    } else {
        container.innerHTML = ''

        const a = Number(adultos.value)
        const c = Number(crianças.value)
        const h = Number(horas.value)
        const carne = a * 0.25 + c * 0.15 * h
        const cerveja = a * 1.5 * h
        const bebida = c * 0.5 * h
        const result = (`<br>Para esse churrasco será necessário: <br>${carne}kg de carne <br>${cerveja} litros de cerveja <br>${bebida} litros de bebida sem álcool`)
        container.innerHTML += result
        adultos.value = ''
        crianças.value = ''
        horas.value = ''

    }
}
