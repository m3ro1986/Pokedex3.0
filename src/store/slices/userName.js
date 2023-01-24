import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usernameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers: {
        getName: ( state, action ) => {
            const userName = action.payload;
            return userName;
        }
    }
})

export const { getName } = usernameSlice.actions;

export default usernameSlice.reducer;