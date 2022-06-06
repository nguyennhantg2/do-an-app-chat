import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  message: []
}

export const listMesSlice = createSlice({
  name: 'newfeeds',
  initialState,
  reducers: {
    fetchDataUsersSuccess: (state, action) => {
      state.users = action.payload
    },
    fetchDataMessageSuccess: (state, action) => {
      state.message = action.payload
    },
    InsertDataMessageSuccess: (state, action) => {
      state.message = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchDataUsersSuccess, fetchDataMessageSuccess, InsertDataMessageSuccess } = listMesSlice.actions

export default listMesSlice.reducer