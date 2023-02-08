import React, { Component } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          <FormInput
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contacts</FormButton>
      </Form>
    );
  }
}
