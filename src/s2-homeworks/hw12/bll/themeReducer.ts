import {AnyAction} from 'redux';

const initState: StateType = {
    themeId: 1,
}

type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: AnyAction): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}
export const changeThemeId = (id: number): AnyAction => ({type: 'SET_THEME_ID', id}) // fix any


