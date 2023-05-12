const connectDatabase = require('../database/index');

const handleTask = async (collection) => {
    try {
        const result = await collection
            .aggregate([
                {
                    $match: {
                        $and:
                        [
                            { borough: 'Bronx' },
                            { $or: [{ cuisine: 'Chinese' }, { cuisine: 'American ' }] }
                        ],
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
