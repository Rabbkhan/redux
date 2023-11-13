const redux = require('redux');


const counterReducer = (state = { counter:0 }, action) =>{
if(action.type === 'increment'){
    return{
        counter :state.counter + 2
    }
}
if(action.type === 'decrement'){
    return{
        counter :state.counter - 2
    }
}
    return  state;
};

const store= redux.legacy_createStore(counterReducer);

const couterSubsriber = () =>{
const latestState =  store.getState();
console.log(latestState)

};

store.subscribe(couterSubsriber);

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});