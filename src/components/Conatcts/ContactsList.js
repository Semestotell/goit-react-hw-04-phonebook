import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem';
import { ContactList } from './Contacts.styled.jsx';

export const ContactsList = ({ contacts, onDelete }) => {
    return (
        <ContactList>
            {contacts.map(({ id, name, number }) => (
                <ContactsItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onClick={onDelete}
                />
            ))}
        </ContactList>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ),
    onDelete: PropTypes.func.isRequired,
};