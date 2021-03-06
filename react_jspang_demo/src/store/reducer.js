import { DEL_ITEM, ADD_TO_LIST, INPUT_CHANGE, GET_LIST } from "./actionTypes"


const defaultState = {
    inputValue : 'Write Todo',
    list : [
        // 'waf',
        // 'firewall'
    ]
}

const defaultReducer = (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        console.log("newState", newState)
        return newState
    }
    if (action.type === ADD_TO_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = "Continue adding Todo!"
        return newState
    }
    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.list
        return newState
    }
    return state
}

export default defaultReducer;