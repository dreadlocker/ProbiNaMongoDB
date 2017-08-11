const { MongoClient, ObjectID } = require('mongodb');
const connectionString = 'mongodb://localhost/doncho-db';

MongoClient.connect(connectionString)
    .then(async(db) => {
        const collection = db.collection('todos');
        // const filter = {
        //     // text: {
        //     //     $in: ['Todo #11']
        //     // }
        // };
        // const selection = {
        //     //  text: ''
        // };
        // const page = 1;
        // const limit = 400;
        // const skip = (page - 1) * limit;
        // // await collection.deleteMany({ isDone: true });
        // const todos = await collection.find(filter, selection, skip, limit).toArray();
        // const todo = todos[0];
        // todo.isDone = true;
        // collection.updateOne({ _id: todo._id }, todo);
        // // await collection.insertOne({ text: 'Wash the dishes' });
        // console.log(todos);

        const todos = await collection.find({
            users: {
                $elemMatch: {
                    $in: ['Jong']
                }
            }
        }).toArray();
        console.log(todos);
    })