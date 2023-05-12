const restaurantsInsertOne = require('../data/restaurants_insert_one.json')

const handleTask = async (collection) => {
    try {
        const result = await collection.insertOne(restaurantsInsertOne)
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = handleTask
