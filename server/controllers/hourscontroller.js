const express = require("express");
const router = express.Router();
const { Hours } = require("../models");

// Get all hours
router.get("/", (req, res) => {
  Hours.findAll()
    .then((hours) => res.status(200).json(hours))
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

// Create hours
router.post("/create", (req, res) => {
  try {
    Hours.create({
      name: req.body.name,
      date: req.body.date,
      role: req.body.role,
      hours: req.body.hours,
      description: req.body.description,
      owner: req.user.id,
    });
    res.status(200).json({
      //   hours: hours,
      message: "Hours submitted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Hours failed to submit",
    });
  }
});

// Update hours by ID
router.put("/:id", (req, res) => {
  const query = req.params.id;

  Hours.update(req.body, { where: { id: query } })
    .then((hoursUpdated) => {
      Hours.findOne({ where: { id: query } }).then((locatedUpdatedHours) => {
        res.status(200).json({
          hours: locatedUpdatedHours,
          message: "Hours updated",
        });
      });
    })
    .catch((err) =>
      res.json({
        err,
      })
    );
});

// Delete hours by ID
router.delete("/:id", (req, res) => {
  Hours.destroy({
    where: { id: req.params.id },
  })
    .then((hours) =>
      res.status(200).json({
        hours: hours,
        message: "Hours deleted",
      })
    )
    .catch((err) => res.json(err));
});

module.exports = router;
