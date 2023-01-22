export type StateType = {
    isLoading: boolean
}

const initState: StateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingACType): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}) as const
