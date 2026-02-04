import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.jsx';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});


//steps:
//create store 
//wrap the app with provider and pass the store
//create a slice with createSlice
// register the slice reducer with the store