function getMain(_req, res) {
  res.status(200).render("pages/home.pages.ejs", {
    partial: "main.partials.ejs",
  });
}

function getAccount(_req, res) {
  res.status(200).render("pages/home.pages.ejs", {
    partial: "account.partials.ejs",
  })
}

function getCart(_req, res) {
  res.status(200).render("pages/home.pages.ejs", {
    partial: "cart.partials.ejs",
  })
}

module.exports = {
  get: {
    main: getMain,
    account: getAccount,
    cart: getCart,
  },
};
