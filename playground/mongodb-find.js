const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');
	const db = client.db('TodoApp');

	db.collection('Users').find({
	name: 'huaw'}).toArray().then((name) => {
		console.log('Todos');
		console.log(JSON.stringify(name, undefined, 2));
	}, (err) => {
		console.log('unable to fetch');
	})

	// client.close();
});