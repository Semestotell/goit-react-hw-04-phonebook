import PropTypes from 'prop-types';
import { Contact, ContactButton, ContactItem } from './Contacts.styled.jsx';


export const ContactsItem = ({ id, name, number, onClick }) => {
    return (
        <ContactItem key={id}>
            <Contact>{name}: {number}</Contact>
            <ContactButton
                type="button"
                onClick={() => onClick(id)}
            >
                Delete
            </ContactButton>
        </ContactItem>
    );
};

ContactsItem.propType = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};