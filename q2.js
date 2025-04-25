db.products.insertOne({
  name: "Mike",
  email: "mike@email.com",
  pass: "1234",
});

db.products.find();

db.products.insertMany([
  {name:"Srinaya",
   email:"sydugarisrinaya@gmail.com",
   pass:"Sirnaya@123",
  },
  {name:"Snehith",
      email:"sydugarisnehith@gmail.com",
      pass:"Snehith@123",
     },
]);