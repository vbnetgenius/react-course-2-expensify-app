import filtersReducer from './../../reducers/filters';

test('should setup default filter values', () => {
    const result = filtersReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual({
        text: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined,
    });
});

test("should set text filter to siavash", () => {
    const result = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        payload: {
            text: 'siavash'
        },
    });
    expect(result.text).toBe('siavash');
});

test("should set start date", () => {
    const result = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        payload: {
            value: 1000,
        },
    });
    expect(result.startDate).toBe(1000);
});

test("should set end date", () => {
    const result = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        payload: {
            value: 2000,
        },
    });
    expect(result.endDate).toBe(2000);
});

test("should set sort by to amount", () => {
    const result = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT',        
    });
    expect(result.sortBy).toBe('amount');
});

test("should set sort by to time", () => {
    const result = filtersReducer(undefined, {
        type: 'SORT_BY_TIME',
    });
    expect(result.sortBy).toBe('time');
});