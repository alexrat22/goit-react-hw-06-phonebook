import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';
import { ContactList, ContactItem, RemoveButton } from './ContactsList.styled';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactList>
      {filteredContacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <RemoveButton
              type="button"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </RemoveButton>
          </ContactItem>
        );
      })}
    </ContactList>
  );
}
