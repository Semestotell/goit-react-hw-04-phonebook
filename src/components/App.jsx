import React from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContacrtForm } from './ContactForm/ContacrtForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './Conatcts/ContactsList';



export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase()
    const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    )
    if (findName) {
      return alert(`${name} is already in contacts.`)
    }

    const findNumber = this.state.contacts.find(
      contact => contact.number === number
    )
    if (findNumber) {
      return alert('This phone number is already in use.')
    }
    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };
  
  getContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter));
  };

  deleteContact = contactId  => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    const { name, value }=e.currentTarget;
    this.setState({ [name]: value });
  }; 

  componentDidMount() {
    const contactLocal = localStorage.getItem('contacts');
    const contactLocalParsed = JSON.parse(contactLocal);
    if (contactLocalParsed) {
      this.setState({contacts: contactLocalParsed})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  

  render() {
    
    const { filter } = this.state;
    const visible = this.getContacts();
    
    return (
      <>
        <Section title="Phonebook">
          <ContacrtForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleFilter} />
          <ContactsList
            contacts={visible}
            onDelete={this.deleteContact}
          />
        </Section>
      </>
    )
  }
};
