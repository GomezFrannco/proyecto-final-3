async function setID(schema) {
  const arr = await schema.getAll();
  if (arr.length > 0) {
    const lastItemId = arr[arr.length - 1].id; // --> last element id
    return lastItemId + 1; // --> next element id
  } else {
    return 1;
  }
}

module.exports = {
  setID
}