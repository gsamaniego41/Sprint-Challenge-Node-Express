const projectDb = require("../data/helpers/projectModel");
const express = require("express");
const router = express.Router();

// GET ALL
router.get("/", (req, res) => {
  projectDb
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

// GET BY ID
router.get("/:id", (req, res) => {
  projectDb
    .get(req.params.id)
    .then(project => {
      console.log(project);
      if (!project) {
        res.status(404).json({error: "project doesn't exist"});
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

// GET ACTIONS BY PROJECT ID
router.get("/:id/actions", (req, res) => {
  projectDb
    .getProjectActions(req.params.id)
    .then(project => {
      console.log(project);
      if (!project) {
        res.status(404).json({error: "project doesn't exist"});
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

// NEW PROJECT
router.post("/", (req, res) => {
  const newProject = {
    name: req.body.name,
    description: req.body.description
  };
  projectDb
    .insert(newProject)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

// DELETE A PROJECT
router.delete("/:id", (req, res) => {
  projectDb
    .remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({succes: `${count} project deleted`});
      } else {
        res
          .status(404)
          .json({error: "project doesn't exist or has already been deleted"});
      }
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

// UPDATE A PROJECT
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = {
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed
  };
  projectDb
    .update(id, changes)
    .then(updated => {
      updated === null
        ? res
            .status(404)
            .json({error: "project doesn't exist or has already been deleted"})
        : res.status(201).json(updated);
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

module.exports = router;
