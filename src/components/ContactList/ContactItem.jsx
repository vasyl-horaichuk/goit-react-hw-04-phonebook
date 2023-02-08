import { ContactItemButton } from './ContactItem.styled';

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
