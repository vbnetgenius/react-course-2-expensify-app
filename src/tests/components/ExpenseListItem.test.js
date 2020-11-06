import React from 'react';
import { shallow } from 'enzyme';
import { Expense } from './../fixtures/expense';
import toJSON from 'enzyme-to-json';
import { ExpenseListItem } from '../../components/ExpenseListItem';

test('should render ExpenseListItem with fixture', () => {
    const wrapper = shallow(<ExpenseListItem {...Expense} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});