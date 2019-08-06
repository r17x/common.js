import {isEqual} from './Boolean'

function firstInArray(){
    return isEqual(this, 'Array') ? this[0] : null
}

export const getFirst = Array.call.bind(firstInArray)

export default {
    getFirst,
}
