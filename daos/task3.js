const connectDatabase = require('../database/index')

const handleTask = async (collection) => {
    try {
        const result = await collection.find({}).toArray()
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = handleTask
