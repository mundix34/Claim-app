const initialState = {
    user: {},
    claims: [],
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    reference: ''

};
const ADD_USER_INFO = "ADD_USER_INFO"
const ADD_ADDRESSONE = "ADD_ADDRESSONE";
const ADD_ADDRESSTWO = "ADD_ADDRESSTWO";
const ADD_CITY = "ADD_CITY";
const ADD_STATE = "ADD_STATE";
const ADD_ZIP = "ADD_ZIP";
const ADD_REFERENCE = "ADD_REFERENCE";
const CLEAR_FIELDS = "CLEAR_FIELDS";

export function addUserInfo(user) {
    return {
        type: ADD_USER_INFO,
        payload: user
    }
}
export function getClaim(user) {
    return {
        type: ADD_USER_INFO,
        payload: user
    }
}

export function addAddressOne(addressOne) {
    return {
        type: ADD_ADDRESSONE,
        payload: addressOne
    }
}
export function addAddressTwo(addressTwo) {
    return {
        type: ADD_ADDRESSTWO,
        payload: addressTwo
    }
}
export function addCity(city) {
    return {
        type: ADD_CITY,
        payload: city
    }
}
export function addState(state) {
    return {
        type: ADD_STATE,
        payload: state
    }
}
export function addZip(zip) {
    return {
        type: ADD_ZIP,
        payload: zip
    }
}
export function addReference(ref) {
    return {
        type: ADD_REFERENCE,
        payload: ref
    }
}
export function clearFields() {
    return {
        type: CLEAR_FIELDS,
        payload: {
            addressOne: '',
            addressTwo: '',
            city: '',
            state: '',
            zip: '',
            reference: ''
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_INFO:
            return Object.assign({}, state, { user: action.payload })
        case ADD_ADDRESSONE:
            return Object.assign({}, state, { addressOne: action.payload })
        case ADD_ADDRESSTWO:
            return Object.assign({}, state, { addressTwo: action.payload })
        case ADD_CITY:
            return Object.assign({}, state, { city: action.payload })
        case ADD_STATE:
            return Object.assign({}, state, { state: action.payload })
        case ADD_ZIP:
            return Object.assign({}, state, { zip: action.payload })
        case ADD_REFERENCE:
            return Object.assign({}, state, { reference: action.payload })
        case CLEAR_FIELDS:
            return Object.assign({}, state, { addressOne: '', addressTwo: '', city: '', state: '', zip: '', reference: '' })
        default:
            return state;
    }

}