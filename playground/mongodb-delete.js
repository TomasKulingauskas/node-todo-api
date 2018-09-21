const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');
	const db = client.db('TodoApp');

// delete many
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

// delete one
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

// find one and delete
	// db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5ba3b3730eaa7ac4f5b75aa0')}).then((result) => {
		console.log(result._id);
	})

	// client.close();
});