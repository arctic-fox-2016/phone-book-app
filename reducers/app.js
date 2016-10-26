import {ADD_DATA, EDIT_DATA, DELETE_DATA} from '../constants/ActionTypes'

const initialState = [{
  id: 0,
  name: 'Rubi Henjaya',
  phone: '08112237786'
}]

export default function data(state = initialState, action){
  switch (action.type) {
    case ADD_DATA:
    return []

    case EDIT_DATA:
    return []

    case DELETE_DATA:
    return []

    default:
    return state

  }
}
