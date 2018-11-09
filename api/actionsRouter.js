const actionsDb = require("../data/helpers/actionModel");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  actionsDb
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

router.get("/:id", (req, res) => {
  actionsDb
    .get(req.params.id)
    .then(action => {
      if (!action) {
        res.status(404).json({error: "action doesn't exist"});
      } else {
        res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

router.post("/", (req, res) => {
  const newAction = {
    project_id: req.body.project_id,
    description: req.body.description,
    notes: req.body.notes
  };
  actionsDb
    .insert(newAction)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

router.delete("/:id", (req, res) => {
  actionsDb
    .remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({success: `${count} action deleted`});
      } else {
        res
          .status(404)
          .json({error: "action doesn't exist or has already been deleted"});
      }
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = {
    project_id: req.body.project_id,
    description: req.body.description,
    notes: req.body.notes,
    completed: req.body.completed
  };
  actionsDb
    .update(id, changes)
    .then(updated => {
      updated === null
        ? res
            .status(404)
            .json({error: "action doesn't exist or has already been deleted"})
        : res.status(201).json(updated);
    })
    .catch(err => {
      res.status(500).json({error: "something went wrong"});
    });
});

module.exports = router;
