
const IndexController = require("../controllers/IndexController");

const express = require("express");
const router = express.Router();
router.get('/kurse/einzelcoaching', function(req, res) {
  res.redirect('/courses')
});
router.get('/kurse/jahreskurs', function(req, res) {
  res.redirect('/courses')
});
router.get('/kurse/orientierungskurs', function(req, res) {
  res.redirect('/courses')
});
router.get('/kurse', function(req, res) {
  res.redirect('/courses')
});
router.get('/en/:path', function(req, res) {
  res.redirect(301, '/'+req.param('path'))
});
router.get("*", (req, res, next) => {
  res.redirect(301, "/")
})

module.exports = router