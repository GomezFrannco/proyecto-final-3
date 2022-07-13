function customEmail(arr, user) {
  let zero = 0;
  let order = `<h1>🛒 New order from ${user} 🛒:</h1>`;
  order += "<ul>";
  for (const i of arr.products) {
    const currentTotal = i.price;
    zero = zero + currentTotal;
    order += `
    <li>
      <p>Product: ${i.title}</p>
      <p>Price: $${i.price}</p>
    </li>
    `;
  }
  order += "</ul>";
  order += "<hr>";
  order += `<h2>Total: $${zero}</h2>`;
  return order;
}

function customWhatsapp(arr, user) {
  let zero = 0;
  let order = `*${user}'s order 🛒:*\n`;
  for (const i of arr.products) {
    const currentTotal = i.price;
    zero = zero + currentTotal;
    order += `Product: *${i.title}*\n`;
    order += `Price: *$${i.price}*\n`;
    order += `\n`;
  }
  order += `\nTotal: *$${zero}*`;
  return order;
}


module.exports = {
  wpp: customWhatsapp,
  email: customEmail,
}