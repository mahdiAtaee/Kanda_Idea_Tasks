module.exports = (req, res) => {
  const userInfo = req.cookies;
  const info = req.flash("user");
  const data = userInfo[info];
  res.render("dashboard/index", { layout: false, data });
};
