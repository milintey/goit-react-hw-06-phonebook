import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { filterContact } from 'components/FilterContact/FilterContact';

import {
  Button,
  ContactItem,
  ContactText,
} from '../ContactList/ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const contactsItem = useSelector(state => state.contacts.items);

  const filter = useSelector(state => state.contacts.filter);

  const contacts = filterContact(contactsItem, filter);
  console.log(contacts);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <ContactText>{name}: </ContactText>
              <ContactText>{number}</ContactText>
              <Button onClick={() => dispatch(deleteContact(id))} type="button">
                Delete
              </Button>
            </ContactItem>
          );
        })}
      </ul>
    </div>
  );
}
