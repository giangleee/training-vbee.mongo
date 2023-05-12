const connectDatabase = require('../database/index');
const daos = require('../daos');

const baseController = async (request, response) => {
    const { id } = request.query;
    const collection = await connectDatabase('restaurants');

    let result = [];

    switch (parseInt(id)) {
        case 1:
            result = await daos.task1(collection);
            break;
        case 2:
            result = await daos.task2(collection);
            break;
        case 3:
            result = await daos.task3(collection);
            break;
        case 4:
            result = await daos.task4(collection);
            break;
        case 5:
            result = await daos.task5(collection);
            break;
        case 6:
            result = await daos.task6(collection);
            break;
        case 7:
            result = await daos.task7(collection);
            break;
        case 8:
            result = await daos.task8(collection);
            break;
        case 9:
            result = await daos.task9(collection);
            break;
        case 10:
            result = await daos.task10(collection);
            break;
        case 11:
            result = await daos.task11(collection);
            break;
        case 12:
            result = await daos.task12(collection);
            break;
        case 13:
            result = await daos.task13(collection);
            break;
        case 14:
            result = await daos.task14(collection)
            break
        case 15:
            result = await daos.task15(collection)
            break
        case 16:
            result = await daos.task16(collection)
            break
    }

    return response.send(result);
};

module.exports = baseController;
