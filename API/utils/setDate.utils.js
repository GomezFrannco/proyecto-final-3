function setDate() {
  const date = new Date();
  return `[${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
}

module.exports = { setDate };
