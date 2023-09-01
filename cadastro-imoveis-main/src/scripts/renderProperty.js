import { listProperties } from "./listProperty.js";
import { properties } from './dataTemp.js'

function renderProperty(listProperty){
    const boxProperties = document.querySelector('table')
    listProperty.forEach(property => {
        const propertyCreate = listProperties(property)
        boxProperties.appendChild(propertyCreate)
    });
}

renderProperty(properties)