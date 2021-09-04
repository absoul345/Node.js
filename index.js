/* eslint-disable no-case-declarations */
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  uppDate,
} = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case 'get':
      const findContact = await getContactById(Number(id));
      console.table(findContact);
      break;

    case 'add':
      const add = await addContact(name, email, phone);
      console.table(add);
      break;

    case 'remove':
      const remove = await removeContact(Number(id));
      console.table(remove);
      break;

    case 'uppData':
      const upp = await uppDate(Number(id), name);
      console.table(upp);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
