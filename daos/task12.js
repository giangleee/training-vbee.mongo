const connectDatabase = require('../database/index');

const handleTask = async (collection) => {
    try {

        const result = await collection
            .aggregate([
                {
                    $unwind: { path: '$grades' },
                },
                {
                    $match: {
                        $and: [{ borough: 'Bronx' }, { $or: [{ cuisine: 'Chinese' }, { cuisine: 'American ' }] }],
                    },
                },
                // {
                //     $group: {
                //         _id: '$restaurant_id',
                //         total_sum: { $sum: '$grades.score' },
                //         name: { "$first": "$name" }
                //     },
                // },
                // {
                //     $match: {
                //         total_sum: { $gte: 70, $lte: 100 },
                //     },
                // },
            ])
            .toArray();
        return result
    } catch (error) {
        console.log(error);
    }
};

module.exports = handleTask;
