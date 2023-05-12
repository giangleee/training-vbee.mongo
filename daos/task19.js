const handleTask = async (collection) => {
    const result = await collection.deleteOne(
        { restaurant_id: '00000001' },
    );
    return result;
};

module.exports = handleTask;
