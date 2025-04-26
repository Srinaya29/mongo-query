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

//Product collections---------------------------------------------------------------------------------------------------
//use db-products  
db.products.insertMany([
  {
    name: "Product 1",
    price: 56,
    desc: "This is a sample description of the product",
    imgUrl: "https://picsum.photos/id/1/350/350",
  },
  {
    name: "Product 2",
    price: 40,
    desc: "This is a sample description of the product",
    imgUrl: "https://picsum.photos/id/2/350/350",
  },
  {
    name: "Product 3",
    price: 35,
    desc: "This is a sample description of the product",
    imgUrl: "https://picsum.photos/id/3/350/350",
  },
  {
    name: "Product 4",
    price: 25,
    desc: "This is a sample description of the product",
    imgUrl: "https://picsum.photos/id/4/350/350",
  },
  {
    name: "Product 5",
    price: 95,
    desc: "This is a sample description of the product",
    imgUrl: "https://picsum.photos/id/5/350/350",
  },
  {
    name: "Product 6",
    price: 85,
    desc: "This is a sample description of the product",
    imgUrl: "https://picsum.photos/id/6/350/350",
  },
]);
//use db-kia------------------------------------------------------------------------------------------------------
//db.createCollection("cars")

db.cars.insertMany([ { model:"m1" }, {model:"m2"}, {model:"m3"}, {model:"m4"}, {model:"m5"}, {model:"m6"}])
db.cars.updateMany({},{$set:{price:20000}})

db.cars.updateOne(
    {model:"m2"},
    {$inc :{price : 5000}}
)

db.cars.updateMany({},{$set:{date:Date()}})

db.cars.updateMany({},{$set:{variant:["v1","v2"]}})

db.cars.updateMany(
    { model: { $in: ["m1", "m5"] } },
    { $set: { variant: ["v2", "v3"] } }
);

db.cars.updateMany({},{$set:{price:["Hyd : 25000","Mumbai : 30000"]}});

db.cars.updateMany({model:{$in:["m1","m5"]}},{$set:{price:["Hyd: 60000","Mumbai:75000"]}})
    //db.cars.updateMany({},{$set:{variant:["v1"]}});
    db.cars.updateMany(
        { model:'m3' },
        { $pull: { variant: "v2" } }
      );

      db.cars.find(
        { price: { $lt: 25000 } }
    );
      

    db.posts.insertMany([ { title:"title_1",desc:"desc 1",userId:1 },
         {title:"title_2",desc:"desc 2",userId:2}, 
         {title:"title_3",desc:"desc 3",userId:3}, 
         {title:"title_4",desc:"desc 4",userId:4}, 
         {title:"title_5",desc:"desc 5",userId:5}, 
         {title:"title_6",desc:"desc_6",userId:6}]
        );

        db.userPosts.insertMany([ { title:"title_1",desc:"desc 1",name:"name 1"},
             {title:"title_2",desc:"desc 2",name:"name 2"}, 
             {title:"title_3",desc:"desc 3",name:"name 3"}, 
             {title:"title_4",desc:"desc 4",name:"name 4"}, 
             {title:"title_5",desc:"desc 5",name:"name 5"}, 
             {title:"title_6",desc:"desc_6",name:"name 6"}]
            )    
      
      