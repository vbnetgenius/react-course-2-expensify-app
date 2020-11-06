// Get visible expenses
export default (expenses, { text, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description && expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    });
};