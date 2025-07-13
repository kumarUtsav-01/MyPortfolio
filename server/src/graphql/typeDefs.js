const { gql } = require("apollo-server");

module.exports = gql`
  type About {
    profileImage: String!
    description: String!
    resume: String!
  }

  type Experience {
    companyList: [String!]!
    descriptionList: [String!]!
    workDetailsList: [[String!]!]!
    skillList: [String!]!
    durationList: [String!]!
  }

  type Contact {
    email: String!
    description: String!
  }

  type Portfolio {
    about: About!
    experience: Experience!
    contact: Contact!
  }

  type Query {
    details: Portfolio!
  }
`;
