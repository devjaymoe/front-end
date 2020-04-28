import { combineReducers } from 'redux';
import { signUpReducer as signUp } from './SignUpReducer';
import { loginReducer as login } from './loginReducer';

export default combineReducers( { signUp, login } )