import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('Error: MONGODB_URI is not defined. Add a valid connection string to .env or set the environment variable.');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
