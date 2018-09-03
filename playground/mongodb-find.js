const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
if(err){
    console.log('unable to connect');
}
    console.log('connectrd to mongodb server');

    // db.collection('Todos').find({_id: new ObjectId('5b8cab3409d60f7342105e86')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs));
    // }, (err) => {
    //     console.log('unable to fetch docs', err);

    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`todos count ${count}`);
    // }, (err) => {
    //     console.log('unable to fetch docs', err);

    // });
    db.collection('Users').find({name : 'Deepak Kancherla'}).toArray().then((docs) => {
        console.log('Users count');
        console.log(JSON.stringify(docs));
    }, (err) => {
        console.log('unable to fetch docs', err);

    });
});

