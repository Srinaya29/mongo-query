//use db-kia
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
      
      