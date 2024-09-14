const { Card } = require('../models/');

const resolvers = {
    Query: {
        cards: async () => {
            return Card.find({});
        }
    },

    Mutation: {
        addCard: async (parent, {name, description, price}) => {
            console.log(name);
            console.log(description);
            console.log(price);
            return Card.create({ name, description, price})
        }
    }
};

module.exports = resolvers;