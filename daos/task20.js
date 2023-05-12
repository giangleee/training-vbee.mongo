const handleTask = async (collection) => {
    const result = await collection.deleteMany(
        { borough: 'Hanoi' },
    );
    return result;
};

module.exports = handleTask;
