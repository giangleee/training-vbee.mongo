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
                        filterBorough: {
                            $and: [
                                { $ne: ['$borough', 'Queens'] },
                                { $ne: ['$borough', 'Staten Island'] },
                                { $ne: ['$borough', 'Bronxor Brooklyn'] },
                            ],
                        },
                    },
                },
            ])
            .toArray();
        return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = handleTask;
