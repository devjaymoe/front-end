import { combineReducers } from 'redux';
import { signUpReducer as signUp } from './SignUpReducer';

export default combineReducers( { signUp } )