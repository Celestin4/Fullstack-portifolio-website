// reducers.js
import { combineReducers } from 'redux';
import { UPDATE_FORM_FIELD, RESET_FORM, SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILURE } from './actionTypes';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: ''
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case RESET_FORM:
      return initialFormState;
    default:
      return state;
  }
};

const submitFormReducer = (state = { submitting: false, success: false, error: false }, action) => {
  switch (action.type) {
    case SUBMIT_FORM_REQUEST:
      return {
        submitting: true,
        success: false,
        error: false
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        submitting: false,
        success: true,
        error: false
      };
    case SUBMIT_FORM_FAILURE:
      return {
        submitting: false,
        success: false,
        error: true
      };
    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   form: formReducer,
//   submission: submitFormReducer
// });

export default formReducer;
