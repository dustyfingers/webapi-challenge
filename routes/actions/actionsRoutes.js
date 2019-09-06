const express = require("express");
const db = require("../../data/helpers/actionModel.js");
const middleware = require("../../middleware/middleware.js");

const router = express.Router();

// actions routes
router.get("/", middleware.validateProjectId, async (req, res) => {
  const actions = await db.get();
  res.status(200).json({ actions });
});

router.post("/:id", middleware.validateProjectId, async (req, res) => {
  const newAction = await db.insert({ ...req.body, project_id: req.params.id });
  res.status(200).json({ newAction });
});

router.put("/:id", middleware.validateProjectId, async (req, res) => {
  const updatedAction = await db.update(req.params.id, req.body);
  res.status(200).json({ updatedAction });
});

router.delete("/:id/:actionId", middleware.validateProjectId, async (req, res) => {
  const numOfRecordsDeleted = await db.remove(req.params.actionId);
  res.status(200).json({ numOfRecordsDeleted });
});

module.exports = router;
