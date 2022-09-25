import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormButton, FormInput } from './ContactForm.styled';
import { addContact } from 'redux/actions';

// СТИЛИ ФОРМЫ

// КОНЕЦ СТИЛЕЙ ФОРМЫ

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const formSubmit = (value, { resetForm }) => {
    const contact = {
      ...value,
      id: nanoid(),
    };

    dispatch(addContact(contact));
    console.log(addContact(contact));
    console.log(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </label>
        <FormButton type="submit">Add Contact</FormButton>
      </Form>
    </Formik>
  );
};

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
