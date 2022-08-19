const initalState = {
    events: []
}

export const eventReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SET_EVENTS":
            return {...state, events: action.payload }

        case "ADD_TO_EVENTS":
            return {...state,
                    events: [...state.events, action.payload] 
                }

        case "UPDATE_EVENT":
            return {...state,
                    events: state.events.map((item) =>
                    item.id === action.payload.id ?
                    action.payload : item)
                }

        case "DELETE_EVENT":
            return {
                    ...state,
                    events: state.events.filter((item, index) =>
                    index !== action.payload?.id)
                }

        default:
            return state
    }
}