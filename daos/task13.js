const connectDatabase = require('../database/index');

const handleTask = async (collection) => {
    try {
        const result = await collection
            .aggregate([
                {
                    $match: {
                        $or: [{ borough: 'Staten Island' }, { borough: 'Queens' }, { borough: 'Bronxor Brooklyn' }],
                    },
                },
                {
                    $project: {
                        restaurant_id: 1,
                        name: 1,
                        borough: 1,
                        cuisine: 1
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
