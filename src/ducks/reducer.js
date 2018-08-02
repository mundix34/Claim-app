const initialState = {
    user: {},
    claims: [],
    summary: [],
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    reference: ''

};
const ADD_ADDRESSONE = "ADD_ADDRESSONE";
const ADD_ADDRESSTWO = "ADD_ADDRESSTWO";
const ADD_CITY = "ADD_CITY";
const ADD_STATE = "ADD_STATE";
const ADD_ZIP = "ADD_ZIP";
const ADD_REFERENCE = "ADD_REFERENCE";
const ADD_USER_INFO = "ADD_USER_INFO";
const GET_CLAIM_SUMMARY = "GET_CLAIM_SUMMARY";
const ADD_PROFILE = "ADD_PROFILE";
const CLEAR_FIELDS = "CLEAR_FIELDS";

export function addUserInfo(user) {
    return {
        type: ADD_USER_INFO,
        payload: user
    }
}
export function getClaimSummary(summary) {
    return {
        type: GET_CLAIM_SUMMARY,
        payload: summary
    }
}
export function addProfile(profile) {
    return {
        type: ADD_PROFILE,
        payload: profile
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
        case GET_CLAIM_SUMMARY:
            return Object.assign({}, state, { summary: action.payload })
        case ADD_PROFILE:
            let newUser = {...state.user, ...action.payload}
            return Object.assign({}, state, { user: newUser })
        case CLEAR_FIELDS:
            return Object.assign({}, state, { addressOne: '', addressTwo: '', city: '', state: '', zip: '', reference: '' })
        default:
            return state;
    }

}