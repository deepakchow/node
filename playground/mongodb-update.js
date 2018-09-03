const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('unable to connect');
    }
    console.log('connection successful');

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectId('5b8ca517965d213ee8c2e916')
    // },{
    //     $set:{
    //         completed: true
    //     }

    // },{
    //     returnOriginal: false
    // }).then((results) =>{
    //     console.log(JSON.stringify(results));
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectId('5b8ca68a81d34416681c966f')
    }, {
        $set:{
            location: '3630 MistyOak Dr, Melbourne,FL'
        },
     
        $inc:{
            age: 1, 
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(JSON.stringify(results));
    });

   
});