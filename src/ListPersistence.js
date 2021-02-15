const { MongoClient, ObjectID } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017');
const dbName = 'todos'

module.exports = {
    delete: async (_id) => {
        try {
            await client.connect()
            const db = client.db(dbName)
            const collection = db.collection('lists')
            const result = await collection.deleteOne({ _id: new ObjectID(_id) })
            return result
        } catch (e) {
            console.log(e)
        }
    },
    insert: async (newList) => {
        try {
            await client.connect()
            const db = client.db(dbName)
            const collection = db.collection('lists')
            const result = await collection.insertOne(newList)
            return result
        } catch (e) {
            console.log(e)
        }
    },

    update: async (list) => {
        try {
            let _id = ObjectID(list._id)
            await client.connect()
            const db = client.db(dbName)
            const collection = db.collection('lists')
            delete list._id
            let updateResult = await collection.updateOne({ "_id": _id }, { $set: list }, { upsert: true })

            if (updateResult.upsertedId) {
                _id = updateResult.upsertedId._id
            }

            let result = await collection.findOne({ _id })
            return result
        } catch (e) {
            console.log(e)
        }
    },

    list: async () => {
        try {
            await client.connect()
            const db = client.db(dbName)
            const collection = db.collection('lists')
            const results = await collection.find({}).toArray()
            return results
        } catch (e) {
            console.log(e)
        }
    },

    searchByKey: async (key) => {
        try {
            await client.connect()
            const db = client.db(dbName)
            const collection = db.collection('lists')
            const result = await collection.findOne({ 'key': key })
            return result
        } catch (e) {
            console.log(e)
        }
    }
}