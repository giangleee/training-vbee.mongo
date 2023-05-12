const handleTask = async (colelction) => {
    const result = await colelction.find({borough: 'Bronx'}).limit(5).toArray()
    return result
}

module.exports = handleTask
