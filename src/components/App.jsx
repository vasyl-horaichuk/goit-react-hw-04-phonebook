import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactFrom';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import { nanoid } from 'nanoid';
// import inicialContacts from '../components/user.contacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const enterContacts = contacts.some(
      i =>
        (i.name === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    );
    enterContacts
      ? alert(`${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };

  const changeFilterInput = e => {
    setFilter(e.target.value);
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <Title title="Phonebook" />
      <ContactForm onSubmit={addContact} />
      <Title title="Contacts" />
      <Filter filter={filter} changeFilterInput={changeFilterInput} />
      <ContactList items={findContacts()} onDelete={deleteContact} />
    </div>
  );
};
