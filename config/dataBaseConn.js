import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL,DATABASE_NAME) => {
  try {
    //console.log(`${DATABASE_URL}${DATABASE_NAME}`)
    await mongoose.connect("mongodb://127.0.0.1:27017/bwi");
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)
  }
}
export default connectDB