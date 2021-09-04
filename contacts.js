const updateContacts = require('./updateContacts');
const contacts = require('./db/contacts.json');
const { v4: uuidv4 } = require('uuid');

// TODO: задокументировать каждую функцию

async function listContacts() {
  try {
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const findContact = contacts.find(contact => contact.id === contactId);
    if (!findContact) {
      return null;
    }
    return findContact;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const idx = contacts.findIndex(item => item.id === contactId);
    if (!idx) {
      return console.log("This 'id' not exist");
    }
    // const removeContact = contacts[idx];
    contacts.splice(idx, 1);
    await updateContacts(contacts);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const newContact = { id: uuidv4(), name, email, phone };
    contacts.push(newContact);
    await updateContacts(contacts);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
}

async function uppDate(contactId, name) {
  try {
    const idx = contacts.findIndex(item => item.id === contactId);
    if (!idx) {
      return console.log("This 'id' don't exist");
    }
    contacts[idx] = { ...contacts[idx], name };
    await updateContacts(contacts);
    return contacts[idx];
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  uppDate,
};
