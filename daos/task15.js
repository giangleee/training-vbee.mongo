const connectDatabase = require('../database/index');

const handleTask = async (collection) => {
    try {
        const result = await collection
            .aggregate([
                {
                    $project: {
                        restaurant_id: 1,
                        name: 1,
                        cuisine: 1,
                        borough: 1,
                        address: 1
                    },
                },
                {
                    $match: {
                        'address.coord.1': { $gte: 42, $lte: 52 }
                    }
                }
            ])
            .toArray();
        return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = handleTask;
