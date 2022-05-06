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
