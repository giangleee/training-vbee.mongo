const connectDatabase = require('../database/index');

const handleTask = async (collection) => {
    try {
        const result = await collection
            .aggregate([
                {
                    $match: {
                        $and: [
                            {
                                $or: [
                                    {borough: 'Staten Island'},
                                    {borough: 'Queens'},
                                    {borough: 'Bronxor Brooklyn'},
                                ],
                            },
                        ],
                    },
                },
                {
                    $group: {
                        _id: "$_id",
                        // _id: '$restaurant_id',
                        restaurant_id: { "$first": "$restaurant_id" },
                        name: { "$first": "$name" },
                        borough: { "$first": "$borough" },
                        cuisine: { "$first": "$cuisine" },
                    }
                }
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
