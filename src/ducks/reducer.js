const initialState = {
    user: {},
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: ''
};
const ADD_USER_INFO = "ADD_USER_INFO";

export function addUserInfo(user) {
    return {
        type: ADD_USER_INFO,
        payload: user//user obj that got sent from the server ie req.sess.user
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_INFO:
            return Object.assign( {}, state, {user: action.payload})
        default:
            return state;
    }

}