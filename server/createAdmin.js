var User = require("./models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { builtinModules } = require("module");

var createadmin = async (res) => {
  const user = new User({
    name: "Admin Sekolah",
    email: "perpuskuapp@gmail.com",
    dob: new Date(),
    phone: "083871689461",
    isAdmin: true,
    photoUrl: "https://pngfre.com/wp-content/uploads/anime-png-image-pngfre-1.jpg"
  });

  await user.setPassword("Perpusku");
  user.save(user);
};

console.log("Berhasil menambahkan Admin");

module.exports = createadmin;