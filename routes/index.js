var express = require("express");
var router = express.Router();

let landing = require("../controllers/landing");
let user = require("../controllers/user");

let { isLoggedIn, hasAuth } = require("../middleware/hasAuth.js");

router.get("/login", user.show_login);
router.get("/signup", user.show_signup);
router.post("/login", user.login);
router.post("/signup", user.signup);
router.post("/logout", user.logout);
router.get("/logout", user.logout);

/* GET home page. */
router.get("/", landing.get_landing);
router.post("/", landing.submit_lead); // CREATE
router.get("/leads", hasAuth, landing.show_leads); // READ
router.get("/lead/:lead_id", hasAuth, landing.show_lead); // READ by id
router.get("/lead/:lead_id/edit", hasAuth, landing.show_edit_lead);
router.post("/lead/:lead_id/edit", hasAuth, landing.edit_lead); // UPDATE
router.post("/lead/:lead_id/delete", hasAuth, landing.delete_lead); // DELETE
router.post("/lead/:lead_id/delete-json", hasAuth, landing.delete_lead_json);

module.exports = router;
