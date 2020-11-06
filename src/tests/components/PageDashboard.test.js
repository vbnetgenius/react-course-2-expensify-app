import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PageExpenseDashboard from './../../components/PageExpenseDashboard';

test('should render PageDashboard correctly', () => {
    const wrapper = shallow(<PageExpenseDashboard />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});