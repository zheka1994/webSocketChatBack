import * as loginPageActionTypes from './loginPageActionTypes';

export default function login(state = {}, action) {
    switch (action.type) {
        case loginPageActionTypes.CHANGE_NAME: {
            return {
                ...state,
                name: action.data
            };
        }
        case loginPageActionTypes.CHANGE_LAST_NAME: {
            return {
                ...state,
                lastName: action.data
            };
        }
        case loginPageActionTypes.CHANGE_PHONE_NUMBER: {
            return {
                ...state,
                phoneNumber: action.data
            };
        }
        default:
            return state;

    }
}