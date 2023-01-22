const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    year:{
        type: Number,
        required: true,
      },
      promotion_count: {
        type: Number,
        default:0
      },
  
});

module.exports = mongoose.model("promotion", promotionSchema, "promotions");
