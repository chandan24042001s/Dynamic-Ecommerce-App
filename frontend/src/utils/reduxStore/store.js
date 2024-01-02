import { configureStore } from '@reduxjs/toolkit';
const { default: authSlice } = require("./authSlice");

const store=configureStore({
    reducer:{
        auth:authSlice
    }
})

export default store;