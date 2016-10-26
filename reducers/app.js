import {ADD_DATA, DELETE_DATA,UPDATE_DATA} from '../constants/ActionTypes'
const initialState = [
  {
    id: 0,
    name: 'Andrew',
    phone: '08172735891'
  }
]

export default function data(state = initialState, action){
  switch (action.type){
    case ADD_DATA:
    return [
      {
        id: state.reduce((maxId, data) => Math.max(data.id, maxId, -1)) + 1,
        name: action.name,
        phone: action.phone
      },
      ...state
    ]

    case DELETE_DATA:
    return state.filter(data => data.id !== action.id)

    case UPDATE_DATA:
    let dataBaru = state.map(function(eachData){
      if(action.id== eachData.id){
        eachData.name = action.name
        eachData.phone = action.phone
        eachData.update = "no"
        return eachData
      } else {
        return eachData
      }
    })
    return dataBaru

    default:
    return state
  }
}
