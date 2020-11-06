import React from 'react';
import { connect } from 'react-redux';

export class ExpenseForm extends React.Component {

    state = {
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? this.props.expense.amount : '',
        description: this.props.expense ? this.props.expense.description : '',
        error: undefined,    
    };

    handleAddExpense = (e) => {
        e.preventDefault();  
        
        if (!this.state.note || !this.state.amount || !this.state.description) {
            this.setState(() => ({
                error: 'Please fill out form fields',
            }));
        } else {
            
            this.setState(() => ({
                error: '',
            }));
                    
            this.props.onSubmit({
                note: this.state.note,
                amount: this.state.amount,
                description: this.state.description,                
            });

        }

    };

    handleChange = (e) => {
        this.setState((prevState) => {
            return {
                [e.target.name]: e.target.value,
            };
        });
    };

    render() {
        return <div>

            { this.state.error && <p>{this.state.error}</p> }

            <form onSubmit={this.handleAddExpense}>
                <input name="description" type="text" placeholder="Description" autoFocus={true} onChange={this.handleChange} />
                <input name="amount" type="text" placeholder="Amount" onChange={this.handleChange} />            
                <textarea name="note" cols="30" rows="10" onChange={this.handleChange}></textarea>           
                <button>Add Expense</button>
            </form>

        </div>
    }

}

export default connect()(ExpenseForm);