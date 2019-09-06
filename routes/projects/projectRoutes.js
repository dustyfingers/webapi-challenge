const express = require("express");
const db = require("../../data/helpers/projectModel");
const middleware = require("../../middleware/middleware.js");

const router = express.Router();

// projects routes
router.get("/:id", middleware.validateProjectId, async (req, res) => {
  const project = await db.get(req.params.id);
  res.status(200).json({ project });
});

router.get("/:id/actions", middleware.validateProjectId, async (req, res) => {
  const actions = await db.getProjectActions(req.params.id);
  res.status(200).json({ actions });
});

router.post("/", async (req, res) => {
  const newProject = await db.insert(req.body);
  res.status(200).json({ newProject });
});

router.put("/:id", middleware.validateProjectId, async (req, res) => {
  const updatedProject = await db.update(req.params.id, req.body);
  res.status(200).json({ updatedProject });
});

router.delete("/:id", middleware.validateProjectId, async (req, res) => {
  const numOfRecordsDeleted = await db.remove(req.params.id);
  res.status(200).json({ numOfRecordsDeleted });
});

module.exports = router;
