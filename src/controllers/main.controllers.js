function getMain(_req, res) {
  res.status(200).render("pages/home.pages.ejs", {
    partial: "main.partials.ejs",
  });
}

function getAccount(req, res) {
  const user = {
    name: req.user.name,
    age: req.user.age,
    adress: req.user.adress,
    phone: req.user.phone,
    picture: req.user.picture,
  }

  res.status(200).render("pages/home.pages.ejs", {
    partial: "account.partials.ejs",
    avatar: user.picture,
  });
}

function getCart(_req, res) {
  res.status(200).render("pages/home.pages.ejs", {
    partial: "cart.partials.ejs",
  });
}

module.exports = {
  get: {
    main: getMain,
    account: getAccount,
    cart: getCart,
  },
};
