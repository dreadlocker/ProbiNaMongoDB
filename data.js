const { MongoClient, ObjectID } = require('mongodb');
const connectionString = 'mongodb://localhost/doncho-db';
const users = ['Jong', 'Gosho', 'Stamat', 'Jane', 'Ivan', 'Cuki', 'Mimi', 'Lili', 'Pepi', 'Pesho', 'Penka'];

MongoClient.connect(connectionString)
    .then((db) => {
        const collection = db.collection('todos')
        const todos = Array.from({ length: 15 })
            .map((_, index) => {
                return {
                    text: 'Todo #' + index,
                    isDone: !!(index % 2),
                    users: Array.from({ length: 3 })
                        .map((_, index2) => {
                            return users[(index + index2) % users.length];
                        })
                };
            });

        return collection.insertMany(todos);
    })
    .then(() => {
        console.log('Done!');
    })