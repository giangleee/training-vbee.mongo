const connectDatabase = require('../database/index')
const daos = require('../daos')

const baseController = async (request, response) => {
    const { id } = request.query
    const collection = await connectDatabase('restaurants')

    let result = []

    switch (parseInt(id)) {
        case 1:
            result = await daos.task1(collection)
            break;
        case 2:
            result = await daos.task2(collection)
            break
        case 3:
            result = await daos.task3(collection)
            break
        case 4:
            result = await daos.task4(collection)
            break
        case 12:
            result = await daos.task12(collection)
            break
        case 13:
            result = await daos.task13(collection)
            break
    }

    return response.send(result)
}

module.exports = baseController
