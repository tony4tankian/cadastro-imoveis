import { buttonEdit, buttonDelete } from "./buttons.js"

export function listProperties(property){
    const trTag = document.createElement('tr')
    const idProperty = document.createElement('th')
    const tituloProperty = document.createElement('th')
    const quartosProperty = document.createElement('th')
    const cozinhaProperty = document.createElement('th')
    const salaProperty = document.createElement('th')
    const dceProperty = document.createElement('th')
    const valorProperty = document.createElement('th')
    const descricaoProperty = document.createElement('th')
    const corretorProperty = document.createElement('th')
    const dataProperty = document.createElement('th')
    const buttonEditProperty = document.createElement('th')
    const buttonDeleteProperty = document.createElement('th')

    idProperty.innerText = property.id
    tituloProperty.innerText = property.titulo
    quartosProperty.innerText = property.quartos
    if (property.cozinha){
        cozinhaProperty.innerText = 'Sim'
    } else {
        cozinhaProperty.innerText = 'Não'
    }
    if (property.sala){
        salaProperty.innerText = 'Sim'
    } else {
        salaProperty.innerText = 'Não'
    }
    if (property.DCE){
        dceProperty.innerText = 'Sim'
    } else {
        dceProperty.innerText = 'Não'
    }
    valorProperty.innerText = property.valor
    descricaoProperty.innerText = property.descricao
    corretorProperty.innerText = property.corretor
    dataProperty.innerText = property.data
    buttonEditProperty.innerHTML = buttonEdit
    buttonDeleteProperty.innerHTML = buttonDelete

    trTag.append(idProperty, tituloProperty, quartosProperty, cozinhaProperty, salaProperty, dceProperty, valorProperty, descricaoProperty, corretorProperty, dataProperty, buttonEditProperty, buttonDeleteProperty)

    return trTag
}