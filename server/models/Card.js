const { Schema, model } = require('mongoose')

const cardSchema = new Schema(
    {
        name: {
            type: String
        },
        description: {
             type: String   
        },
        price: {
            type: Igniter 
        }
    }
);

const Card = model("Card", cardSchema);

module.exports = Card;