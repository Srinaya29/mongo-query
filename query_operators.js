db.employees.count()
db.employees.find().skip(1)
db.employees.find().sort({name:1})
db.employees.find().sort({name:-1})
db.employees.find().limit(2)

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

//It displays the employees names only but default it shows the _id field as well but we can hide it by using _id:0 
db.employees.find({}, { _id: 0, name: 1 });
//It displays the employees names and ids 
db.employees.find({}, { _id: 1, name: 1 });

//It finds the employee with a specific address in a specific city.
db.employees.find({ "address.city": "Jacksonville" });

// it finds the employee with a specific hr department with a $eq operator but 
//we can also write db.employees.find({"department":"HR"}); 
db.employees.find(
    { department: { $eq: "HR" } }
);
// it finds the employee with a specific not hr department with a $ne operator
db.employees.find(
    { department: { $ne: "HR" } }
);
//Alternative for $ne operator is $not operator
// it finds the employee with a specific not hr department with a $not operator 
db.employees.find(
    { department: {$not: { $eq: "HR" } }}
);
// it finds the employee with a specific 5000 salary with a $eq operator
db.employees.find(
    { salary: { $eq: 5000 } }
);
// it finds the employee with a specific greater than 2000 salary with a $gt operator
db.employees.find(
    { salary: { $gt: 2000 } }
);
// it finds the employee with a specific greater than or equal to 2456 salary with a $gte operator
db.employees.find(
    { salary: { $gte: 2456 } }
);
// it finds the employee with a specific less than 2456 salary with a $lt operator
db.employees.find(
    { salary: { $lt: 2456 } }
);
// it finds the employee with a specific less than or equal to 2456 salary with a $lte operator
db.employees.find(
    { salary: { $lte: 2456 } }
);
//it finds the employee with salary greater than 2000 and department equal to hr with a $or operator
db.employees.find({
    $or: [
      { salary: { $gt: 2000 } }, 
      { department: { $eq: "HR" } }
  ],
  });
//it finds the employee with salary greater than 2000 and department equal to hr with a $and operator
  db.employees.find({
      $and: [
        { salary: { $gt: 2000 } }, 
        { department: { $eq: "HR" } }
    ],
    });
//it finds the employee with salary greater than 2000 and department equal to hr with a $nor operator  
    db.employees.find({
      $nor: [
        { salary: { $gt: 2000 } }, 
        { department: { $eq: "HR" } }
    ],
    });
// it finds the employee with a specific name with a $regex operator    
    db.employees.find({
        name: { $regex: "^Jo" }
   })
// it finds the employees return all documents of the location field with does not exist because of $exists operator with false value 
    db.employees.find(
        {location:{$exists:false}}
    )
// it finds the employees return all documents of the location field with exist because of $exists operator with true value    
    db.employees.find(
        {location:{$exists:true}}
    )
// it is similar to or operator  but $in operator used in same field   
    db.employees.find(
        {department:{$in:["HR","Admin"]}}
    )
// it is similar to nor operator  but $nin operator used in same field    
    db.employees.find(
        {department:{$nin:["HR","Admin"]}}
    )
//it updates the all document in employees collection with a specific value of 5 in points(Treated as array) field   
//push: This operator adds a value to an array field in a document. 
    db.employees.updateMany({}, { $push: { points: 5 } });
//o/p -points: [5,7] because default push operator adds the value to the end of the array.
    db.employees.updateMany({}, { $push: { points: 7 } });
//o/p- hobbies:["Movies"] push operator allows duplicate values in the array.    
    db.employees.updateMany({}, { $push: { hobbies: "Movies" } });
//o/p- hobbies:["Movies"] because $addToSet operator adds a value to an array field in a document but it does not allow duplicate values in the array.    
    db.employees.updateMany({}, { $addToSet: { hobbies: "Movies" } });
//The filter { email: "dan@gmail.com" } ensures only documents with that exact email are updated.
//The $addToSet operator adds the value "Sports" to the hobbies array only if it doesn't already exist in that array.    
    db.employees.updateMany(
      { email: "dan@gmail.com" },
      { $addToSet: { hobbies: "Sports" } }
    );
//The filter { email: "dan@gmail.com" } ensures only documents with that exact email are updated.
//The $pull operator removes the value "Sports" from the hobbies array. If "Sports" is not present, no changes are made.    
    db.employees.updateMany(
      { email: "dan@gmail.com" },
      { $pull: { hobbies: "Sports" } }
    );
//$pull removes elements from an array that match the condition ($gte: 7 means values ≥ 7) where it updates the all documents in the employees collection.
//The filter { } ensures all documents are updated.    
    db.employees.updateMany(
      { },
      { $pull: { points: { $gte: 7 } } }
    );
