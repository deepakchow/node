const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('unable to connect', err);
    }
    console.log('connection successful');

    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{

    //     console.log(result);
    // }, (err) =>{
    //     console.log('cannot delete', err);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectId('5b8cb08709d60f7342106001')}).then((results) => {
        console.log(JSON.stringify(results));
    },(err) =>{
        console.log('couldnt delete');
    })
});