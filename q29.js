//In command prompt mongodump -d mydb -o c:\backup- creating a backup folder in particular location
//In command prompt type mongosh>mydb> db.dropDatabase("mydb")
//In command prompt mongorestore -d mydb c:\backup- restoring the backup folder in particular location
//In mongosh >use mydb> It works with mydb database
//Create a folder replica-example

//Inside replica-example, create 3 folders - data1, data2 and data3

//start mongod -replSet rs1 -logpath g:\replica-example\data1\1.log --dbpath d:\replica-example\data1\ --port 27018

//start mongod -replSet rs1 -logpath g:\replica-example\data2\2.log --dbpath g:\replica-example\data2\ --port 27019

//start mongod -replSet rs1 -logpath g:\replica-example\data3\3.log --dbpath g:\replica-example\data3\ --port 27020

//You're creating a folder (replica-example) and three subfolders (data1, data2, data3) to store data 
// for three MongoDB servers. Each server runs on a different port and is part of a group (rs1) 
// that keeps your data safe by copying it across all three servers. This setup ensures that
//  if one server fails, the others can keep your application running.


//Connect to one of the servers using a MongoDB client-mongosh --port 27018
//rs.initiate({_id:"rs1",members:[{_id:0,host:"127.0.0.1:27018"},{_id:1,host:"127.0.0.1:27019"},{_id:2,host:"127.0.0.1:27020"}]})
//Once initialized, the servers will start syncing data, and one will become the primary.

//Overall we are creating a folder replica-example and three subfolders data1, data2, data3
//to store data for three MongoDB servers. Each server runs on a different port and is part of a group rs1
//  that keeps your data safe by copying it across all three servers. 
// This setup ensures that if one server fails, the others can keep your application running.

//rs.config(): Confirms the replica set is named rs1 and includes the three nodes you specified, with their IDs and hosts.
//rs.status(): Shows that one node is the primary (likely 27019 or 27020), and the others (including 27018) are secondaries. It also confirms all nodes are healthy and communicating.

//Show dbs
//use newdb
db.createCollection("emp")
db.emp.insertOne({name:"John"})
exit

//mongosh --port 27019
db.getMongo().setReadPref("secondary") 
//show dbs
//use newdb
db.emp.find()
exit

//mongosh --port 27019
db.getMongo().setReadPref("secondary") 
//show dbs
//use newdb
db.emp.find()
exit


//Go to primary 27018
//mongosh --port 27018
//Use admin
  


//mongosh --port 27019
//check if this is primary now


//then mongosh --port 27020
//check if this is primary


