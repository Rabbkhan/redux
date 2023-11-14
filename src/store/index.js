import {createSlice, configureStore}  from '@reduxjs/toolkit'
const intialCounterState = {counter : 0, showCounter:true, };
   const counterSlice = createSlice({
        name:'counter',
        initialState:intialCounterState,
        reducers:{
            increment(state){
                state.counter++;
            },
            decrement(state){
                state.counter --;
            },
            increase(state, action){
                state.counter = state.counter + action.amount
            },
            toggleCounter(state){
                state.showCounter = !state.showCounter;
            }
        }
    });

const initialAuthState = {
    isAithenticated: false
}
  const authSlice =  createSlice({
name:'authentication',
initialState:initialAuthState,
reducers:{
    login(state){
state.isAithenticated = true;
    },
    logout(state){
        state.isAithenticated= false
    }
}
    });

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth:authSlice.reducer},
});


export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;