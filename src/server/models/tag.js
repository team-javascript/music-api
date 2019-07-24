const mongoose = require('mongoose');

module.exports = mongoose.model('Tag', {
  name: { type: String }
});
