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