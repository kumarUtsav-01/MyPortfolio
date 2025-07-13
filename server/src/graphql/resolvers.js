const Portfolio = require("../models/Portfolio");

const resolvers = {
  Query: {
    details: async () => {
      const portfolio = await Portfolio.findOne();
      console.log(portfolio);
      return portfolio;
    },
  },
};

module.exports = resolvers;
