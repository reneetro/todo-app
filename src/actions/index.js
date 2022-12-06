export const ADD_LIST = 'ADD_LIST'

export const addList = (list) => {
    return({type: ADD_LIST, payload: list})
}