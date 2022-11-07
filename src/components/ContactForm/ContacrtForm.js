import React from "react";
import PropTypes from 'prop-types'
import { Form, FormLabel, FormInput, FormButton } from "./ContactForm.styled.jsx"

export class ContacrtForm extends React.Component {
    state = {
        name: '',
        number: '',
    };
    
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }
    
    reset = () => {
        this.setState({ name: '', number: '' });
    }
    
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
    render() {
        const { name, number } = this.state;
        
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormLabel htmlFor={this.nameId}>Name
                    <FormInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    >
                    </FormInput>
                </FormLabel>

                <FormLabel htmlFor={this.nameId}>Number
                    <FormInput
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    >
                    </FormInput>
                </FormLabel>
                <FormButton type="submit">Add contact</FormButton>
            </Form>
        )
    }
}
