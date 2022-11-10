import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'
import { Form, FormLabel, FormInput, FormButton } from "./ContactForm.styled.jsx"

export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
        case 'name':
            setName(value);
            break;

        case 'number':
            setNumber(value);
            break;

        default:
            break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name: name, number: number });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

        return (
            <Form onSubmit={handleSubmit}>
                <FormLabel>Name
                    <FormInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    >
                    </FormInput>
                </FormLabel>

                <FormLabel >Number
                    <FormInput
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
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
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
