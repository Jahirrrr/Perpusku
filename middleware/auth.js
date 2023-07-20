/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */


const jwt = require("jsonwebtoken");
const jwtSecret = "PerpusKuKeren"

module.exports = function (req, res, next) {
	const token = req.header("x-auth-token");

	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied." });
	}

	try {
		const decoded = jwt.verify(token, jwtSecret);
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: "Token is not valid." });
	}
};
