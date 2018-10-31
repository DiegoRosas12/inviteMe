var MongoClient = require('mongodb').MongoClient;
test = require('assert');
var uri = "mongodb+srv://SYSTEM:123@cluster0-qmkm8.mongodb.net/inviteMe?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
    test.equal(null, err);
    //var mycollection = client.collection('Event', {strict:true}, function(err, col3) {
        console.log("test1");
    
        //test.ok(err != null);
   // perform actions on the collection object
   console.log("Database connected!");
   var usuario = db.
   client.close();
    //});

});

/*
var MongoClient = require('mongodb').MongoClient,
  test = require('assert');
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
  test.equal(null, err);

  // Grab a collection without a callback no safe mode
  var col1 = db.collection('test_correctly_access_collections');

  // Grab a collection with a callback but no safe operation
  db.collection('test_correctly_access_collections', function(err, col2) {
    test.equal(null, err);

    // Grab a collection with a callback in safe mode, ensuring it exists (should fail as it's not created)
    db.collection('test_correctly_access_collections', {strict:true}, function(err, col3) {
      test.ok(err != null);

      // Create the collection
      db.createCollection('test_correctly_access_collections', function(err, result) {

        // Retry to get the collection, should work as it's now created
        db.collection('test_correctly_access_collections', {strict:true}, function(err, col3) {
          test.equal(null, err);

          db.close();
        });
      });
    });
  });
});
*/