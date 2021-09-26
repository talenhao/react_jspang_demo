const defaultState = {
    inputValue : 'Write Todo',
    list : [
        'waf',
        'firewall'
    ]
}

const defaultReducer = (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === 'inputChange'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        console.log("newState", newState)
        return newState
    }
    if (action.type === 'addToList') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = "Continue adding Todo!"
        return newState
    }
    if (action.type === 'delItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}

export default defaultReducer;