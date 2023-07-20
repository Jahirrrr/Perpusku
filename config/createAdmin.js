/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */


 const { User } = require("../models/User");
 const bcrypt = require("bcrypt");
 
 var createAdmin = async () => {
   const users = new User({
     name: "adminPerpus",
     email: "perpus@smkn21jakarta.sch.id",
     password: "perpussmkn21",
     category: "ADMIN",
     productKey: "PerpusKuKeren"
   });
 
   const salt = await bcrypt.genSalt(10);
   users.password = await bcrypt.hash(users.password, salt);
 
   await users.save();
   console.log("Akun admin berhasil dibuat");
 };
 
 module.exports = createAdmin;