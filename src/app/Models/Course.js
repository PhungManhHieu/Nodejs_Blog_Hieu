const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
