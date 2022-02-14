type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const toggleCollapsed = 'toggle-collapsed'
export const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case toggleCollapsed:
            return {
                ...state,
                collapsed: !state.collapsed
            }

        default:
            throw new Error('Error!!!')
    }
    return state
}