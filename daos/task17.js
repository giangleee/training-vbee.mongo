const handleTask = async (collection) => {
    const result = await collection.findOneAndUpdate(
        { restaurant_id: '00000001' },
        {
            $set: {
                grades: 'Five Star',
            },
        }
    );
    return result;
};

module.exports = handleTask;
