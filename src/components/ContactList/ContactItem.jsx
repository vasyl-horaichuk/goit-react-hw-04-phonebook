import { ContactItemButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <p>
        {name} : {number}
      </p>
      <ContactItemButton type="button" onClick={() => onDelete(id)}>
        Delete
      </ContactItemButton>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
