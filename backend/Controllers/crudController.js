function getErrorStatus(error) {
  if (error && error.code === 11000) return 409;
  if (error.name === "ValidationError") return 400;
  if (error.name === "CastError") return 400;
  return 500;
}

function sendError(res, error, action, label) {
  const status = getErrorStatus(error);
  return res.status(status).json({
    message: `Unable to ${action} ${label.toLowerCase()}`,
    ...(status < 500 ? { error: error.message } : {}),
  });
}

function createCrudController(Model, label) {
  return {
    create: async (req, res) => {
      try {
        const record = await Model.create(req.body);
        return res.status(201).json(record);
      } catch (error) {
        return sendError(res, error, "create", label);
      }
    },

    getAll: async (_req, res) => {
      try {
        const records = await Model.find();
        return res.status(200).json(records);
      } catch (error) {
        return sendError(res, error, "fetch", `${label}s`);
      }
    },

    getById: async (req, res) => {
      try {
        const record = await Model.findById(req.params.id);
        if (!record) {
          return res.status(404).json({ message: `${label} not found` });
        }
        return res.status(200).json(record);
      } catch (error) {
        return sendError(res, error, "fetch", label);
      }
    },

    update: async (req, res) => {
      try {
        const record = await Model.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!record) {
          return res.status(404).json({ message: `${label} not found` });
        }
        return res.status(200).json(record);
      } catch (error) {
        return sendError(res, error, "update", label);
      }
    },

    remove: async (req, res) => {
      try {
        const record = await Model.findByIdAndDelete(req.params.id);
        if (!record) {
          return res.status(404).json({ message: `${label} not found` });
        }
        return res
          .status(200)
          .json({ message: `${label} deleted successfully` });
      } catch (error) {
        return sendError(res, error, "delete", label);
      }
    },
  };
}

module.exports = { createCrudController, sendError };
