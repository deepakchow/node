const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'something todo',
    //     completed: false
    // }, (err,result) => {
    //     if(err){
    //         console.log('unable to connect', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined,2));
    // })

    db.collection('Users').insertOne({
        name: 'Deepak Kancherla',
        age: 25,
        location: '10075 GateParkWay N, Jacksonville,FL-32246'

    }, (err, result) => {
        if(err){
            console.log('Unable to connect to database', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.close();

});