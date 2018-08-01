const initialState = {
    user: {},
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    reference: ''

};
const ADD_USER_INFO = "ADD_USER_INFO"
const ADD_FIRSTNAME = "ADD_FIRSTNAME";
const ADD_LASTNAME = "ADD_LASTNAME";
const ADD_ADDRESSONE = "ADD_ADDRESSONE";
const ADD_ADDRESSTWO = "ADD_ADDRESSTWO";
const ADD_CITY = "ADD_CITY";
const ADD_STATE = "ADD_STATE";
const ADD_ZIP = "ADD_ZIP";
const ADD_REFERENCE = "ADD_REFERENCE";

export function addUserInfo(user) {
    return {
        type: ADD_USER_INFO,
        payload: user
    }
}
export function addFirstName(firstName) {
    return {
        type: ADD_FIRSTNAME,
        payload: firstName
    }
}
export function addLastName(lastName) {
    return {
        type: ADD_LASTNAME,
        payload: lastName
    }
}
export function addAddressOne(addressOne) {
    return {
        type: ADD_ADDRESSONE,
        payload: addAddressOne
    }
}
export function addAddressTwo(addressTwo) {
    return {
        type: ADD_ADDRESSTWO,
        payload: addAddressTwo
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
        type: ADD_STATE,
        payload: zip
    }
}
export function addReference(ref) {
    return {
        type: ADD_REFERENCE,
        payload: ref
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_INFO:
            return Object.assign( {}, state, {user: action.payload})
        case ADD_FIRSTNAME:
            return Object.assign( {}, state, {firstName: action.payload})
        case ADD_LASTNAME:
            return Object.assign( {}, state, {lastName: action.payload})
        case ADD_ADDRESSONE:
            return Object.assign( {}, state, {addressOne: action.payload})
        case ADD_ADDRESSTWO:
            return Object.assign( {}, state, {addressTwo: action.payload})
        case ADD_CITY:
            return Object.assign( {}, state, {city: action.payload})
        case ADD_STATE:
            return Object.assign( {}, state, {state: action.payload})
        case ADD_ZIP:
            return Object.assign( {}, state, {zip: action.payload})
        case ADD_REFERENCE:
            return Object.assign( {}, state, {reference: action.payload})
        default:
            return state;
    }

}