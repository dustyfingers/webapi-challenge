const db = require('../data/helpers/projectModel');

const middleware = {
  validateProjectId: async (req, res, next) => {
      try {
        const project = await db.get(req.params.id);
        if (project) {
          next();
        } else {
          res.status(500).json({ error: "project does not exist" });
        }
      } catch (err) {
        console.log(err.message);
      }
  }
}

module.exports = middleware;