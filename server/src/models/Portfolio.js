const { Schema, model } = require("mongoose");

const portfolioSchema = new Schema({
  about: {
    profileImage: String,
    description: String,
    resume: String,
  },
  experience: {
    companyList: [String],
    descriptionList: [String],
    workDetailsList: [[String]],
    skillList: [String],
    durationList: [String],
  },
  contact: {
    email: String,
    description: String,
  },
});

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;
