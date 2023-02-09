import { ContactItem } from './ContactItem';
import { UserContactItem, UserContactList } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ items, onDelete }) => {
  return (
    <UserContactList>
      {items.map(item => (
        <UserContactItem key={item.id}>
          <ContactItem contact={item} onDelete={onDelete} />
        </UserContactItem>
      ))}
    </UserContactList>
  );
};

ContactItem.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};
