import {
  MainContainer,
  FormContainer,
  ContactsContainer,
  Title,
  TitleContacts,
} from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <MainContainer>
      <FormContainer>
        <Title>Phonebook</Title>
        <ContactForm />
      </FormContainer>
      <ContactsContainer>
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        <ContactsList />
      </ContactsContainer>
    </MainContainer>
  );
}
