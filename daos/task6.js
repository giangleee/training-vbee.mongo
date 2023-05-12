const handleTask = async (collection) => {
    try {
        const result = await collection.find({borough: "Bronx"}).toArray();
        return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = handleTask;
