const Company = require('../models/company.model');
const {country} = require('../models/country.model');
const {promotion} = require('../models/promotion.model');
const {statisticPfe} = require('../models/statisticPfe.model');


 function increment(model) {
    const company = mongoose.model(Company);
    switch (model.constructor.modelName) {
        case "student":
            company.findOneAndUpdate( {company_name: model.company}, 
                {$inc : {'company_count' : 1}}, 
                { upsert: true, new: true, setDefaultsOnInsert: true }, 
                );
            
                country.findOneAndUpdate( {country_name: model.company}, 
                {$inc : {'student_count' : 1}}, 
                { upsert: true, new: true, setDefaultsOnInsert: true }, 
                );
            
                promotion.findOneAndUpdate( {year: model.first_year}, 
                {$inc : {'promotion_count' : 1}}, 
                { upsert: true, new: true, setDefaultsOnInsert: true }, 
                );
            
            break;

        case "pfe":
            
        // pfe treatment
            
            break;
    
        default:
            break;
    }
    model.findOneAndUpdate()
    console.log("Hello World")
  }

  module.exports = {
    increment
  };