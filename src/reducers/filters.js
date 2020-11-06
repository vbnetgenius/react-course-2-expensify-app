const filterReducerDefualtState = {
    text: '',
    sortBy: '', // date or amount
    startDate: undefined,
    endDate: undefined,
};
const filtersReducer = (state = filterReducerDefualtState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.payload.text,
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            };
        case 'SORT_BY_TIME':
            return {
                ...state,
                sortBy: 'time',
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.payload.value,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.payload.value,
            };
        default:
            return state;
    }
};

export default filtersReducer;