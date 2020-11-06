import { createStore } from 'redux';

const defaultState = {
    user: {
        firstName: '',
        lastName: '',
        age: 0,
    },
    shopping: {
        items: [],        
    },
};

const userLoggedIn = (payload = {}) => ({
    type: 'SET_USER_LOGGED_IN',
    payload: {
        ...payload
    },
});

const addItem = (payload) => ({
    type: 'ADD_SHOPPING_ITEM',
    payload: {
        ...payload
    },
});

const logOutUser = (payload) => ({
    type: 'LOG_OUT_USER',
    payload: {...payload},
});

const store = createStore((state = defaultState, action) => {
    switch(action.type) {
        case 'SET_USER_LOGGED_IN':
            return {
                ...state,
                user: {
                    ...action.payload,
                },
            };
            break;
        case 'ADD_SHOPPING_ITEM':
            return {
                ...state,
                shopping: {
                    ...state.shopping,
                    items: [
                        ...state.shopping.items,
                        {
                            ...action.payload,
                        }
                    ],
                },
            };
        case 'LOG_OUT_USER':
            return {
                ...state,
                user: {
                    firstName: '',
                    lastName: '',
                    age: '',
                },
            };
        default:
            return state;    
    }
});

store.subscribe(() => {
    console.warn(store.getState());
});

store.dispatch(userLoggedIn({
    age: 27,
    firstname: 'siavash',
    lastname: 'ebrahimi',
}));

store.dispatch(addItem({
    _id: 1,
    title: 'کیبورد مایکروسافت',
    basePrice: 12000,
    count: 1,
}));

store.dispatch(addItem({
    _id: 2,
    title: 'خرید موس لاجیتک',
    basePrice: 120000,
    count: 2,
}));

