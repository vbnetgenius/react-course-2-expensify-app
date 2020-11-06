import selectExpenses from '../../selectors/expenses';
import { expenses } from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'siavash',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[0],
    ]);
});