import mongoose from 'mongoose';


const DBConnection=async()=>{
    const mongoUrl = `mongodb://localhost:27017/File-sharing`;
    try{
        await mongoose.connect(mongoUrl,{  useUnifiedTopology: true});
        console.log('Database Connected');
    }catch(error){
        console.error('Error while connecting database',error.message);
    }
}
export default DBConnection;