import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactFrom';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import { nanoid } from 'nanoid';
import inicialContacts from '../components/user.contacts.json';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(
      i =>
        (i.name.toLowerCase() === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      console.log('CONTACTS AVAILABLE');
    } else {
      console.log('NO AVAILABLE');
      this.setState({ contacts: inicialContacts });
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      console.log('UPDATE!!! CONTACTS CHANGE');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <Title title="Phonebook" />
        <ContactForm onSubmit={this.addContact} />
        <Title title="Contacts" />
        <Filter
          filter={this.state.filter}
          changeFilterInput={this.changeFilterInput}
        />
        <ContactList
          items={this.findContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
