const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var url = require('url');

const Video = require("../models/video");
const User = require("../models/user");

router.get("/", (req, res, next) => {
    var parts = url.parse(req.url, true);
    var query = parts.query;
    var userId = query.userId;
    Video.find( {userid: mongoose.Types.ObjectId(userId)  } ).countDocuments()
      .exec()
      .then(docs => {
        if (docs) {
          res.status(200).json(docs);
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