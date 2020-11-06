export const setTextFilter = ({ text } = {text: ''}) => ({
    type: 'SET_TEXT_FILTER',
    payload: {
        text
    },
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

export const sortByTime = () => ({
    type: 'SORT_BY_TIME',
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

export const setStartDate = ({value}) => ({
    type: 'SET_START_DATE',
    payload: {
        value
    }
});

export const setEndDate = ({value}) => ({
    type: 'SET_END_DATE',
    payload: {
        value
    },
});