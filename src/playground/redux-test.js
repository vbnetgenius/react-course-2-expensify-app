import { createStore } from 'redux';

const defaultState = {
    count: 0,
};

const store = createStore((state = defaultState, action) => {
    return state;
});


const unsubscribe = store.subscribe(() => {

});

unsubscribe();

store.getState();