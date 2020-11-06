import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from './../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.text} onChange={(e) => { props.dispatch(setTextFilter({text: e.target.value})) }} />
    </div>
);

const mapStateToProps = (state) => {
    return {
        text: state.filters.text,
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);