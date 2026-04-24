import mongoose from "mongoose"; //just mongoose import!
import dotenv from "dotenv"
dotenv.config()

//Database connection here!
 const dbConnection  = ()=>{
    const dbUrl = process.env.DB_URL;
    console.log("DB_URL exists:", !!dbUrl);
    console.log("DB_URL preview:", dbUrl ? dbUrl.substring(0, 30) + "..." : "MISSING");
    mongoose.connect(dbUrl,{
       dbName: "Job_Portal"

    }).then(()=>{ //agar connect ho jaye toh!
       console.log("MongoDB Connected Sucessfully !")
    }).catch((error)=>{
        console.log(`Failed to connect ${error}`) //warna error de do console me!
    })
    
}
export default dbConnection;