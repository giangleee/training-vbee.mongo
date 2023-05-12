const connectDatabase = require('../database/index');

const handleTask = async (collection) => {
    try {
        const result = await collection
            .aggregate([
                {
                    $match: {
                        'address.street': { $exists: true, $type: "string" }
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
