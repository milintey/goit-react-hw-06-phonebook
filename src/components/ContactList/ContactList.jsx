import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { filterContact } from 'components/FilterContact/FilterContact';
import { contactsState, filterState } from 'redux/selectors';
import {
  Button,
  ContactItem,
  ContactText,
} from '../ContactList/ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactsItem = useSelector(contactsState);
  const filter = useSelector(filterState);

  const contacts = filterContact(contactsItem, filter);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts &&
          contacts.map(({ id, name, number }) => {
            return (
              <ContactItem key={id}>
                <ContactText>{name}: </ContactText>
                <ContactText>{number}</ContactText>
                <Button
                  onClick={() => dispatch(deleteContact(id))}
                  type="button"
                >
                  Delete
                </Button>
              </ContactItem>
            );
          })}
      </ul>
    </div>
  );
};
