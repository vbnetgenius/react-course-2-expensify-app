import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByTime } from './../../actions/filters';

test('should generate setStartDate action object', () => {
    const result = setStartDate({ value: 1200 });
    expect(result).toEqual({
        type: 'SET_START_DATE',
        payload: {
            value: 1200
        },
    });
});

test('should generate setEndDate action object', () => {
    const result = setEndDate({ value: 1300 });
    expect(result).toEqual({
        type: 'SET_END_DATE',
        payload: {
            value: 1300,
        },
    });
});

test('should generate setTextFilter action object', () => {
    const result = setTextFilter({ text: 'siavash' });
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: {
            text: 'siavash'
        },
    });
});

test('should generate setTextFilter action object with default values', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: {
            text: '',
        },
    });
});

test('should generate setTextFilter action object with undefined values', () => {
    const result = setTextFilter({text: undefined});
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: {
            text: undefined,
        },
    });
});


// Sort by date
test('should generate sortByDate action generator', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'SORT_BY_DATE',
    });
});

// sort by time
test('should generate sortByTime action generator', () => {
    const result = sortByTime();
    expect(result).toEqual({
        type: 'SORT_BY_TIME',
    });
});