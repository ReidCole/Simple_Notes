import { Action, createSlice } from "@reduxjs/toolkit";
type UserData = {
  email: string;
};

export type AuthState = {
  user: UserData | null;
};

const initialState: AuthState = {
  user: null,
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.setUser:
      const newState: AuthState = {
        user: action.payload.user,
      };
      return newState;
    default:
      return state;
  }
}

export const actions = {
  setUser: "auth/setUser",
};
