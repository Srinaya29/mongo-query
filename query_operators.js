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

db.employees.find({}, { _id: 0, name: 1 });

db.employees.find({}, { _id: 1, name: 1 });

db.employees.find({}, { name: 1, email: 1 });

db.employees.find({}, { _id: 0, name: 1, email: 1 });

db.employees.find({}, { _id: 0, name: 1, department: 1 });

db.employees.find(
  { email: "amy@gmail.com" },
  { _id: 0, name: 1, department: 1 }
);

db.employees.find(
  { email: "amy@gmail.com" },
  { _id: false, name: true, department: true }
);

db.employees.find({ "address.city": "Jacksonville" });

db.employees.find({location:"FL"})

db.employees.updateMany(
    {}, 
    {$set: { points: 0 } }
);

db.employees.updateMany(
    { department: "HR" }, 
    { $set: { points: 5 } }
);

db.employees.updateMany(
    { }, 
    { $inc: { points: 20 } }
);

db.employees.updateMany(
    { email:"amy@gmail.com" }, 
    { $inc: { points: 1 } }
);
db.employees.updateMany(
    { }, 
    { $rename: { points: "score" } }
);

db.employees.updateMany(
    { }, 
    { $unset: { score:"" } }
);
db.employees.find(
    { department: "HR" }
);

db.employees.find(
    { department: { $eq: "HR" } }
);

db.employees.find(
    { department: { $ne: "HR" } }
);

db.employees.find(
    { department: {$not: { $eq: "HR" } }}
);

db.employees.find(
    { salary: { $eq: 5000 } }
);

db.employees.find(
    { salary: { $gt: 2000 } }
);

db.employees.find(
    { salary: { $gte: 2456 } }
);

db.employees.find(
    { salary: { $lt: 2456 } }
);

db.employees.find(
    { salary: { $lte: 2456 } }
);
db.employees.find({
    $or: [
      { salary: { $gt: 2000 } }, 
      { department: { $eq: "HR" } }
  ],
  });
  
  db.employees.find({
      $and: [
        { salary: { $gt: 2000 } }, 
        { department: { $eq: "HR" } }
    ],
    });
  
  
    db.employees.find({
      $nor: [
        { salary: { $gt: 2000 } }, 
        { department: { $eq: "HR" } }
    ],
    });
    db.employees.find(
        {location:{$exists:false}}
    )
    
    db.employees.find(
        {location:{$exists:true}}
    )
    
    db.employees.find(
        {department:{$in:["HR","Admin"]}}
    )
    
    db.employees.find(
        {department:{$nin:["HR","Admin"]}}
    )
    db.employees.updateMany({}, { $push: { points: 5 } });

    db.employees.updateMany({}, { $push: { points: 7 } });
    
    db.employees.updateMany({}, { $push: { hobbies: "Movies" } });
    
    db.employees.updateMany({}, { $addToSet: { hobbies: "Movies" } });
    
    db.employees.updateMany({}, { $addToSet: { hobbies: "Music" } });
    
    db.employees.updateMany(
      { email: "dan@gmail.com" },
      { $addToSet: { hobbies: "Sports" } }
    );
    
    db.employees.updateMany(
      { email: "dan@gmail.com" },
      { $pull: { hobbies: "Sports" } }
    );
    
    db.employees.updateMany(
      { },
      { $pull: { points: { $gte: 7 } } }
    );
    db.employees.updateMany({}, { $push: { points: 5 } });

db.employees.updateMany({}, { $push: { points: 7 } });

db.employees.updateMany({}, { $push: { hobbies: "Movies" } });

db.employees.updateMany({}, { $addToSet: { hobbies: "Movies" } });

db.employees.updateMany({}, { $addToSet: { hobbies: "Music" } });

db.employees.updateMany(
  { email: "dan@gmail.com" },
  { $addToSet: { hobbies: "Sports" } }
);

db.employees.updateMany(
  { email: "dan@gmail.com" },
  { $pull: { hobbies: "Sports" } }
);

db.employees.updateMany(
  { },
  { $pull: { points: { $gte: 7 } } }
);    

db.emplyees.find({nationality:"ABC"})
  
db.emplyees.findOne({nationality:"ABC"})

db.employees.deleteMany({nationality:"ABC"}) ;