import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer'
import SliceLogin from '../components/Login/SliceLogin'
import SliceNewFeeds from '../components/NewFeeds/SliceNewFeeds'
import ListMesSlice from '../components/ListMessage/ListMesSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    inforuser: SliceLogin,
    newfeeds: SliceNewFeeds,
    message: ListMesSlice,
  },
})