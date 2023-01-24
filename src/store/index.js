import { configureStore } from '@reduxjs/toolkit';
import usernameSlice from './slices/userName';

export default configureStore({
  reducer: {
        userName: usernameSlice,

	}
})
