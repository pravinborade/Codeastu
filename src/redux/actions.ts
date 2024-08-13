export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: any; 
}

export interface LogoutAction {
  type: typeof LOGOUT;
}


export const loginSuccess = (user: any): any => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = (): any => ({
  type: LOGOUT,
});

export type AuthActionTypes = LoginSuccessAction | LogoutAction;
