const sortContacts = (contacts, isAsc) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  const result = [...contacts];

  if (isAsc === true || isAsc === undefined) {
    const result = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return result;
  }
  if (isAsc === false) {
    const result = contacts.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    return result;
  }
  return result;
};

const contacts = [
  { name: 'Suzy', phoneNumber: '222-22-22' },
  { name: 'Adel', phoneNumber: '111-11-22' },
  { name: 'Brenda', phoneNumber: '111-11-22' },
];

console.log(sortContacts(contacts));