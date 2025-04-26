db.employees.find({},{email:1})

//this query finds documents with email: "ayan@gmail.com" and diaplays the detailed performance metrics analyze how mongodb executes it
db.employees.find({email:"ayan@gmail.com"}).explain("executionStats");

//create indexes on the email and name fields in the employees collection. An index in MongoDB is a data structure that
//improves the speed of queries by allowing efficient searching, sorting, and filtering on specific fields.
db.employees.createIndex({"email":1})
db.employees.createIndex({name:1})

db.employees.getIndexes()
//dropping the indexex 
db.employees.dropIndex({name:1})
// dropping all indexes in the collection
db.employees.dropIndexes()

