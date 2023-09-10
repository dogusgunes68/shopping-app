const bcrypt = require("bcrypt");

exports.hashPassword = async function (password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword", hashedPassword);
  return hashedPassword;
};
