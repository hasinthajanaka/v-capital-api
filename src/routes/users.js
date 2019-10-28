const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

var url = require('url');

router.get("/", (req, res, next) => {
  // Get the page number
  var parts = url.parse(req.url, true);
  var query = parts.query;
  var page = query.page;

  User.paginate({}, { page: page, limit: 25 }).then(result => {
    if (result.docs.length >= 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({
        message: 'No entries found'
      });
    }
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;