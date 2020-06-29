const { Model }     = require('../models/model');
const user          = new Model('users');

module.exports = {
  // Display a list of all UserInstances.
  index: async (req, res) => {
    try {
      const data = await user.select('*');
      res.status(200).json({ data: data.rows });
    } catch (err) {
      res.status(200).json({ error: err.stack });
    }
  },

  // Display the specific UserInstance.
  show: (req, res) => {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
  }
}
