const handleTask = async (collection) => {
    const result = collection
        .aggregate([
            {
                $unwind: '$grades',
            },
            {
                $group: {
                    _id: '$restaurant_id',
                    total_score: { $sum: '$grades.score' },
                    name: { $first: '$name' },
                    cuisine: { $first: '$cuisine' },
                    address: { $first: '$address' },
                },
            },
            {
                $match: {
                    total_score: { $gte: 70 },
                    cuisine: 'American ',
                    'address.coord.0': { $lte: -65.754168 }
                },
            },
        ])
        .toArray();

    return result;
};

module.exports = handleTask;
