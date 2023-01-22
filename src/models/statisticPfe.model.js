const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statisticSchema = new Schema({
  pfe_name:{
    type: Number,
    required: true,
  },
  pfe_count: {
    type: Number,
    default:0
  }
});

module.exports = mongoose.model("statistic", statisticSchema, "statistics");
