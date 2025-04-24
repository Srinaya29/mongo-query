//find the second employee in the collection
db.employees.find().skip(1).limit(1);
//find the thrid employee in the collection
db.employees.find().skip(2).limit(1);
//find the count of department HR
db.employees.countDocuments({ department: "HR" });
//find the count of department HR and location FL
db.employees.countDocuments({ department: "HR", location: "FL" });
//find count of non department HR 
db.employees.countDocuments({ department: { $ne: "HR" } });

db.employees.updateMany({}, { $push: { points: 5 } });
//after above command I cant apply db.employees.updateMany(
   // { }, 
    //{ $inc: { points: 20 } }
//);
//because points is now an array and $inc operator does not work on arrays.it works on numbers only.
db.employees.updateMany({}, { $set: { points: 20 } })

//This changes salary from strings (e.g., "2456") to numbers (e.g., 2456).
db.employees.updateMany(
    {},
    [{ $set: { salary: { $toInt: "$salary" } } }]
);

