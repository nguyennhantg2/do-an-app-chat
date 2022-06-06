import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataNewFeeds: []
}

export const newFeedsSlice = createSlice({
  name: 'newfeeds',
  initialState,
  reducers: {
    fetchDataNewFeedSuccess: (state, action) => {
      state.dataNewFeeds = action.payload
    },
    UpdateDataNewFeedSuccess: (state) => {
      state.value -= 1
    },
    DeleteDataNewFeedSuccess: (state) => {
      state
    },
    InsertDataNewFeedSuccess: () => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchDataNewFeedSuccess, UpdateDataNewFeedSuccess, DeleteDataNewFeedSuccess, InsertDataNewFeedSuccess } = newFeedsSlice.actions

export default newFeedsSlice.reducer