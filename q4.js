db.employees.insertOne({
    name: "John Smith",
    email: "john@gmail.com",
    department: "IT",
    salary: 1456,
    location: ["FL", "OH"],
    date: Date(),
  });
  
  db.employees.find();
  db.employees.insertMany([
    {
      name: "Mike Joseph",
      email: "mike@gmail.com",
      department: "IT",
      salary: 2456,
      location: ["FL", "TX"],
      date: Date(),
    },
    {
      name: "Cathy G",
      email: "cathy@gmail.com",
      department: "IT",
      salary: 3456,
      location: ["AZ", "TX"],
      date: Date(),
    },
  ]);


  db.employees.insertOne({
    name: "Test",
    email: "test@gmail.com",
    nationality:"Indian"
  });
  
  db.employees.findOne();
  
  db.employees.deleteOne({email:"test@gmail.com"})

  db.employees.insertMany([
    {
      name: "Test2",
      email: "test2@gmail.com",
      nationality: "ABC",
    },
    {
      name: "Test3",
      email: "test3@gmail.com",
      nationality: "ABC",
    },
  ]);
  
  db.emplyees.find({nationality:"ABC"})
  
  db.emplyees.findOne({nationality:"ABC"})
  
  db.employees.deleteMany({nationality:"ABC"}) ;

  db.createCollection("temp")
//show collections

db.temp.drop()

//show collections


db.users.find({
  email: "john@email.com",
  pass: "1234",
});

db.employees.updateOne(
  { email: "dan@gmail.com" },
  {
    $set: {
      name: "Danial",
      email: "dan@gmail.com",
      department: "HR",
      salary: 5000,
      location: ["FL", "LA"],
      date: Date(),
    },
  });

  db.employees.updateOne(
    { email: "amy@gmail.com" },
    { $set: { department: "Admin" } }
  );
  
  db.employees.find();

  db.employees.updateOne(
    { email: "dan@gmail.com" },
    { $set: { department: "HR" } },
    { upsert: true }
  );
  
  db.employees.updateOne(
    { email: "dan@gmail.com" },
    { $set: { salary: 2500, department: "Admin" } },
    { upsert: true }
  );
  
  db.employees.updateOne(
    { email: "dan@gmail.com" },
    {
      $set: {
        name: "Danial",
        email: "dan@gmail.com",
        department: "HR",
        salary: 5000,
        location: ["FL", "LA"],
        date: Date(),
      },
    },
    { upsert: true }
  );
