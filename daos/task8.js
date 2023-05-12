const handleTask = async (colelction) => {
    const result = await colelction.find({borough: 'Bronx'}).skip(5).limit(5).toArray()
    return result
}

module.exports = handleTask
