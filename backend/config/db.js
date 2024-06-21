import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://abhishek:Abhishek0562verma@cluster0.is1rqbv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.

// mongodb+srv://abhishek:<password>@cluster0.uo5qm9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongodb+srv://abhishek:Abhishek0562verma@cluster0.is1rqbv.mongodb.net