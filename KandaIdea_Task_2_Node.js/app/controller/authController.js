exports.showLogin = (req, res) => {
  res.render("auth/login", { layout: "auth", error: req.flash("error") });
};
exports.doLogin = (req, res) => {
  const userInfo = req.cookies;
  const { username, password } = req.body;
  if (Object.keys(userInfo).includes(username)) {
    const user = userInfo[username];
    if (user.password === password) {
      req.flash("user", username);
      res.redirect("/dashboard");
    } else {
      req.flash("error", "نام کاربری یا کلمه عبور اشتباه است");
      res.redirect("/");
    }
  } else {
    req.flash("error", "لطفا نام کاربری معتبر وارد نمایید");
    res.redirect("/");
  }
};
exports.showRegister = (req, res) => {
  res.render("auth/register", { layout: "auth" });
};
exports.doRegister = (req, res) => {
  const body = req.body;
  res
    .cookie(body.username, body, { httponly: true })
    .send({ withCookie: true })
    .redirect("/");
};
