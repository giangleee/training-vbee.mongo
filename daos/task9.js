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
                },
            },
            {
                $match: {
                    total_score: { $gte: 90 },
                },
            },
        ])
        .toArray();

    return result;
};

module.exports = handleTask;
