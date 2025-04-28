//Aggregation framework..............................................................................................
//The Aggregation Framework in MongoDB is a powerful tool for processing and transforming data in a collection
//to produce summarized or computed results. It works like a pipeline, where data passes through stages
//(like filtering, grouping, or sorting) to generate insights, such as totals, averages, or grouped data.

db.employees.aggregate([
    {}, //pipeline 1
    {}, //pipeline 2
    {}, //pipeline 3
  ]);
  
  //this query uses $match stage selects only the documents where the department field is exactly "HR"
  db.employees.aggregate([{ $match: { department: { $eq: "HR" } } }]);
  //without aggregate same o/p with this query db.employees.find([{ { department: { $eq: "HR" }  }]);

  //the $project stage determines which fields to include or exclude in the output.
  db.employees.aggregate([{ $project: { _id: 0, name: 1, department: 1 } }]);
  //without aggregate same o/p with this query db.employees.find({}, { _id: 0, name: 1, department: 1 });

  //this query displays the department of HR using match with name and salary using project
    db.employees.aggregate([
        { $match: { department: "HR" } },
        { $project: { _id: 0, name: 1, salary: 1 } }
    ]);
    //without aggregate same o/p with this query db.employees.find({ department: "HR" }, { _id: 0, name: 1, salary: 1 });


    //this query displays the department of IT using match 
    //Adds a new field Bonus with the value "NA" to each document in the pipeline using addField.
    //Selects only the name, department, and Bonus fields to include in the output, excluding _id (0) and all other fields (e.g., email, salary) using Project.
    //Sorts the documents alphabetically by name (ascending, 1 = A to Z) using sort.
    //Skips the first document in the sorted list
    //Limits the output to 2 documents using limit.
    //without aggregate same o/p with this query db.employees.find({ department: "IT" }, { _id: 0, name: 1, department: 1, Bonus: "NA" }).sort({ name: 1 }).skip(1).limit(2);
    db.employees.aggregate([
        { $match: { department: { $eq: "IT" } } },
        { $addFields: { Bonus: "NA" } },
        { $project: { _id: 0, name: 1, department: 1, Bonus: 1 } },
        { $sort: { name: 1 } },
        { $skip: 1 },
        { $limit: 2 },
      ]);
      
   //this query displays groups all documents in the employees collection by their department field, returning a list of unique department values.
   //without aggregate same o/p with this query db.employees.distinct("department");
    db.employees.aggregate([
        { $group: { _id: "$department" } }
    ]);
    
    //this query groups the documents by department and adds the salaries of each department.
    db.employees.aggregate([
        { $group: { 
          _id: "$department", 
          total: { $sum: "$salary" } } },
      ]);
    
      //this query displays the hr and it department total salary
      db.employees.aggregate([
        {$match:{department:{$in:["HR","IT"]}}},
        { $group: { 
          _id: "$department", 
          total: { $sum: "$salary" } } },
      ]);   
      
      //this query $unwind: "$location" means displaying each and every element of the location array as a separate document.
      db.employees.aggregate([
        {$match:{name:{$exists:true}}},
        {$project:{_id:0,name:1,location:1}},
        {$unwind:"$location"}
    ])

    //this query displays the
    //Selected only employees in the HR or IT departments.
    //created a new salaryInt field by converting salary to an integer.
    //Grouped the results by department and calculated the total salary (sum of salaryInt) for each department.
    //Showed the total salary for each department in the output.
    db.employees.aggregate([
        {$match:{department:{$in:["HR","IT"]}}},
        {$project:{
            department:1,
            salary:1,
            salaryInt:{$convert:{input:"$salary",to:"int"}},
        }},
        { $group: { 
          _id: "$department", 
          total: { $sum: "$salaryInt" } } },
      ]);

      //this query displays
      //The $project stage reshapes the documents by selecting specific fields and computing a new field (Grade).
      //The $switch operator evaluates a series of conditions (in branches) and returns a value based on the first matching condition. 
      //It’s similar to a switch statement in programming languages like JavaScript or C, or an if-elif-else structure.
      //Branches: Each branch is evaluated in order, and the first case that is true determines the output. Later branches are ignored once a match is found.
      //Default: If none of the branches match, the default value is returned.
      db.employees.aggregate([
        {
          $project: {
            _id: 0,
            name: 1,
            salary: 1,
            Bonus: 1,
            Grade: {
              $switch: {
                branches: [
                  { case: { $gte: ["$salary", 5500] }, then: "Grade A" },
                  { case: { $lt: ["$salary", 5500] }, then: "Grade B" }
                ],
                default: "Unknown"
              }
            }
          }
        }
      ])

      //this query displays the 
      //Looks for employees with "a" in their name
      //$regex is a MongoDB operator that performs a regular expression (pattern) matching.
      db.employees.find({name:{$regex:"a"}},{_id:0,name:1,salary:1})

      //this query displays the
      //Looks for employees with names ending in "t"
        //$options:"i" makes the search case-insensitive.
      db.employees.find({name:{$regex:"t$",$options:"i"}},{_id:0,name:1,salary:1})

      //this query displays the
      //The $lookup stage is used to perform a left join between two collections, similar to a join in SQL.
      db.posts.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
      ]);

      