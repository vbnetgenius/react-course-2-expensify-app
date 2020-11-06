import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseForm } from './../../components/ExpenseForm';
import toJSON from 'enzyme-to-json';
import { expenses } from './../fixtures/expenses';

// test("should ExpenseForm render correctly", () => {
//     const wrapper = shallow(<ExpenseForm />);
//     expect(toJSON(wrapper)).toMatchSnapshot();
// });


test('should render form with error message', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
});


test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            name: 'amount',
            value: 155000,
        },
    });
    expect(wrapper.state('amount')).toBe(155000);
});


test('should call onSubmit with valid form submissions', () => {
    const onSubmitSpy = jest.fn();
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy} />);
    wrapper.find('form').first().simulate('submit', {
        preventDefault: () => {},
    });
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        note: expense.note,
        amount: expense.amount,
        description: expense.description
    });
});
