const restaurantsInsertMany = require('../data/restaurants_insert_many.json')

const handleTask = async (collection) => {
    try {
        const result = await collection.insertMany(restaurantsInsertMany)
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = handleTask
