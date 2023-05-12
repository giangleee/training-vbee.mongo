const handleTask = async (collection) => {
    const result = await collection.updateMany(
        { borough: 'Hai Ba Trung' },
        {
            $set: {
                borough: 'Hanoi',
            },
        }
    );
    return result;
};

module.exports = handleTask;
