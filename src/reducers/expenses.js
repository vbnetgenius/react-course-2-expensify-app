const expensedReducerDefaultState = [];
const expensesReducer = (state = expensedReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                {...action.payload}
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(e => e.id != action.payload.id);
        case 'EDIT_EXPENSE':
            return state.map(e => {
                if (e.id === action.payload.id) {
                    return {
                        ...e,
                        ...action.payload,
                    };
                }
                return e;
            });
        default:
            return state;
    }
};

export default expensesReducer;