const minNumber = document.querySelector('#minNumber')
const maxNumber = document.querySelector('#maxNumber')
const button = document.querySelector('button')
const raffle = document.querySelector('.raffle-box')

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

const error = document.createElement('p')
const result = document.createElement('h1')

const drawLots = () => {

    const errorExist = document.querySelector('[data-error="error"]')
    const resultExist = document.querySelector('[data-result="result"]')
    
    if(errorExist){
        errorExist.remove()
    }

    if(resultExist){
        resultExist.remove()
    }

    const min = Number(minNumber.value)
    const max = Number(maxNumber.value)

    if (min < max) {
        const drawn = Math.round(getRandomArbitrary(min, max))
        raffle.insertAdjacentElement("afterend", result)
        result.textContent = `Número sorteado foi ( ${drawn} )`
        result.setAttribute('data-result', 'result')
        return
    }

    raffle.insertAdjacentElement("afterend", error)
    error.style.color = "red"
    error.textContent = "O primeiro numero deve ser menor que o segundo"
    error.setAttribute('data-error', "error")
}

button.addEventListener('click', drawLots)

