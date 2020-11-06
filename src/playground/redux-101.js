import { createStore } from 'redux';

const defaultState = {
    count: 0,
};

const incrementBy = (payload) => ({
    type: 'INCREMENT',
    payload: {
        ...payload
    },
});

const decrementBy = (payload) => ({
    type: 'DECREMENT',
    payload: {
        ...payload
    },
});

const reset = () => ({
    type: 'RESET',
    payload: {},
});

const store = createStore((state = defaultState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count  + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };
        case 'RESET':
            return {
                count: 0,
            };
        default:
            return state;            
    }
    return state;
});


const unsubscribe = store.subscribe(() => {
    console.warn(store.getState());
});


store.dispatch(incrementBy());
store.dispatch(decrementBy());
store.dispatch(incrementBy());
store.dispatch(incrementBy());
store.dispatch(reset());
store.dispatch(incrementBy());