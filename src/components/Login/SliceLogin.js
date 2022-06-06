import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginSuccess: false,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.loginSuccess = true
      state.user = action.payload
    },
    logOutSuccess: (state) => {
      state.value -= 1
    },
    registerSucess: (state) => {
      state
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccess, logOutSuccess, registerSucess } = userSlice.actions

export default userSlice.reducer