const typeDefs =`
type Card {
_id: ID
name String
description: String
}

type Query {
    card: [Card]!
}
    
type Mutation {
    addCard(name: String!, description: String!): Card
    }
`

module.exports = typeDefs;