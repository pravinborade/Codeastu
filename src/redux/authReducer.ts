import { AuthActionTypes, LOGIN_SUCCESS, LOGOUT } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  user: any ; 
}

const initialState: AuthState = {
  user: null,
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case LOGOUT:
      AsyncStorage.removeItem('user');
      return { ...state, user: null };
    default:
      return state;
  }
};
