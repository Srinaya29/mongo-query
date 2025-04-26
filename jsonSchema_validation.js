//db.createCollection("customers"): Creates a collection with no rules, allowing any document structure.
//db.createCollection("customers", { validator: { $jsonSchema: ... } }): Creates a collection with schema validation, enforcing rules like required fields (name, email) and types.
//Difference:db.createCollection("customers")- No validation offers flexibility but risks inconsistent data; 
// db.createCollection("customers", { validator: { $jsonSchema: ... } }):-validation ensures strict structure but rejects non-compliant documents.


db.createCollection("customers",{
    validator:{ 
        $jsonSchema:{
        bsonType:"object",
        required:["name","email"],
        properties:{
            name:{
                bsonType:"string",
                description:"must be a string and is required"
            },
            email:{
                bsonType:"string",
                pattern:"@gmail.com",
                description:"must be a string and is required"
            }
        }
    }
}})

db.customers.insertMany([
         { name: "Srinaya", email: "srinaya@gmail.com" },
         { name: "Snehith", email: "snehith@gmail.com" }
    ]);

    
