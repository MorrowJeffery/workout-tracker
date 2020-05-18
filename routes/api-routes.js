const router = require("express").Router();
const workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    workout.find()
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    workout.find({}).limit(7)
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.post("/api/workouts", (req, res) => {
    workout.create({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.put("/api/workouts/:id", ({ body, params }, res) => {
    workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.delete("/api/workouts", ({ body }, res) => {
    workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });

  module.exports = router;